# Product Requirements Document (PRD)

**Document Version:** 1.0
**Prepared For:** Reva Surgical Hospital
**Date:** May 2026
**Status:** Ready for Development

---

## 1. Product Overview

| Field | Detail |
|---|---|
| **Product Name** | Reva Surgical Hospital — Official Website |
| **Website Type** | Static informational website |
| **Hospital Specialty** | Anorectal Surgery — Piles, Fissure, Fistula, Pilonidal Sinus |
| **Doctor** | Dr. Parth Prajapati (B.A.M.S, M.S – Ayu) |
| **Location** | Palanpur, Gujarat — 385001 |
| **Contact** | parthr120@gmail.com · +91 94269 07608 |

### Objective
Build a professional, mobile-first static website for Reva Surgical Hospital that establishes credibility, communicates the hospital's specialty services clearly, and drives patient inquiries via phone, WhatsApp, and email.

### Target Audience
- Primary: Patients (30–65 years) in Palanpur and surrounding regions of North Gujarat experiencing anorectal conditions (piles, fissure, fistula, pilonidal sinus)
- Secondary: Patient families researching treatment options on behalf of their relatives
- Tertiary: Referring general physicians and doctors seeking a specialist referral point

### Core Problem Being Solved
Patients in smaller cities like Palanpur often lack awareness of specialist anorectal care available locally and default to traveling to larger cities. This website must:
1. Build trust in Dr. Parth Prajapati's qualifications and expertise
2. Educate patients about conditions and treatment options
3. Make it easy to book a consultation without friction

### Value Proposition
> "Expert anorectal surgical care — right here in Palanpur. No need to travel to Ahmedabad or Surat. Consult Dr. Parth Prajapati for Piles, Fissure, Fistula, and Pilonidal Sinus."

---

## 2. Scope

### In Scope
- Full static website with the following pages:
  - Homepage
  - About Doctor page
  - 4 Condition/Specialty pages (Piles, Fissure, Fistula, Pilonidal Sinus)
  - Gallery page
  - Contact Us page
- WhatsApp floating CTA button (site-wide)
- Sticky phone CTA button (site-wide)
- Patient testimonials section
- FAQ section on each condition page
- Google Maps embed on Contact page
- Fully responsive (mobile, tablet, desktop)
- Basic on-page SEO (meta tags, headings, alt text)

### Out of Scope
- Online appointment booking system (no backend)
- Patient portal or login
- Blog or news section *(can be added in Phase 2)*
- Payment gateway
- Live chat integration
- Admin panel or CMS
- Multi-language support *(Hindi/Gujarati can be added later)*
- E-commerce or pharmacy module

---

## 3. Assumptions

> The following assumptions are made where inputs were not provided. These must be reviewed and confirmed by the client before development begins.

| # | Assumption | Impact if Wrong |
|---|---|---|
| A1 | Hospital offers minimally invasive / laser surgery (similar to comparable hospitals in Gujarat) | Affects treatment copy on condition pages |
| A2 | No other doctors or staff profiles need to be featured | Add a team section if needed |
| A3 | Hospital has patient photos / facility photos available for the gallery | Placeholder images will be used otherwise |
| A4 | Testimonials will be provided by the client (patient names, quotes, conditions) | Dummy testimonials used in development |
| A5 | No specific brand colors defined — branding will use a clean medical palette (white, deep teal/blue, soft green) | Revise color scheme after brand review |
| A6 | Animated stats counters (e.g., years of experience, happy patients) will be included on homepage | Remove if values are unavailable |
| A7 | The hospital operates in a single location (Palanpur) only | Add multiple locations if applicable |
| A8 | No video content is currently available | YouTube embeds added if videos are provided |
| A9 | Privacy Policy and Terms & Conditions are not required at launch | Add placeholder pages if legally needed |
| A10 | Gujarati or Hindi language toggle is not required at launch | Phase 2 enhancement |

---

## 4. Website Structure (Information Architecture)

### Sitemap

```
reva-surgical-hospital.com/
│
├── / (Homepage)
├── /about
├── /gallery
├── /contact
│
├── /piles
├── /fissure
├── /fistula
└── /pilonidal-sinus
```

### Page List with Purpose

