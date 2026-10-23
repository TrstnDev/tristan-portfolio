# Tristan Kriel Portfolio

My personal portfolio showcasing academic work in software development, UX design and network simulation.

Built with Astro, TypeScript and custom CSS, with GSAP animations and an earth-tone visual direction combining serif and monospace typography.

**Status:** In development.

## Featured projects

- **SpaceSync** — ASP.NET Core MVC venue and event booking application.
- **CoffeeNChill** — Academic group backend project, with my contributions focused on order submission, validation, testing and runtime integration.
- **Airport CRMS** — Systems analysis and interface design using Figma and Sketch.
- **Office Network** — Cisco Packet Tracer simulation, addressing plans and infrastructure documentation.

Project descriptions distinguish implemented functionality, design concepts, simulated environments and individual contributions.

## Stack

- **Framework:** Astro with static output
- **Language:** TypeScript
- **Styling:** Custom CSS
- **Animation:** GSAP and ScrollTrigger
- **Typography:** Instrument Serif and IBM Plex Mono, supplied through Fontsource
- **Intended hosting:** Azure Static Web Apps

## Local development

Requires **Node.js 24.x** and npm.

From the repository root:

```bash
npm ci
npm run dev
```

Open the local address printed in the terminal. Press `Ctrl+C` to stop the server.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Check Astro and TypeScript files |
| `npm run build` | Run checks and generate the production site |
| `npm run preview` | Preview the production build locally |

Run `npm run build` before using `npm run preview`.

## Project structure

```text
public/                       Static images, documents and hosting configuration
src/
├── data/portfolio.ts         Profile details and project content
├── layouts/Layout.astro      Shared layout, metadata and navigation
├── pages/
│   ├── index.astro           Homepage
│   ├── 404.astro             Missing-page view
│   └── projects/[slug].astro Project case-study pages
├── scripts/motion.ts         GSAP animation behaviour
└── styles/global.css         Colours, typography and responsive layouts
```

## Customisation

- Edit `src/data/portfolio.ts` to update contact details, project descriptions, technologies and links.
- Add images and a public-facing CV to `public/`, then reference their paths in the profile/project data.
- Adjust CSS variables in `src/styles/global.css` to change the visual system.
- Modify `src/scripts/motion.ts` to develop the animation behaviour.

Animations respect the operating system’s reduced-motion preference. Content is visible by default before animation scripts run.

## Deployment

The production build is generated in `dist/`:

```bash
npm ci
npm run build
```

Azure Static Web Apps is the intended hosting target. A custom 404 configuration is included in `public/staticwebapp.config.json`; the deployment workflow and domain setup are configured separately.

## Design direction

Inspired by the graphic language of Marathon, the industrial precision of teenage engineering and Pangram Pangram’s typographic presentation.

The portfolio will continue developing through richer case studies, original visual treatments and more expressive interactions.

Fonts, third-party libraries and adapted assets retain their respective licences and attribution requirements.