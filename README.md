# CW-05 · JavaScript — React

Submission for the **CW-05 React Fundamentals** assignment.
[Assignment brief](https://dev.stelliformdigital.com/cw05/)

## What's inside

A single-page React app that integrates all required components:

| Component                                     | Responsibility                                    |
| --------------------------------------------- | ------------------------------------------------- |
| `src/components/HelloWorld.jsx`               | Module 1 — JSX basics, renders a title            |
| `src/components/Counter.jsx`                  | Module 2 — `state` + `setState()` + event handler |
| `src/components/List.jsx`                     | Module 3 — props + `map()` with `key`             |
| `src/components/FilteredList.jsx`             | Module 4 — search + type filter combined          |
| `src/App.js`                                  | Module 5 — wires everything together              |

All components are **class components** as required.

## Reflections

Long-form answers to the five reflection prompts live in
[`REFLECTIONS.md`](./REFLECTIONS.md).

## Custom styling

Custom styling is included per-component and globally:

- `src/index.css` — base reset, fonts, gradient background
- `src/App.css` — layout shell + navigation
- `src/components/HelloWorld.css`
- `src/components/Counter.css`
- `src/components/List.css`
- `src/components/FilteredList.css`

It uses a dark gradient theme, gradient typography, glassmorphism cards, and
accessible focus states.

## Run locally

```bash
npm install
npm start
```

Opens http://localhost:3000.

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a **public** GitHub repo and push this project.
2. In `package.json`, set `"homepage"` to
   `https://<your-username>.github.io/<your-repo-name>`.
3. Deploy:

   ```bash
   npm run deploy
   ```

4. In the repo → **Settings → Pages**, confirm the source is the `gh-pages`
   branch. The site usually goes live in 2–5 minutes.

## Submit

Per the assignment brief, submit to the i-college CW folder:

- The live GitHub Pages URL
- These files: `HelloWorld.jsx`, `Counter.jsx`, `List.jsx`, `FilteredList.jsx`,
  `App.js`
- `REFLECTIONS.md`
- Proof of custom styling (the `.css` files above)

Due **April 23, 2026 @ 11:59 PM** — late submissions are not accepted.
