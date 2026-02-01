# Career Compass: React → Next.js Migration Plan

## 📋 Current State Analysis

### Project Overview
- **Framework**: React.js (with Vite)
- **UI Component Library**: shadcn/ui (with Radix UI)
- **Styling**: Tailwind CSS
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form
- **Routing**: React Router DOM
- **Testing**: Vitest

### Current Architecture

#### Pages (7 total)
1. **Candidate Pages**
   - `/` (Index) - Home/Hero page with features and stats
   - `/careers` - Jobs listing page
   - `/careers/:jobId` - Job details page
   - `/apply/:jobId` - Job application form
   - `/my-applications` - User applications history

2. **Admin Pages**
   - `/admin/login` - Admin login page
   - `/admin/dashboard` - Admin dashboard with stats
   - `/admin/jobs` - Jobs management
   - `/admin/applications` - Applications management
   - `/admin/interviews` - Interviews scheduling
   - `/admin/offers` - Offers management
   - `/admin/employees` - Employees directory

#### Components Structure
- **Layout**: Navbar, Footer, PageContainer
- **UI Components**: 30+ shadcn/ui components
- **Custom Components**: NavLink, StatsCard, JobCard, PipelineStepper, StatusBadge
- **Hooks**: use-mobile, use-toast

#### Data & Services
- Mock data with TypeScript interfaces
- React Query for data fetching
- No real API integration (uses mock data)

---

## 🎯 Migration Strategy

### Phase 1: Project Setup
1. Create new Next.js project with TypeScript
2. Install all required dependencies
3. Configure Tailwind CSS
4. Set up path aliases (@/*)
5. Configure ESLint and Prettier

### Phase 2: Core Configuration
1. Copy and adapt Tailwind CSS config
2. Copy and adapt TypeScript config
3. Set up global styles (index.css, App.css)
4. Configure UI provider (TooltipProvider, QueryClientProvider, Toaster)

### Phase 3: Component Migration
1. Copy all UI components (shadcn/ui - no changes needed)
2. Copy all custom components (Layout, features, etc.)
3. Copy all hooks
4. Copy utility functions
5. Copy mock data and interfaces

### Phase 4: Pages Migration
1. Convert React Router routes to Next.js file-based routing
2. Migrate all candidate pages to `app/(candidate)/*` directory
3. Migrate all admin pages to `app/admin/*` directory
4. Handle dynamic routes with `[id]` syntax
5. Remove React Router dependencies

### Phase 5: Layout & Navigation
1. Create root layout with providers
2. Create candidate layout with Navbar/Footer
3. Create admin layout
4. Update navigation links from `<Link>` to Next.js `<Link>`

### Phase 6: Testing & Optimization
1. Verify all routes work
2. Test responsive design
3. Optimize images
4. Check build output

---

## 📁 New Next.js Directory Structure

```
├── app/
│   ├── layout.tsx (Root Layout with Providers)
│   ├── page.tsx (Home page - /)
│   ├── not-found.tsx (404 page)
│   ├── (candidate)/
│   │   ├── layout.tsx (Candidate Layout with Navbar/Footer)
│   │   ├── careers/
│   │   │   ├── page.tsx (Careers listing)
│   │   │   └── [jobId]/
│   │   │       ├── page.tsx (Job details)
│   │   │       └── apply/
│   │   │           └── page.tsx (Job application)
│   │   └── my-applications/
│   │       └── page.tsx
│   └── admin/
│       ├── login/
│       │   └── page.tsx
│       ├── dashboard/
│       │   └── page.tsx
│       ├── jobs/
│       │   └── page.tsx
│       ├── applications/
│       │   └── page.tsx
│       ├── interviews/
│       │   └── page.tsx
│       ├── offers/
│       │   └── page.tsx
│       └── employees/
│           └── page.tsx
├── components/
│   ├── (same structure as current)
├── lib/
│   ├── (utilities)
├── data/
│   ├── mockData.ts
├── hooks/
│   ├── (custom hooks)
├── public/
│   ├── (static files)
└── ... (config files)
```

---

## 🔄 Key Changes

### Routing Migration

**Before (React Router):**
```tsx
<Route path="/careers/:jobId" element={<JobDetails />} />
```

**After (Next.js):**
```
app/(candidate)/careers/[jobId]/page.tsx
```

### Import Changes
- `<BrowserRouter>` → Removed (built-in)
- `<Routes>` → Removed (file-based routing)
- `<Link from="react-router-dom">` → `<Link from="next/link">`
- `useLocation()` → `usePathname()` (from next/navigation)
- `useParams()` → `useParams()` (from next/navigation)

### Provider Setup
```tsx
// Old: Manually wrapped in App.tsx
// New: Root layout.tsx handles all providers
<QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster />
    <Sonner />
    {children}
  </TooltipProvider>
</QueryClientProvider>
```

### Layout Handling
- Navbar/Footer shown conditionally based on route
- Next.js layouts for better organization
- Group routes with `(candidate)` and `(admin)` groups

---

## 📦 Dependencies

### Keep (Compatible)
- @radix-ui/* (all UI primitives)
- @hookform/resolvers
- @tanstack/react-query
- tailwindcss
- date-fns
- embla-carousel-react
- lucide-react
- sonner
- clsx
- class-variance-authority
- cmdk
- input-otp

### Replace
- ~~react-router-dom~~ → Next.js built-in routing
- ~~vite~~ → Next.js
- ~~@vitejs/* plugins~~ → Next.js

### Add
- next (^15.0.0)
- typescript (latest)

---

## ✅ Benefits of Migration

1. **Built-in Routing**: No need for React Router
2. **Server Components**: Improved performance with RSC
3. **Image Optimization**: Next.js Image component
4. **SEO**: Better metadata and SSR support
5. **API Routes**: Built-in backend (optional)
6. **Incremental Static Regeneration**: Better caching
7. **Vercel Integration**: Easy deployment
8. **Better Dev Experience**: Faster refresh, HMR

---

## ⚠️ Considerations

1. **Client Components**: Pages with hooks/state need `'use client'` directive
2. **No SSR Required**: Since using mock data, can be SSG or CSR
3. **Environment Variables**: NEXT_PUBLIC_* for client-side access
4. **Build Output**: Smaller bundle size than Vite build

---

## 🚀 Implementation Steps

1. Create new Next.js project
2. Copy components, hooks, lib, data, public folders
3. Create layout structure
4. Migrate pages one by one
5. Test all routes
6. Optimize and deploy
