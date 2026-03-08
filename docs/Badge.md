# Badge Component Documentation

## Overview

The Badge component is a small, compact element used to display status, labels, or metadata throughout your application. It supports multiple semantic variants to communicate different states and meanings at a glance.

Badges are perfect for:
- **Status indicators** (Active, Inactive, Pending)
- **Labels and tags** (New, Featured, Premium)
- **Notification states** (Sent, Failed, Warning)
- **Document states** (Draft, Published, Archived)

## Variants

The Badge component includes five semantic variants, each with distinct colors from the PM3 design system:

### Neutral (Default)

```tsx
<Badge label="Badge" variant="neutral" />
```

**Use when:** Displaying general labels without specific semantic meaning.

**PM3 Tokens:**
- Background: `systemWarningBg` (#f5f5f5)
- Border: `borderDefault` (#e2e2e2)
- Text: `textDefault` (#212129)

**Examples:** "New", "Featured", "Tag Label"

### Success

```tsx
<Badge label="Success" variant="success" />
```

**Use when:** Indicating positive, successful, or approved states.

**PM3 Tokens:**
- Background: `systemSuccessBg` (#eef9f2)
- Border: `systemSuccessBorder` (#7ed09e)
- Text: `systemSuccessText` (#136634)

**Examples:** "Active", "Approved", "Completed", "Sent"

### Error

```tsx
<Badge label="Error" variant="error" />
```

**Use when:** Indicating errors, failures, or critical problems.

**PM3 Tokens:**
- Background: `systemErrorBg` (#fef2f3)
- Border: `systemErrorBorder` (#f295a1)
- Text: `systemErrorText` (#941024)

**Examples:** "Failed", "Invalid", "Rejected", "Error"

### Info

```tsx
<Badge label="Info" variant="info" />
```

**Use when:** Providing informational context or auxiliary data.

**PM3 Tokens:**
- Background: `systemInfoBg` (#f0f6fe)
- Border: `systemInfoBorder` (#90c2f3)
- Text: `systemInfoText` (#235b96)

**Examples:** "Draft", "New", "Pending", "Beta"

### Warning

```tsx
<Badge label="Warning" variant="warning" />
```

**Use when:** Alerting users to caution or potential issues requiring attention.

**PM3 Tokens:**
- Background: `systemWarningBg` (#fff8ed)
- Border: `systemWarningBorder` (#f4d096)
- Text: `systemWarningText` (#8f4700)

**Examples:** "Attention", "Expiring", "Review Required", "Retry"

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | **Required.** The text displayed in the badge. |
| `variant` | `'neutral' \| 'success' \| 'error' \| 'info' \| 'warning'` | `'neutral'` | Controls the visual style and semantic meaning. |
| `...props` | `HTMLAttributes<HTMLSpanElement>` | — | All standard HTML span attributes are supported. |

## Usage Examples

### Basic Usage

```tsx
import { Badge } from '@acme-ds/react';

export function StatusDisplay() {
  return <Badge label="Active" variant="success" />;
}
```

### Multiple Badges

```tsx
export function StatusBadges() {
  return (
    <div>
      <Badge label="Neutral" variant="neutral" />
      <Badge label="Success" variant="success" />
      <Badge label="Error" variant="error" />
      <Badge label="Info" variant="info" />
      <Badge label="Warning" variant="warning" />
    </div>
  );
}
```

### Status List

```tsx
export function DocumentList() {
  const documents = [
    { id: 1, title: 'Document 1', status: 'published', variant: 'success' },
    { id: 2, title: 'Document 2', status: 'draft', variant: 'info' },
    { id: 3, title: 'Document 3', status: 'archived', variant: 'neutral' },
  ];

  return (
    <ul>
      {documents.map((doc) => (
        <li key={doc.id}>
          {doc.title}
          <Badge label={doc.status} variant={doc.variant} />
        </li>
      ))}
    </ul>
  );
}
```

### With Custom Attributes

```tsx
export function AccessibleBadge() {
  return (
    <Badge
      label="New"
      variant="success"
      aria-label="This item is new"
      title="Added recently"
    />
  );
}
```

## Design System Integration

### Token Structure

All Badge variants use PM3 semantic tokens for consistency:

```
systemSuccessBg    - Background color for success states
systemSuccessBorder - Border color for success states  
systemSuccessText  - Text color for success states
```

This pattern applies to all variants: `success`, `error`, `info`, `warning`.

The neutral variant uses the default system tokens:
- Background: `bgSurface`
- Border: `borderDefault`
- Text: `textDefault`

### Styling

Badges are styled with vanilla-extract using the PM3 token system. All visual properties (colors, spacing, typography) are centrally managed through tokens, ensuring:

- **Consistency** across the design system
- **Maintainability** through a single source of truth
- **Flexibility** for theming and future updates

## Accessibility

- Badge uses semantic HTML (`<span>`) for simple labels
- Badge extends `HTMLAttributes<HTMLSpanElement>` for full accessibility support
- Support for `aria-label`, `title`, and other standard HTML attributes
- High contrast color combinations from PM3 ensure readability
- Badge text is always readable and properly sized

## Common Patterns

### Status Dashboard

Use badges to display item statuses at a glance:

```tsx
<div className="items-list">
  <div className="item">
    <span>Order #12345</span>
    <Badge label="Shipped" variant="success" />
  </div>
  <div className="item">
    <span>Order #12346</span>
    <Badge label="Processing" variant="info" />
  </div>
  <div className="item">
    <span>Order #12347</span>
    <Badge label="Delayed" variant="warning" />
  </div>
</div>
```

### Filtering Chips

Use badges as visual indicators for active filters:

```tsx
<div className="filter-tags">
  <Badge label="Active" variant="success" />
  <Badge label="2024" variant="info" />
  <Badge label="High Priority" variant="warning" />
</div>
```

### Document Workflow

Visualize document states:

```tsx
<div className="document-card">
  <h3>Annual Report</h3>
  <Badge label="Draft" variant="info" />
  <p>In progress by Marketing team</p>
</div>
```

## Best Practices

1. **Keep labels concise** - Badges work best with short, clear labels
2. **Choose appropriate variants** - Use semantically correct variants that match the state they represent
3. **Don't overuse** - Reserve badges for truly important information
4. **Pair with context** - Ensure badges are used alongside explanatory text when needed
5. **Maintain spacing** - Leave adequate space between badges and other content
6. **Test contrast** - Verify color contrast meets WCAG standards in your implementation

## Migration Guide

If upgrading from previous Badge versions:

1. All existing props remain compatible
2. New `warning` variant is available alongside existing variants
3. All styling now uses PM3 tokens (transparent to users)
4. No breaking changes to the component API

## Support

For questions or issues related to the Badge component:

1. Check the Storybook documentation: `/stories/Badge.stories.tsx`
2. Review PM3 token definitions: `/packages/tokens/src/generated/tokens.js`
3. Check the component implementation: `/packages/design-system/src/components/Badge/Badge.tsx`
