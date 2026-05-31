<div align="center">

# ♟️ ChessAnalyzer

### Browser-Based Chess Analysis Suite

[![Live Demo](https://img.shields.io/badge/🔗%20Live%20Demo-chess--analyzer.vercel.app-blue?style=for-the-badge)](https://chess-analyzer-qf7v.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![License](https://img.shields.io/badge/License-GPL--3.0-yellow?style=for-the-badge)](LICENCE)

*Analyse positions, classify moves, and review full games — all powered by Stockfish, all running locally in your browser.*

</div>

---

## Features

### Analysis & Review
- **Live Engine Evaluation** — Multiple Stockfish builds (17 / 16.1 / 16 / 11, lite variants included)
- **Move Classifications** — Brilliant ✨, Excellent, Good, Inaccuracy, Mistake, Blunder
- **Evaluation Graph** — Visual trend of advantage over the full game
- **Opening Detection** — Auto-detects openings from your game
- **Best-Move Arrows** — Visual guidance overlaid directly on the board
- **Multi-PV Support** — Explore multiple engine lines side by side

### Play & Tools
- **Play vs Stockfish** — Adjustable engine strength
- **Board Utilities** — Flip board, move list, SAN / pretty-SAN display
- **40+ Piece Sets** — Extensive chess piece theme library bundled

### UX
- **Responsive Layout** — Mobile-first, desktop-optimised
- **Dark / Light Mode** — One-click toggle
- **Local Storage** — Save and reload games in the browser (IndexedDB)
- **Privacy-First** — No account, no login, no game data sent to any server

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js 15 · React 18 · TypeScript |
| UI | Material UI (MUI) · Recharts |
| State | Jotai · TanStack Query |
| Engine | Stockfish 17/16.1/16/11 (WASM) |
| Storage | IndexedDB (idb) |
| Monitoring | Sentry (optional) · Firebase Analytics (optional) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 20+

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Lint and typecheck
npm run lint

# Production build
npm run build && npm run start
```

---

## Environment Variables

All variables are optional — the app is fully functional without them.

```bash
cp .env.example .env.local
```

| Variable | Service | Required |
|---|---|---|
| `NEXT_PUBLIC_FIREBASE_*` | Firebase Analytics | Optional |
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry error tracking | Optional |
| `SENTRY_ORG` + `SENTRY_AUTH_TOKEN` | Sentry source maps | Optional |

---

## Project Structure

```
public/
  engines/         # Stockfish WASM builds (17, 16.1, 16, 11)
  piece/           # 40+ chess piece themes
  icons/           # Move classification icons
src/
  components/      # Reusable UI components
  sections/        # Feature sections (analysis, play, layout)
  pages/           # Next.js pages (_app, index, play, database)
  lib/             # Engine helpers, services, utilities
  hooks/           # Custom React hooks
  types/           # TypeScript type definitions
  styles/          # Global styles
```

---

## Performance Notes

- **WASM Threads** — Enabled on supported browsers, gracefully degrades to single-threaded
- **Worker Count** — Adapts to device CPU cores and available memory
- **Client-Only** — No backend required; all analysis runs in the browser
- **Engine Caching** — WASM files cached immutably for fast repeat loads

---

## Deployment

Deployed on Vercel. Any static host works (Netlify, Render, AWS S3+CloudFront).

```bash
npm run build   # outputs static export to /out
```

The `vercel.json` sets required CORS headers for Stockfish WASM threads in production.

---

## Roadmap

- Cloud sync for saved games
- Shareable analysis links
- Puzzle generation from blunders

---

## License

GPL-3.0-only — see `LICENCE` for details.

---

<div align="center">

*Built with ❤️ by [Krish Mistry](https://github.com/KrishMistry18)*

</div>
