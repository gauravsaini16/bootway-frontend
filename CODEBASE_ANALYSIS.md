# Codebase Analysis Report

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| Framework | React.js with Vite |
| Language | TypeScript |
| UI Library | shadcn/ui + Radix UI |
| Total Pages | 12 |
| Custom Components | 8 |
| UI Components | 30+ |
| Styling | Tailwind CSS |
| Package Manager | Bun |

---

## 🏗️ Detailed Component Inventory

### Core Layout Components
1. **Navbar** - Header navigation component
2. **Footer** - Footer component
3. **PageContainer** - Wrapper for consistent page layout

### Admin Components
- **StatsCard** - Card component for displaying admin statistics

### Candidate Components
- **JobCard** - Card displaying job listings with details

### Common Components
- **PipelineStepper** - Shows application pipeline stages
- **StatusBadge** - Displays status with appropriate styling

### Custom Hooks
- **use-mobile** - Detects mobile viewport
- **use-toast** - Toast notifications system

### Utility Functions
- **utils.ts** - Common utility functions (likely class name helpers)

---

## 📄 Pages Breakdown

### Candidate User Flows

#### 1. Home Page (Index.tsx)
- Hero section with gradient background
- Features section (4 features with icons)
- Stats display (500+ members, 50+ positions, etc.)
- Call-to-action buttons
- Links to careers page

#### 2. Careers Page
- Displays all job listings
- Job cards with key information
- Filtering/Search capabilities (likely)

#### 3. Job Details Page
- Full job description
- Requirements and responsibilities
- Benefits list
- Apply button/CTA
- Route: `/careers/:jobId`

#### 4. Apply Page
- Application form
- Form validation with React Hook Form
- Resume upload
- Route: `/apply/:jobId`

#### 5. My Applications
- List of user's past applications
- Status tracking
- Application pipeline visibility

### Admin User Flows

#### 1. Admin Login
- Simple login page
- No authentication backend (mock)

#### 2. Admin Dashboard
- Overview statistics
- Multiple stat cards
- Quick action buttons

#### 3. Jobs Management
- List all jobs
- Create/Edit/Delete jobs
- Status management

#### 4. Applications Management
- View all applications
- Change application status
- Manage pipeline

#### 5. Interviews Scheduling
- Schedule interviews
- View interview calendar
- Send meeting links

#### 6. Offers Management
- Create and manage offers
- Track offer status

#### 7. Employees Directory
- View all employees
- Department organization
- Employee details

---

## 🔌 Technology Stack Details

### UI Components (shadcn/ui)
**Inputs & Forms:**
- Form, Input, Textarea, Select, Checkbox, Radio Group, Toggle
- Label, Calendar, Input OTP, Slider, Switch

**Display:**
- Badge, Button, Card, Table, Avatar, Breadcrumb
- Pagination, Progress, Skeleton, Separator

**Dialogs & Menus:**
- Dialog, Alert Dialog, Drawer, Sheet
- Dropdown Menu, Context Menu, Popover
- Hover Card, Navigation Menu, Command

**Containers:**
- Accordion, Tabs, Collapsible, Carousel
- Scroll Area, Aspect Ratio, Sidebar

**Notifications:**
- Toast, Sonner (toast notifications)
- Tooltip

### State Management
- **React Query**: Data fetching and caching
- **React Hook Form**: Form state management
- **Local State**: React useState for UI state

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **CSS-in-JS**: None (pure Tailwind)
- Custom animations and gradients

---

## 📚 Data Models

### Job Interface
```typescript
{
  id: string
  title: string
  department: string
  location: string
  type: "full-time" | "part-time" | "contract" | "internship"
  salary?: string
  postedAt: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  status: "active" | "closed"
}
```

### Application Interface
```typescript
{
  id: string
  jobId: string
  jobTitle: string
  candidateName: string
  email: string
  phone: string
  appliedAt: string
  status: "applied" | "screening" | "shortlisted" | "interview" | "selected" | "rejected"
  resumeUrl?: string
}
```

### Interview Interface
```typescript
{
  id: string
  applicationId: string
  candidateName: string
  jobTitle: string
  date: string
  time: string
  meetLink: string
  interviewer: string
  status: "scheduled" | "completed" | "cancelled"
}
```

### Employee Interface
```typescript
{
  id: string
  name: string
  email: string
  department: string
  position: string
  joinDate: string
  status: "active" | "inactive"
  avatar?: string
}
```

---

## 🎨 UI/UX Features

### Design System
- **Color Scheme**: HSL-based CSS variables for theming
- **Dark Mode**: Supports `dark:` classes (not currently used)
- **Responsive**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Fade-in, slide-up animations

### Key UI Patterns
1. **Hero Section** - Large gradient background with CTA
2. **Card Layouts** - Job cards, stat cards for grid display
3. **Forms** - React Hook Form with shadcn/ui inputs
4. **Tables** - shadcn/ui table for data display (admin)
5. **Modals** - Dialog/Sheet for actions

---

## 🔄 Current Data Flow

### Candidate Flow
1. User lands on home page (Index)
2. Browse careers → Careers page
3. Click job → Job details page
4. Click apply → Apply form
5. Submit → My applications page

### Admin Flow
1. Login page
2. Dashboard (home)
3. Navigate to specific admin sections
4. Manage jobs, applications, interviews, offers, employees

---

## ⚠️ Migration Considerations

### Challenges
1. **Conditional Rendering**: Navbar/Footer shown/hidden based on route
2. **Dynamic Routes**: Parameter extraction
3. **Form State**: Maintaining React Hook Form integration
4. **Query Client**: Provider setup in layout

### Solutions
1. **Grouped Routes**: Use `(candidate)` and `(admin)` groups
2. **Dynamic Segments**: `[jobId]` for dynamic routes
3. **Layout Wrapping**: Group layouts handle conditional rendering
4. **Provider in Root Layout**: QueryClient setup in root layout

---

## 🚀 Performance Considerations

### Current (React + Vite)
- Client-side rendering
- Fast HMR (Hot Module Replacement)
- Optimized build output

### With Next.js
- Option for Server-Side Rendering (SSR)
- Incremental Static Regeneration (ISR)
- Built-in image optimization
- Better code splitting
- Smaller JavaScript bundle

---

## 📋 Checklist for Migration

- [ ] Create Next.js 15 project with TypeScript
- [ ] Install all dependencies
- [ ] Copy and configure Tailwind CSS
- [ ] Copy all components and hooks
- [ ] Copy mock data and types
- [ ] Create root layout with providers
- [ ] Create candidate group layout
- [ ] Create admin layout  
- [ ] Migrate all pages
- [ ] Update all imports (react-router-dom → next/link, next/navigation)
- [ ] Test all routes and functionality
- [ ] Build and verify
- [ ] Deploy to Vercel
