# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React SPA for Koopman Schilderwerken, a Dutch painting and glass installation company.

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6 with SPA configuration
- **Icons**: Font Awesome + Lucide React
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query for server state
- **Email**: EmailJS for contact forms

### Project Structure
- **Pages**: `src/pages/` - Main route components (Index, OverOns, Werkzaamheden, Projecten, Offerte, NotFound)
- **Components**: `src/components/` - Reusable UI components (Header, Hero, Footer, Services, etc.)
- **UI Components**: `src/components/ui/` - shadcn/ui component library
- **Utilities**: `src/lib/utils.ts` - Helper functions (mainly `cn()` for className merging)
- **Assets**: `src/assets/` - Images and Font Awesome files
- **Hooks**: `src/hooks/` - Custom React hooks

### Routing Configuration
- Uses React Router with SPA routing
- 404 handling via NotFound component
- History API fallback configured in Vite for SPA routing
- `public/_redirects` file for Netlify-style hosting
- `public/404.html` for static hosting fallback

### Key Components
- **Header**: Fixed navigation with mobile hamburger menu, active route highlighting
- **Hero**: Landing page hero section
- **Services**: Service showcase with images
- **FloatingContactButtons**: Floating contact buttons for phone/email
- **BeforeAfterSlider**: Image comparison slider for project showcases

### Styling System
- Uses Tailwind CSS with custom design system
- shadcn/ui components with consistent theming
- CSS custom properties for colors (HSL-based)
- Responsive design with mobile-first approach
- Custom header background color via CSS variables

### Development Notes
- Vite alias `@` points to `src/` directory
- ESLint configured for React + TypeScript
- Component tagging enabled in development mode (lovable-tagger)
- Font Awesome CSS included globally in main.tsx
- Uses React 18's createRoot API

### Deployment
- GitHub Actions workflow for SFTP deployment
- Builds to `dist/` directory
- Deploys automatically on pushes to main/master branch
- Manual deployment trigger available via workflow_dispatch
- Deployment configuration in `.github/workflows/sftp-deploy.yml`

### Content Language
All content is in Dutch (Netherlands). When adding new content or components, maintain Dutch language consistency for text, navigation, and user-facing elements.

### Asset Management
- Logo stored as `src/assets/Logo1.png`
- Service images in assets directory
- Font Awesome included as local assets for offline support

### Form Handling
- Uses React Hook Form for form state management
- Zod for form validation schemas
- EmailJS integration for contact form submissions