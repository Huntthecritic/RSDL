# Dashboard Quick Reference Guide

## URLs to Access

### Admin Dashboard
- **Home**: `http://localhost:3000/dashboard`
- **Leads**: `http://localhost:3000/dashboard/leads`
- **Leads Detail**: `http://localhost:3000/dashboard/leads/1`
- **Clients**: `http://localhost:3000/dashboard/clients`
- **Clients Detail**: `http://localhost:3000/dashboard/clients/1`
- **Projects**: `http://localhost:3000/dashboard/projects`
- **Projects Detail**: `http://localhost:3000/dashboard/projects/1`
- **Messages**: `http://localhost:3000/dashboard/messages`
- **Invoices**: `http://localhost:3000/dashboard/invoices`
- **Invoice Detail**: `http://localhost:3000/dashboard/invoices/INV-001`
- **Settings**: `http://localhost:3000/dashboard/settings`

### Client Portal
- **Home**: `http://localhost:3000/client-portal`
- **Projects**: `http://localhost:3000/client-portal/projects`
- **Project Detail**: `http://localhost:3000/client-portal/projects/1`
- **Messages**: `http://localhost:3000/client-portal/messages`
- **Invoices**: `http://localhost:3000/client-portal/invoices`
- **Settings**: `http://localhost:3000/client-portal/settings`

## Key Components

### Sidebar (`components/dashboard/sidebar.js`)
- Persistent left navigation
- Collapse/expand toggle
- Dark mode switcher
- User profile menu
- Mobile drawer on screens < 768px
- Role-based navigation (admin vs client)

### Content Header (`components/dashboard/content-header.js`)
- Page title and subtitle
- Action button area
- Consistent styling across pages

### Stats Card (`components/dashboard/stats-card.js`)
- Dashboard metrics
- Trend indicators
- Icon support
- Light/dark mode compatible

### Phase Stepper (`components/dashboard/phase-stepper.js`)
- 7-step SDLC timeline
- Visual progress indicators
- Completed/in-progress/pending states
- Click to navigate phases

### Empty State (`components/dashboard/empty-state.js`)
- Placeholder for empty lists
- Icon support
- Call-to-action button

## Design System

### Colors
```
Primary Gradient: #AE14D9 → #7216F2
Dark Sidebar: #1A1A2E
Light Background: #F8F9FC
Card Background: #FFFFFF (light) / #21213D (dark)
Text Foreground: oklch colors (automatic contrast)
```

### Typography
- **Headings**: Geist Sans (via next/font)
- **Body**: Geist Sans
- **Mono**: Geist Mono

### Spacing
- Base unit: 4px
- Padding: 4, 6, 8, 12, 16, 20, 24px
- Gap: 2, 3, 4, 6, 8px

### Border Radius
- Components: 10px (rounded-xl)
- Buttons: 8px (rounded-lg)
- Pills: 9999px (rounded-full)

### Shadows
- Default: `shadow-sm` (4px 6px rgba(0,0,0,0.04))
- Hover: `shadow-md`

## State Management

### Auth Context (`app/dashboard/context/auth-context.js`)
```javascript
// Usage in components
const { user, darkMode, toggleDarkMode, logout } = useAuth();

// User object
{
  id: string
  name: string
  email: string
  role: 'admin' | 'employee' | 'client'
  avatar: string (2 chars)
}
```

### Dark Mode
```javascript
// Toggle with context
toggleDarkMode()

// Applied via class on html element
<html className={darkMode ? 'dark' : ''}>
```

## Component Props

### StatsCard
```javascript
<StatsCard
  label="Label"
  value="123"
  change={5}
  changeType="increase" // or "decrease"
  icon={IconComponent}
/>
```

### ContentHeader
```javascript
<ContentHeader
  title="Page Title"
  subtitle="Description"
  action={<Button>Action</Button>}
/>
```

### EmptyState
```javascript
<EmptyState
  icon={IconComponent}
  title="No items"
  description="Description text"
  action={<Button>Create</Button>}
/>
```

### PhaseStepper
```javascript
<PhaseStepper
  phases={phaseArray}
  currentPhaseIndex={2}
  onPhaseClick={(index) => {}}
/>
```

## Common Patterns

### Status Badge
```javascript
<Badge className={`${statusBadgeVariants[status]} border-0`}>
  {status}
</Badge>
```

### Table with Filters
```javascript
// Search
const filtered = data.filter(item =>
  item.name.toLowerCase().includes(searchTerm)
)

// Filter chips
<button
  onClick={() => setFilter(status)}
  className={filterStatus === status ? 'bg-[#AE14D9]' : 'bg-muted'}
>
  {status}
</button>
```

