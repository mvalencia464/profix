import { useState } from 'react';

interface ContactPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  smsConsent?: boolean;
  tags?: string[];
  customFields?: Record<string, any>;
}

export const useProfixCRM = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createContact = async ({ firstName, lastName, email, phone, address1, city, state, postalCode, tags, customFields }: ContactPayload) => {
    setLoading(true);
    setError(null);

    try {
      const token = import.meta.env.VITE_HIGHLEVEL_TOKEN;
      const locationId = import.meta.env.VITE_HIGHLEVEL_LOCATION_ID;

      if (!token || !locationId) {
        throw new Error('Missing HighLevel credentials');
      }

      const body: any = {
        firstName: firstName,
        lastName: lastName || '',
        name: `${firstName} ${lastName || ''}`.trim(),
        email: email,
        phone: phone || '',
        address1: address1 || '',
        city: city || '',
        state: state || '',
        postalCode: postalCode || '',
        locationId: locationId,
        tags: tags || []
      };

      if (customFields) {
        body.customFields = Object.entries(customFields).map(([key, value]) => ({
          id: key,
          value: value
        }));
      }

      const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      const result = await response.json();
      return { success: true, contact: result.contact || result };

    } catch (err: any) {
      const errorMessage = err.message || 'Failed to create contact';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { createContact, loading, error };
};
