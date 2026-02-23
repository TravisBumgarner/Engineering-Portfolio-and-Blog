# Marketing Landing Pages Redesign

## Overview

Redesign the three marketing landing pages (Candlelight, Classifieds, Ideas) to create a cohesive, minimal portfolio-style experience. All three pages will share a consistent template structure while having unique content and subtle product-specific styling.

## Design Philosophy

- **Minimal Portfolio Style**: Clean, typography-focused design that matches the existing portfolio aesthetic
- **Consistent Template**: Same layout structure across all three pages
- **Content Hierarchy**: Clear visual hierarchy with focused CTAs
- **Mobile-First**: Responsive design that works well on all screen sizes

## Current State Issues

### Candlelight
- Very sparse content with minimal visual interest
- No screenshots or visual demonstration of the game
- Plain text feature list without engaging presentation
- Duplicate Steam Store links (top and bottom)

### Classifieds
- Dense, wall-of-text presentation
- Inconsistent image layout (all images stacked vertically)
- Feature sections blend together without clear separation
- Contact form buried at the bottom

### Ideas
- Long page with collapsible sections that hide important content
- Privacy policy and release notes take up significant space
- Mobile app screenshots shown at fixed heights causing layout issues
- Similar wall-of-text issues as Classifieds

## Proposed Template Structure

### Section 1: Hero
- Large product icon/logo (centered, 100x100)
- Product title (h1, centered)
- One-line tagline (centered)
- Primary CTA button (centered)

### Section 2: Value Proposition
- 2-3 sentence description of what the product does and who it's for
- Clean, readable typography with proper line height

### Section 3: Features Grid
- 2-3 key features displayed in a grid layout
- Each feature has:
  - Icon or small illustration (optional)
  - Feature title (h4)
  - Brief description (1-2 sentences)
- For mobile apps/desktop apps: Include a screenshot
- For games: Include gameplay screenshot or GIF

### Section 4: Why [Product]?
- Bullet list of 3-5 key benefits
- Emphasize what makes this product unique
- Privacy/security messaging where applicable

### Section 5: Get Started
- Platform availability with download buttons
- Clear indication of pricing (free, paid, etc.)

### Section 6: Contact (Optional)
- Simple contact form for feedback
- Or link to GitHub issues

## Component Requirements

### New Shared Components

#### MarketingHero
A new hero component for landing pages:
- Props: `icon`, `title`, `tagline`, `ctaLabel`, `ctaHref`, `ctaIcon?`
- Centered layout with proper spacing
- Responsive sizing

#### FeatureGrid
A grid layout for feature cards:
- Props: `features: Array<{ title, description, image? }>`
- Responsive: 1 column on mobile, 2-3 columns on desktop
- Optional image support per feature

#### BenefitsList
A styled list for benefits/highlights:
- Props: `items: string[]`
- Clean bullet styling consistent with portfolio design

#### DownloadSection
Platform-specific download buttons:
- Props: `platforms: Array<{ platform, label, href, available }>`
- Shows "Coming soon" for unavailable platforms

### Enhanced Existing Components

#### MarketingHeader
- Keep existing but simplify - this will be used in the hero
- Consider making icon size configurable

## Page-Specific Content

### Candlelight (Game)
- **Tagline**: "A Puzzle Game of Shape, Color, and Alchemy"
- **Hero Image**: Game screenshot or gameplay preview
- **Features**:
  1. Puzzle Mode - 50 levels across 9 worlds
  2. Free Play - Relaxing creative mode
  3. Daily Challenge - Compete with friends
- **Platform**: Steam (PC/Mac)
- **Remove**: Tutorial section (standard game feature, not marketing-worthy)

### Classifieds (Desktop App)
- **Tagline**: "AI-powered job search automation"
- **Hero Image**: Main app screenshot
- **Features**:
  1. AI Matching - Custom prompts to find relevant jobs
  2. Auto-Scanning - Scrape multiple career pages at once
  3. Application Tracking - Organize your job search
- **Platform**: macOS (Windows/Linux coming soon)
- **Emphasize**: Privacy-first, open source, no subscriptions
- **Keep**: YouTube tutorial (move to "Getting Started" section)

### Ideas (Mobile App)
- **Tagline**: "Clear your mind and make room for your next big idea"
- **Hero Image**: App screenshot (ideate screen)
- **Features**:
  1. Quick Capture - Record ideas instantly
  2. Organization - Categories and date filtering
  3. Privacy First - No account, all data local
- **Platform**: iOS (Android internal testing)
- **Move**: Privacy policy and release notes to separate pages or footer links

## Technical Approach

### File Structure
```
frontend/src/
  pages/Marketing/
    Candlelight.tsx (updated)
    Classifieds.tsx (updated)
    Ideas.tsx (updated)
    components/
      MarketingHero.tsx (new)
      FeatureGrid.tsx (new)
      BenefitsList.tsx (new)
      DownloadSection.tsx (new)
```

### Styling Approach
- Use existing SPACING and PALETTE constants
- Add any new spacing/typography values to consts.ts if needed
- Leverage MUI's responsive props (xs, md breakpoints)
- Keep styles consistent with portfolio pages

## Success Criteria

1. All three pages follow the same visual template
2. Pages are significantly shorter and more scannable
3. CTAs are prominent and clear
4. Mobile experience is polished
5. Page load performance maintained (lazy-loaded images)
6. Existing functionality preserved (contact forms, links work)

## Out of Scope

- New marketing assets (screenshots, icons)
- SEO optimization
- Analytics integration
- A/B testing infrastructure
- New product pages (Todo Today)
