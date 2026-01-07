# Project Structure
```js
src/
├── app/                     # Next.js App Router
│   ├── (public)/            # Public routes (no auth)
│   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (auth)/              # Auth routes
│   │   ├── login/
│   │   └── register/
│   │
│   ├── (dashboard)/         # Protected routes
│   │   ├── layout.tsx       # Auth + RBAC guard
│   │   ├── page.tsx
│   │   ├── users/
│   │   ├── events/
│   │   └── settings/
│   │
│   ├── api/                 # Route handlers (BFF)
│   │   ├── auth/
│   │   ├── users/
│   │   └── events/
│   │
│   ├── error.tsx
│   ├── loading.tsx
│   └── not-found.tsx
│
├── modules/                 # Domain-based architecture ⭐
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── user/
│   ├── event/
│   └── analytics/
│
├── components/              # Shared UI components
│   ├── ui/                  # Design system (Button, Modal)
│   ├── layout/              # Header, Sidebar
│   └── feedback/            # Toast, Spinner, Error
│
├── lib/                     # Core infrastructure
│   ├── api-client.ts        # Axios / fetch wrapper
│   ├── auth.ts              # Session helpers
│   ├── env.ts               # Env validation
│   ├── logger.ts
│   └── cache.ts
│
├── hooks/                   # Global reusable hooks
│
├── stores/                  # State management
│   ├── auth.store.ts
│   └── ui.store.ts
│
├── styles/
│   └── globals.css
│
├── types/
│   ├── api.ts
│   └── common.ts
│
├── utils/
│   ├── format.ts
│   └── validation.ts
│
├── middleware.ts            # Auth, RBAC, redirects
└── config/
    ├── routes.ts
    ├── permissions.ts
    └── feature-flags.ts
```