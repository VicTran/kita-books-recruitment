---
name: KITA BOOKS Design System
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#43474f'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#420700'
  on-tertiary: '#ffffff'
  tertiary-container: '#651605'
  on-tertiary-container: '#ed7b61'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a3'
  on-tertiary-fixed: '#3d0600'
  on-tertiary-fixed-variant: '#802916'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is anchored in an **Editorial Modernist** aesthetic, specifically tailored for a premium literary and intellectual audience. It seeks to evoke the tactile sensation of a high-end hardcover journal or a contemporary academic periodical. 

The visual narrative prioritizes clarity, authority, and quiet luxury. It rejects common digital tropes—such as aggressive gradients or repetitive grid patterns—in favor of intentional asymmetrical layouts, generous "white space" (utilizing a warm paper-tone surface), and high-contrast typography. The emotional response is one of calm focus, academic rigor, and sophisticated curation.

## Colors
The palette is built upon a foundation of **Paper White (#fdfcf8)**, which provides a warmer, more organic feel than pure digital white, reducing eye strain for long-form reading. 

- **Primary (Intellectual Blue):** A deep, authoritative navy used for primary navigation, headlines, and foundational UI elements.
- **Secondary (Muted Gold):** Used exclusively for high-level accents, such as premium membership indicators or curated highlights.
- **Tertiary (Terracotta):** Reserved for delicate functional alerts or specific editorial callouts that require distinction without breaking the intellectual tone.
- **Surface & Depth:** The system avoids artificial shadows. Instead, depth is achieved through subtle tonal shifts in the neutral scale or thin, high-contrast borders.

## Typography
Typography is the primary vehicle for the brand’s identity. We utilize a dual-font strategy to distinguish between **Emotional/Editorial** content and **Functional/Data** content.

- **Headlines:** *Libre Caslon Text* provides a timeless, literary authority. Use it for book titles, article headings, and large display quotes. For large headlines, use tighter letter-spacing to enhance the premium feel.
- **Body & Interface:** *Hanken Grotesk* offers a precise, modern counterpoint. It is used for long-form body text, metadata, and all functional interface elements.
- **Editorial Contrast:** Always aim for a clear hierarchy where the serif headlines dominate the visual field, while the sans-serif body text provides a clean, neutral reading experience.

## Layout & Spacing
This design system employs a **Magazine-Style Layout** that breaks away from the standard 3-column card grid.

- **Asymmetry:** Use varying column widths (e.g., a 7-column main content area paired with a 5-column editorial sidebar) to create visual interest.
- **Breathing Space:** Section gaps are intentionally large (120px+) to ensure that distinct intellectual themes do not bleed into one another.
- **Fixed/Fluid Hybrid:** The layout uses a fixed maximum container width of 1440px for desktop to maintain optimal line lengths for reading, while margins scale fluidly on smaller screens.
- **Gutter Strategy:** Wide gutters (32px) are used to maintain the feeling of "uncluttered" luxury.

## Elevation & Depth
Elevation in this design system is conveyed through **Tonal Layering** and **Structural Outlines** rather than traditional shadows.

- **Surface Tiers:** Use the primary Paper White (#fdfcf8) for the background. Secondary containers or sidebars should use a slightly darker or cooler tint of the neutral base to indicate a secondary plane.
- **Hairline Borders:** Use 1px solid borders in a low-opacity version of Intellectual Blue (10-15% opacity) to define cards and sections. 
- **The "Inset" Effect:** For data-heavy sections or growth charts, use a subtle inset border or a bronze-tinted background to differentiate "functional" areas from "editorial" ones.
- **No Blurs:** Avoid glassmorphism or background blurs; they conflict with the "physical book" metaphor of the brand.

## Shapes
The shape language is disciplined and architectural. 

- **Primary Corners:** We use a "Soft" (0.25rem) corner radius for most UI elements like buttons and input fields. This provides just enough approachable softness without losing the professional, sharp edge of a premium publication.
- **Sharp Containers:** Large editorial containers and images should remain sharp (0px) to mimic the edges of a printed page or book cover.
- **Buttons:** Buttons follow the same 0.25rem rule, ensuring they feel integrated with the typography rather than appearing as floating "bubbles."

## Components
Consistent component styling reinforces the "Intellectual Modern" aesthetic.

- **Buttons:** Primary buttons use a solid Intellectual Blue background with Paper White text. No shadows. Secondary buttons are "Ghost" style with a 1px border and 0.25rem radius.
- **Cards:** Never use 3-card identical rows. Instead, use "Feature Cards" that span 8 columns and "Secondary Cards" that span 4. Card backgrounds should be transparent with a hairline top-border to separate content.
- **Input Fields:** Minimalist design with only a bottom-border that thickens on focus. Labels should use the `label-lg` typography style (uppercase, tracked out).
- **Chips/Labels:** Small, rectangular chips with the 0.25rem radius. Use the Muted Gold (#c5a059) for "Editor's Choice" or "Premium" tags.
- **Imagery:** Use high-contrast, art-directed photography. Images should either be full-bleed or framed with significant whitespace. Avoid generic stock photos or illustrations.
- **Data/Growth Sections:** Use deep indigo backgrounds with bronze accents for charts and metrics to create a "Finance/Business Review" atmosphere within the literary context.