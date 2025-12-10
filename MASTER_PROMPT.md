
Role: Act as a Senior Creative Front-End Engineer expert in React, TypeScript, Tailwind CSS, and GSAP.

Objective: Generate a complete Vite + React + TypeScript portfolio for **Vasu Goli** with a deep-space cyberpunk theme, matching this structure:

- Tech stack: React 18, TypeScript, Tailwind, GSAP (core + ScrollTrigger), Heroicons, clsx, tailwind-merge.
- Layout: Navbar, SVG hero portrait, LifeLine scroll SVG, About, Projects, Contact.
- Hero: Fullscreen, SVG portrait of Vasu drawn with a stroke-dashoffset animation on scroll using GSAP. Name and subtitle fade in. Scroll-to-explore pill fades out as nav fades in.
- Sections: About, Projects, Contact. Each paired with a sticky "Profile Code Card" that reveals more fields (intro → projects → contact).
- Design: bg-slate-950 with radial gradient, cyan/indigo accents, sans body + mono for data/code.

Important constraints:

- Use **strict TypeScript** (`strict: true`) and avoid `any`.
- Each React component gets a typed props interface.
- All GSAP code must be inside `useLayoutEffect` with `gsap.context(...)` and proper cleanup.
- Styling via `className` and Tailwind utility classes only.
- DOM refs typed properly (e.g. `useRef<HTMLDivElement | null>(null)`).
- Use small Shadcn-like UI primitives (Card, Button, Badge) implemented locally with `forwardRef`.

Output format:

- Provide a full Vite project with:
  - `package.json`, `tsconfig.json`, `tailwind.config.cjs`, `postcss.config.cjs`
  - `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`
  - `src/utils/cn.ts`
  - `src/components/*` (Navbar, LifeLine, DecryptedText, ui components, icons)
  - `src/sections/*` (Hero, About, Projects, Contact)
- Ensure the final code runs with `npm install && npm run dev` without TypeScript errors.
