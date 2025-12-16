import { useState } from 'react';

export const useHighLevel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createContact = async ({ firstName, lastName, email, phone, smsConsent }) => {
    setLoading(true);
    setError(null);

    try {
      const token = import.meta.env.VITE_HIGHLEVEL_TOKEN;
      const locationId = import.meta.env.VITE_HIGHLEVEL_LOCATION_ID;

      if (!token || !locationId) {
        throw new Error('Missing HighLevel credentials');
      }

      const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName || '',
          name: `${firstName} ${lastName || ''}`.trim(),
          email: email,
          phone: phone || '',
          locationId: locationId,
          smsOptIn: smsConsent
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      const result = await response.json();
      return { success: true, contact: result.contact || result };

    } catch (err) {
      const errorMessage = err.message || 'Failed to create contact';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { createContact, loading, error };
};