| Page | URL | Purpose |
|---|---|---|
| Homepage | `/` | First impression, trust-building, quick access to all services and CTAs |
| About Doctor | `/about` | Establish Dr. Parth Prajapati's credentials, expertise, and patient philosophy |
| Piles | `/piles` | Educate on hemorrhoids; drive appointment booking |
| Fissure | `/fissure` | Educate on anal fissure; drive appointment booking |
| Fistula | `/fistula` | Educate on anorectal fistula; drive appointment booking |
| Pilonidal Sinus | `/pilonidal-sinus` | Educate on pilonidal sinus; drive appointment booking |
| Gallery | `/gallery` | Showcase hospital infrastructure and OT/room quality |
| Contact Us | `/contact` | Provide all contact options + map embed |

---

## 5. Page-Level Requirements

---

### 5.1 Homepage (`/`)

---

#### Section 1: Top Contact Bar
- **Goal:** Provide instant access to contact info on every page
- **Components:**
  - Left: Phone numbers (clickable `tel:` links)
  - Center/Right: Email address (clickable `mailto:` link)
  - Far Right: Social media icons (Facebook, Instagram, YouTube — if profiles exist; else omit)
- **Behavior:** Visible on all pages; collapses gracefully on mobile (icons only or single phone number)
- **Content:**
  - Phone: +91 94269 07608
  - Email: parthr120@gmail.com

---

#### Section 2: Navigation Bar
- **Goal:** Allow users to access any page quickly; persist across scroll
- **Components:**
  - Hospital logo (left)
  - Nav links: Home | About | Specialities (dropdown) | Gallery | Contact Us
  - **Specialities Dropdown:** Piles · Fissure · Fistula · Pilonidal Sinus
- **Behavior:**
  - Sticky on scroll (fixed top)
  - Hamburger menu on mobile
  - Active state on current page link
  - Dropdown opens on hover (desktop) / tap (mobile)

---

#### Section 3: Hero Section
- **Goal:** Communicate the hospital's value proposition within 5 seconds of landing
- **Components:**
  - Headline (max 10 words): e.g., *"Expert Anorectal Care — Right Here in Palanpur"*
  - Sub-headline (2 lines max): Brief description of the hospital's specialty and approach
  - Conditions list (inline tags): Piles · Fissure · Fistula · Pilonidal Sinus
  - Primary CTA Button: **"Book an Appointment"** → scrolls to contact section or links to `/contact`
  - Supporting visual: Doctor illustration (SVG) or Dr. Prajapati's professional photo
- **Behavior:**
  - Full-width hero, minimum 80vh height
  - CTA button triggers smooth scroll or page navigation
  - Visual placed right side (desktop), below text (mobile)

---

#### Section 4: About Doctor (Preview)
- **Goal:** Quickly establish trust in Dr. Parth Prajapati before the user reads further
- **Components:**
  - Doctor's professional photo
  - Name: Dr. Parth Prajapati
  - Designation: Consultant Anorectal Surgeon
  - Qualifications: B.A.M.S, M.S (Ayu)
  - 3–4 line bio summary
  - CTA: **"Read Full Profile"** → links to `/about`
- **Behavior:** Two-column layout (photo left, content right); stacks vertically on mobile

---

#### Section 5: Our Services / Specialities
- **Goal:** Give users a clear, scannable overview of all 4 conditions treated
- **Components:**
  - Section heading: "Our Specialities"
  - 4 service cards (one per condition), each containing:
    - Condition icon or image
    - Condition name (e.g., "Piles / Hemorrhoids")
    - 2-line description
    - CTA: **"Learn More"** → links to respective condition page
- **Layout:** 2×2 grid (desktop), single column (mobile)
- **Conditions:**

| Card | Title | Short Description |
|---|---|---|
| 1 | Piles (Hemorrhoids) | Swollen veins in the rectum or anus — treatable with minimally invasive surgery |
| 2 | Fissure | Small tear in the anal lining causing pain and bleeding during bowel movements |
| 3 | Fistula | Abnormal tunnel between the rectum and skin — requires surgical correction |
| 4 | Pilonidal Sinus | Infected tract near the tailbone — treated with laser/minimally invasive surgery |

---

