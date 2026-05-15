# Requirements Document

## Introduction

This feature upgrades the existing Vue 3 portfolio site (deployed on Cloudflare Pages) with modern animations, micro-interactions, and new project entries. The goal is to make the site feel "more alive" without altering the established design system — the color palette (`#FF7EB9` pink, `#f6f6f6`/`#fff` backgrounds, `#141414` text), typography (Montserrat, Dawning of a New Day, Impact), layout structure, or component hierarchy. All animations must be GPU-accelerated, respect the user's motion preferences, and maintain 60 fps on modern devices.

The site currently uses Vue 3 + Vite + Vue Router 4. Pages use a `Frame` wrapper component and a fixed `BottomBar` navigation. Page-entry animations already exist as Vue `<transition name="fade-up">` wrappers with a 120 ms `onMounted` delay. This feature extends and enriches that foundation.

## Glossary

- **Animation_System**: The set of composables, CSS classes, and configuration values that govern all motion on the site.
- **Hero_Section**: The `Home.vue` page containing the large "PORTFOLIO" text, script name, and portfolio image.
- **Projects_Page**: The `Projects.vue` page containing the project cards grid and image gallery modal.
- **Project_Card**: A single `<div class="project-card">` element within the projects grid.
- **Project_Entry**: A data record in the `projectImages` map (and corresponding card in the grid) representing one portfolio project.
- **Scroll_Reveal**: An animation that triggers when an element enters the viewport during scrolling.
- **Stagger**: A sequential delay applied to a group of elements so they animate in one after another rather than all at once.
- **Micro_Interaction**: A small, focused animation on an interactive element (button, link, tag) that provides tactile feedback.
- **Reduced_Motion**: The OS/browser accessibility setting `prefers-reduced-motion: reduce`, indicating the user prefers minimal animation.
- **GPU_Acceleration**: Restricting animated CSS properties to `transform` and `opacity` so the browser can offload compositing to the GPU.
- **Composable**: A Vue 3 Composition API function (e.g., `useScrollReveal`) that encapsulates reusable reactive logic.
- **Skill_Tag**: A styled inline element representing a technology or skill, used within project cards or the About page.
- **CTA_Button**: A call-to-action button or anchor link (e.g., "View Code", "Live Demo", "GitHub") rendered inside `.project-links` or `.links`.
- **Page_Transition**: The Vue `<transition>` animation applied by `App.vue` when navigating between routes.

---

## Requirements

### Requirement 1: Animation Library Integration

**User Story:** As a developer, I want a single, well-scoped animation dependency added to the project, so that I can implement declarative scroll and hover animations without writing low-level IntersectionObserver or GSAP boilerplate from scratch.

#### Acceptance Criteria

1. THE Animation_System SHALL use `motion-v` (the Vue-native Motion One wrapper) as its animation library, installed as a production dependency.
2. WHEN `motion-v` is installed, THE Animation_System SHALL not introduce any peer-dependency conflicts with the existing `vue@^3.5.18` or `vue-router@^4.5.1` packages.
3. THE Animation_System SHALL expose animation configuration values (duration, easing, stagger delay) as named constants in a single `src/animations/config.js` file so that all animation parameters are configurable from one location.
4. WHERE `prefers-reduced-motion: reduce` is active, THE Animation_System SHALL disable or minimise all motion effects site-wide, falling back to instant opacity transitions only.

---

### Requirement 2: Hero Section Entrance Animation

**User Story:** As a visitor, I want the hero page to greet me with a polished entrance animation, so that the site immediately feels dynamic and professional.

#### Acceptance Criteria

1. WHEN the Hero_Section mounts, THE Animation_System SHALL animate the hero name script (`hero__script`) with a fade-in combined with a vertical slide from +30 px to 0, completing within 600 ms.
2. WHEN the Hero_Section mounts, THE Animation_System SHALL animate the "PORTFOLIO" block text (`hero__block`) with a fade-in combined with a vertical slide from +40 px to 0, starting 150 ms after the script animation begins.
3. WHEN the Hero_Section mounts, THE Animation_System SHALL animate the portfolio image (`hero__img`) with a fade-in combined with a vertical slide from +20 px to 0, starting 300 ms after the script animation begins.
4. WHEN the Hero_Section mounts, THE Animation_System SHALL animate the description text (`hero__desc`) with a fade-in, starting 450 ms after the script animation begins.
5. WHEN the Hero_Section mounts, THE Animation_System SHALL animate the header row (`hero__row`) with a fade-in from opacity 0 to 1, completing within 400 ms.
6. THE Animation_System SHALL use only `transform` and `opacity` CSS properties for all Hero_Section entrance animations to ensure GPU_Acceleration.
7. WHERE `prefers-reduced-motion: reduce` is active, THE Animation_System SHALL render all Hero_Section elements at their final visible state immediately, with no motion.

---

### Requirement 3: Project Card Scroll-Reveal with Stagger

**User Story:** As a visitor scrolling through the Projects page, I want project cards to animate into view one after another, so that the page feels engaging and the content is easy to scan.

#### Acceptance Criteria

