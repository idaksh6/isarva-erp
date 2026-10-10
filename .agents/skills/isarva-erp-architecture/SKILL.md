---
name: isarva-erp-architecture
description: >-
  Standard operating procedure, global design system tokens, CSS utility classes,
  typography hierarchy rules (Space Grotesk headings & Inter body matching isarvait.com), content store schema, and built-in Admin CMS workflow for the ISARVA ERP Next.js platform.
---

# ISARVA ERP Architecture & Global Design System Guide

This skill documents the **mandatory global styling rules**, typography hierarchy matching **[isarvait.com](https://www.isarvait.com/)**, component structure, design tokens, and built-in Admin Content Management System (CMS) for the **ISARVA ERP** platform.

---

## 1. ABSOLUTE MANDATE: Pure Global Styles First — Zero Inline/Redundant Typography on Tags

Whenever writing code or adding components to ISARVA ERP, **ALL TYPOGRAPHY MUST BE PURELY INHERITED FROM `@layer base` IN `globals.css`**. 

### 🚫 STRICT PROHIBITIONS
1. **NEVER write font-size, font-weight, tracking, leading, or color classes on native HTML heading or paragraph tags**:
   - ❌ **STRICTLY FORBIDDEN**: `<h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug truncate">`
   - ✅ **MANDATORY**: `<h3 className="truncate">`
   - ❌ **STRICTLY FORBIDDEN**: `<h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.12] text-[#0b1a30]">`
   - ✅ **MANDATORY**: `<h1>`
   - ❌ **STRICTLY FORBIDDEN**: `<h2 className="text-2xl font-bold text-slate-900">`
   - ✅ **MANDATORY**: `<h2>`
   - ❌ **STRICTLY FORBIDDEN**: `<h4 className="text-sm font-extrabold text-[#0f172a]">`
   - ✅ **MANDATORY**: `<h4>`
   - ❌ **STRICTLY FORBIDDEN**: `<p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">`
   - ✅ **MANDATORY**: `<p>` (or `<p className="max-w-lg">` for structural layout constraints only)

2. **Zero Arbitrary Font Sizing**:
   - ❌ **STRICTLY FORBIDDEN**: `text-[13px]`, `text-[13.5px]`, `text-[14px]`, `text-[15px]`, `text-[28px]`, `text-[50px]`, `py-[60px]`, etc.
   - ✅ **MANDATORY**: Standard Tailwind tokens only (`text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.) when used on non-heading utility elements (such as badges, buttons, or metadata spans).

3. **Zero Redundant/Duplicate Heading Classes**:
   - ❌ **STRICTLY FORBIDDEN**: `.section-title`, `.section-heading`, `.section-subtitle`, `.card-title`, `.heading-2`.
   - ✅ **MANDATORY**: Use native semantic HTML elements (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<p>`).

4. **Card & Grid Item Titles MUST be Semantic `<h3>`**:
   - Always use native `<h3>` (e.g. `<h3>{item.title}</h3>`) for primary card headings across grids, lists, why-choose features, and testimonials.

5. **Always use Global Spacing & Layout Classes**:
   - Container: Always `.site-container` (or `.app-container`). Never define custom max-widths or ad-hoc horizontal padding for page sections.
   - Section Padding: Always `.section-padding` (`py-16 sm:py-20`) or `.section-padding-sm` (`pt-10 pb-14 lg:pt-14 lg:pb-20`). Never use arbitrary `py-12`, `py-24`, `pt-8 pb-10`, etc.

---

## 2. Typography Hierarchy Specifications (Matching isarvait.com)

All typography matches **[isarvait.com](https://www.isarvait.com/)**:
- **Headings (`h1`–`h6`, `.section-eyebrow`)**: **`Space Grotesk`** (from Google Fonts via `next/font/google`).
- **Body & Paragraphs (`body`, `p`)**: **`Inter`** (from Google Fonts via `next/font/google`).

| Element | Font Family | Mobile Size | Desktop Size | Font Weight | Line Height / Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`h1`** (Hero / Main Page) | `Space Grotesk` | `2.25rem` (36px) | `3.5rem` (56px) | 800 (ExtraBold/Black) | `1.12` / `-0.03em` |
| **`h2`** (Section Titles) | `Space Grotesk` | `1.75rem` (28px) | `2.5rem` (40px) | 800 (ExtraBold) | `1.22` / `-0.025em` |
| **`h3`** (Cards, Sub-sections) | `Space Grotesk` | `1.125rem` (18px)| `1.375rem` (22px) | 700 (Bold) | `1.3` / `-0.02em` |
| **`h4`** (Footer / Sidebar Headings)| `Space Grotesk`| `0.9375rem` (15px)| `1.0rem` (16px) | 700 (Bold) | `1.4` / `-0.015em` |
| **`h5`** (Minor Sub-headings) | `Space Grotesk` | `0.875rem` (14px)| `0.875rem` (14px)| 600 (SemiBold) | `1.5` / `-0.01em` |
| **`h6`** (Small Meta / Overlines) | `Space Grotesk` | `0.75rem` (12px) | `0.75rem` (12px) | 700 (Bold) | `1.5` / `0.05em` (Uppercase) |
| **`body` & `p`** (Body Text) | `Inter` | `0.9375rem` (15px)| `1.0rem` (16px) | 400 (Regular) | `1.65` / `#475569` (Slate-600) |
| **`.section-eyebrow`** (Category) | `Space Grotesk` | `0.75rem` (12px) | `0.75rem` (12px) | 800 (Bold) | `1.0` / `0.1em` (`#007a55` Uppercase) |

---

## 3. Standard Section Architecture & Layout Pattern

Every content section must strictly follow this exact structural pattern:

```jsx
<section className="section-padding bg-white relative ...">
  {/* 1. Standard Global Container */}
  <div className="site-container">
    
    {/* 2. Standard Centered Section Header */}
    <div className="section-header">
      <span className="section-eyebrow">{badgeText}</span>
      <h2>{sectionTitle}</h2>
      <p>{sectionSubtitle}</p>
    </div>

    {/* 3. Section Grid / Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div key={item.id} className="card-product group">
          {/* Card Title MUST ALWAYS be clean semantic <h3> */}
          <h3 className="truncate">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>

  </div>
</section>
```

---

## 4. Global Container & Spacing Utilities

### A. Global Site Container (`.site-container` / `.app-container`)
Matches the Hero section's maximum width and responsive horizontal padding across the entire website:
- **CSS Definition**:
  - `max-w-[1560px] mx-auto`
  - Responsive padding: `px-4 sm:px-6 lg:px-8 xl:px-10`
- **Mandatory Usage**: Every `<section>`, `<header>`, `<footer>`, `<nav>`, and modal container.

### B. Global Section Vertical Padding
- `.section-padding`: `py-16 sm:py-20` (64px mobile / 80px desktop) — Standard for Products, Why Choose, Industries, Testimonials.
- `.section-padding-sm`: `pt-10 pb-14 lg:pt-14 lg:pb-20` (40px–56px mobile / 56px–80px desktop) — Compact for Hero and GST compliance band.

---

## 5. Global Color Palette & Tokens

Tailwind CSS and CSS Variables defined in `src/app/globals.css` and `tailwind.config.js`:

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| `brand-500` | `#007a55` | Primary ISARVA Emerald Green (Navbar, CTA buttons, active states) |
| `brand-600` | `#006c4b` | Darker hover shade for primary buttons |
| `brand-700` | `#005a3e` | Deep active state shade |
| `brand-dark`| `#092019` | Deep contrast tone for footer and dark panels |
| `brand-light`| `#ecfdf5` | Subtle emerald background tint |
| `pos-primary` | `#059669` | **Restaurant POS** Theme Accent |
| `billsoft-primary` | `#2563eb` | **BillSoft Accounting** Theme Accent |
| `hrms-primary` | `#7c3aed` | **HRMS** Theme Accent |
| `crm-primary` | `#ea580c` | **CRM** Theme Accent |

---

## 6. Reusable Global Button & Card Classes

### Buttons
- `.btn-brand-primary`: Emerald pill CTA button with smooth lift hover (`#007a55`)
- `.btn-brand-outline`: White background with emerald border and text
- `.btn-pos`: Full-width green button for Restaurant POS cards
- `.btn-billsoft`: Full-width blue button for BillSoft Accounting cards
- `.btn-hrms`: Full-width purple button for HRMS cards
- `.btn-crm`: Full-width orange button for CRM cards

### Cards & Badges
- `.card-product`: Standard product module card with hover elevation and subtle border.
- `.card-feature`: Standard feature card with emerald hover highlight.
- `.industry-pill`: Standard industry badge card with centered icon.
- `.badge-pill`: Rounded pill tag.
- `.badge-brand`: Emerald tint badge tag.
- `.badge-trust`: White elevated badge for social proof / trust metrics.
- `.animate-continuous-loop`: Seamless infinite marquee animation for testimonials and client logos.

---

## 7. Windows Flag Rendering Standard

- **Issue**: Windows Chromium engines do not render country flag emojis (e.g., 🇮🇳, 🇸🇦) as flags; they render 2-letter fallback text strings ("IN", "SA").
- **Rule**: NEVER use raw unicode flag emojis in the UI.
- **Solution**: Always use the `<FlagIcon country="IN" />` / `<FlagIcon country="SA" />` vector SVG component or public SVG assets in `/public/images/flags/`.

---

## 8. Centralized Content Store (`src/lib/content-store.js`)

All website copy and data is centralized in `src/lib/content-store.js`:
- `hero`: Top headlines, subheadlines, trust badges, stats, CTA labels.
- `products`: 4 modules with IDs, titles, subtitles, color codes, and 6 feature bullets.
- `whyChoose`: 6 value proposition feature cards.
- `gstSection`: 6 Indian statutory compliance checkboxes and tax invoice details.
- `industries`: 6 industry sector pills.
- `testimonials`: Customer reviews, location, rating, and avatar images/initials.
- `inquiries`: Stored customer demo and trial leads.

---

## 9. Built-in Admin CMS (`/admin`)

- **Route**: `https://demoweb.isarva.in/isarva-erp/admin`
- **Base Path**: `/isarva-erp` (configured in `next.config.mjs`).
- **Features**:
  - Live editing of Hero text, Products, GST rules, and Testimonials.
  - Real-time customer leads inbox.
  - One-click **"Save All Changes"** syncing with `POST /api/content`.

---

## 10. Development Workflow: Direct Implementation (No Scratchpad & No Inspect)

- 🚫 **No Scratchpad / Scratch Files**:
  - Never create scratch scripts, scratchpad files, or temporary test scripts.
  - Always read and edit the codebase files directly in-place.
- 🚫 **No Inspect Tool During Development**:
  - Never run browser inspect / browser inspection subagents during feature development or component styling.
  - Rely on direct static analysis, Tailwind classes, and standard design system rules.

---

## 11. Developer Checklist Before Writing Code

Before authoring or modifying any component or page in this project:
- [ ] Are HTML heading tags (`<h1>`–`<h6>`, `<p>`) completely CLEAN with ZERO font-size, font-weight, tracking, or color classes?
- [ ] Are headings styled with `Space Grotesk` and body text with `Inter` matching isarvait.com?
- [ ] Are all font sizes using standard Tailwind classes (`text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`) with ZERO arbitrary `text-[...]`?
- [ ] Are section titles using native `<h2>` with zero custom `.section-title` classes?
- [ ] Are card and feature titles using semantic `<h3>` without redundant typography classes?
- [ ] Is the content wrapped in `.site-container` (`max-w-[1560px]`)?
- [ ] Is section spacing using `.section-padding` or `.section-padding-sm`?
- [ ] Are colors referencing design tokens or global brand hex variables?
- [ ] Are country flags rendered using `<FlagIcon />` instead of emoji strings?
- [ ] Is all development direct in-place without scratchpads or browser inspect routines?

