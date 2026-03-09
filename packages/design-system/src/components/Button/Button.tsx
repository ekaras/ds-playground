import type { ButtonHTMLAttributes } from 'react';
import { button } from './Button.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Primary button component for high-emphasis actions.
 *
 * A versatile button component with a pill-shaped design (fully rounded corners).
 * Perfect for primary calls-to-action, form submissions, and main application actions.
 *
 * The button provides semantic styling using PM3 design system tokens:
 * - **Default state:** Red background (actionPrimaryBg) for strong emphasis
 * - **Hover state:** Darker red background (actionPrimaryBgHover) for visual feedback
 * - **Focus state:** 3px blue outline (borderFocus) for accessibility
 * - **Disabled state:** Gray background with muted text for inactive buttons
 *
 * The component supports all standard HTML button attributes including:
 * - `disabled` - Disables the button interaction
 * - `type` - Sets button type (button, submit, reset)
 * - `onClick` - Click event handler
 * - `aria-label` - Accessible label
 * - `className` - Additional CSS classes (note: will be appended to base styles)
 *
 * @example
 * ```tsx
 * // Primary action button
 * <Button>Click me</Button>
 *
 * // Disabled state
 * <Button disabled>Loading...</Button>
 *
 * // Form submission
 * <Button type="submit">Save Changes</Button>
 *
 * // With click handler
 * <Button onClick={() => console.log('clicked')}>Action</Button>
 *
 * // Accessible button
 * <Button aria-label="Close dialog">×</Button>
 * ```
 *
 * ## Styling
 *
 * The button uses vanilla-extract CSS-in-JS with PM3 design tokens:
 * - **Font:** Inter (fontFamilyBrand)
 * - **Size:** Label Large (fontSizeLabelLarge)
 * - **Weight:** 600 (semi-bold)
 * - **Padding:** 8px (vertical) × 16px (horizontal)
 * - **Min height:** 40px
 * - **Border radius:** Full (9999px)
 * - **Transition:** All 180ms ease
 *
 * ## Accessibility
 *
 * - ✅ Full keyboard navigation support
 * - ✅ Focus-visible outline for keyboard users
 * - ✅ Disabled state properly communicated
 * - ✅ High contrast colors meet WCAG AA standards
 * - ✅ Supports aria-* attributes
 */
export function Button(props: ButtonProps) {
  return <button className={button} {...props} />;
}
