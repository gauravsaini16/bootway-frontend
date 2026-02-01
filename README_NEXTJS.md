# Career Compass - Next.js Edition 🚀

Your Career Compass application has been successfully migrated from React.js (Vite) to **Next.js 15**!

## ✨ What's New?

- ✅ **Next.js 15** - Latest Next.js framework
- ✅ **App Router** - Modern file-based routing
- ✅ **Server Components** - Better performance out of the box
- ✅ **Built-in Optimization** - Image optimization, code splitting
- ✅ **Same Beautiful UI** - All styles and components preserved
- ✅ **Same Functionality** - All features work exactly the same

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
.
├── app/                                # Next.js App Router
│   ├── layout.tsx                      # Root layout with providers
│   ├── globals.css                     # Global styles
│   ├── not-found.tsx                   # 404 page
│   ├── (candidate)/                    # Candidate routes group
│   │   ├── layout.tsx                  # Navbar + Footer layout
│   │   ├── page.tsx                    # Home page
│   │   ├── careers/                    # Careers section
│   │   │   ├── page.tsx                # Careers listing
│   │   │   └── [jobId]/                # Dynamic job ID
│   │   │       ├── page.tsx            # Job details
│   │   │       └── apply/
│   │   │           └── page.tsx        # Application form
│   │   └── my-applications/
│   │       └── page.tsx                # User applications
│   └── admin/                          # Admin routes
│       ├── layout.tsx                  # Admin layout
│       ├── login/page.tsx              # Admin login
│       ├── dashboard/page.tsx          # Admin dashboard
│       ├── jobs/page.tsx               # Jobs management
│       ├── applications/page.tsx       # Applications management
│       ├── interviews/page.tsx         # Interviews management
│       ├── offers/page.tsx             # Offers management
│       └── employees/page.tsx          # Employees directory
├── src/
│   ├── components/                     # React components
│   │   ├── ui/                         # shadcn/ui components
│   │   ├── layout/                     # Layout components
│   │   ├── admin/                      # Admin components
│   │   ├── candidate/                  # Candidate components
│   │   └── common/                     # Common components
│   ├── data/                           # Mock data
│   ├── hooks/                          # Custom hooks
│   └── lib/                            # Utility functions
├── package.json                        # Dependencies
├── tsconfig.json                       # TypeScript config
├── tailwind.config.ts                  # Tailwind CSS config
└── next.config.js                      # Next.js config
```

## 🔄 Route Migration

| Old Route (React Router) | New Route (Next.js) |
|--------------------------|-------------------|
| `/` | `/` |
| `/careers` | `/careers` |
| `/careers/:jobId` | `/careers/[jobId]` |
| `/apply/:jobId` | `/careers/[jobId]/apply` |
| `/my-applications` | `/my-applications` |
| `/admin/login` | `/admin/login` |
| `/admin/dashboard` | `/admin/dashboard` |
| `/admin/jobs` | `/admin/jobs` |
| `/admin/applications` | `/admin/applications` |
| `/admin/interviews` | `/admin/interviews` |
| `/admin/offers` | `/admin/offers` |
| `/admin/employees` | `/admin/employees` |

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **State Management**: TanStack React Query
- **Form**: React Hook Form
- **Icons**: Lucide React
- **Notifications**: Sonner + React Hot Toast

## ✨ Key Features

### Candidate Features
- 🏠 Hero landing page with company info
- 💼 Browse all job listings
- 🔍 Search and filter jobs
- 📋 Apply for jobs with forms
- 📊 Track application status
- 📈 View application pipeline

### Admin Features
- 🔐 Secure login
- 📊 Dashboard with analytics
- 💼 Manage job postings
- 📝 Review applications
- 📅 Schedule interviews
- 🤝 Manage employees

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
Next.js can be deployed to any Node.js hosting:
- AWS Amplify
- Netlify (with functions)
- Google Cloud Run
- DigitalOcean
- Heroku
- Azure App Service

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com)

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

### Clear cache
```bash
rm -rf .next
npm run dev
```

### Module not found errors
```bash
npm install
```

## 📝 Notes

- All original functionality is preserved
- UI/UX is identical to the React version
- Components are fully compatible with Next.js
- No breaking changes for end users
- Database integration ready (mock data currently used)

## 🎯 Next Steps

1. ✅ Installation complete
2. ✅ Development server ready
3. Consider integrating a real backend/database
4. Add authentication if needed
5. Deploy to production

## 💡 Tips

- Use `use client` directive when you need browser features (state, events, etc.)
- Keep components in `src/components` for better organization
- Use dynamic routes with `[id]` for parameterized pages
- Group related routes with parentheses `(groupName)`

---

**Happy coding! 🚀**

For questions or issues, refer to the [Next.js documentation](https://nextjs.org/docs).