#### Section 6: Why Choose Us
- **Goal:** Differentiate Reva Surgical Hospital from general hospitals and competing specialists
- **Components:**
  - Section heading: "Why Patients Choose Reva Surgical Hospital"
  - 4–6 benefit cards/icons, e.g.:
    - Specialist Anorectal Surgeon
    - Minimally Invasive Techniques
    - Experienced & Qualified Doctor
    - Local Expert — No Need to Travel to Big Cities
    - Compassionate, Patient-Focused Care
    - Transparent Consultation Process
- **Layout:** Icon + short heading + 1-line explanation; horizontal row (desktop), 2×3 grid (mobile)

> *[A1] Specific differentiators (e.g., laser surgery, music therapy, same-day discharge) must be confirmed with Dr. Prajapati before finalizing this section.*

---

#### Section 7: Stats Counter
- **Goal:** Build credibility through quantified achievements
- **Components (animated count-up on scroll):**
  - Years of Experience
  - Happy Patients
  - Surgeries Performed
  - Conditions Treated
- **Behavior:** Numbers animate from 0 to final value when section enters viewport
- **Note:** Exact numbers must be provided by Dr. Prajapati. If unavailable, omit this section.

---

#### Section 8: Testimonials
- **Goal:** Provide social proof from real patients
- **Components:**
  - Section heading: "What Our Patients Say"
  - Testimonial cards (minimum 4), each containing:
    - Patient avatar (icon — male/female)
    - 5-star rating display
    - Quote text (2–4 sentences)
    - Patient name
    - Condition treated (e.g., "Piles Patient")
  - Navigation: Previous / Next arrows or auto-play carousel
  - CTA: **"See More Reviews on Google"** → links to Google Maps listing
- **Behavior:** Carousel/slider on desktop; stacked cards on mobile
- **Content:** Client to provide minimum 4 real patient testimonials

---

#### Section 9: Footer
- **Goal:** Provide persistent navigation, contact, and legal links
- **Components:**
  - Column 1: Hospital logo + 2-line tagline
  - Column 2: Quick Links (Home, About, Gallery, Contact)
  - Column 3: Specialities (Piles, Fissure, Fistula, Pilonidal Sinus)
  - Column 4: Contact Details (phone, email, address)
  - Bottom bar: Copyright line + "Powered by [Developer Name]"
- **Content:**
  - Address: 2nd Floor, Dhyan Complex, Koptak Bank Rd, Shahbaaug Palace, Doctor House Area, Ambika Society, Palanpur, Gujarat — 385001

---

#### Floating / Sticky Global CTAs (All Pages)
- **WhatsApp Button** (bottom-right, always visible):
  - Opens WhatsApp with pre-filled message: *"Hello, I am from the website. I want to book an appointment."*
  - Number: +91 94269 07608
- **Phone Button** (adjacent to WhatsApp or bottom-left):
  - Direct `tel:` link to +91 94269 07608
- **Behavior:** Both persist on scroll across all pages; positioned so they don't obscure page content

---

### 5.2 About Doctor Page (`/about`)

#### Section 1: Doctor Hero
- **Goal:** Establish strong professional identity for Dr. Parth Prajapati
- **Components:**
  - Large professional photo
  - Full name: Dr. Parth Prajapati
  - Designation: Consultant Proctologist & Anorectal Surgeon
  - Qualifications: B.A.M.S, M.S (Ayu)
  - Location: Palanpur, Gujarat

#### Section 2: Full Biography
- **Goal:** Build deep trust through detailed credentials and patient philosophy
- **Components:**
  - Education timeline or narrative (medical college, surgical residency, MS Ayu specialization)
  - Memberships / associations (if any — to be provided by client)
  - Areas of expertise (list format): Complex fistula, piles, fissure, pilonidal sinus
  - Patient care philosophy (2–3 sentences)

> *[A2] If the hospital has additional staff or consulting doctors, a "Our Team" sub-section can be added.*

#### Section 3: CTA
- **Components:**
  - "Book a Consultation" button → links to `/contact`

---

### 5.3 Condition Pages (×4)

> The following template applies to all four condition pages:
> `/piles` · `/fissure` · `/fistula` · `/pilonidal-sinus`

Each page follows an identical structure with condition-specific content.

---

#### Section 1: Page Hero
- **Components:**
  - Page title: e.g., "Fissure Treatment in Palanpur"
  - 1-line subtitle with doctor name and location
  - Condition-specific hero image

