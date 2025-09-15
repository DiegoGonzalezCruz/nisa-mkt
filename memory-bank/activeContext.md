# Active Context: Nisa Marketing Website

## Current Focus: Pilot Application Form Submission

The immediate goal is to implement the backend functionality for the "Join the Pilot" application form. This involves extracting the form submission logic from the frontend, creating a dedicated API endpoint to handle it, and ensuring the data is securely and reliably passed to the Nisa intake service.

## Key Tasks:

1.  **Create the API Endpoint:** Develop a serverless function at `api/pilot/submit` to process the form data.
2.  **Adapt the Logic:** Convert the provided Next.js example code to a format compatible with a standard Node.js serverless environment.
3.  **Integrate with Frontend:** Update the `JoinPilotModal.tsx` component to send the form data to the new API endpoint.
4.  **Configure Local Development:** Set up a proxy in `vite.config.ts` to allow the frontend to communicate with the local serverless function.

## Decisions and Considerations:

- **Security:** The communication between our API endpoint and the Nisa intake service must be secured using a timestamp and a SHA256 HMAC signature, as demonstrated in the example code.
- **Environment Variables:** All sensitive information (API keys, secrets, URLs) will be managed through a `.env` file and should not be hardcoded.
- **Error Handling:** The API endpoint should include robust error handling to manage issues with data validation, the intake service, and other potential failure points.
