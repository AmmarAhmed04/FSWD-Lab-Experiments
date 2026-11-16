# FSWD Lab - Ammar Ahmed

Source code for all 12 experiments (Full Stack Web Development Lab, B.E. CSE VII Sem).
Theme: dark green + olive green. GitHub: AmmarAhmed04

## How to run each experiment (and what to screenshot)

| Exp | Run | Screenshot |
|----|-----|-----------|
| 1 | Open `exp01/index.html` in a browser | Full page (about, skills table, projects, form) |
| 2 | Open `exp02/index.html`; press F12, toggle device toolbar | Desktop view + a phone-width view |
| 3 | Open `exp03/index.html` (or `node exp03/script.js`) | The console output |
| 4 | Open `exp04/index.html` | Initial page, after Add Project, dark theme (or open `index.html?demo`) |
| 5 | Open `exp05/index.html` | Error state (`?demo`) and a success state with valid input |
| 6 | Open `exp06/index.html` (needs internet) | "Loading...", loaded GitHub data, error state (`?demo`) |
| 7 | `cd exp07 && npm install && npm run dev` | The React portfolio (light and dark mode) |
| 8 | `cd exp08 && npm start`, then visit `localhost:3000`, `/about`, `/projects`, `/xyz` | Terminal output + browser pages |
| 9 | `cd exp09 && npm install && npm start`, test in Postman/Thunder Client | GET projects, POST message (201), GET messages |
| 10 | `cd exp10 && npm install`, copy `.env.example` to `.env` and fill in your Atlas URI, `npm run seed`, `npm start` | Postman CRUD calls + Atlas collections view |
| 11 | Server: `cd exp11/server && npm install && npm start`. Client: `cd exp11/client && npm install && npm run dev` (open localhost:5173) | Projects from MongoDB, contact form success, new document in Atlas |
| 12 | Deploy server (Render) and client (Vercel/Netlify); env vars below | Live URLs + working contact form |

## Environment variables
- Exp 10 / 11 server: `MONGODB_URI`
- Exp 12 server: `MONGODB_URI`, `CLIENT_URL` (your live frontend URL), `PORT` (set by host)
- Exp 12 client: `VITE_API_URL` (your live backend URL)
Never commit `.env` files (already in `.gitignore`).

## Notes
- `exp01/profile.png` is a placeholder avatar. Replace it with your own photo (same file name).
- Experiments 3-6 and 8-12 were checked for syntax; run them once yourself before taking screenshots.