1. WHEN a Project_Card enters the viewport, THE Animation_System SHALL animate it with a fade-in combined with a vertical slide from +30 px to 0.
2. THE Animation_System SHALL apply a Stagger delay of 80 ms between consecutive Project_Cards so that cards reveal sequentially rather than simultaneously.
3. WHEN a Project_Card has already been revealed, THE Animation_System SHALL not re-trigger the reveal animation if the user scrolls back up and then down again (animate-once behaviour).
4. THE Animation_System SHALL use an IntersectionObserver threshold of 0.15 (15 % of the card visible) to trigger the Scroll_Reveal.
5. THE Animation_System SHALL implement Scroll_Reveal logic in a reusable `useScrollReveal` Composable located at `src/composables/useScrollReveal.js`.
6. WHERE `prefers-reduced-motion: reduce` is active, THE Animation_System SHALL display all Project_Cards at full opacity and in their final position without any scroll-triggered motion.

---

### Requirement 4: Hover Micro-Interactions on Interactive Elements

**User Story:** As a visitor, I want buttons and links to respond visually when I hover over them, so that the interface feels tactile and interactive.

#### Acceptance Criteria

1. WHEN a CTA_Button is hovered, THE Animation_System SHALL apply a vertical lift of `translateY(-3px)` combined with an enhanced box-shadow transition completing within 200 ms.
2. WHEN a CTA_Button hover ends, THE Animation_System SHALL return the element to its original position within 200 ms.
3. WHEN a Skill_Tag is hovered, THE Animation_System SHALL apply a scale of `1.05` and a pink glow (`box-shadow: 0 4px 12px rgba(255,126,185,0.35)`) completing within 180 ms.
4. WHEN the BottomBar navigation item is hovered, THE Animation_System SHALL preserve the existing background-color and icon-size transitions already defined in `BottomBar.vue` without modification.
5. WHEN the profile image in `About.vue` is hovered, THE Animation_System SHALL preserve the existing `translateY(-5px)` and box-shadow transition already defined in `About.vue` without modification.
6. THE Animation_System SHALL implement all Micro_Interaction hover effects using CSS transitions restricted to `transform`, `opacity`, and `box-shadow` properties only.
7. WHERE `prefers-reduced-motion: reduce` is active, THE Animation_System SHALL suppress `transform` transitions on hover while retaining color/background transitions.

---

### Requirement 5: Smooth Scroll Behaviour for Anchor Navigation

**User Story:** As a visitor, I want anchor links to scroll smoothly to their targets, so that in-page navigation feels fluid rather than jarring.

#### Acceptance Criteria

1. THE Animation_System SHALL set `scroll-behavior: smooth` on the `html` element in `global.css` so that all native anchor navigation is smooth by default.
2. WHEN a Vue Router navigation occurs between routes, THE Animation_System SHALL preserve the existing `slide-fade` page transition defined in `App.vue` without modification.
3. WHERE `prefers-reduced-motion: reduce` is active, THE Animation_System SHALL override `scroll-behavior` to `auto` so that scrolling is instant.

---

### Requirement 6: New Project Entries

**User Story:** As a visitor, I want to see the developer's latest projects listed on the Projects page, so that I have an up-to-date view of their work.

#### Acceptance Criteria

1. THE Projects_Page SHALL include a minimum of 2 new Project_Entry records added to the `projectImages` data map in `Projects.vue`.
2. WHEN a new Project_Entry is added, THE Projects_Page SHALL render a corresponding Project_Card in the `.projects-grid` with a title, description, technology context, and at least one action link (live demo, code repository, or prototype link).
3. THE Projects_Page SHALL maintain the existing card visual style (`background: #f8f9fa`, `border-radius: 12px`, `border: 2px solid transparent`, hover `border-color: #FF7EB9`) for all new Project_Cards.
4. IF a new Project_Entry has associated images in `public/images/`, THEN THE Projects_Page SHALL include a "View Images" gallery button that opens the existing image gallery modal for that project.
5. IF a new Project_Entry has no associated images, THEN THE Projects_Page SHALL omit the "View Images" button and render only the available action links.
6. THE Projects_Page SHALL list all Project_Cards (existing and new) in a consistent order: featured web/app projects first, followed by design prototypes, followed by hardware/academic projects.

---

### Requirement 7: Accessibility and Performance Standards

**User Story:** As a user with accessibility needs or on a low-powered device, I want the site to remain fully usable and performant after animations are added, so that the enhancements do not create barriers.

#### Acceptance Criteria

1. THE Animation_System SHALL restrict all animated CSS properties to `transform` and `opacity` to ensure GPU_Acceleration and avoid layout thrashing.
2. THE Animation_System SHALL not add `will-change` declarations to more than 6 elements simultaneously to avoid excessive GPU memory consumption.
3. WHEN the site is built with `vite build`, THE Animation_System SHALL not increase the total JavaScript bundle size by more than 30 KB (gzipped) compared to the pre-feature baseline.
4. THE Animation_System SHALL not interfere with keyboard navigation, focus order, or ARIA attributes on any interactive element.
5. THE Animation_System SHALL not apply animations to elements that are `aria-hidden="true"` or purely decorative.
6. WHEN animations are running, THE Animation_System SHALL not block the main thread for more than 50 ms at any point, measured by the browser's Long Tasks API.
7. WHERE `prefers-reduced-motion: reduce` is active, THE Animation_System SHALL pass a WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions) check by ensuring no essential motion remains.
