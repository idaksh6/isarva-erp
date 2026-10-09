---
name: isarva-erp-architecture
description: >-
  Standard operating procedure, global design system tokens, CSS utility classes,
  content store schema, and built-in Admin CMS workflow for the ISARVA ERP Next.js platform.
---

# ISARVA ERP Architecture & Global Design System Guide

This skill documents the global classes, component hierarchy, design tokens, and built-in Admin Content Management System (CMS) for the **ISARVA ERP** platform.

---

## 1. Global Color Palette & Tokens

The platform uses custom Tailwind CSS and CSS Variables defined in `src/app/globals.css` and `tailwind.config.js`:

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| `brand-500` | `#007a55` | Primary ISARVA Emerald Green (Navbar, CTA buttons, active states) |
| `brand-600` | `#006c4b` | Darker hover shade for primary buttons |
| `brand-dark`| `#092019` | Deep contrast tone for footer and dark panels |
| `pos-primary` | `#059669` | **Restaurant POS** Theme Accent |
| `billsoft-primary` | `#2563eb` | **BillSoft Accounting** Theme Accent |
| `hrms-primary` | `#7c3aed` | **HRMS** Theme Accent |
| `crm-primary` | `#ea580c` | **CRM** Theme Accent |

---

## 2. Global CSS Utility Classes

Always use these standardized classes across components to maintain consistency:

### Action Buttons
- `.btn-brand-primary`: Emerald pill button with smooth lift hover (`#007a55`)
- `.btn-brand-outline`: White background with emerald border and text
- `.btn-pos`: Full-width green button for Restaurant POS cards
- `.btn-billsoft`: Full-width blue button for BillSoft Accounting cards
- `.btn-hrms`: Full-width purple button for HRMS cards
- `.btn-crm`: Full-width orange button for CRM cards

### Badges & Seals
- `.badge-brand`: Green rounded pill badge (`ALL-IN-ONE ERP SOLUTIONS`)
- `.badge-trust`: White bordered box with icon and bold statistics

### Layout Cards
- `.card-product`: Hoverable product card with dynamic border highlight
- `.card-feature`: Clean minimalist feature box for Why Choose section
- `.industry-pill`: Centered icon + text box for industry sectors

---

## 3. Centralized Content Store (`src/lib/content-store.js`)

All public website content is data-driven and maintained globally in `src/lib/content-store.js`:
- `hero`: Top headlines, subheadlines, badges, stats, and CTA labels.
- `products`: 4 modules with IDs, titles, subtitles, color codes, and 6 feature bullets.
- `whyChoose`: 6 value proposition feature cards.
- `gstSection`: 6 Indian statutory compliance checkboxes and tax invoice details.
- `industries`: 6 industry sector pills.
- `testimonials`: Customer reviews, location, rating, and avatar initials.
- `inquiries`: Stored customer demo and trial leads.

---

## 4. Built-in Admin CMS (`/admin`)

The platform contains a zero-WordPress, built-in visual editor:
- **Route**: `https://demoweb.isarva.in/isarva-erp/admin`
- **Capabilities**:
  - Live editing of Hero text, Products, GST rules, and Testimonials.
  - Real-time customer leads inbox (viewing name, phone, email, company, and requested product).
  - One-click **"Save All Changes"** syncing with `POST /api/content`.

---

## 5. Next.js Routing & Subpath Base Path

- **Base Path**: `/isarva-erp` (configured in `next.config.mjs`).
- **Public Entry**: `src/app/page.js`
- **Admin CMS**: `src/app/admin/page.js`
- **APIs**: `src/app/api/content/route.js`, `src/app/api/inquiries/route.js`
