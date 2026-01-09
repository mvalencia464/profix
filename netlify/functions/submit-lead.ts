
import type { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const data = JSON.parse(event.body || "{}");
        const { turnstileToken, ...formData } = data;

        if (!turnstileToken) {
            return { statusCode: 400, body: JSON.stringify({ message: "Missing Turnstile token" }) };
        }

        // 1. Verify Turnstile Token
        const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
        if (!SECRET_KEY) {
            console.error("Missing TURNSTILE_SECRET_KEY");
            return { statusCode: 500, body: JSON.stringify({ message: "Server configuration error" }) };
        }

        const verifyResponse = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    secret: SECRET_KEY,
                    response: turnstileToken,
                }),
            }
        );

        const verifyResult = await verifyResponse.json();
        if (!verifyResult.success) {
            return { statusCode: 403, body: JSON.stringify({ message: "Invalid CAPTCHA token", details: verifyResult }) };
        }

        // 2. Submit to HighLevel CRM
        const HL_TOKEN = process.env.VITE_HIGHLEVEL_TOKEN;
        // Location ID might come from env or payload, using env for security/consistency if possible, or fallback to payload
        const LOCATION_ID = process.env.VITE_HIGHLEVEL_LOCATION_ID || formData.locationId;

        if (!HL_TOKEN || !LOCATION_ID) {
            console.error("Missing HighLevel credentials in env");
            // Fallback: if client sent them? No, we want to secure them. 
            // But for now, let's assume if they aren't in env, we fail secure.
            return { statusCode: 500, body: JSON.stringify({ message: "CRM Configuration Error" }) };
        }

        // Construct CRM Payload
        const crmPayload = {
            ...formData,
            locationId: LOCATION_ID
        };

        const crmResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${HL_TOKEN}`,
                'Content-Type': 'application/json',
                'Version': '2021-07-28',
                'Accept': 'application/json'
            },
            body: JSON.stringify(crmPayload)
        });

        if (!crmResponse.ok) {
            const errorData = await crmResponse.json().catch(() => ({}));
            console.error("CRM Error:", errorData);
            return { statusCode: crmResponse.status, body: JSON.stringify({ message: "Failed to submit to CRM", details: errorData }) };
        }

        const crmResult = await crmResponse.json();

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, contact: crmResult.contact || crmResult }),
        };

    } catch (error: any) {
        console.error("Submission Error:", error);
        return { statusCode: 500, body: JSON.stringify({ message: "Internal Server Error" }) };
    }
};

export { handler };
