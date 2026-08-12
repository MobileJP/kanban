# Kanban

A local-first Kanban board. No server, no database, no build step, no framework — open `index.html` in a browser and go.

## Features

- Multiple boards, each as either a **Feature board** (Ideas → Discovery → Ready → In Progress → Blocked → Done, with PI/Iteration tags and cross-feature dependencies) or a **Task board** (To Do → Active → Waiting For → Done)
- Labels, priorities, checklists, due dates, and photo/file attachments per card
- Feature ↔ Task board linking, with a summary panel showing progress per feature
- Timestamped comment/activity log per card
- Dark mode, compact list view, archive, and JSON import/export

## Running it

Just open [`index.html`](index.html) in your browser — nothing to build. The app is split across three files (`index.html`, [`styles.css`](styles.css), [`app.js`](app.js)) loaded with plain `<link>`/`<script src>` tags — deliberately not ES modules, since those are blocked by CORS when opened directly via `file://`. All three need to stay in the same folder.

The app is also PWA-installable (`manifest.json` + a minimal service worker), so Chrome/Edge can offer to install it as its own window with a home-screen/taskbar icon — but only when it's served over `http(s)` or `localhost`. Browsers block service workers on plain `file://` pages, so opening `index.html` directly (double-click) won't show an install prompt; it will if you ever host these files statically (e.g. GitHub Pages, Netlify, or `npx serve` locally) — no server-side code needed, since it's still just static files.

**Browser requirement:** this app saves your data as JSON files directly to a folder on your computer using the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API), so it only works in **Chromium-based browsers — Chrome, Edge, or Opera**. It does not work in Firefox or Safari, which don't support that API.

On first run, you'll be asked to pick a folder — that's where `boards.json` and one `board_<id>.json` file per board will be written. Point it at a synced folder (OneDrive, Dropbox, etc.) if you want automatic backups. Your data never leaves your machine; there's no server component at all.

## Data & privacy

Everything is local. There's no account system, no cloud sync, and no telemetry — the app only ever reads and writes to the single folder you grant it access to.

## License

MIT — see [LICENSE](LICENSE).
