# Westside Carnival — React + Vite + TypeScript

Official hospitality & accommodation website for Westside Carnival, Takoradi, Ghana.

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — build tool & dev server
- **TypeScript** — type safety
- **React Router v6** — client-side routing

## Project Structure

```
src/
├── assets/          # Images (parade, costume, drums, etc.)
├── components/      # Shared UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── WaFab.tsx
│   ├── HeroSlider.tsx
│   ├── CountdownBar.tsx
│   ├── EventBand.tsx
│   ├── EventCard.tsx
│   ├── PackageCard.tsx
│   ├── CtaBand.tsx
│   └── SectionHeader.tsx
├── data/
│   └── events.ts    # All carnival data, packages, events
├── hooks/
│   ├── useCountdown.ts
│   └── useSlider.ts
├── lib/
│   └── utils.ts
└── pages/
    ├── Home.tsx
    ├── Events.tsx
    ├── Gallery.tsx
    ├── Accommodation.tsx
    ├── Booking.tsx
    ├── About.tsx
    └── Contact.tsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to Cloudflare Pages

1. Push to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect your GitHub repo
4. Set build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy!

## Customisation

Update `src/data/events.ts` to change:
- Event dates and details
- Package names, features and prices
- WhatsApp number (`WHATSAPP_NUMBER`)
- Carnival date for countdown (`CARNIVAL_DATE`)

Replace images in `src/assets/` with new photos as they come in.
