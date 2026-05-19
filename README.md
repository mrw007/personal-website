# wahib-kerkeni.dev — Personal Website

> **Wahib Kerkeni** · Senior Frontend Engineer · Dublin, Ireland  
> Portfolio, writing, and contact for senior frontend / tech lead engagements.

---

## Overview

A full-stack personal website built with **React 19** (frontend) and **FastAPI** (backend). It showcases experience, projects, and skills with a dark-first aesthetic, parallax interactions, and a spotlight glow effect.

**Live stack:**
- **Frontend**: React 19.2 · Vite 5 · Tailwind CSS · Framer Motion · shadcn/ui (Radix UI)
- **Backend**: Python 3 · FastAPI · MongoDB (Motor async driver)

---

## Project Structure

```
personal-website/
├── frontend/          # React 19 SPA
│   ├── src/
│   │   ├── App.jsx                    # Root component, spotlight + theme hooks
│   │   ├── index.jsx                  # React DOM entry point
│   │   ├── index.css                  # Global styles & Tailwind directives
│   │   ├── types/
│   │   │   └── index.ts               # Shared TypeScript types
│   │   ├── components/
│   │   │   ├── portfolio/             # Page sections
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── Toolkit.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Blog.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── shared.jsx         # SectionHeader, Reveal animation wrapper
│   │   │   └── ui/                    # shadcn/ui primitives
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   └── lib/
│   │       └── utils.js
│   ├── public/                        # Static assets (cutout portrait, etc.)
│   ├── plugins/
│   │   └── health-check/
│   │       └── vite-health-plugin.js  # Optional dev health endpoint
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── backend/
│   ├── server.py                      # FastAPI app + routes
│   └── requirements.txt
├── memory/
│   └── PRD.md
└── design_guidelines.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **Python** ≥ 3.10
- **MongoDB** instance (local or Atlas)

---

### Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build (outputs to frontend/build/)
npm run build

# Preview the production build
npm run preview
```

**Environment variables** — no `.env` required for the frontend. The dev server proxies API requests to the backend.

---

### Backend

```bash
cd backend

# Create and activate a virtual environment
python -m venv .venv
.venv\Scripts\activate        # Windows
# source .venv/bin/activate   # macOS / Linux

# Install dependencies
pip install -r requirements.txt

# Create a .env file
cp .env.example .env  # or create manually

# Start the API server (http://localhost:8000)
uvicorn server:app --reload
```

**Required `.env` variables:**

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=personal_website
```

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 19.2 | UI framework with `useEffectEvent`, `memo` |
| Vite 5 | Build tool with manual chunk splitting |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Page and section animations |
| Radix UI / shadcn/ui | Accessible UI primitives |
| Lucide React | Icon set |
| React Hook Form | Form state management |
| Axios | HTTP client |

### Backend

| Technology | Purpose |
|---|---|
| FastAPI | REST API framework |
| Motor | Async MongoDB driver |
| Pydantic v2 | Data validation |
| Uvicorn | ASGI server |

---

## Portfolio Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport intro with parallax portrait and mouse-tracking texture |
| **About** | Background, career story, and key stats |
| **Skills** | Bento-grid capabilities overview |
| **Toolkit** | Tech stack icons and proficiency markers |
| **Experience** | Timeline of roles at JCDecaux, SFR Business, SIFAST |
| **Projects** | Three featured case studies with images and tags |
| **Blog / Writing** | Articles and technical writing |
| **Contact** | Email, GitHub, LinkedIn links |

---

## Key Features

- **Dark / light theme** — persisted in `localStorage`, toggled from the header
- **Spotlight glow** — mouse-tracked CSS custom properties feed a radial gradient on every `.card-surface`
- **Parallax portrait** — hero portrait and texture shift on `mousemove` with RAF throttling
- **Scroll-aware header** — glassmorphism nav pill that elevates on scroll, RAF throttled
- **Reveal animations** — intersection-observer based fade-up driven by a shared `<Reveal>` wrapper
- **Responsive** — mobile-first, collapsible nav, hidden portrait on small screens

---

## Performance

The production build uses manual Rollup chunk splitting for optimal long-term caching:

```
index.css       57.73 kB (gzip: 10.85 kB)   ← Tailwind styles
motion.js      136.67 kB (gzip: 45.07 kB)   ← Framer Motion (separate chunk)
radix-ui.js      3.80 kB (gzip:  1.48 kB)   ← Radix UI primitives
index.js       230.62 kB (gzip: 70.41 kB)   ← App code
```

---

## Contact

- **Email** — [mr.wahib@gmail.com](mailto:mr.wahib@gmail.com)
- **GitHub** — [github.com/mrw007](https://github.com/mrw007)
- **LinkedIn** — [in/wahib-kerkeni](https://www.linkedin.com/in/wahib-kerkeni-a5a4a5a5/)
