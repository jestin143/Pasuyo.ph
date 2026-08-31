# PASUYO.PH — Project Architecture & Development Guide

> **STRICT STRUCTURE — DO NOT CHANGE**  
> This README is the official development guide. All future edits must follow it.

PASUYO.PH is a hyperlocal PasaBuy / delivery platform for Oriental Mindoro. It connects **Customers**, **Riders**, **Stores**, and **Admin**.

---

## 1. Official Folder Structure

```
src/
│
├── app/
│   ├── App.jsx
│   │
│   ├── pages/
│   │   └── HomePage.jsx
│   │
│   ├── customer/
│   │   ├── CustomerPage.jsx
│   │   └── CustomerRegisterPage.jsx
│   │
│   ├── rider/
│   │   ├── RiderPage.jsx
│   │   └── RiderRegisterPage.jsx
│   │
│   ├── store/
│   │   └── StorePage.jsx
│   │
│   └── admin/
│       └── AdminPage.jsx
│
├── components/
│   ├── ui/
│   │   └── PageShell.jsx
│   │
│   └── maps/
│       └── LocationPicker.jsx
│
├── services/
│   ├── customer/
│   │   └── customerService.js
│   ├── rider/
│   │   └── riderService.js
│   ├── booking/
│   │   └── bookingService.js
│   └── location/
│       └── locationService.js
│
├── lib/
│   ├── supabase/
│   │   └── client.js
│   └── maps/
│       └── googleMaps.js
│
├── data/
│   └── orientalMindoro.js
│
└── styles/
    └── global.css
```

**DO NOT:**
- Create new folders randomly
- Move files to different folders
- Rename files unless explicitly instructed
- Place unrelated code into another feature's folder

Keep each feature separated.

---

## 2. Purpose of Every Folder

### `src/app/`
Main application routing and page entry points. Each role has its own subfolder.

- `src/app/pages/` → Public pages (landing/home)
- `src/app/customer/` → Customer-only pages
- `src/app/rider/` → Rider-only pages
- `src/app/store/` → Store pages
- `src/app/admin/` → Admin pages

### `src/components/`
Reusable UI components only. No API logic here.

- `ui/` → Shared layout/design system
- `maps/` → Map UI components only

### `src/services/`
All backend / API / Supabase logic. Isolated by domain.

- `customer/` → Customer domain
- `rider/` → Rider domain
- `booking/` → PasaBuy/Booking domain
- `location/` → Location domain

### `src/lib/`
Low-level integrations / clients. No business logic.

- `supabase/` → Supabase connection
- `maps/` → Google Maps loader

### `src/data/`
Static data and constants.

### `src/styles/`
Global styling only.

---

## 3. Purpose of Every Major File

| File | Responsibility — ONE CLEAR JOB |
| :--- | :--- |
| `src/app/App.jsx` | **Main application entry/router.** Defines routes, lazy loading, auth guards. No UI logic. |
| `src/app/pages/HomePage.jsx` | **Home page UI only.** Public landing, role selection. |
| `src/app/customer/CustomerPage.jsx` | **Customer landing/dashboard UI.** Shows active bookings, store list. |
| `src/app/customer/CustomerRegisterPage.jsx` | **Customer registration UI.** Form only, calls customerService. |
| `src/app/rider/RiderPage.jsx` | **Rider landing/dashboard UI.** Shows available deliveries. |
| `src/app/rider/RiderRegisterPage.jsx` | **Rider registration UI.** Form only, calls riderService. |
| `src/app/store/StorePage.jsx` | **Store UI.** Store orders, inventory view. |
| `src/app/admin/AdminPage.jsx` | **Admin UI.** Manage users, bookings, analytics. |
| `src/components/ui/PageShell.jsx` | **Shared layout/common design.** Header, footer, container, navigation. Reuse everywhere. |
| `src/components/maps/LocationPicker.jsx` | **MAP UI ONLY.** Google Maps picker, marker, autocomplete. No service calls. |
| `src/services/customer/customerService.js` | **Customer backend/API.** createCustomer, getCustomer, updateProfile → Supabase. |
| `src/services/rider/riderService.js` | **Rider backend/API.** createRider, getRider, updateStatus, availability. |
| `src/services/booking/bookingService.js` | **Booking/pasabuy functions.** createBooking, getBookings, assignRider, updateStatus, cancel. |
| `src/services/location/locationService.js` | **Location functions.** geocode, reverseGeocode, calculateDistance, validateOrientalMindoro area. |
| `src/lib/supabase/client.js` | **Supabase client connection ONLY.** `createClient()` with env vars. Export single client. |
| `src/lib/maps/googleMaps.js` | **Google Maps loading/integration ONLY.** Load script, initialize, API key handling. |
| `src/data/orientalMindoro.js` | **Oriental Mindoro data ONLY.** Municipalities, barangays, coordinates, store zones. |
| `src/styles/global.css` | **Global styling ONLY.** Tailwind base, CSS variables, resets. |

---

## 4. How Pages Connect

