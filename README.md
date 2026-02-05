# Tahwul - Digital Transformation Dashboard

A comprehensive digital transformation and compliance tracking platform built with Next.js, TypeScript, Tailwind CSS, and Zustand.

## Features

### Dashboard
- **Project Timeline**: Visual timeline showing project milestones and their status
- **Statistics Cards**: Key metrics with custom SVG icons for overall progress, criteria counts, and evidence documents
- **Progress Status**: Interactive grid showing all perspectives with their completion percentages and criteria breakdown
- **Overall Compliance Score**: Half-circle gauge chart showing compliance percentage
- **Audit Readiness**: Half-circle gauge showing readiness level with overdue standards and missing evidence
- **Top Performing Leaders**: List of perspective leaders with avatar images and performance scores
- **Recent Activities**: Real-time feed of system activities
- **12-Month Performance Chart**: Bar chart visualization of monthly performance

### Perspective Details Page
- **Dynamic Routing**: Click any perspective card to view detailed information
- **Progress Tracking**: Circular progress indicator for each perspective
- **Evidence Summary**: Cards showing total, in-progress, under-review, and completed evidence with custom SVG icons
- **Tab Navigation**: Overview and Evidence tabs
- **Overview Tab**: Objectives, implementation requirements, evidence documents, related regulations, scope, and leaders
- **Evidence Tab**: Sortable evidence documents table, comments section with post functionality, and recent activities

### Header
- **Search Bar**: Global search input
- **Theme Toggle**: Light/dark mode switcher
- **Notifications**: Dropdown with notification list and unread indicators
- **User Profile**: Dropdown with Profile, Settings, and Logout options

### Sidebar
- **Navy Background**: `#1D3557` branded sidebar
- **Collapsible**: Toggle between expanded and collapsed states
- **Mobile Responsive**: Drawer-style sidebar on mobile with overlay
- **Active Route Highlighting**: Dashboard stays active on perspective detail pages

### Dark Mode
- Full light/dark theme support across all pages and components
- Hydration-safe theme detection using `next-themes`

## Project Structure

```
├── app/
│   ├── perspectives/
│   │   ├── [id]/
│   │   │   └── page.tsx              # Perspective detail page (composing components)
│   │   └── page.tsx                  # Perspectives listing (placeholder)
│   ├── tasks/page.tsx                # Tasks page (placeholder)
│   ├── documents/page.tsx            # Documents page (placeholder)
│   ├── reports/page.tsx              # Reports page (placeholder)
│   ├── users/page.tsx                # Users & Roles page (placeholder)
│   ├── layout.tsx                    # Root layout with MainLayout wrapper
│   ├── page.tsx                      # Dashboard home page
│   └── globals.css                   # Global styles
├── components/
│   ├── common/
│   │   ├── ThemeToggle.tsx           # Light/dark mode toggle
│   │   └── WorkInProgress.tsx        # Reusable placeholder component
│   ├── dashboard/
│   │   ├── ProjectTimeline.tsx       # Project milestones timeline
│   │   ├── StatsCards.tsx            # Key metrics cards with SVG icons
│   │   ├── ProgressStatus.tsx        # Perspectives grid
│   │   ├── ComplianceScore.tsx       # Half-circle compliance gauge
│   │   ├── AuditReadiness.tsx        # Half-circle audit readiness gauge
│   │   ├── TopPerformers.tsx         # Top leaders with avatars
│   │   ├── RecentActivities.tsx      # Activity feed
│   │   └── PerformanceChart.tsx      # 12-month bar chart
│   ├── perspectives/
│   │   ├── PerspectiveHeader.tsx     # Back button + header with progress circle
│   │   ├── EvidenceSummaryCards.tsx   # Evidence stat cards
│   │   ├── TabSwitcher.tsx           # Overview/Evidence tab buttons
│   │   ├── OverviewTab.tsx           # Overview sections (objective, scope, etc.)
│   │   ├── LeadersCard.tsx           # Leaders grid with avatars
│   │   ├── EvidenceTable.tsx         # Sortable evidence documents table
│   │   └── CommentsCard.tsx          # Comments list + post comment form
│   └── layout/
│       ├── Sidebar.tsx               # Collapsible sidebar navigation
│       ├── Header.tsx                # Header with search, notifications, profile
│       └── MainLayout.tsx            # Page wrapper with sidebar and header
├── store/
│   ├── use-dashboard-store.ts        # Zustand store for dashboard data
│   └── use-perspective-store.ts      # Zustand store for perspective details
├── types/
│   ├── dashboard.ts                  # Dashboard-related type definitions
│   ├── details.ts                    # Detail page type definitions
│   └── common.ts                     # Common/shared type definitions
├── data/
│   └── mock-data.ts                  # All mock data for the application
├── lib/
│   └── utils.ts                      # Utility functions (cn, getStatusColor, etc.)
└── public/
    ├── *.svg                         # Custom SVG icons and avatar images
    └── Tahwul_sidebar_logo.svg       # Sidebar logo
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Charts**: Recharts
- **Icons**: Lucide React + Custom SVGs
- **Theme**: next-themes
- **Utilities**: clsx, tailwind-merge

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation & Running

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Other Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Color Scheme

- **Sidebar**: Navy Blue (`#1D3557`)
- **Primary Background**: Gray-50 (`#f9fafb`)
- **Card Background**: White (`#ffffff`)
- **Accent Colors**:
  - Green: `#22c55e` (completed, audit readiness)
  - Red: `#b91c1c` (compliance score)
  - Yellow: `#eab308` (in-progress)
  - Blue: `#3b82f6` (uploaded)

## Routing Structure

```
/ (Dashboard)
  ├── /perspectives (List - Placeholder)
  │   └── /perspectives/[id] (Detail Page - Fully Functional)
  ├── /tasks (Placeholder)
  ├── /documents (Placeholder)
  ├── /reports (Placeholder)
  └── /users (Placeholder)
```

## Key Implementation Details

- **Component-Based Architecture**: Perspective detail page split into 7 focused components
- **Type Safety**: Full TypeScript coverage with dedicated type files
- **Hydration Safe**: Theme detection guards against SSR/client mismatches
- **Responsive Design**: Mobile-first with collapsible sidebar and adaptive layouts
- **Sortable Tables**: Evidence table with column sorting using `useMemo`
- **Click-Outside Pattern**: Dropdowns close when clicking outside using refs and event listeners

---

**Note**: This is a frontend demonstration project with mock data. No backend or database is required to run it.