### Form Input
```javascript
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Type here..."
  className="bg-muted/30 dark:bg-white/5"
/>
```

### Loading/Disabled State
```javascript
<Button disabled>
  <Spinner />
  Saving...
</Button>
```

## Mock Data Structure

### Lead
```javascript
{
  id: number
  name: string
  email: string
  phone: string
  company: string
  service: string
  source: string
  status: 'new' | 'contacted' | 'qualified' | 'won' | 'lost'
  assignedTo: string
  date: string (YYYY-MM-DD)
}
```

### Project
```javascript
{
  id: number
  name: string
  client: string
  currentPhaseIndex: number (0-6)
  phases: Array<{
    id: number
    name: string
    status: 'completed' | 'in-progress' | 'pending'
  }>
  tasks: Array<{
    id: number
    title: string
    assignee: string
    status: 'todo' | 'in-progress' | 'done'
  }>
  files: Array<{
    id: number
    name: string
    size: string
    date: string
  }>
  messages: Array<{
    id: number
    author: string
    message: string
    timestamp: string
    isInternal: boolean
  }>
}
```

## Tailwind CSS Classes Used

### Layout
- `flex`, `grid`, `grid-cols-*`
- `gap-*` (spacing between flex/grid items)
- `p-*`, `px-*`, `py-*` (padding)
- `m-*`, `mx-*`, `my-*` (margin)

### Typography
- `text-*` (color)
- `text-sm`, `text-lg`, `text-3xl`
- `font-medium`, `font-semibold`, `font-bold`
- `leading-relaxed`, `text-center`

### Backgrounds
- `bg-white`, `bg-muted`, `bg-gradient-to-r`
- `bg-[#hexcolor]` (custom colors)
- `dark:bg-[#color]` (dark mode)

### Borders & Shadows
- `border`, `border-*`, `border-l-*`
- `rounded-lg`, `rounded-xl`, `rounded-full`
- `shadow-sm`, `shadow-md`

### States
- `hover:bg-*`, `hover:text-*`
- `disabled:opacity-*`
- `focus:outline-none`, `focus:ring-*`

### Utilities
- `transition-*` (animations)
- `opacity-*` (transparency)
- `scale-*` (sizing)
- `translate-x-*`, `translate-y-*`

## Integration Points (Ready for Implementation)

### Firestore
- Location: Component state with listeners
- Pattern: `useEffect` with unsubscribe
- Example in `/app/dashboard/projects/[id]/page.js`

### Authentication
- Location: `AuthContext`
- Current: Mock user object
- Ready for: Firebase Auth, Supabase, or custom JWT

### File Storage
- Location: File upload handlers
- Pattern: Drag-and-drop UI ready
- Ready for: Vercel Blob, AWS S3, Firebase Storage

### Email
- Location: "Send Email" buttons
- Pattern: Mailto links, ready for API
- Ready for: Resend, SendGrid, AWS SES

### Payments
- Location: Invoice detail page
- Pattern: "Pay Now" button ready
- Ready for: Stripe, Flutterwave

## Testing Checklist

- [ ] Dashboard home loads with stats and charts
- [ ] Sidebar collapses/expands smoothly
- [ ] Dark mode toggle works on all pages
- [ ] All navigation links work
- [ ] Leads list filters by status and searches
- [ ] Clients tabs switch properly
- [ ] Projects phase stepper displays correctly
- [ ] Invoice preview shows all fields
- [ ] Messages send functionality wired
- [ ] Client portal shows simplified view
- [ ] Responsive on mobile (test sidebar drawer)
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] All buttons and links accessible via keyboard

## Performance Tips

1. Use `Image` component from Next.js for images
2. Implement skeleton screens for loading states
3. Use `lazy` loading for charts above fold
4. Debounce search inputs
5. Implement pagination for large lists
6. Use React.memo for expensive components
7. Optimize re-renders with useCallback

## Next Steps

1. **Connect Backend**:
   - Replace mock data with Firestore queries
   - Implement real authentication
   - Set up API endpoints for mutations

2. **Add Features**:
   - File upload functionality
   - Real-time notifications
   - Email integrations
   - Advanced reporting

3. **Enhance UX**:
   - Loading skeleton screens
   - Toast notifications
   - Keyboard shortcuts
   - Offline support

4. **Deploy**:
   - Push to GitHub
   - Connect to Vercel
   - Set environment variables
   - Configure integrations

---

Dashboard built with care for performance, accessibility, and user experience.
Ready for production with backend integration.
