<p align="center">
  <img src="https://raw.githubusercontent.com/GilbertoScript/backtoblack/8d2d8da4be0439f3c78de1fb919c664f1ee71f00/logo.png" alt="Back to Black Logo" width="120"/>
</p>

<h1 align="center">Back to Black — Official Site</h1>

<p align="center">
  <em>The only true dark theme you were looking for</em>
</p>

<p align="center">
  <a href="https://backtoblack.vercel.app/">
    <img src="https://img.shields.io/badge/website-backtoblack.vercel.app-black?style=flat-square" alt="Website">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=backtoblack.backtoblack">
    <img src="https://img.shields.io/badge/VS%20Code-Marketplace-black?style=flat-square" alt="Marketplace">
  </a>
  <a href="https://github.com/GilbertoScript/backtoblack/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-black?style=flat-square" alt="License">
  </a>
</p>

<br />

## 📖 About

Official marketing site for the **Back to Black** Visual Studio Code theme, built with Next.js 16, React 19, and Tailwind CSS 4.

A single-page site showcasing the Back to Black VSCode theme, featuring:

- **Hero** — headline, CTA buttons linking to the Marketplace and GitHub
- **Features** — six theme highlights (true black, reduced eye strain, consistent interface, discrete guides, smart line numbers, performance)
- **Preview** — visual demonstration of the theme in action
- **Color Palette** — five theme colors with hex values and descriptions
- **History** — the story behind the project
- **Installation** — step-by-step guide to install from the VS Code Marketplace

The site supports two languages (English and Brazilian Portuguese) via `next-intl`.

<br />

## 🛠️ Tech Stack

- **Next.js 16** — App Router, i18n routing
- **React 19.2** — UI library
- **TypeScript 6** — static typing
- **Tailwind CSS 4** — utility-first styling
- **next-intl 4** — internationalization (en / pt-BR)
- **Lucide React** — icons
- **Next Font** — Playfair Display + Inter

<br />

## 🚀 Getting Started

```bash
npm install
npm run dev       # development server
npm run build     # production build
npm start         # production server
npm run lint      # lint
```

<br />

## 🏗️ Project Structure

```
backtoblack-site/
├── app/
│   ├── [locale]/
│   │   ├── components/
│   │   │   ├── Header.tsx        # Fixed nav with language switcher
│   │   │   ├── Hero.tsx          # Hero section with CTA
│   │   │   ├── Features.tsx      # 6-card feature grid
│   │   │   ├── Preview.tsx       # Theme preview
│   │   │   ├── ColorPalette.tsx  # Color swatches
│   │   │   ├── History.tsx       # Project story
│   │   │   ├── Installation.tsx  # Install guide
│   │   │   └── Footer.tsx        # Footer
│   │   ├── layout.tsx            # Locale layout with NextIntlClientProvider
│   │   └── page.tsx              # Page entry point
│   └── globals.css               # Global styles
├── messages/
│   ├── en.json                   # English strings
│   └── pt-BR.json                # Brazilian Portuguese strings
├── i18n.ts                       # next-intl config (locales: en, pt-BR)
└── next.config.ts                # Next.js config
```

<br />

## 🎨 Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| Pure Black | `#000000` | Background |
| White 62% | `#ffffff9f` | Body text |
| Pure White | `#ffffff` | Highlighted text |
| Dark Gray | `#22222270` | Borders |
| Subtle White | `#ffffff15` | Guide lines |

### Typography

- **Headings** — Playfair Display (serif)
- **Body** — Inter (300, 400, 500, 600)

### CSS Utilities

- `.btn-primary` — primary CTA button
- `.feature-card` — card with hover effect
- `.section-container` — centered layout (max-width 1200px)
- `.text-gradient` — white gradient text
- `.drop-cap` — first-letter drop cap

<br />

## 🌐 Internationalization

Routes are prefixed by locale: `/` for English, `/pt-BR` for Brazilian Portuguese. The language switcher in the header triggers a full page reload to the new locale path.

<br />

## ☁️ Deploy

Optimized for **Vercel**. Also works on Netlify, AWS Amplify, or any Node.js host.

<br />

## 🔗 Links

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=backtoblack.backtoblack)
- [GitHub — Theme Source](https://github.com/GilbertoScript/backtoblack)

<br />

## 📄 License

MIT © 2025 Back to Black — made with 🖤 by [GilbertoScript](https://github.com/GilbertoScript)
