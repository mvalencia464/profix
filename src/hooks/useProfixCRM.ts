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

  const createContact = async ({ firstName, lastName, email, phone, address1, city, state, postalCode, tags, customFields, turnstileToken }: ContactPayload & { turnstileToken: string }) => {
    setLoading(true);
    setError(null);

    try {
      // POST to our Netlify Function instead of direct to HighLevel
      const response = await fetch('/.netlify/functions/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName || '',
          name: `${firstName} ${lastName || ''}`.trim(),
          email: email,
          phone: phone || '',
          address1: address1 || '',
          city: city || '',
          state: state || '',
          postalCode: postalCode || '',
          tags: tags || [],
          customFields: customFields,
          turnstileToken: turnstileToken
        })
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
