# Personal Portfolio — Mateo Vance

## Problem Statement
Premium dark-mode personal portfolio landing page for a senior frontend / full-stack engineer.
Stack: React + Tailwind (chosen over Angular for richer motion via framer-motion).

## Architecture
- Static single-page React app (no backend usage)
- Sections: Header (sticky glass), Hero, About, Skills (bento), Experience (timeline rows), Projects (alternating), Blog (3 teaser cards), Contact, Footer
- Animations via framer-motion, smooth-scroll via native `scroll-behavior:smooth`
- Industrial Minimalist & Editorial Tech aesthetic — deep neutral blacks + rust/amber accent (#E05D3A)
- Fonts: Cabinet Grotesk (display), Manrope (body), JetBrains Mono (mono labels)

## What's Implemented (Dec 2025)
- All 8 sections with polished placeholder copy
- Bento-grid Skills section
- Asymmetric Project case-study layout with provided 3D imagery
- Editorial noise overlay + subtle grid background
- Marquee tech-ticker under hero
- Fully responsive mobile menu
- data-testid attributes across interactive elements

## Personas
- Recruiter / hiring manager evaluating senior frontend engineers
- Founder / CTO scouting design-system or architecture leads
- Engineering peers reviewing writing/projects

## Backlog (P1)
- Wire real content (name, email, links, projects)
- Optional contact form with API + email integration
- Real blog routes / MDX content

## Backlog (P2)
- Case study sub-pages
- Light theme toggle
- Internationalization
