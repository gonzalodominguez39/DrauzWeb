# AGENTS.md - Coding Guidelines for Drauz Real Estate Platform

## Project Overview
This is a Next.js 16 real estate demo application built with React 19, TypeScript 5, and Tailwind CSS 4. It follows **Screaming Architecture** principles with a feature-based folder structure.

## Build/Lint/Test Commands

### Development
- `pnpm dev` - Start development server on localhost:3000
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Code Quality
- `pnpm lint` - Run ESLint (uses Next.js config with core web vitals)
- `pnpm exec tsc --noEmit` - Type check without emitting files

### Testing
- **No test framework currently configured** (planned for future implementation)
- When tests are added, use: `pnpm test` (Jest/Vitest expected based on Next.js conventions)

### Single Test Execution
- **Not yet available** - implement testing framework first (Jest + React Testing Library recommended)

## Code Style Guidelines

### TypeScript Configuration
- **Strict mode enabled** - all TypeScript strict checks active
- **Target**: ES2017
- **JSX**: react-jsx (automatic runtime)
- **Path aliases**:
  - `@/*` → `./src/*`
  - `@/properties/*` → `./src/features/properties/*`

### Imports and Modules
- Use absolute imports with path aliases: `import { cn } from "@/lib/utils"`
- Group imports: React/Next.js → third-party → internal components → types/utils
- Use named exports over default exports
- Avoid relative imports beyond sibling files

### Naming Conventions
- **Components**: PascalCase (`PropertyCard`, `SearchFilters`)
- **Files**: kebab-case for components (`property-card.tsx`), camelCase for utilities (`useAuthStore.ts`)
- **Hooks**: camelCase with `use` prefix (`useLoginAuth`, `useHeaderStyle`)
- **Types**: PascalCase with descriptive names (`Property`, `PropertyBadge`)
- **Constants**: SCREAMING_SNAKE_CASE in constants files
- **Functions**: camelCase (`handleSubmit`, `formatPrice`)

### Component Patterns
- Use functional components with TypeScript
- Prefer named exports over default exports
- Use `React.ComponentProps<>` for extending HTML elements
- Implement proper TypeScript interfaces for props
- Use data attributes for styling: `data-slot="button"`, `data-variant={variant}`

### UI Components (shadcn/ui)
- Use `class-variance-authority` (CVA) for component variants
- Follow the established pattern in `src/components/ui/button.tsx`
- Use `cn()` utility for conditional class merging
- Implement proper focus states and accessibility attributes
- Use Radix UI primitives as base components

### Styling
- **Tailwind CSS 4** with CSS variables for theming
- Use the `cn()` utility from `@/lib/utils` for class merging
- Follow mobile-first responsive design
- Use Tailwind's arbitrary values sparingly
- Dark mode support with CSS variables

### State Management
- **Zustand** for global state (auth, cart, favorites)
- **TanStack Query** for server state and API calls
- Use mutations for data changes, queries for data fetching
- Implement proper error handling and loading states

### Error Handling
- Use `sonner` for toast notifications
- Handle errors in React Query mutations with `onError` callbacks
- Provide user-friendly error messages in Spanish
- Log errors to console for debugging
- Use try-catch blocks for synchronous operations

### Authentication
- **Supabase** for authentication
- Store auth state in Zustand store
- Redirect to `/home` after successful login
- Handle authentication errors gracefully

### API Integration
- Use Axios for HTTP requests (configured in `@/lib/axios.ts`)
- API routes in `src/app/api/` following Next.js App Router conventions
- Repository pattern for data access (`auth.repository.ts`, `user.repository.ts`)
- Service layer for business logic (`auth.service.ts`, `user.service.ts`)
- DTOs for API request/response types

### File Structure (Screaming Architecture)
```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── (pages)/           # Page components
│   └── globals.css        # Global styles
├── features/              # Feature-based modules
│   ├── properties/        # Property domain
│   ├── search/           # Search domain
│   ├── login/            # Authentication domain
│   └── contact/          # Contact domain
├── shared/               # Shared components and utilities
│   ├── components/       # Reusable UI components
│   ├── stores/          # Global state stores
│   ├── types/           # Shared type definitions
│   └── utils/           # Utility functions
├── components/ui/        # shadcn/ui components
├── lib/                  # Core utilities and configs
└── config/              # App configuration
```

### Feature Organization
Each feature contains:
- `components/` - Feature-specific components
- `hooks/` - Custom hooks
- `types/` - TypeScript interfaces
- `services/` - API service functions
- `store/` - Feature-specific state (if needed)
- `data/` - Mock data and constants
- `utils/` - Feature-specific utilities

### Form Handling
- Use controlled components with React state
- Implement proper validation
- Handle form submission with React Query mutations
- Provide loading states during submission
- Reset forms after successful submission

### Data Fetching
- Use TanStack Query for all API calls
- Implement proper loading and error states
- Use query keys for cache management
- Prefetch data when possible
- Handle stale data appropriately

### Accessibility
- Use semantic HTML elements
- Implement proper ARIA labels where needed
- Ensure keyboard navigation works
- Provide focus indicators
- Use proper heading hierarchy

### Performance
- Use Next.js Image component for images
- Implement proper code splitting
- Lazy load components when appropriate
- Optimize bundle size
- Use React.memo for expensive components

### Git Workflow
- Use conventional commits
- Branch naming: `feature/`, `fix/`, `refactor/`
- Pull requests required for all changes
- Code review mandatory

## Cursor Rules
No Cursor rules (.cursor/rules/ or .cursorrules) found in this repository.

## Copilot Instructions
No Copilot instructions (.github/copilot-instructions.md) found in this repository.

## Future Improvements
- Add testing framework (Jest + React Testing Library)
- Implement CI/CD pipeline
- Add Storybook for component documentation
- Set up automated linting and formatting
- Add end-to-end testing with Playwright</content>
<parameter name="filePath">AGENTS.md