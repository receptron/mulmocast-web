# MulmoCast Web

Web application for the MulmoCast ecosystem, built with MulmoCast Viewer. The official site for all Mulmo family documentation.

## Setup

```bash
yarn install
yarn dev           # Frontend dev server
yarn dev:server    # Backend dev server
```

## Commands

```bash
yarn build         # Build frontend
yarn build:server  # Build backend
yarn lint          # ESLint
yarn format        # Prettier
yarn deploy        # Deploy to dev
yarn deploy-prod   # Deploy to production
```

## Claude Code Slash Commands

| Command                 | Arguments                            | Description                                                                             |
| ----------------------- | ------------------------------------ | --------------------------------------------------------------------------------------- |
| `/update-docs`          | path / URL / keyword (optional)      | Sync source file changes to Vue doc pages. With args, updates only the relevant page    |
| `/review-docs`          | page path or Vue filename (optional) | Open updated pages in browser via dev server                                            |
| `/improve-project-docs` | none                                 | Suggest and apply improvements to meta-documents (CLAUDE.md, IMPROVEMENT_PLAN.md, etc.) |

## Claude Code Shared Settings (`.claude/settings.json`)

- **PostToolUse hooks**: Auto-runs `yarn lint --fix && yarn format` after Edit/Write
- **plansDirectory**: Plan files saved to `docs/plans/`

## Tech Stack

- **Frontend**: Vue 3 (Composition API) + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + shadcn/vue (reka-ui)
- **i18n**: vue-i18n
- **Backend**: Hono on Cloudflare Workers
- **Package Manager**: yarn (workspaces)

See [CLAUDE.md](./CLAUDE.md) for detailed project documentation.
