# Lead Management & Response Standard Operating Procedure (SOP)

**Objective:** To ensure every lead is captured, compliant, and responded to immediately to maximize conversion rates for ProFix.

---

## Phase 1A: Web Lead Ingestion (The Trigger)
**What Happens:** A potential customer submits their information via the ProFix website (e.g., Diagnostic Wizard, Contact Form).
*   **Data Captured:** Name, Phone Number, Email, Issue Details.
*   **Source:** `submit-lead.ts` (Netlify Function).

## Phase 1B: Inbound Call Ingestion
**What Happens:** A potential customer calls the ProFix business number (hosted in HighLevel).
*   **Routing:** The call is received by HighLevel and automatically forwarded to **Tim's Cell Phone**.
*   **System Action:**
    *   **Call Recording:** The conversation is recorded and stored in the contact's timeline in HighLevel for quality assurance.
    *   **Missed Call Text Back:** If the call is missed, HighLevel automatically sends an SMS: *"Hi, this is ProFix. I saw we just missed your call. How can I help you?"* to capture the lead immediately.

## Phase 2: System Processing (The Automation)
**What Happens:** The system automatically processes the lead without human intervention.
1.  **API Submission:** The website sends the data directly to **HighLevel** using our Private Integration.
2.  **Contact Creation:** A new contact profile is created in HighLevel.
3.  **Tagging:** The contact is automatically tagged with `Website Lead`.
4.  **Workflow Trigger:** The `Website Lead` tag triggers the "New Lead" automation workflow in HighLevel.

## Phase 3: SMS Compliance & Readiness (The Safety Check)
**What Happens:** We ensure we can legally and effectively communicate via text.
1.  **Phone Number Validation:** The system captures the cell phone number.
2.  **Consent Record:** By submitting the form, the user agrees to receive SMS messages (as per our privacy policy and form disclaimer).
3.  **A2P 10DLC Compliance:** 
    *   The phone number is registered within HighLevel under our A2P campaign.
    *   *Note: Ensure the initial automated SMS includes "Reply STOP to unsubscribe" to maintain carrier compliance.*

## Phase 4: Admin Response Protocol (The Human Action)
**CRITICAL STEP:** Speed to lead is the #1 factor in closing deals.

**Trigger:** Admin receives a notification (App Notification, SMS, or Email) from HighLevel.

**Step-by-Step Action:**
1.  **ACKNOWLEDGE INSTANTLY:**
    *   Open the HighLevel Mobile App or Desktop Dashboard.
    *   **Goal:** Response time under **5 minutes**.
2.  **REVIEW CONTEXT:**
    *   Read the lead's "Issue Details" (e.g., "Fridge not cooling").
3.  **ENGAGE (SMS FIRST):**
    *   Send a personalized text manually (if the automation hasn't already started a conversation).
    *   *Script:* "Hi [Name], this is [Admin Name] with ProFix. I just saw your request about the [Appliance]. I can get a technician out to you [Timeframe]. Does that work?"
4.  **CALL (IF NO REPLY):**
    *   If no response to SMS within 10 minutes, **CALL** them.
    *   *Voicemail:* "Hi [Name], this is [Admin Name] with ProFix. calling about your [Appliance] repair request. Please give me a call back at [Number] to schedule. Thanks!"

## Troubleshooting
If a lead does not appear in HighLevel:
1.  Check **Netlify Function Logs** for errors.
2.  Verify the **HighLevel Private Integration Token** is active.
3.  Ensure the **Location ID** is correct in the environment variables.