#### Section 2: What is [Condition]?
- **Goal:** Educate patient at a layperson level
- **Components:**
  - Definition (3–5 sentences, plain language)
  - Anatomical illustration or relevant image

#### Section 3: Causes
- **Components:**
  - Bulleted list of 5–8 common causes
  - Each cause: bold label + 1-line explanation

#### Section 4: Symptoms
- **Components:**
  - Bulleted list of 4–6 key symptoms
  - Each symptom: bold label + brief description

#### Section 5: Clinical Images *(Optional)*
- **Components:**
  - 2–3 real condition/treatment images (if available and appropriate)
  - Must be clinically appropriate; no graphic/disturbing imagery
  - Labeled captions

#### Section 6: Treatment Options
- **Goal:** Clearly explain both conservative and surgical paths
- **Sub-sections:**

  **Conservative Management:**
  - Bulleted list (dietary changes, hydration, sitz baths, medications, etc.)

  **Surgical / Interventional Options:**
  - Table format: Procedure name | Description | Advantages | Disadvantages
  - Minimum 2 procedures per condition (e.g., laser surgery + traditional option)

#### Section 7: After-Surgery / Post-Treatment Care
- **Components:**
  - Bulleted aftercare checklist
  - Topics: wound care, diet, activity restrictions, follow-up schedule

#### Section 8: FAQ
- **Goal:** Address common patient fears and questions to reduce drop-off
- **Components:**
  - Minimum 8 Q&A pairs per condition page
  - Accordion-style (collapsed by default, expands on click)
  - Sample FAQ topics: definition, causes, diagnosis, surgery necessity, recovery time, recurrence, prevention, contagiousness

#### Section 9: Testimonials (Condition-Specific)
- Same carousel component as homepage
- Filter or show only testimonials for that condition if possible
- Minimum 2 condition-specific testimonials per page

#### Section 10: CTA Banner
- **Components:**
  - Headline: e.g., "Suffering from Fissure? Get Expert Care Today."
  - CTA Button: **"Book Appointment"** → `/contact`
  - Sub-text: Doctor name + phone number

---

**Condition Page Content Summary:**

| Condition | Key Surgical Options to Document |
|---|---|
| Piles | Laser hemorrhoidectomy, stapled hemorrhoidopexy, rubber band ligation |
| Fissure | Laser fissurectomy, Lateral Internal Sphincterotomy (LIS), Botox injection, Fissurectomy |
| Fistula | Fistulotomy, LIFT procedure, Seton technique, laser fistula treatment |
| Pilonidal Sinus | Laser sinusectomy, excision with primary closure, Pit Picking |

> *[A1] Confirm which exact procedures Dr. Prajapati performs before finalizing surgical content.*

---

### 5.4 Gallery Page (`/gallery`)

#### Section 1: Page Header
- Title: "Our Hospital Facilities"
- Sub-text: 1-line about the quality of care environment

#### Section 2: Photo Grid (Categorized)
- **Goal:** Showcase hospital quality and reassure patients about the environment
- **Categories (each with a sub-heading):**

| Category | Minimum Images |
|---|---|
| Reception & Waiting Area | 3 |
| Operation Theatre | 2 |
| OPD (Consultation Room) | 2 |
| Patient Rooms | 3 |
| Nursing Station | 2 |

- **Behavior:**
  - Grid layout: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
  - Click any image → opens lightbox with full-size view + navigation arrows
  - Lightbox closes on Escape key or clicking outside

> *[A3] Client must provide hospital photos. Placeholder images will be used during development.*

---

### 5.5 Contact Us Page (`/contact`)

#### Section 1: Page Header
- Title: "Contact Us"
- Sub-text: "Book a consultation or walk in at our Palanpur clinic"

#### Section 2: Contact Details
- **Components (card layout, 2–3 columns):**

  **Phone:**
  - Label: "Call Us"
  - Value: +91 94269 07608 (clickable tel: link)
  - Icon: Phone icon

  **Email:**
  - Label: "Email Us"
  - Value: parthr120@gmail.com (clickable mailto: link)
  - Icon: Email icon

  **Address:**
  - Label: "Visit Us"
  - Value: 2nd Floor, Dhyan Complex, Koptak Bank Rd, Shahbaaug Palace, Doctor House Area, Ambika Society, Palanpur, Gujarat — 385001
  - Icon: Location pin icon

