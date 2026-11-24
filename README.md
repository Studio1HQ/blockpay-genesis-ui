<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/blockpay-genesis-ui.webp" alt="BlockPay Landing Page with Velt: A fintech landing page with live cursors, presence and page comments" width="100%" />

<br />
<br />

# BlockPay Landing Page with Velt

### A fintech landing page with live cursors, presence and page comments

A Vite and React landing page for a fictional payments product, generated with Lovable, that adds Velt cursors, presence and comments on top of a marketing page.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Live demo](https://img.shields.io/badge/Live_demo-1c1917?style=for-the-badge&logo=vercel&logoColor=white)](https://blockpay-genesis.vercel.app)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

BlockPay Genesis is a landing page for a fictional crypto payments product. It was generated with [Lovable](https://lovable.dev) and then extended with the [Velt](https://velt.dev) SDK so that visitors on the page can see each other's cursors, see who is online and leave comments anywhere on the page.

It is a useful reference for adding Velt to a Vite and React marketing page rather than an app screen. A live demo is at [blockpay-genesis.vercel.app](https://blockpay-genesis.vercel.app).

## Features

- **Live cursors**: `VeltCursor` shows other users' pointer movement on the page in real time.
- **User presence**: `VeltPresence` shows who is currently viewing the landing page.
- **Page comments**: `VeltComments` and `VeltCommentTool` let users comment anywhere on the page.
- **Comments sidebar**: `VeltCommentsSidebar` and `VeltSidebarButton` list all comments.
- **User switcher**: Two demo users, selectable with avatar buttons in the bottom toolbar.
- **Landing page sections**: Navbar, hero, features, card preview, call to action and footer built with shadcn/ui.
- **Dark and light theme**: A theme provider also drives the Velt sidebar dark mode.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Vite](https://vitejs.dev/), [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/) |
| Collaboration | [Velt](https://velt.dev/) (`@veltdev/react`) |
| UI | [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/) |
| Routing | [React Router](https://reactrouter.com/) |
| Scaffolding | [Lovable](https://lovable.dev/) |
| Deployment | [Vercel](https://vercel.com/) |

## Getting started

### Prerequisites

- Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- A Velt API key from [velt.dev](https://velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/blockpay-genesis-ui.git
cd blockpay-genesis-ui
npm i
```

### Environment variables

Create a `.env` file in the project root.

| Variable | Description |
| --- | --- |
| `VITE_VELT_API_KEY` | Your Velt API key. Without it the app logs a warning and Velt features stay off. |

### Run

```bash
npm run dev
```

Vite prints the local URL. Other scripts: `npm run build`, `npm run build:dev`, `npm run lint`, `npm run preview`.

## How it works

`VeltProvider` reads `VITE_VELT_API_KEY` and wraps the app. `VeltAuth` identifies the selected demo user and sets the document to `blockpay-genesis-rick-and-morty-2025`. `VeltComponents` mounts the cursor layer, and `BottomToolbar` holds the comment tool, sidebar button and user switcher.

To test, open the page in two windows, switch to a different user in each, then move the mouse and add comments with the button in the bottom right.

```text
src/
├── components/
│   ├── VeltProvider.tsx     # Reads the API key, wraps the app
│   ├── VeltAuth.tsx         # Identify user, set document
│   ├── VeltComponents.tsx   # VeltCursor and shared Velt UI
│   ├── BottomToolbar.tsx    # Comment tool, sidebar, user switcher
│   └── ...Section.tsx       # Landing page sections
└── pages/Index.tsx
```

You can also edit the project in [Lovable](https://lovable.dev/projects/0b1babf4-98f9-44b2-b6e2-4acb7e6b270e), where changes are committed to this repo, or in GitHub Codespaces. In Lovable, Share then Publish deploys it.

## Resources

- [Lovable project](https://lovable.dev/projects/0b1babf4-98f9-44b2-b6e2-4acb7e6b270e): The original Lovable project for this repo.
- [Velt documentation](https://docs.velt.dev): Velt SDK guides and API reference.
- [Velt](https://velt.dev): Product site.
- [Lovable custom domains](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide): How to connect a domain to a Lovable project.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
