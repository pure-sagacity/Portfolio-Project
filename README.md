# Maaz Khokhar Portfolio

A polished, single-page portfolio showcasing systems work, tools, and product builds. The site highlights featured projects, tech stack focus areas, skills, and dotfiles, with a dark, cinematic UI and motion-driven reveals.

## Features

- Project spotlight with featured and grid layouts
- Interactive tech stack and skills filters
- Motion-rich section transitions and hover states
- Social links, contact footer, and curated dotfiles
- Server-side rendering with React Router

## Tech Stack

- React 19 + React Router 8
- TypeScript
- Tailwind CSS v4
- Motion animations (framer-motion)
- Bun runtime and tooling

## Getting Started

### Prerequisites

- Bun installed (https://bun.sh)

### Install

```bash
bun install
```

### Development

```bash
bun run dev
```

The dev server runs at `http://localhost:5173`.

### Typecheck

```bash
bun run typecheck
```

## Building for Production

```bash
bun run build
```

## Deployment

### Manual Deployment

```bash
bun install --production
bun run build
bun run start
```

The server runs on port `3000` by default.

### Docker Deployment

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

This image can be deployed to any Docker-compatible platform (ECS, Cloud Run, Fly.io, Railway, etc.).

## Notes

- No database or environment variables are required for local development.

---

Built with React Router and Bun.