#### Section 3: Google Maps Embed
- **Goal:** Help patients navigate to the clinic
- **Components:**
  - Full-width embedded Google Map
  - Pinned location: Palanpur clinic address
  - Map height: 400px minimum

#### Section 4: Contact Form *(Phase 2 — requires backend)*
> *[Out of Scope for v1.0]* Static site cannot natively process forms. Options for Phase 2: Formspree, Netlify Forms, or EmailJS integration.

---

## 6. Core Features

### Feature 1: WhatsApp Floating CTA
- **Description:** A fixed WhatsApp icon button visible on all pages at all times
- **User Benefit:** One-tap access to book appointment without calling
- **Behavior:**
  - Fixed position: bottom-right corner, z-index above all content
  - Opens WhatsApp Web or app with pre-filled message
  - Pre-filled message: "Hello, I am from the website. I want to book an appointment."
  - Number: +91 94269 07608

### Feature 2: Sticky Navigation Bar
- **Description:** Navigation persists at the top of the viewport while scrolling
- **User Benefit:** Users can navigate to any section without scrolling back to top
- **Behavior:** Becomes solid/shadowed on scroll; transparent at page top (optional aesthetic)

### Feature 3: Condition Pages (×4 SEO Pages)
- **Description:** Dedicated pages for each of the 4 conditions
- **User Benefit:** Educates patients and ranks for local search queries (e.g., "piles doctor in Palanpur")
- **Behavior:** Consistent template, condition-specific content; each page independently navigable and shareable

### Feature 4: Testimonial Carousel
- **Description:** Auto-rotating patient review slider with manual navigation
- **User Benefit:** Builds trust through social proof
- **Behavior:** Auto-rotates every 4 seconds; pauses on hover; swipeable on mobile

### Feature 5: FAQ Accordion
- **Description:** Collapsible Q&A sections on each condition page
- **User Benefit:** Reduces anxiety, answers pre-consultation questions
- **Behavior:** All items collapsed by default; only one item open at a time; smooth expand/collapse animation

### Feature 6: Animated Stats Counter
- **Description:** Numbers count up when the section scrolls into view
- **User Benefit:** Makes statistics more engaging and memorable
- **Behavior:** Triggered by Intersection Observer API; counts from 0 to target value over 1.5 seconds

### Feature 7: Gallery Lightbox
- **Description:** Click any gallery image to open full-size view
- **User Benefit:** Allows patients to examine facilities in detail
- **Behavior:** Overlay lightbox; keyboard navigable (left/right arrows, Escape to close); swipeable on mobile

### Feature 8: Mobile Hamburger Menu
- **Description:** Collapsed navigation menu for mobile screens
- **User Benefit:** Clean mobile experience without overwhelming the small screen
- **Behavior:** Tap hamburger → full-screen or slide-in menu; tap X or outside to close

---

## 7. User Flows

### Flow 1: New Patient — Discovery to Inquiry (Primary Flow)
```
1. User searches Google: "piles doctor in Palanpur" or "fissure treatment near me"
2. Lands on Homepage or a Condition Page (via SEO)
3. Reads hero / condition description → recognizes symptoms
4. Scrolls to testimonials → builds trust
5. Taps WhatsApp button OR clicks "Book Appointment"
6. Opens WhatsApp / calls → inquiry initiated
✓ Conversion complete
```

### Flow 2: Patient Researching a Condition
```
1. User lands on Homepage
2. Clicks condition card (e.g., "Fissure") → navigates to /fissure
3. Reads: What is Fissure → Causes → Symptoms → Treatment Options
4. Reviews FAQ → concerns addressed
5. Reads testimonials → trust established
6. Clicks CTA banner at bottom of page → goes to /contact
7. Calls or WhatsApps the clinic
✓ Conversion complete
```

### Flow 3: Patient Evaluating the Doctor
```
1. User lands on Homepage
2. Reads doctor preview section → clicks "Read Full Profile"
3. Lands on /about → reads qualifications, bio, expertise
4. Satisfied → clicks "Book a Consultation"
5. Navigates to /contact → calls or WhatsApps
✓ Conversion complete
```

