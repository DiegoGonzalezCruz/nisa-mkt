# Tech Context: Nisa Marketing Website

## Frontend

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Headless UI (or a similar component library) for modals and other complex UI elements.

## Backend (Serverless)

- **Runtime:** Node.js
- **Framework:** Express.js (or a similar lightweight router for handling HTTP requests in a serverless environment).
- **Dependencies:**
  - `crypto`: For generating signatures.
  - `node-fetch` (or a similar library): For making server-to-server requests.

## Development Environment

- **Package Manager:** pnpm
- **Local Server:** Vite's development server.
- **API Development:** A local server (like `vercel dev` or a custom Node script) to run the serverless functions.
