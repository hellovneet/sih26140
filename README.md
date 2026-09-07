# SIH26140 — Member 1 Frontend

VS Code-ready Next.js frontend structure for the AI-Based Interactive Quantum Algorithm Learning Platform.

## Run in VS Code

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- app/ — Next.js App Router pages
- components/layout/ — application shell and navigation
- components/quantum/ — quantum circuit UI
- components/dashboard/ — dashboard components
- components/quiz/ — quiz components
- lib/ — API/helpers
- hooks/ — reusable React hooks
- types/ — TypeScript types
- public/ — static assets
- .vscode/ — VS Code workspace settings

## Backend integration points

Demo authentication is currently local UI behavior. Replace it with JWT/OAuth.
Connect AI Tutor, analytics, quiz persistence and quantum simulation to backend APIs.