### Flow 4: Family Member Researching for Patient
```
1. User (family member) lands on Homepage
2. Navigates to a condition page via Specialities dropdown
3. Shares the page with the patient (WhatsApp share or URL copy)
4. OR directly contacts the clinic via phone/WhatsApp
✓ Referral/inquiry initiated
```

---

## 8. Content Strategy

### Tone & Voice
- **Reassuring** — Patients are often anxious or embarrassed about anorectal conditions; language must be calm, warm, and non-judgmental
- **Clear & Simple** — Avoid jargon; all medical terms must be explained in plain language
- **Professional but Approachable** — Not cold or clinical; not casual or colloquial
- **Local & Relatable** — Emphasize Palanpur locality; "no need to travel far for expert care"

### Content Types Required

| Type | Where Used | Provided By |
|---|---|---|
| Doctor bio text | About page, Homepage preview | Client (Dr. Prajapati) |
| Condition descriptions | 4 condition pages | Developer/Copywriter (to be reviewed by doctor) |
| Treatment option details | 4 condition pages | Developer/Copywriter (medical-reviewed) |
| FAQ content | 4 condition pages (8–10 Q&As each) | Developer/Copywriter |
| Patient testimonials | Homepage + condition pages (min. 4 total) | Client |
| Hospital photos | Gallery page | Client |
| Doctor photo | Homepage, About page | Client |
| Stats/numbers | Homepage counter section | Client |
| Address & contact details | Header, Contact page, Footer | ✅ Provided |

### SEO Content Requirements
- Each page must target a primary keyword:

| Page | Primary Keyword |
|---|---|
| Homepage | "anorectal surgeon in Palanpur" / "piles doctor Palanpur" |
| /piles | "piles treatment in Palanpur" / "hemorrhoid doctor Palanpur" |
| /fissure | "fissure treatment Palanpur" / "anal fissure doctor near me" |
| /fistula | "fistula treatment Palanpur Gujarat" |
| /pilonidal-sinus | "pilonidal sinus treatment Palanpur" |
| /about | "Dr. Parth Prajapati proctologist Palanpur" |

---

## 9. Design & UX Guidelines

### Color Palette *(Assumption A5 — to be confirmed)*
| Role | Color | Hex |
|---|---|---|
| Primary | Deep Teal / Medical Blue | `#1A6B8A` or similar |
| Accent | Soft Green | `#4CAF82` or similar |
| Background | Off-White | `#F9FAFB` |
| Text | Charcoal | `#1F2937` |
| CTA Button | Primary color with white text | — |

### Typography
- **Headings:** Clean sans-serif (e.g., Inter, Poppins, or Nunito)
- **Body text:** Readable sans-serif, minimum 16px on mobile
- **Minimum line height:** 1.6 for body text

### Layout Principles
- Mobile-first design — majority of patients will access via mobile
- Maximum content width: 1200px, centered
- Section padding: minimum 60px top/bottom (desktop), 40px (mobile)
- Cards and sections should have subtle box shadows, not heavy borders
- Use whitespace generously — do not crowd medical content

### Responsiveness Requirements
| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | Single column, hamburger nav, stacked sections |
| Tablet (768px – 1024px) | 2-column grids, full nav visible if space allows |
| Desktop (> 1024px) | Full layout, 3–4 column grids where applicable |

### Accessibility Considerations
- All images must have descriptive `alt` text
- Color contrast ratio: minimum 4.5:1 for body text
- All interactive elements (buttons, links) must be keyboard-navigable
- Font size minimum: 16px body, 14px secondary labels
- Focus states must be visible on all interactive elements
- `aria-label` attributes on icon-only buttons (WhatsApp, phone)

---

## 10. Technical Constraints

### Static Site Architecture
- **Technology options:** Pure HTML/CSS/JS · or · Static site generator (Jekyll, Hugo, Eleventy, Astro)
- **No backend required** for v1.0
- **Hosting options:** GitHub Pages, Netlify, Vercel (all support custom domains)
- **Contact form:** Not included in v1.0 (no backend). Optional workaround: Formspree (free tier, no backend needed)

### Performance Expectations
- **Target Page Load:** Under 3 seconds on 4G mobile connection
- **Image optimization:** All images must be compressed (WebP format preferred, with JPG fallback)
- **Lazy loading:** Apply to all below-the-fold images
- **No unnecessary JavaScript libraries** — keep bundle minimal
- **Google Fonts:** Load asynchronously to avoid render-blocking

