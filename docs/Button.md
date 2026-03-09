# Button Component Documentation

## Overview

The Button component is a primary action element designed to trigger important user interactions. With a distinctive pill-shaped design and bold red styling, it commands attention and guides users toward primary calls-to-action.

Buttons are essential for:
- **Form submissions** (Save, Send, Submit)
- **Primary actions** (Create, Delete, Confirm)
- **Navigation** (Continue, Next, Get Started)
- **Workflows** (Approve, Reject, Proceed)

## Design Principles

The Button component follows these core design principles:

1. **High Emphasis:** The red background ensures the button stands out and draws attention
2. **Accessibility:** Full keyboard support with visible focus indicators for all users
3. **Semantic Clarity:** Styling clearly indicates this is the primary action
4. **Responsive:** Works seamlessly across all device sizes
5. **Consistent:** Uses PM3 design system tokens for cohesive styling

## Component Structure

```tsx
import { Button } from '@acme-ds/react';

<Button type="submit">Save</Button>
```

The Button is a simple, lightweight wrapper around the native HTML `<button>` element. It accepts all standard HTML button attributes and combines them with PM3 design system styling.

## States

The Button component supports multiple interactive states:

### Default State

```tsx
<Button>Continue</Button>
```

The standard button appearance with:
- **Background:** `actionPrimaryBg` (#dc1928) - Bold red
- **Text:** `actionPrimaryText` (#fafafa) - White
- **Border radius:** Full (9999px) - Pill shape
- **Padding:** 8px vertical × 16px horizontal
- **Min height:** 40px
- **Font weight:** 600 (semi-bold)

**Use when:** Presenting the primary action available to the user.

### Hover State

```tsx
<Button>Continue</Button>
{/* Hover with mouse to see darker red */}
```

When the user hovers over the button:
- **Background:** `actionPrimaryBgHover` (#bd1723) - Darker red
- **Transition:** All properties change over 180ms with ease timing
- **Cursor:** Pointer (hand cursor)

**Purpose:** Provides visual feedback that the button is interactive and clickable.

### Focus State

```tsx
<Button>Continue</Button>
{/* Press Tab to see focus outline */}
```

When the button receives keyboard focus:
- **Outline:** 3px solid `borderFocus` (#3587da) - Blue
- **Outline offset:** 2px - Spacing from button edge
- **Selector:** `:focus-visible` - Only shows for keyboard navigation

**Purpose:** Critical for accessibility - helps keyboard users know which element is currently focused.

### Disabled State

```tsx
<Button disabled>Loading...</Button>
```

When the button is disabled:
- **Background:** `actionDisabledBg` (#eeeeee) - Gray
- **Text:** `actionDisabledText` (#a2a2b0) - Muted gray
- **Cursor:** Not-allowed (prohibited cursor)
- **Interaction:** No click events are triggered

**Use when:** 
- An action is not available
- Form validation has not passed
- A process is already in progress
- Permissions are insufficient

## Props

The Button component accepts all standard HTML button attributes:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | **Required.** Button label text content. |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type for form integration. |
| `disabled` | `boolean` | `false` | Disables button interaction and shows disabled styling. |
| `onClick` | `(event: MouseEvent) => void` | — | Click event handler function. |
| `aria-label` | `string` | — | Accessible label for icon-only buttons. |
| `aria-disabled` | `boolean` | — | Indicates button is disabled (automatically set). |
| `className` | `string` | — | Additional CSS classes (appended to base styles). |

## Usage Examples

### Basic Button

```tsx
import { Button } from '@acme-ds/react';

export function App() {
  return <Button>Click me</Button>;
}
```

### Form Submission

```tsx
export function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <Button type="submit">Sign In</Button>
    </form>
  );
}
```

### With Click Handler

```tsx
export function ConfirmDialog() {
  const handleConfirm = () => {
    console.log('User confirmed action');
  };

  return (
    <div>
      <p>Are you sure you want to continue?</p>
      <Button onClick={handleConfirm}>Yes, Continue</Button>
    </div>
  );
}
```

### Disabled State

```tsx
export function SaveButton() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveData();
    } finally {
      setIsSaving(false);
    }
  };

  return <Button disabled={isSaving} onClick={handleSave}>
    {isSaving ? 'Saving...' : 'Save Changes'}
  </Button>;
}
```

### Accessible Icon Button

```tsx
export function CloseButton() {
  return (
    <Button aria-label="Close dialog" onClick={onClose}>
      ×
    </Button>
  );
}
```

## Design System Integration

### PM3 Tokens Used

```
Default State:
  actionPrimaryBg (#dc1928)      - Background color
  actionPrimaryText (#fafafa)    - Text color

Hover State:
  actionPrimaryBgHover (#bd1723) - Darkened background

Disabled State:
  actionDisabledBg (#eeeeee)     - Gray background
  actionDisabledText (#a2a2b0)   - Muted text

Focus State:
  borderFocus (#3587da)          - Blue outline

Typography:
  fontFamilyBrand (Inter)        - Font family
  fontSizeLabelLarge (16px)      - Font size
  lineHeightBodyLarge            - Line height
  
Spacing:
  spacing.s8 (8px)               - Vertical padding
  spacing.s16 (16px)             - Horizontal padding
  
Radius:
  radius.full (9999px)           - Border radius
```

### Styling Approach

The Button uses vanilla-extract CSS-in-JS for:
- **Type safety:** TypeScript integration with CSS generation
- **Zero runtime:** All styles compiled to static CSS
- **Token integration:** Automatic token variable substitution
- **Scoped styles:** No style conflicts with other components

## Accessibility

The Button component is built with accessibility as a core feature:

### Keyboard Navigation

- ✅ Full Tab key support for focus management
- ✅ Enter and Space keys trigger click events
- ✅ Focus-visible outline for keyboard users
- ✅ Focus management preserved during interactions

### Visual Accessibility

- ✅ High contrast colors (WCAG AA compliant)
- ✅ Clear visual feedback for all states
- ✅ 3px focus outline meets accessibility standards
- ✅ Minimum 40px height for touch targets

### Semantic HTML

- ✅ Native `<button>` element (not div pretending to be button)
- ✅ Proper button type attribute support
- ✅ Works with form submission workflows
- ✅ Supports all aria-* attributes

### Screen Reader Support

```tsx
// Standard button - auto-labeled from content
<Button>Save</Button>

// Icon-only button - needs aria-label
<Button aria-label="Close dialog">×</Button>

// Disabled button - state communicated automatically
<Button disabled>Saving...</Button>
```

## Common Patterns

### Primary Action in Modal

```tsx
export function ConfirmDialog({ onConfirm, onCancel }) {
  return (
    <dialog>
      <p>Confirm this action?</p>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button onClick={onCancel}>Cancel</button>
        <Button onClick={onConfirm}>Confirm</Button>
      </div>
    </dialog>
  );
}
```

### Loading State

```tsx
export function AsyncButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await performAction();
      // Show success feedback
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button disabled={loading} onClick={handleClick}>
      {loading ? '⏳ Processing...' : 'Start Process'}
    </Button>
  );
}
```

### Conditional Rendering

```tsx
export function SavePanel({ isDirty, isValid }) {
  return (
    <div>
      <Button disabled={!isDirty || !isValid} type="submit">
        Save Changes
      </Button>
      {!isValid && <p>Please fix errors before saving</p>}
    </div>
  );
}
```

### Form Group

```tsx
export function Form() {
  return (
    <form>
      <fieldset>
        <legend>Contact Information</legend>
        {/* Form fields */}
      </fieldset>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button type="reset">Clear</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
```

## Best Practices

1. **Use for primary actions** - Reserve Button for the main call-to-action
2. **Clear button labels** - Use action verbs: "Save", "Delete", "Send", not generic "OK"
3. **Provide feedback** - Show disabled state during processing
4. **Keyboard accessibility** - Always test Tab and Enter key navigation
5. **Avoid disabling forms** - Don't disable submit button; show error messages instead
6. **Icon guidelines** - Icon-only buttons must have `aria-label`
7. **Loading states** - Disable and show loading text during async operations
8. **Touch targets** - Minimum 40px height (built-in) is maintained

## Migration & Versioning

### Current Version

- **Component type:** Functional React component
- **Props:** All standard HTMLButtonElement attributes
- **Styling:** PM3 design system tokens (vanilla-extract)
- **Accessibility:** WCAG 2.1 AA compliant

### No Breaking Changes

The Button component is stable and maintains backward compatibility with all standard HTML button usage.

## Related Components

- **Toast** - For temporary notifications and feedback
- **Badge** - For status indicators and labels
- **Input** - For form field capture alongside Button submission
- **Text** - For button labels and supporting content

## Support

For questions or issues related to the Button component:

1. Check the Storybook stories: `/apps/storybook/src/stories/Button.stories.tsx`
2. Review component source: `/packages/design-system/src/components/Button/Button.tsx`
3. View PM3 tokens: `/packages/tokens/src/generated/tokens.js`
4. Read HTML button spec: [MDN Button Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
