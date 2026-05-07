# ♟️ ChessAnalyzer – Web Chess Analysis Suite

A modern, browser-based chess analysis platform powered by Stockfish with a slick Next.js UI. Load games, analyze positions, classify moves, and review insights – all locally and fast.

🔗 **Live Demo: [chess-analyzer-qf7v.vercel.app](https://chess-analyzer-qf7v.vercel.app/)**

---

## ✨ Key Features

### 🔐 Experience & UX
- Responsive Layout – Mobile-first, desktop-optimized
- Dark/Light Mode – One-click toggle
- PWA-Ready Base – Smooth UX and quick loads

### 🔎 Smart Analysis & Review
- Live Engine Evaluation – Multiple Stockfish builds (17 / 16.1 / 16 / 11, lite variants included)
- Move Classifications – Brilliant, Excellent, Good, Inaccuracy, Mistake, Blunder
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

| Layer | Technologies |
|---|---|
| Framework | Next.js 15 • React 18 • TypeScript |
| UI | Material UI (MUI) • Recharts |
| State | Jotai • TanStack Query |
| Engine | Stockfish 17/16.1/16/11 (WASM) |
| Storage | IndexedDB (idb) |
| Monitoring | Sentry (optional) • Firebase Analytics (optional) |

---

## 🚀 Quick Start

Requirements: Node.js 20+

```bash
# Install dependencies
npm install

# Start development (http://localhost:3000)
npm run dev

# Lint & typecheck
npm run lint

# Production build
npm run build
npm run start
```

---

## ⚙️ Environment Variables

All environment variables are optional — the app is fully functional without them.

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Service | Required |
|---|---|---|
| `NEXT_PUBLIC_FIREBASE_*` | Firebase Analytics | Optional |
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry error tracking | Optional |
| `SENTRY_ORG` + `SENTRY_AUTH_TOKEN` | Sentry source maps | Optional |

---

## 📚 Project Structure

```
public/
  engines/         # Stockfish WASM builds (17, 16.1, 16, 11)
  piece/           # 40+ chess piece themes
  icons/           # move classification icons
src/
  components/      # reusable UI components
  sections/        # feature sections (analysis, play, layout)
  pages/           # Next.js pages (_app, index, play, database)
  lib/             # engine helpers, services, utilities
  hooks/           # custom React hooks
  types/           # TypeScript type definitions
  styles/          # global styles
```

---

## 🧪 Performance Notes

- WASM Threads – Enabled on supported browsers, gracefully degrades to single-threaded
- Worker Count – Engine worker count adapts to device CPU cores and memory
- Client-Only – No backend required; all analysis runs in the browser
- Engine Caching – WASM engine files cached immutably for fast repeat loads

---

## 🔒 Security & Privacy

- All chess analysis runs locally in the browser
- No account or login required
- No game data is sent to any server

---

## 🐙 Deployment

Deployed on Vercel. Any static host works (Netlify, Render, AWS S3+CloudFront, etc.).

```bash
npm run build   # outputs static export to /out
```

The `vercel.json` in this repo sets the required CORS headers for Stockfish WASM threads to work in production.

---

## 🧭 Roadmap

- Cloud sync for saved games
- Sharable analysis links
- Puzzle generation from blunders

---

## 📝 License

GPL-3.0-only. See [`LICENCE`](./LICENCE).

---

## 👤 Author

Built with ❤️ by **Krish Mistry**

- 📧 [mistrykrish2005@gmail.com](mailto:mistrykrish2005@gmail.com)
- 🐙 [github.com/KrishMistry18](https://github.com/KrishMistry18)
- 💼 [linkedin.com/in/krish-mistry-0290522b7](https://www.linkedin.com/in/krish-mistry-0290522b7/)