### SEO Requirements
- Unique `<title>` and `<meta description>` on every page
- Proper heading hierarchy: one `<h1>` per page, logical `<h2>` / `<h3>` structure
- `<meta name="robots" content="index, follow">` on all public pages
- Schema markup (LocalBusiness + Physician) on homepage and contact page
- `robots.txt` and `sitemap.xml` generated at launch
- Open Graph tags for social sharing (title, description, image)

### Browser Support
- Chrome, Firefox, Safari, Edge — latest 2 versions
- Mobile: iOS Safari 14+, Android Chrome

---

## 11. Success Metrics

| Metric | Target | Measurement Method |
|---|---|---|
| WhatsApp inquiries per month | 30+ within 3 months of launch | WhatsApp business reports |
| Phone call clicks per month | 20+ within 3 months | Google Analytics (event tracking) |
| Google Maps views increase | 2× within 6 months | Google Business Profile Insights |
| Bounce rate | Below 60% | Google Analytics |
| Average session duration | Above 1 min 30 sec | Google Analytics |
| Page load speed | Under 3 seconds | Google PageSpeed Insights (score ≥ 80) |
| Google search ranking | Top 3 for "piles doctor Palanpur" within 6 months | Google Search Console |

---

## 12. Risks & Tradeoffs

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Client does not provide photos/testimonials on time | High | High | Use high-quality stock images as placeholders; define content deadline in project agreement |
| Doctor qualification details are incomplete | Medium | Medium | Collect full credentials checklist before writing About page |
| No Google Business Profile listing exists | Medium | High | Create/claim Google Business Profile before launch for map embed and reviews |
| Contact form missing reduces lead capture | Medium | Medium | Use Formspree (no-backend form) as a Phase 1.5 addition |
| Static site cannot handle dynamic reviews | Low | Low | Link directly to Google Maps reviews; embed Google review widget if needed |
| Competing clinics in Palanpur outrank on SEO | Medium | High | Prioritize local SEO (LocalBusiness schema, GMB optimization, location-specific keywords) |
| WhatsApp number changes | Low | High | Centralize number in a config file / single variable for easy update |

---

## 13. Future Enhancements (Phase 2)

| Enhancement | Description | Priority |
|---|---|---|
| Online Appointment Form | Formspree or backend-integrated contact form with date/time selector | High |
| Gujarati / Hindi Language Toggle | Regional language support for broader reach in rural Gujarat | High |
| Blog / Health Articles | SEO content targeting long-tail anorectal health queries | Medium |
| YouTube Video Integration | Embed procedure explanation videos by Dr. Prajapati | Medium |
| Google Reviews Widget | Auto-display live Google reviews on site | Medium |
| WhatsApp Chat Widget | Embedded WhatsApp chat (not just redirect) | Low |
| Patient Before/After Gallery | Anonymized clinical outcome images (with consent) | Low |
| Animation / Scroll Effects | Scroll-triggered animations for sections (using AOS or similar) | Low |
| CMS Integration | Allow client to update testimonials/content without a developer | Low |

---

## Appendix: Key Client Deliverables Required Before Development

The following must be collected from Dr. Parth Prajapati / Hospital before development begins:

- [ ] Professional photo of Dr. Parth Prajapati (high resolution, formal attire)
- [ ] Complete educational background and timeline (college names, years, degrees)
- [ ] List of professional memberships and associations
- [ ] Hospital facility photos (Reception, OT, OPD, rooms — minimum 15 photos)
- [ ] Minimum 4 patient testimonials (name, condition, review text; written consent)
- [ ] Exact stats for homepage counter (years experience, patients, surgeries)
- [ ] List of surgical procedures actually performed (to confirm A1)
- [ ] Google Business Profile link (for Maps embed and review link)
- [ ] Social media handles (Facebook, Instagram, YouTube — if active)
- [ ] Preferred color scheme / logo (or approval to design from scratch)
- [ ] Domain name (registered and pointed to hosting)
- [ ] Any existing marketing material (pamphlets, brochures) for reference

---

*PRD prepared based on client inputs and industry-standard hospital website benchmarks (Assumption A5 applies). All assumptions marked [A#] must be confirmed before development kickoff.*