# Design-to-Code Learning Log

## Key Learnings from Toast Component Implementation

### 1. Token Mapping & Design Specification Patterns

**Challenge:** Design specs use slash notation (e.g., `system/success/bg`), but PM3 tokens use camelCase (e.g., `systemSuccessBg`).

**Learning:**
- **Slash → camelCase conversion** is the standard pattern:
  - `system/success/bg` → `systemSuccessBg`
  - `system/error/border` → `systemErrorBorder`
  - `system/warning/text` → `systemWarningText`

- **Semantic token families follow consistent naming patterns:**
  - Each semantic category (success, error, info, warning, promotion) includes 4 token types:
    - `<category>Bg` — background color
    - `<category>Border` — border color
    - `<category>Icon` — icon color
    - `<category>Text` — text color
  
- **Generic token categories also exist:**
  - `bg*` — background tokens (`bgSurface`, `bgDefault`, `bgInverse`)
  - `border*` — border tokens (`borderDefault`, `borderFocus`, `borderStrong`, `borderSubtle`)
  - `text*` — text tokens (`textDefault`, `textSubtle`, `textBrand`, `textInverse`)
  - `action*` — action tokens (`actionPrimaryBg`, `actionSecondaryText`, etc.)

- **Before building a component:**
  1. Inventory all available semantic tokens using `grep` or `jq`
  2. Match design specs to token patterns (not exact names)
  3. Use closest semantic alternative if exact match not found
  4. Access tokens via `vars.color.<tokenName>` from `@acme-ds/tokens` library

**Example — Success variant mapping:**
```
Design spec: system/success/bg, system/success/border, system/success/text
↓
PM3 tokens: systemSuccessBg (#eef9f2), systemSuccessBorder (#7ed09e), systemSuccessText (#136634)
↓
Implementation: vars.color.systemSuccessBg, vars.color.systemSuccessBorder, vars.color.systemSuccessText
```

---

### 2. Commit & Push Process → Vercel Deployment Trigger

**Critical Rule:** Tasks are **not complete** until pushed to GitHub.

**Process (must follow exactly):**
1. **Make changes locally** — edit `.tsx`, `.css.ts`, `.stories.tsx` files
2. **Run build** — `npm run build` — verify no errors (check for 0 exit code)
3. **Commit locally** — `git add -A && git commit -m "<message>"`
4. **Push to origin main** — `git push origin main`
5. **Verify push** — confirm output shows commit hash range (e.g., `b6aea0e..60d63f1 main -> main`)

**Commit message convention:**
- Use conventional commit format: `feat(component): description` or `refactor(component): description`
- Example: `feat(toast): add success variant with systemSuccess tokens (bg, border, text)`

**Why push is critical:**
- Triggers Vercel CI/CD pipeline automatically
- Makes changes available to stakeholders via deployed site
- No Vercel deployment = task incomplete (even if local build passes)

---

### 3. Component Structure & Token Usage Best Practices

**Vanilla Extract CSS Pattern:**
- **Base styles** define neutral/default state in main style object
- **Variant styles** created as separate exports (`toastSuccess`, `toastTitleSuccess`, etc.)
- **Component logic** conditionally combines base + variant classes
- Example:
  ```typescript
  // Bad: selectors inside variant style
  export const toastSuccess = style({
    selectors: {
      [`${toastTitle}`]: { color: ... }  // ❌ Causes vanilla-extract errors
    }
  });
  
  // Good: separate styles for each element
  export const toastSuccess = style({ ... });
  export const toastTitleSuccess = style({ ... });
  // Then combine in component: className={`${toastTitle} ${toastTitleSuccess}`}
  ```

**Spacing & Typography Token Usage:**
- Spacing: `vars.spacing.s4`, `vars.spacing.s12`, `vars.spacing.s20`, `vars.spacing.s40`
- Typography: `vars.typography.fontFamilyBrand`, `vars.typography.fontSizeBodyMedium`, `vars.typography.fontSizeBodySmall`
- Always use tokens instead of hardcoding pixel values (except for fixed dimensions like border-radius)

---

### 4. Design-to-Code Workflow Improvements

**Token Lookup First:**
When provided with design specs, immediately inventory available tokens before building:
```bash
# List all semantic color tokens
jq '.color.semantic.light | to_entries[] | "\(.key): \(.value.value)"' tokens-transformed.json

# List all spacing tokens
grep '"s[0-9]' theme.css.ts
```

**Storybook Story Coverage:**
- Create stories for all variants (neutral, success, etc.)
- Include both with and without interactive elements (e.g., `WithDismiss`)
- Use `argTypes` to expose variant options in Storybook UI
- This makes visual testing and stakeholder review easier

**Design Spec Clarity Checklist:**
Before implementing, confirm:
- ✅ Dimensions (width, height)
- ✅ Spacing (padding, gaps)
- ✅ Corner radius
- ✅ All color tokens (bg, border, text, icon if applicable)
- ✅ Typography (size, weight, family)
- ✅ Interactive elements (buttons, close, etc.)
- ✅ All variants (neutral, success, error, etc.)

If any spec is missing, ask for clarification rather than assuming defaults.

---

### 5. Build & Error Handling

**Build Commands:**
```bash
npm run build  # Full build (design-system + storybook + all packages)
```

**Watch for:**
- Build should complete with `Process exited with code 0`
- Check for `Tasks: 3 successful, 3 total` (all builds passed)
- If build fails, error message usually indicates the file causing issue

**Vanilla Extract CSS Errors:**
- Avoid nested selectors inside style objects
- Keep styles flat with separate exports for each element
- Combine classes in component render logic instead

---

### 6. Token Naming Conventions to Remember

**System States (Success, Error, Info, Warning, Promotion):**
```
system<State>Bg      — background
system<State>Border  — border
system<State>Icon    — icon
system<State>Text    — text
```

**Generic Colors:**
```
bg<Modifier>         — background (Surface, Default, Inverse, etc.)
border<Modifier>     — border (Default, Focus, Strong, Subtle)
text<Modifier>       — text (Default, Subtle, Brand, Inverse, Disabled)
action<Type>         — actions (PrimaryBg, SecondaryText, etc.)
```

**Spacing:**
```
s4, s12, s20, s40    — standard spacing units
```

**Typography:**
```
fontFamilyBrand
fontSizeBody<Size>   — BodyMedium, BodySmall, BodyLarge
fontSizeLabel<Size>  — LabelMedium, LabelLarge
fontWeight<Level>    — Regular, Medium, Bold
```

---

## Future Workflow

1. **Get design specs** (Figma screenshot, dimensions, token names)
2. **Inventory tokens** — check what's available in PM3
3. **Map specs → tokens** — use naming pattern matching
4. **Build component** — follow Vanilla Extract + React patterns
5. **Create Storybook stories** — cover all variants
6. **Test locally** — `npm run build` must pass
7. **Commit & push** — must push to trigger Vercel
8. **Verify deployment** — confirm Vercel build succeeded

---

**Date Logged:** Wed 2026-03-05 00:22 GMT+11  
**Component:** Toast  
**Status:** ✅ Complete & Deployed
