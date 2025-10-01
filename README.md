# sandbox-hono-vue


## Directory Structure

```text
.
├─ client/                # Vue 3 SPA (Vite)
│  ├─ components/ui/...   # Reusable UI components
│  ├─ router/             # SPA routing
│  ├─ views/              # Page components
│  ├─ lib/                # Client utilities
│  └─ main.ts             # Client entry
├─ server/                # Hono (Cloudflare Workers) API
│  └─ index.ts            # Example: POST /api/echo
├─ public/                # Static assets
├─ dist/                  # Build outputs
│  ├─ client/             # SPA assets for serving
│  └─ sandbox_hono_vue/   # Worker bundle
├─ vite.config.ts         # Vite config (Vue / Tailwind / Cloudflare)
├─ wrangler.jsonc         # Cloudflare Workers config
└─ tsconfig*.json         # TypeScript config
```


## About Hono and the Vue SPA

- **Frontend (SPA)**: Located under `client/`. The router in `client/router/index.ts` uses `createWebHistory` (History API) for navigation.
- **Backend (API)**: Located under `server/`. Hono powers a Cloudflare Workers API under `/api/*`. An example endpoint `POST /api/echo` accepts JSON `{ text: string }` and returns the uppercased text.
- **Build/Run**: Vite with `@cloudflare/vite-plugin` builds both the SPA and the Worker bundle. During development, use Vite for the SPA and `wrangler` for the Worker.


## Setup and Commands

1. Install dependencies

```bash
yarn install
```

2. Development server (SPA)

```bash
yarn run dev
```

3. Preview (local run including API)

```bash
yarn run preview   # builds then starts wrangler dev
```

4. Build

```bash
yarn run build
```

5. Deploy (Cloudflare Workers)

```bash
yarn run deploy
```