```
HomePage.jsx ( / )
   ├── /customer → CustomerPage.jsx → CustomerRegisterPage.jsx (if not registered)
   ├── /rider → RiderPage.jsx → RiderRegisterPage.jsx (if not registered)
   ├── /store → StorePage.jsx
   └── /admin → AdminPage.jsx

App.jsx is the router:
  <BrowserRouter>
    <PageShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer/*" element={<CustomerPage />} />
        <Route path="/customer/register" element={<CustomerRegisterPage />} />
        <Route path="/rider/*" element={<RiderPage />} />
        <Route path="/rider/register" element={<RiderRegisterPage />} />
        <Route path="/store/*" element={<StorePage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </PageShell>
  </BrowserRouter>

Shared Flow:
CustomerPage / RiderPage / StorePage
  → uses PageShell.jsx for layout
  → uses LocationPicker.jsx for picking delivery/pickup
  → calls its own service (customerService, riderService, bookingService, locationService)
  → service calls supabase/client.js
```

**Rule:** Pages never import `supabase/client.js` directly. Pages import `services/*`.

---

## 5. Where Future Code Goes

### Supabase Code
- **Client:** ONLY `src/lib/supabase/client.js`
  ```js
  // Example: DO NOT hardcode keys
  import { createClient } from '@supabase/supabase-js'
  export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
  ```
- **Queries/Mutations:** ONLY `src/services/*/*.js`
  - Customer table → `services/customer/customerService.js`
  - Rider table → `services/rider/riderService.js`
  - Bookings table → `services/booking/bookingService.js`
  - Locations/geofence → `services/location/locationService.js`

> Never put Supabase logic inside React components. Never put API keys inside React components.

### Google Maps Code
- **Loader / init:** ONLY `src/lib/maps/googleMaps.js`
  ```js
  // Handles: loadScript, apiKey from env, promise caching
  export const loadGoogleMaps = () => { ... }
  ```
- **UI:** ONLY `src/components/maps/LocationPicker.jsx`
  ```js
  // Uses loadGoogleMaps() and renders Map, Marker, Autocomplete
  ```

> Keep map code inside `components/maps` and `lib/maps` only.

### Customer Logic
- UI → `src/app/customer/CustomerPage.jsx` and `CustomerRegisterPage.jsx`
- Backend → `src/services/customer/customerService.js`
- Booking actions by customer → `src/services/booking/bookingService.js`

### Rider Logic
- UI → `src/app/rider/RiderPage.jsx` and `RiderRegisterPage.jsx`
- Backend → `src/services/rider/riderService.js`
- Accept/complete bookings → `src/services/booking/bookingService.js`

### Booking / PasaBuy Logic
- ALL booking creation, status updates, assignment, cancellation → `src/services/booking/bookingService.js`
- This is the single source of truth for bookings. Customer, Rider, Store, Admin all call this.

### Location Logic
- Data → `src/data/orientalMindoro.js` (list of municipalities: Calapan, Puerto Galera, Naujan, etc. with lat/lng bounds)
- Functions → `src/services/location/locationService.js`
- UI picker → `src/components/maps/LocationPicker.jsx`

### Styling
- Global → `src/styles/global.css`
- Component-specific small styles → inline Tailwind inside component, not new CSS files.

---

## 6. Change Safety Rule (MUST FOLLOW)

When asked to change one feature:

**ONLY modify files necessary for that feature.**

Examples:
- Home page change → primarily `HomePage.jsx` + `PageShell.jsx` + `global.css`
  DO NOT touch `customerService.js`, `riderService.js`, `bookingService.js`, `googleMaps.js`, `supabase/client.js`

- Map change → `LocationPicker.jsx` and/or `googleMaps.js` only

- Customer registration change → `CustomerRegisterPage.jsx` and `customerService.js` only when backend involved

- Rider change → `RiderPage.jsx`, `RiderRegisterPage.jsx`, `riderService.js`

Always preserve existing working functionality.

---

## 7. Editing Rules Checklist

Before any edit:

1. Find the correct feature folder first (`customer/`, `rider/`, `store/`, `booking/`, `maps/`)
2. Edit the smallest possible file
3. Do NOT rewrite unrelated files
4. Do NOT duplicate components — reuse `PageShell.jsx`, `LocationPicker.jsx`
5. Keep map code inside `components/maps` and `lib/maps`
6. Keep Supabase code inside `lib/supabase`
7. Keep database/API logic inside `services/`
8. Keep visual styling inside `global.css` or designated UI
9. Never put API keys directly inside React components — use `.env` + `lib/` loader
10. Never hardcode secrets
11. Never move working code just to reorganize it

Before creating a new file, check if an existing file already has that responsibility.

---

## 8. Environment Variables

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_GOOGLE_MAPS_API_KEY=
```

Access ONLY via:
- `src/lib/supabase/client.js` for Supabase keys
- `src/lib/maps/googleMaps.js` for Google Maps key

---

## 9. Future Scalability

If you need new roles:
- Add `src/app/newrole/NewRolePage.jsx` under `src/app/`
- Add `src/services/newrole/newRoleService.js` under `src/services/`

Do NOT create new top-level folders outside `src/app`, `src/components`, `src/services`, `src/lib`, `src/data`, `src/styles`.

This structure ensures PASUYO.PH stays maintainable as it scales across Oriental Mindoro.

---

**Maintained by PASUYO.PH team — Follow this README strictly.**
