# SupTicket

A modern, responsive support ticket management system built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes with system preference detection
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Navigation**: Clean header navigation with Products, About, and Contact pages

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) font family

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd supticket
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
supticket/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── products/         # Products page
├── components/            # Reusable components
│   ├── header.tsx        # Navigation header with dark mode toggle
│   ├── footer.tsx        # Site footer
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Dark Mode

The application includes a comprehensive dark mode implementation:

- **Theme Toggle**: Click the sun/moon icon in the header to switch themes
- **Persistence**: Theme preference is saved in localStorage
- **System Preference**: Respects user's system color scheme on first visit
- **Smooth Transitions**: All theme changes are animated

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License.

## Deployment

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

For other deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
