# Rawty Shawty

A modern food/restaurant website built with **Vue 3** and **Vite**. Features a visual menu browser, an image slider showcasing daily deals, and a live shopping cart for order placement.

## Tech Stack

- **Framework:** Vue 3 (Options API + `<script setup>` SFCs)
- **Bundler:** Vite 7
- **Routing:** Vue Router 4 (hash-less history)
- **Icons:** unplugin-icons + Iconify (Fa6Brands), Google Material Icons (CDN)
- **UI Framework (unused):** MUI v7, Emotion — installed but not integrated

## Routes

| Path       | Component | Description                    |
|------------|-----------|--------------------------------|
| `/`        | Home      | Hero slider + full menu        |
| `/order`   | Order     | Menu with live cart            |
| `/about`   | About     | About the project & developer  |
| `/contact` | Contact   | Address, phone, email, hours   |

## Project Structure

```
src/
├── App.vue              # Layout shell (Header + router-view + Footer)
├── main.js              # App entry point
├── style.css            # Global styles (currently empty)
├── router/
│   └── index.js         # Route definitions & scroll behavior
└── components/
    ├── Header.vue       # Sticky nav with scroll-to-menu logic
    ├── Home.vue         # Composes Cards + Menu
    ├── Cards.vue        # Auto-rotating image slider (8 deals, 7s interval)
    ├── Menu.vue         # Full restaurant menu (8 categories, 32 items)
    ├── Order.vue        # Duplicate menu + shopping cart
    ├── About.vue        # Developer info & links
    ├── Contact.vue      # Business contact details
    └── Footer.vue       # Logo, social icons, link columns
```

## Getting Started

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Known Issues

- Cart resets on navigation (no persistence)
- No backend or order submission
- MUI/Emotion/MDI dependencies are unused
- Cart has no quantity controls
- Page title still defaults to "Vite + Vue"
