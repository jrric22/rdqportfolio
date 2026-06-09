# RdqCRM — Full-Stack CRM Tool

A production-ready, full-stack Customer Relationship Management application built with modern web technologies.

## Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Framework  | Remix v2                  |
| Frontend   | React 18 + TypeScript     |
| Styling    | TailwindCSS (dark theme)  |
| Validation | Zod                       |
| ORM        | Prisma                    |
| Database   | PostgreSQL                |
| Charts     | Recharts                  |
| Auth       | Remix sessions + bcryptjs |

---

## Features

### Admin Dashboard

- **Overview** — KPI stats, revenue chart, pipeline chart, recent customers, top deals, activity feed
- **Customers** — Full CRUD, search, status filter, detail view with deals/tasks/activity history
- **Deals** — Kanban board + list view, full CRUD with stage/priority/probability tracking
- **Tasks** — Create/edit/delete tasks, toggle completion, overdue detection, filter by status
- **Activities** — Complete audit log of all CRM events
- **Reports** — Revenue trend chart, deal stage bar chart, customer status + lead source pie charts
- **Settings** — Profile update and password change

---

## Project Structure

```
crm-tool/
├── app/
│   ├── components/
│   │   ├── ui/              # Badge, Avatar, Modal, StatsCard, Sidebar, Header
│   │   ├── activities/      # ActivityFeed
│   │   ├── customers/       # CustomerForm
│   │   ├── deals/           # DealForm
│   │   └── tasks/           # TaskForm
│   ├── lib/
│   │   ├── db.server.ts     # Prisma client singleton
│   │   ├── auth.server.ts   # Login verification, session helpers
│   │   ├── session.server.ts
│   │   └── utils.ts         # Formatting helpers
│   ├── routes/
│   │   ├── _index.tsx                    # Redirect to /dashboard or /login
│   │   ├── _auth.tsx                     # Auth layout
│   │   ├── _auth.login.tsx               # Login page
│   │   ├── logout.tsx                    # Logout action
│   │   ├── _dashboard.tsx                # Dashboard layout + auth guard
│   │   ├── _dashboard._index.tsx         # Main dashboard
│   │   ├── _dashboard.customers.tsx      # Customers list + CRUD
│   │   ├── _dashboard.customers.$id.tsx  # Customer detail
│   │   ├── _dashboard.deals.tsx          # Deals Kanban + list
│   │   ├── _dashboard.tasks.tsx          # Tasks management
│   │   ├── _dashboard.activities.tsx     # Activity log
│   │   ├── _dashboard.reports.tsx        # Analytics & charts
│   │   └── _dashboard.settings.tsx       # Admin settings
│   ├── schemas/             # Zod validation schemas
│   ├── styles/globals.css   # TailwindCSS + custom utilities
│   ├── types/index.ts       # TypeScript interfaces
│   └── root.tsx
├── prisma/
│   ├── schema.prisma        # Database models
│   └── seed.ts              # Demo data seeder
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Setup Instructions

### 1. Prerequisites

- Node.js 20+
- PostgreSQL 14+
- npm or pnpm

### 2. Clone & Install

```bash
git clone <your-repo>
cd crm-tool
npm install
```

### 3. Environment Variables

```bash
cp .env.example .env
```

Edit `.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/crm_db"
SESSION_SECRET="your-random-secret-at-least-32-chars"
```

### 4. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with demo data
npm run db:seed
```

### 5. Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:5173**

### 6. Login Credentials

```
Email:    admin@crm.com
Password: Admin@123
```

---

## Database Models

```
Admin         — CRM admin users (SUPER_ADMIN, ADMIN, MANAGER)
Customer      — Contacts (LEAD, PROSPECT, CUSTOMER, CHURNED, INACTIVE)
Deal          — Sales opportunities with stages and pipeline tracking
Task          — Action items linked to customers and deals
Activity      — Immutable audit log of all events
```

---

## Available Scripts

| Script                | Description                      |
| --------------------- | -------------------------------- |
| `npm run dev`         | Start development server         |
| `npm run build`       | Build for production             |
| `npm run start`       | Start production server          |
| `npm run db:generate` | Regenerate Prisma client         |
| `npm run db:push`     | Sync schema to DB (no migration) |
| `npm run db:migrate`  | Create and run migration         |
| `npm run db:seed`     | Seed demo data                   |
| `npm run db:studio`   | Open Prisma Studio GUI           |
| `npm run typecheck`   | Run TypeScript checks            |

---

## Production Deployment

```bash
# Build
npm run build

# Set environment variables on your host
DATABASE_URL=...
SESSION_SECRET=...
NODE_ENV=production

# Run migrations
npx prisma migrate deploy

# Start
npm run start
```

Compatible with: **Railway, Render, Fly.io, Vercel (Node runtime), AWS EC2**
