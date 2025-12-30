# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **ECS (Ecommerce Solutions) marketing website** built with React, TypeScript, and Vite. The site features a cinematic, industrial-themed design with advanced scroll animations, smooth scrolling via Lenis, and motion effects using Framer Motion and GSAP.

The design system is called **"Industrial Cathedral"** - a dark/light theme with industrial accents (orange, yellow, cyan), steel tones, and grain overlay effects.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (runs TypeScript compiler + Vite build)
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture

### Component Organization

Components are organized by purpose:

- **`components/sections/`** - Full-page sections (Hero, Services, Facilities, Partnership, About, Contact, Stats, TrustedLogos, Faq)
- **`components/layout/`** - Layout components (Header, SmoothScroll, BackToTop)
- **`components/effects/`** - Visual effects (GrainOverlay, SplitText)
- **`components/ui/`** - Reusable UI components (SectionTitle, SectionSpacer, Counter, ThemeToggle) and shadcn/ui components (Button, Card, Input, Select, etc.)

### Key Technical Patterns

**Smooth Scrolling Architecture:**
- The entire app is wrapped in `<SmoothScroll>` component which provides Lenis smooth scrolling
- Lenis instance is accessible via `useLenis()` context hook throughout the app
- Configured with 1.2s duration and custom easing for cinematic effect
- SmoothScroll uses React Context to provide the Lenis instance to child components

**Animation System:**
- Reusable animation variants defined in [src/lib/animations.ts](src/lib/animations.ts)
- Standard easing curves (as tuples): `easeOutExpo`, `easeOutQuart`, `easeInOutCubic`
- Common variants include:
  - Fade: `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
  - Scale: `scaleIn`, `scaleInUp`
  - Stagger: `staggerContainer`, `staggerContainerFast`
  - Text: `textReveal`
  - Hover: `cardHover`, `buttonHover`
  - Transitions: `slideVariants`, `pageTransition`
- Most components use Framer Motion's `motion` components with these variants
- Viewport triggers commonly use: `whileInView="visible" viewport={{ once: true }}`
- GSAP is used for more complex scroll-triggered animations (like parallax effects in Facilities section)

**Theme System:**
- CSS custom properties in [src/index.css](src/index.css) define the color system
- Light/dark themes toggle via `.dark` class on root element (managed by ThemeToggle component)
- Colors use semantic naming: `--color-bg-primary`, `--color-text-primary`, `--color-accent-orange`, etc.
- Steel tones (`--color-steel-light/mid/dark`) are key to the industrial aesthetic
- Tailwind CSS v4 with CSS-first approach, using `@theme` directive
- Additional shadcn/ui theme variables defined using oklch color space

**Data Layer:**
- Static content defined in [src/data/content.ts](src/data/content.ts) with TypeScript interfaces
- Images referenced from [src/data/images.ts](src/data/images.ts) (mix of local assets and Unsplash URLs)
- TypeScript interfaces: `Service`, `Facility`, `Stat`, `Feature`
- Content data exported as arrays: `services`, `facilities`, `stats`, `features`
- Other exports: `partnershipData`, `contactInfo`, `navigation`

### Path Aliases

Uses `@/` alias for `src/` directory (configured in [vite.config.ts:10](vite.config.ts#L10) and [tsconfig.json:6](tsconfig.json#L6)):

```typescript
import { SectionTitle } from "@/components/ui/SectionTitle";
```

### Styling Approach

- **Tailwind CSS v4** with custom theme in [src/index.css](src/index.css)
- Use `cn()` utility from [src/lib/utils.ts](src/lib/utils.ts) for conditional class merging (combines clsx + tailwind-merge)
- Prefer CSS custom properties for colors/theme values over Tailwind color classes
- Example: `bg-[var(--color-bg-primary)]` instead of `bg-gray-900`
- Custom utility classes for industrial effects: `.texture-corrugated`, `.texture-concrete`, `.texture-steel`
- Glow effects: `.glow-orange`, `.glow-cyan`, `.glow-yellow`, `.text-glow-orange`, `.text-glow-cyan`

### Animation Guidelines

- For scroll-triggered animations, check if the component needs GSAP or if Framer Motion's viewport triggers suffice
- Import animation variants from [src/lib/animations.ts](src/lib/animations.ts) - don't redefine common animations
- Common pattern: `<motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>`

## Important Patterns

**Section Structure:**
Most section components follow this pattern:
1. Import data from [src/data/content.ts](src/data/content.ts)
2. Use `<SectionTitle>` component for consistent section headers (with `align` and `size` props)
3. Wrap animated elements in `<motion.div>` with variants from animations.ts
4. Use viewport triggers: `whileInView="visible" viewport={{ once: true }}`
5. Apply consistent padding: `py-24 lg:py-32`
6. Use semantic `id` attributes for navigation (matches navigation items in content.ts)

**Responsive Design:**
- Mobile-first approach with Tailwind breakpoints (md:, lg:, xl:)
- Ultra-wide support up to max-width: 1800px
- Sticky positioning used for headers and section titles on desktop (e.g., Services sidebar)
- Common responsive padding pattern: `px-6 md:px-12 lg:px-32`

**shadcn/ui Integration:**
- UI components in [src/components/ui/](src/components/ui/) are from shadcn/ui
- These are built on Radix UI primitives
- Form components use react-hook-form + zod for validation
- Configured via [components.json](components.json)

## TypeScript Configuration

Uses TypeScript 5.9.3 with project references:
- [tsconfig.json](tsconfig.json) - Root config with path aliases and project references
- [tsconfig.app.json](tsconfig.app.json) - App source code (strict mode enabled)
- [tsconfig.node.json](tsconfig.node.json) - Build tooling (Vite config)

## Current State

The site is in active development with recent additions including:
- Theme toggle implementation (ThemeToggle component)
- Dark/light mode styling across all sections
- FAQ section with accordion UI
- Contact form with validation
- All primary sections implemented: Hero, Stats, TrustedLogos, Services, Facilities, Partnership, About, Faq, and Contact
