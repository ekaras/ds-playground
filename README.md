# React Design System Workspace

This repository is a monorepo for an internal React design system using:

- `pnpm` workspaces
- `turbo` task orchestration
- `vanilla-extract` tokens and styles
- `Storybook` for documentation and visual validation

## Workspace Layout

- `packages/tokens`: global design tokens and theme variables
- `packages/design-system`: React primitives that consume tokens
- `apps/storybook`: component documentation and state previews

## Why this structure

1. Keep tokens separate from components so visual decisions stay centralized.
2. Keep components separate from Storybook so docs do not leak into production package code.
3. Keep Storybook as an app so it uses the design-system package exactly like consumer apps.

## Prerequisites

Install Node.js 20 LTS and pnpm:

```bash
corepack enable
corepack prepare pnpm@9.12.0 --activate
```

## Install and run

```bash
pnpm install
pnpm dev
```

This runs all `dev` scripts in parallel. To run Storybook only:

```bash
pnpm -F @acme-ds/storybook dev
```

## First Week Checklist

1. Verify tokens compile and are used by all primitives.
2. Add component states in Storybook (hover/focus/disabled/error/loading).
3. Add accessibility checks in Storybook (`addon-a11y` already configured).
4. Add tests for primitives (`@testing-library/react` + `vitest`).
5. Add CI workflow to run `lint`, `typecheck`, `test`, and Storybook build.

## Internal-to-external strategy

- Keep packages `private` while internal.
- When externalizing later, remove `private`, add repository/license metadata, and introduce changelog + semantic release policy.
# test
 
