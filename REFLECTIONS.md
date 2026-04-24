# CW-05 Reflection Responses

**Student:** _Your Name Here_
**Assignment:** CW-05 — JavaScript · React
**Submitted:** April 23, 2026

---

## 1. Component Design & Reusability

Breaking the UI into small components (HelloWorld, Counter, List, FilteredList)
made each piece focused on one job, which directly improved both reusability
and maintainability.

- **List** is a pure "display" component — it only takes an `items` prop and
  renders `<li>` elements through `map()`. Because it has no internal state, I
  could drop it into a todo app, a contact directory, or a shopping cart
  without changing a single line.
- **Counter** owns its own `count` state and is completely self-contained. If I
  needed another counter on a different screen (e.g., cart quantity, likes
  counter), I just render `<Counter />` again and it works.
- **FilteredList** is the "smart" component that manages `search` and `type`
  state and hands clean data down to `List`. That separation means if the
  filter logic breaks I only debug `FilteredList`; if the rendering looks
  wrong, I only debug `List`.

This follows the Single Responsibility Principle: each component does one
thing well, which keeps files short, testable, and easy to reason about.

## 2. State vs Props in UI Management

**Props** are read-only data passed from a parent into a child — for example,
`App` passes the `produce` array into `FilteredList`, and `FilteredList` then
passes the filtered array into `List` as `items`. The child can read props but
should never mutate them.

**State** is data that a component owns and is allowed to change over time. In
`Counter`, the component itself owns `count`; in `FilteredList`, the component
owns `search` and `type`.

We must use `setState()` (instead of doing `this.state.count = 6`) because
`setState()` is how we tell React, "this data changed — please re-render."
React uses the call to schedule an update, diff the Virtual DOM, and patch
only the parts of the real DOM that changed. Direct mutation skips that
pipeline entirely, so the UI stays out of sync with the data. It can also
break batching and future React features.

**Rule of thumb:** _State changes here. Props come from there._

## 3. Asset Organization & Scalability

For a 5-component project, a single `src/components/` folder is perfect. For a
50-component project I would switch to a feature-based layout:

```
src/
├── components/
│   └── ui/                 # shared primitives: Button, Card, Input, Modal
├── features/
│   ├── counter/
│   │   ├── Counter.jsx
│   │   ├── Counter.css
│   │   └── Counter.test.js
│   ├── produce/
│   │   ├── FilteredList.jsx
│   │   ├── List.jsx
│   │   └── produce.data.js
│   └── onboarding/
│       └── HelloWorld.jsx
├── hooks/                  # custom reusable logic
├── utils/                  # pure helpers, formatters
├── assets/                 # images, fonts, icons
├── styles/                 # global tokens, theme variables
└── App.js
```

**Conventions I would enforce:**

- **PascalCase** for component files (`FilteredList.jsx`), **camelCase** for
  utilities (`formatPrice.js`).
- File name matches the default export (`FilteredList.jsx` exports
  `FilteredList`).
- Each component folder co-locates its `.jsx`, `.css`, and `.test.js`.
- Shared UI primitives live in `components/ui/`; feature-specific components
  live under `features/<feature>/`.
- Global styles and design tokens live in `styles/` and are imported once.

Feature-based folders scale better than grouping by file type because a change
to "produce" touches one folder instead of five.

## 4. DOM vs React's Virtual DOM

With traditional DOM APIs like `document.getElementById`, I have to
imperatively describe **every** step: find the element, read its value, write
a new value, remember to remove old listeners, keep multiple places in sync.
That works for one button, but it breaks down as state grows.

React flips the model to **declarative**: I describe what the UI should look
like for a given state, and React figures out the DOM changes. Under the hood:

1. When `setState()` runs, React builds a new **Virtual DOM** — a lightweight
   JS object tree — representing the next UI.
2. It **diffs** that tree against the previous Virtual DOM.
3. It **reconciles** by applying only the minimal changes to the real DOM.

**Benefits:**

- **Performance** — batched, minimal real-DOM writes instead of re-rendering
  entire sections by hand.
- **Predictability** — UI is a function of state, so I can reason about any
  moment by looking at state.
- **Developer experience** — less boilerplate, fewer "forgot to update this
  element" bugs.
- **Safety** — mixing manual DOM manipulation with React-managed nodes leads
  to React overwriting or losing your changes, so the Virtual DOM encourages
  one owner per piece of UI.

## 5. UI/UX Decisions for Learning & Accessibility

The `FilteredList` combines search + filter, so accessibility needs real
thought:

- **Semantic inputs**: the search uses `<input type="search">` with an
  `aria-label` so screen readers announce its purpose.
- **Labeled groups**: the filter chips are wrapped in a
  `role="group"` with `aria-label="Filter produce by type"` and each chip
  uses `aria-pressed` so assistive tech announces which filter is active.
- **Live results**: the "Showing X of Y" meta line uses `aria-live="polite"`
  so the user hears how many items remain after typing — no need to visually
  re-scan.
- **Keyboard first**: all controls are native `<button>` and `<input>`
  elements, so Tab, Enter, and Space work without extra code.
- **Visual feedback**: the active chip has a gradient + shadow, and focus
  states use a clear ring (`box-shadow`) so keyboard users always see where
  they are.
- **Empty state**: when nothing matches, a friendly message appears instead of
  an empty void, so users understand the filter worked.

**For new React developers**, the hardest concepts are usually:

- "State updates are asynchronous and trigger re-renders" — not obvious until
  you see it.
- "Props flow down, events flow up" — easy to forget and try to mutate props.
- "The Virtual DOM" sounds magical. The classroom-whiteboard / draft-notebook
  analogy helps a lot: write changes in the notebook first, then copy only
  the diffs to the whiteboard.

Progressive disclosure, interactive examples, and very clear error messages
(like React's "Can't call setState on unmounted component") bridge the gap.
Componentization itself is a teaching tool: isolating complexity into small
files makes each concept easier to learn one at a time.
