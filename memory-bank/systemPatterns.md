# System Patterns: Nisa Marketing Website

## Frontend Architecture

The frontend is a single-page application built with React and Vite. This provides a fast, modern development experience and a highly interactive user interface.

- **Component-Based:** The UI is built from reusable React components, located in `src/components`.
- **Styling:** Tailwind CSS is used for utility-first styling, ensuring a consistent and maintainable design system.

## Backend Architecture (Serverless Functions)

For backend tasks like handling form submissions, we use serverless functions. This approach avoids the need for a dedicated, always-on server, making the architecture more scalable and cost-effective.

- **API Endpoints:** Serverless functions are organized in the `api/` directory at the project root. Each subdirectory corresponds to a specific API route.
  - `/api/pilot/submit`: Handles submissions from the pilot application form.
  - `/api/health`: A simple health check endpoint that returns `200 OK`.
- **Vite Proxy:** During local development, Vite's proxy is configured in `vite.config.ts` to redirect requests from the frontend (e.g., `/api/submit`) to the locally running serverless function. This mimics the production environment and allows for seamless development.
