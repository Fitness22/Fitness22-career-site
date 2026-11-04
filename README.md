# Fitness22 Careers

The Fitness22 careers site, built with React + Vite.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Project structure

```
public/            images, videos, favicon (served as-is)
src/
  data/
    jobs.js        open positions  ← edit this to add/remove jobs
    team.js        team members on the Who We Are page
    apps.js        apps on the Our Apps page
    content.js     all other text, links, navigation, offices, Our Apps numbers, regions, reviews
  components/      header, footer and page sections (Cover, AppSection, TeamCard, JobList, ...)
  pages/           Home, JobPage (/jobs/:slug), WhoWeAre, OurApps, Contact, NotFound
  hooks/           useTilt (3D tilt toward the mouse), useInView (start animations on scroll)
  styles/index.css all styles; brand colors are CSS variables at the top
```

## Add a job

Open `src/data/jobs.js`, copy an existing job object, and edit it:

```js
{
  slug: 'product-designer',            // URL: /jobs/product-designer
  title: 'Product Designer',
  department: 'Design',
  location: 'Main Office (Petah Tiqwa)',
  workplace: 'Hybrid',                 // optional
  description: `
Intro paragraph...

## What You'll Do

- First bullet
- Second bullet
`,
}
```

The description is Markdown. Remove a job by deleting its object.

Applications go by email to `jobs@fitness22.com`, and the contact form opens an email to
`info@fitness22.com`. Both addresses are set in `src/data/content.js`.

## Green words in titles

In `src/data/content.js`, wrap words in a title with `*asterisks*` to show them in brand green:

```js
title: 'What You’ll *Actually* Do Here',
```

They use the brand green (`--green` in `src/styles/index.css`).

## Animations copied from fitness22.com

- **Our Apps** (`AppSection.jsx`): the three phone screenshots fan out when the section scrolls into view.
- **Our Apps numbers** (`Stats.jsx`): count up from 0. Edit `stats` in `content.js`.
- **Our Apps downloads map** (`DownloadsMap.jsx`, uses `dotted-map`): arcs from HQ to each region. Edit `downloadsByRegion` / `headquarters`.
- **Our Apps reviews** (`Reviews.jsx`): stars fill to the rating, review columns scroll. Edit `reviews`.

## Offices

The Who We Are page shows the offices (`offices` in `src/data/content.js`): pick one from the
list to see its address and contact details and zoom the map to it. The map uses Leaflet with
free OpenStreetMap tiles (no API key needed), shown in gray.

## Deploying

`npm run build` outputs a static site in `dist/`. Since it uses client-side routing,
the host must serve `index.html` for unknown paths (e.g. `/jobs/senior-ios-developer`).
