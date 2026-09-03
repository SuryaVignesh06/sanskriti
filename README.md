# SANSKRITI - Cultural Travel & Living Heritage Platform

A modern, full-featured web application built with React, TypeScript, and Tailwind CSS following the SANSKRITI Master UI/UX Specification.

## Features

- **Astro & React Framework** - Modern static site generator with server-side rendering and client-side hydration
- **React Integration** - Full React support with JSX/TSX components
- **TypeScript** - 100% type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework with Bebas Neue display typography and Poppins body copy
- **Strict Zero-Emoji Identity** - Built exclusively with clean Lucide iconography
- **All 28 Indian States & 8 UTs** - Interactive state culture discovery engine
- **Interactive Cultural Quizzes** - Knowledge challenges with badges, timers, and score certificates
- **Authentic Experiences Marketplace** - Physical experiences and live virtual learning hosted by verified Cultural Ambassadors
- **Responsive Design** - Mobile-first responsive grid layout (12-column grid)

## Tech Stack

- **Framework**: Astro 5.8.0
- **Frontend**: React 18.3.0
- **Styling**: Tailwind CSS 3.4.14
- **Typography**: Bebas Neue & Poppins (Google Fonts)
- **Language**: TypeScript 5.8.3
- **UI Components**: Radix UI + Lucide React
- **State Management**: Zustand, Nanostores
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

The development server will start and you can view your site at `http://localhost:4321`.

## Project Structure

```
Sansrikiti/
├── src/
│   ├── components/          # React components
│   │   ├── pages/          # Full page components (Home, Explore, States, StateCulture, Quizzes, QuizDetail, etc.)
│   │   ├── ui/             # Reusable UI components & modals
│   │   └── Layout.tsx      # Global layout wrapper
│   ├── lib/                # Utility functions & sanskritiData.ts mock database
│   ├── pages/              # Astro routing
│   └── styles/             # Global CSS and font definitions
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with Astro
- `npm run test:run` - Run unit tests

## Responsive Design

The application is built with a mobile-first approach including:

- 12-column desktop grid (1440px max width)
- Reflowed tablet layouts
- Touch-optimized mobile navigation & bottom booking actions
- Accessible keyboard focus and high contrast text ratios

---

Built for preserving and experiencing Indian living cultural heritage.

