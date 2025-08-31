<img width="437" height="226" alt="image" src="https://github.com/user-attachments/assets/6e92d716-a28b-498b-92c0-fb1c5b5c0850" /># ♟️ ChessAnalyzer – Web Chess Analysis Suite
A modern, browser-based chess analysis platform powered by Stockfish with a slick Next.js UI. Load games, analyze positions, classify moves, and review insights – all locally and fast.
---

## ✨ Key Features
### 🔐 Experience & UX
- Responsive Layout – Mobile-first, desktop-optimized
- Dark/Light Mode – One-click toggle
- PWA-Ready Base – Smooth UX and quick loads

### 🔎 Smart Analysis & Review
- Live Engine Evaluation – Multiple Stockfish builds (17 / 16.1 / 16 / 11, lite variants included)
- Move Classifications – Brilliant, Excellent, Inaccuracy, Mistake, Blunder
- Evaluation Graph – Trend of advantage over time
- Opening Detection – Auto-detects openings
- Best-Move Arrows – Visual guidance on board
- Local Storage – Save/reload games in the browser (IndexedDB)

### 🧩 Play & Tools
- Play vs Stockfish – Adjustable strength
- Board Utilities – Flip board, move list, SAN/pretty SAN display
- Multiple Piece Sets – 40+ chess piece themes bundled

### 📊 Insights
- Game Summary – Quick overview of inaccuracies/mistakes/blunders
- Multi-PV Support – Explore multiple engine lines

---

## 🛠 Tech Stack
### Frontend
- Next.js 15 • React 18 • TypeScript
- Material UI (MUI)
- Jotai (state) • TanStack Query (data)

### Engine
- Stockfish (WASM, threads when supported)

---

## 🚀 Quick Start
Requirements: Node.js 20+

```bash
# Install dependencies
npm install

# Start development (http://localhost:3000)
npm run dev

# Lint & Typecheck
npm run lint

# Production build & start
npm run build
npm run start
```

---

## 📚 Project Structure
```
public/            # icons, engines (WASM), sounds, piece sets
src/
  components/      # UI components
  sections/        # feature sections (analysis, play, layout)
  pages/           # Next pages (_app, _document, index, play, database)
  lib/             # chess engine helpers, services, utils
  hooks/           # custom hooks
  types/           # TypeScript types
  styles/          # global styles
```

---

## 🧪 Notes & Performance
- WASM Threads – Enabled on supported browsers; gracefully degrades
- Memory/Workers – Engine worker count adapts to device capability
- Client-Only Engine – No backend dependency for analysis

---

## 🔒 Security & Privacy
- All analysis runs locally in the browser
- No account required by default

---

## 🧭 Roadmap Ideas (optional)
- Cloud sync for saved games
- Sharable analysis reports
- Puzzle generation from blunders

---

## 🐙 Deployment
Use any Node host (Vercel/Netlify/Render/AWS/etc.).
- Build: `npm run build`
- Start: `npm run start`

---

## 📝 License
GPL-3.0-only. See `LICENCE`.

---

## 👤 Author
Built with ❤️ by Krish Mistry
- Email: mistrykrish2005@gmail.com
- GitHub: https://github.com/KrishMistry18
- LinkedIn: https://www.linkedin.com/in/krishmistry18
  
