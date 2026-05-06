# Feature Specifications — Reva Surgical Hospital Website

**Version:** 1.0 · **Date:** May 2026 · **Type:** Static Site (HTML/CSS/JS)

---

## Feature List

1. Top Contact Bar
2. Sticky Navigation Bar with Dropdown
3. Mobile Hamburger Menu
4. Hero Section
5. About Doctor Preview
6. Services / Specialities Cards
7. Why Choose Us Section
8. Animated Stats Counter
9. Testimonial Carousel
10. Footer
11. WhatsApp Floating CTA
12. Phone Floating CTA
13. Condition Page Template (×4)
14. FAQ Accordion
15. Gallery Page with Lightbox
16. Contact Us Page with Google Maps
17. Condition-Specific CTA Banner

---

## Feature: Top Contact Bar

### 1. Purpose
- Instant access to phone, email, and social links on every page
- Reduce friction for patients wanting to call/email immediately

### 2. User Interaction
1. User sees bar at page top (above navigation)
2. Clicks phone number → device initiates call
3. Clicks email → mail client opens
4. Clicks social icon → new tab to social profile

### 3. System Behavior
- Phone: `<a href="tel:+919426907608">`
- Email: `<a href="mailto:parthr120@gmail.com">`
- Social icons: `target="_blank"` + `rel="noopener noreferrer"`
- Rendered as first element before nav

### 4. States
| State | Description |
|---|---|
| Default Desktop | Full bar — phone left, email center-right, social far right |
| Default Mobile | Icons only (no labels); social icons hidden or in footer |
| Hover | Phone/email underline; social icons scale 1.1× |

### 5. Edge Cases
- No social profiles → omit social section; no broken links
- Screens <320px → bar hides; content accessible in footer
- No mail client → `mailto:` fails silently (standard behavior)

### 6. Constraints
- Max height: 40px desktop, 36px mobile
- `aria-label` on all icon-only links
- Phone number centralized in single config variable

### 7. Dependencies
- None (pure HTML/CSS)

### 8. Notes
- Phone: +91 94269 07608 | Email: parthr120@gmail.com
- Social handles to be confirmed by client

---

## Feature: Sticky Navigation Bar with Dropdown

### 1. Purpose
- Navigate to any page from any scroll position
- Quick access to 4 condition pages via "Specialities" dropdown

### 2. User Interaction
1. Nav bar sits below contact bar on load
2. Scroll down → nav sticks to viewport top
3. Hover "Specialities" (desktop) → dropdown with 4 links
4. Click any link → navigate to page
5. Current page link highlighted

### 3. System Behavior
- Sticky via `position: fixed; top: 0` on scroll (Intersection Observer)
- Sticky state adds `box-shadow: 0 2px 10px rgba(0,0,0,0.1)` + white background
- Dropdown on `mouseenter`, hidden on `mouseleave` with 200ms delay
- Active link: `border-bottom: 2px solid #1A6B8A; color: #1A6B8A`
- Links: Home | About | Specialities (dropdown) | Gallery | Contact Us
- Dropdown: Piles · Fissure · Fistula · Pilonidal Sinus

### 4. States
| State | Description |
|---|---|
| At top | Transparent/white bg, no shadow |
| Sticky | White bg, shadow, fixed top |
| Dropdown closed | "Specialities" text only |
| Dropdown open | 4-item vertical list below trigger |
| Active link | Accent border + color |
| Hover | Text color → primary (#1A6B8A) |

### 5. Edge Cases
- Rapid scroll → passive scroll listener or rAF
- Keyboard nav → dropdown opens on Enter/Space, items focusable with Tab
- Dropdown near edge → `right: 0` to prevent overflow
- Short page → nav stays in flow, never sticky

### 6. Constraints
- `z-index: 1000`; logo links to `/`
- Max content width: 1200px centered
- WCAG 2.1 AA keyboard-navigable

### 7. Dependencies
- JS (Intersection Observer); logo asset

### 8. Notes
- [A5] Logo TBD; use text fallback

---

## Feature: Mobile Hamburger Menu

### 1. Purpose
- Clean mobile navigation without overwhelming small screens

### 2. User Interaction
1. Screens <768px: hamburger icon (☰) replaces nav links
2. Tap → slide-in/overlay menu appears
3. Tap link → navigates + closes menu
4. Tap ✕ or outside → closes menu

### 3. System Behavior
- Slide from right (`transform: translateX`) or full-screen overlay
- Body scroll locked (`overflow: hidden` on body)
- "Specialities" expanded inline as sub-list
- Close on Escape key
- Reverse animation on close (300ms ease-out)

### 4. States
| State | Description |
|---|---|
| Closed | Hamburger icon only |
| Open | Full menu + dark backdrop |
| Animating | 300ms slide/fade transition |

### 5. Edge Cases
- Device rotation while open → close menu, unlock scroll
- Resize above 768px → close menu, show desktop nav
- Rapid taps → debounce toggle (100ms)
- Focus trapped within menu when open

### 6. Constraints
- `z-index: 9999`; animation ≤300ms
- Touch targets: minimum 44×44px

### 7. Dependencies
- JS for toggle, scroll lock, resize listener; CSS transitions

### 8. Notes
- Consider `<dialog>` element for focus trapping

---

## Feature: Hero Section

### 1. Purpose
- Communicate value proposition within 5 seconds
- Drive appointment bookings

### 2. User Interaction
1. User lands on homepage → hero is first visible content
2. Reads headline + sub-headline + condition tags
3. Clicks "Book an Appointment" CTA

### 3. System Behavior
- Min 80vh height, full width
- Desktop: text left, image right
- Mobile: text above image
- CTA → smooth scroll to contact section or navigate to `/contact`
- Condition tags: non-interactive inline badges

### 4. States
| State | Description |
|---|---|
| Default | Headline, sub-headline, tags, CTA, doctor visual |
| CTA Hover | Background darkens, shadow increases |
| CTA Focus | Visible focus ring |
| CTA Active | Scale 0.98 |

### 5. Edge Cases
- No doctor photo → use medical SVG illustration
- Long headline → `max-width` on text container
- Mobile landscape → reduce to 60vh
- Slow image → solid #F0F9FF placeholder bg

### 6. Constraints
- Headline max 10 words; sub-headline max 2 lines
- CTA text: "Book an Appointment"
- Font: 36px headline, 18px sub-headline (desktop min)

### 7. Dependencies
- Doctor photo or SVG; smooth scroll JS

### 8. Notes
- Headline: "Expert Anorectal Care — Right Here in Palanpur"

---

## Feature: About Doctor Preview

### 1. Purpose
- Quick trust-building for Dr. Parth Prajapati on homepage

### 2. User Interaction
1. Scrolls to section → sees photo, name, qualifications, bio
2. Clicks "Read Full Profile" → `/about`

### 3. System Behavior
- Two-column: photo left, content right (desktop); stacked (mobile)
- "Read Full Profile" navigates to `/about`

### 4. States
| State | Description |
|---|---|
| Default | Photo + name + designation + qualifications + bio + CTA |
| CTA Hover | Underline/color change |

### 5. Edge Cases
- No photo → placeholder silhouette with name
- Long bio → truncate at 4 lines with CSS `line-clamp`

### 6. Constraints
- Name: Dr. Parth Prajapati | Designation: Consultant Anorectal Surgeon
- Qualifications: B.A.M.S, M.S (Ayu) | Bio ≤ 280 chars

### 7. Dependencies
- Doctor photo (client); `/about` page

### 8. Notes
- [A2] Only one doctor unless client confirms otherwise

---

## Feature: Services / Specialities Cards

### 1. Purpose
- Scannable overview of 4 conditions; drive traffic to condition pages

### 2. User Interaction
1. Scrolls to "Our Specialities"
2. Sees 4 cards
3. Clicks "Learn More" → condition page

### 3. System Behavior
- 2×2 grid (desktop), 1 column (mobile)
- Card: icon + name + 2-line desc + "Learn More"
- Hover: card elevates (shadow + translateY(-4px))

### 4. States
| State | Description |
|---|---|
| Default | 4 cards in grid |
| Hover | Card lifts with deeper shadow |
| Focus | Focus outline on "Learn More" |

### 5. Edge Cases
- Icon load fails → colored placeholder with condition name
- 480–768px → 2 columns; <480px → 1 column

### 6. Constraints
- Piles: "Swollen veins in the rectum or anus — treatable with minimally invasive surgery"
- Fissure: "Small tear in the anal lining causing pain and bleeding during bowel movements"
- Fistula: "Abnormal tunnel between the rectum and skin — requires surgical correction"
- Pilonidal Sinus: "Infected tract near the tailbone — treated with laser/minimally invasive surgery"

### 7. Dependencies
- 4 icon/image assets; condition pages must exist

### 8. Notes
- [A1] Confirm surgical approaches before finalizing

---

## Feature: Why Choose Us Section

### 1. Purpose
- Differentiate Reva from general hospitals and competitors

### 2. User Interaction
- User scrolls → reads 4–6 benefit cards with icons and text

### 3. System Behavior
- Horizontal row (desktop), 2×3 grid (mobile)
- Each: icon (40×40px) + bold heading + 1-line explanation
- Optional: fade-in on scroll via Intersection Observer

### 4. States
- Default: all cards visible
- Optional scroll-reveal: fade/slide in

### 5. Edge Cases
- Fewer than 4 benefits → center-align remaining
- Icon load fails → show heading only

### 6. Constraints
- Benefits: Specialist Surgeon · Minimally Invasive · Experienced Doctor · Local Expert · Compassionate Care · Transparent Process
- [A1] Confirm specific differentiators with Dr. Prajapati

### 7. Dependencies
- 6 icon SVGs

### 8. Notes
- data.md mentions music therapy + same-day discharge as competitor differentiators — confirm if Reva offers similar

---

## Feature: Animated Stats Counter

### 1. Purpose
- Build credibility through quantified achievements

### 2. User Interaction
1. User scrolls to section → numbers animate from 0 to target
2. Sees final stats (e.g., "5000+ Happy Patients")

### 3. System Behavior
- Intersection Observer (threshold: 0.3) triggers count-up
- `requestAnimationFrame` with ease-out over 1.5s
- Runs once — does not re-trigger
- Format: number + "+" suffix

### 4. States
| State | Description |
|---|---|
| Pre-scroll | Shows "0" |
| Animating | 0 → target (1.5s ease-out) |
| Complete | Final number, static |

### 5. Edge Cases
- JS disabled → show final static numbers in HTML
- Section in viewport on load → trigger immediately
- Large numbers → locale format (e.g., "10,000+")
- Stats not provided → omit entire section

### 6. Constraints
- Stats TBD: Years of Experience · Happy Patients · Surgeries Performed · Conditions Treated
- Duration: 1.5s; trigger threshold: 30%

### 7. Dependencies
- JS (Intersection Observer); client must provide values

### 8. Notes
- [A6] Section omitted if values unavailable

---

## Feature: Testimonial Carousel

### 1. Purpose
- Social proof from real patients to build trust

### 2. User Interaction
1. Sees "What Our Patients Say"
2. Cards auto-rotate every 4s
3. Hover → pauses
4. Click arrows → navigate
5. Swipe on mobile
6. Click "See More Reviews on Google" → new tab

### 3. System Behavior
- 1 card (mobile), 2–3 cards (desktop)
- Auto-rotate: `setInterval(4000)`, paused on hover
- Arrow nav: `translateX` transition (400ms ease)
- Infinite loop at boundaries
- Swipe: `touchstart`/`touchend` with 50px threshold
- Card: avatar icon + 5★ + quote + name + condition label
- Google link: `target="_blank"` + `rel="noopener noreferrer"`

### 4. States
| State | Description |
|---|---|
| Default | First card(s), auto-rotating |
| Paused | On hover/focus |
| Navigating | 400ms slide transition |

### 5. Edge Cases
- <3 testimonials → 1 card mode; hide arrows if only 1
- Long quote → truncate at 4 lines with ellipsis
- No Google Maps URL → hide "See More Reviews" link

### 6. Constraints
- Min 4 testimonials (client deliverable)
- Auto-rotate: 4s; transition: 400ms
- [A4] Dummy testimonials used if real ones unavailable

### 7. Dependencies
- JS (carousel, touch events); CSS transitions; client testimonials

### 8. Notes
- Same component reused on condition pages with condition-specific testimonials

---

## Feature: WhatsApp Floating CTA

### 1. Purpose
- One-tap appointment booking via WhatsApp from any page

### 2. User Interaction
1. Green WhatsApp icon floats bottom-right on every page
2. Click → WhatsApp opens with pre-filled message

### 3. System Behavior
- `position: fixed; bottom: 24px; right: 24px; z-index: 9998`
- Link: `https://wa.me/919426907608?text=Hello%2C%20I%20am%20from%20the%20website.%20I%20want%20to%20book%20an%20appointment.`
- Pulse animation (CSS keyframe): 3 cycles on page load, then stops

### 4. States
| State | Description |
|---|---|
| Default | Green 56×56px circle, fixed bottom-right |
| Hover | Scale 1.1×, deeper shadow |
| Pulse | 3-cycle scale pulse on load |
| Active | Scale 0.95× |

### 5. Edge Cases
- No WhatsApp installed → wa.me opens WhatsApp Web
- Phone number changes → single config variable
- Overlaps with phone CTA → phone at bottom-left, 60px gap if stacked

### 6. Constraints
- Number: 919426907608; pre-filled: "Hello, I am from the website. I want to book an appointment."
- `aria-label="Chat on WhatsApp"`; size: 56×56px

### 7. Dependencies
- WhatsApp SVG icon

### 8. Notes
- Number centralized in config for site-wide updates

---

## Feature: Phone Floating CTA

### 1. Purpose
- One-tap phone calling from any page

### 2. User Interaction
1. Phone icon floats bottom-left
2. Click → phone dialer opens

### 3. System Behavior
- `position: fixed; bottom: 24px; left: 24px; z-index: 9998`
- `<a href="tel:+919426907608">`

### 4. States
- Default: 56×56px circle, bottom-left
- Hover: scale 1.1×, deeper shadow

### 5. Edge Cases
- Desktop without telephony → link renders; browser handles gracefully

### 6. Constraints
- `aria-label="Call us"`; size: 56×56px

### 7. Dependencies
- Phone SVG icon

### 8. Notes
- Same config variable as WhatsApp CTA

---

## Feature: Footer

### 1. Purpose
- Persistent navigation, contact info, and legal links on every page

### 2. User Interaction
1. Scrolls to bottom → sees 4-column footer
2. Clicks links → navigates; clicks phone/email → initiates call/email

### 3. System Behavior
- 4 columns (desktop): Logo+tagline | Quick Links | Specialities | Contact
- Stacked (mobile)
- Bottom bar: "© 2026 Reva Surgical Hospital. All rights reserved." + developer credit

### 4. States
- Default: all columns; link hover: underline + color

### 5. Edge Cases
- No social profiles → omit icons
- Address wraps on narrow screens → natural wrapping

### 6. Constraints
- Address: 2nd Floor, Dhyan Complex, Koptak Bank Rd, Shahbaaug Palace, Doctor House Area, Ambika Society, Palanpur, Gujarat — 385001
- Quick Links: Home, About, Gallery, Contact
- Specialities: Piles, Fissure, Fistula, Pilonidal Sinus

### 7. Dependencies
- Logo asset

### 8. Notes
- Reusable component across all pages

---

## Feature: Condition Page Template (×4)

> Applies to: `/piles` · `/fissure` · `/fistula` · `/pilonidal-sinus`

### 1. Purpose
- Educate patients about each condition at a layperson level
- Drive appointment bookings via SEO landing pages

### 2. User Interaction
1. User lands via Google search or internal link
2. Reads: Page Hero → What is [Condition] → Causes → Symptoms → Clinical Images → Treatment → Post-Surgery Care → FAQ → Testimonials → CTA Banner

### 3. System Behavior
- **Page Hero:** Title (e.g., "Fissure Treatment in Palanpur") + subtitle + hero image
- **What is [Condition]:** 3–5 sentence definition + illustration
- **Causes:** Bulleted list, 5–8 items (bold label + 1-line explanation)
- **Symptoms:** Bulleted list, 4–6 items (bold label + description)
- **Clinical Images:** 2–3 labeled images in a row (optional; only if appropriate)
- **Treatment:** Two sub-sections:
  - Conservative: bulleted list
  - Surgical: table with columns — Procedure | Description | Advantages | Disadvantages (min 2 procedures)
- **Post-Surgery Care:** bulleted checklist (wound care, diet, activity, follow-up)
- **FAQ:** Accordion component (see FAQ Accordion feature)
- **Testimonials:** Carousel filtered to condition (see Testimonial Carousel)
- **CTA Banner:** Headline + "Book Appointment" button + doctor name/phone

### 4. States
- All sections static on load
- FAQ: collapsed/expanded (see FAQ feature)
- Testimonials: carousel states
- CTA hover/focus/active states

### 5. Edge Cases
- Clinical images unavailable → omit section entirely
- Fewer than 2 condition-specific testimonials → show general testimonials
- Treatment table on mobile → horizontal scroll or stacked card layout
- Very long FAQ answers → no truncation; accordion expands fully

### 6. Constraints
- Each page targets a primary SEO keyword
- Unique `<title>` and `<meta description>` per page
- Heading hierarchy: one `<h1>` per page
- Min 8 FAQ items per condition; min 2 testimonials
- Surgical options per condition:
  - Piles: Laser hemorrhoidectomy, stapled hemorrhoidopexy, rubber band ligation
  - Fissure: Laser fissurectomy, LIS, Fissurectomy, Botox injection
  - Fistula: Fistulotomy, LIFT, Seton technique, laser treatment
  - Pilonidal Sinus: Laser sinusectomy, excision with primary closure, Pit Picking
- [A1] Confirm which procedures Dr. Prajapati actually performs

### 7. Dependencies
- FAQ Accordion component; Testimonial Carousel component
- Condition-specific content (developer/copywriter, reviewed by doctor)
- Hero images per condition

### 8. Notes
- All 4 pages share identical template — use a reusable layout with swappable content
- SEO keywords: see PRD Section 8

---

## Feature: FAQ Accordion

### 1. Purpose
- Address common patient fears/questions to reduce drop-off and anxiety

### 2. User Interaction
1. User sees list of questions (all collapsed)
2. Clicks a question → answer expands below
3. Clicks same question → collapses
4. Clicks a different question → previous collapses, new one expands

### 3. System Behavior
- All items collapsed by default
- Only one item open at a time (exclusive accordion)
- Expand/collapse: `max-height` transition (300ms ease) or CSS `details`/`summary`
- Toggle icon: "+" when collapsed, "−" when expanded (rotates 45°)
- Click target: entire question row (not just the icon)

### 4. States
| State | Description |
|---|---|
| All collapsed | Default — only questions visible |
| One expanded | Answer visible below clicked question |
| Animating | 300ms expand/collapse transition |

### 5. Edge Cases
- User clicks rapidly → transitions queue gracefully (no visual glitch)
- Very long answer → no truncation; container grows to fit
- JS disabled → use native `<details>`/`<summary>` as fallback (always functional)
- Screen readers → use `aria-expanded`, `aria-controls`, `role="button"` on triggers

### 6. Constraints
- Min 8 Q&A pairs per condition page
- Topics: definition, causes, diagnosis, surgery necessity, recovery time, recurrence, prevention, contagiousness
- Animation: 300ms

### 7. Dependencies
- JS for exclusive accordion behavior (or CSS-only with `:has()` if browser support allows)

### 8. Notes
- Component is reusable — same accordion used on all 4 condition pages

---

## Feature: Gallery Page with Lightbox

### 1. Purpose
- Showcase hospital infrastructure to reassure patients about environment quality

### 2. User Interaction
1. User navigates to `/gallery`
2. Sees categorized photo grid with sub-headings
3. Clicks any image → lightbox opens with full-size view
4. Uses arrows or swipes to navigate between images
5. Presses Escape or clicks outside → lightbox closes

### 3. System Behavior
- Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Categories with sub-headings: Reception & Waiting Area · Operation Theatre · OPD · Patient Rooms · Nursing Station
- Click image → overlay lightbox (dark backdrop, centered image)
- Lightbox nav: left/right arrows + keyboard (← →) + swipe
- Lightbox close: Escape key, ✕ button, or click outside image
- Body scroll locked when lightbox is open
- Images lazy-loaded (`loading="lazy"`)

### 4. States
| State | Description |
|---|---|
| Grid view | All images in categorized grid |
| Lightbox open | Single image, dark overlay, nav arrows |
| Lightbox navigating | Fade/slide between images |
| Lightbox closing | Fade-out overlay |

### 5. Edge Cases
- Fewer images than expected → adjust grid (no empty columns)
- Image fails to load → show "Image unavailable" placeholder with icon
- Only 1 image in a category → hide nav arrows in lightbox for that section
- Rapid arrow clicking → debounce navigation (200ms)
- [A3] No photos provided → use stock hospital images as placeholders

### 6. Constraints
- Min images per category: Reception 3 · OT 2 · OPD 2 · Rooms 3 · Nursing 2
- All images: WebP (JPG fallback), compressed, descriptive `alt` text
- Lightbox `z-index: 99999`

### 7. Dependencies
- JS for lightbox, keyboard events, touch events
- Client-provided hospital photos

### 8. Notes
- [A3] Client must provide photos; placeholders used during dev
- Consider a CSS `object-fit: cover` with fixed aspect ratio for uniform grid

---

## Feature: Contact Us Page with Google Maps

### 1. Purpose
- Provide all contact methods and help patients navigate to the clinic

### 2. User Interaction
1. User navigates to `/contact`
2. Sees page header: "Contact Us" + sub-text
3. Sees 3 contact cards: Phone, Email, Address
4. Clicks phone → dials; clicks email → opens mail client
5. Sees embedded Google Map with clinic pin
6. Interacts with map (zoom, pan, get directions)

### 3. System Behavior
- Header: "Contact Us" / "Book a consultation or walk in at our Palanpur clinic"
- 3 contact cards in a row (desktop), stacked (mobile):
  - Phone: icon + "Call Us" + `<a href="tel:+919426907608">+91 94269 07608</a>`
  - Email: icon + "Email Us" + `<a href="mailto:parthr120@gmail.com">parthr120@gmail.com</a>`
  - Address: icon + "Visit Us" + full address text
- Google Maps: `<iframe>` embed, full width, min height 400px
- Map pinned to: Palanpur clinic address

### 4. States
| State | Description |
|---|---|
| Default | Header + 3 cards + map |
| Card hover | Subtle shadow/elevation |
| Map interactive | Standard Google Maps controls |

### 5. Edge Cases
- Google Maps iframe blocked (ad blocker) → show static map image + "Open in Google Maps" link as fallback
- Address text wraps on mobile → allow natural wrapping
- Map fails to load → show address text prominently as fallback

### 6. Constraints
- Address: 2nd Floor, Dhyan Complex, Koptak Bank Rd, Shahbaaug Palace, Doctor House Area, Ambika Society, Palanpur, Gujarat — 385001
- Map height: min 400px
- No contact form in v1.0 (out of scope — Phase 2 via Formspree)

### 7. Dependencies
- Google Maps embed (iframe, no API key needed for basic embed)
- Google Business Profile listing (for accurate pin)

### 8. Notes
- [A9] No contact form in v1.0; consider Formspree as Phase 1.5 addition

---

## Feature: Condition-Specific CTA Banner

### 1. Purpose
- Drive appointment booking at the bottom of every condition page after the user has consumed educational content

### 2. User Interaction
1. User reaches bottom of condition page content
2. Sees a visually prominent banner with condition-specific headline
3. Clicks "Book Appointment" → navigates to `/contact`

### 3. System Behavior
- Full-width banner with primary color background (#1A6B8A)
- White text headline: e.g., "Suffering from Fissure? Get Expert Care Today."
- CTA button: white bg, primary text, "Book Appointment" → `/contact`
- Sub-text: "Dr. Parth Prajapati · +91 94269 07608"
- Phone number is a clickable `tel:` link within sub-text

### 4. States
| State | Description |
|---|---|
| Default | Banner with headline, CTA, sub-text |
| CTA Hover | Button inverts colors or elevates |
| CTA Focus | Visible focus ring |

### 5. Edge Cases
- Headline varies per condition → template with variable insertion
- Banner text too long on mobile → headline wraps to 2 lines max

### 6. Constraints
- One banner per condition page, positioned after testimonials and before footer
- Headline must include condition name and action-oriented language

### 7. Dependencies
- `/contact` page

### 8. Notes
- Reusable component with condition name as parameter

---

## Cross-Cutting Concerns

### SEO (All Pages)
- Unique `<title>` and `<meta description>` per page
- One `<h1>` per page; logical h2/h3 hierarchy
- `<meta name="robots" content="index, follow">`
- Schema markup: LocalBusiness + Physician (homepage + contact)
- `robots.txt` and `sitemap.xml`
- Open Graph tags for social sharing

### Performance (All Pages)
- Target load: <3s on 4G mobile
- Images: WebP (JPG fallback), compressed, lazy-loaded below fold
- Google Fonts: loaded async (font-display: swap)
- Minimal JS — no heavy libraries

### Accessibility (All Pages)
- All images: descriptive `alt` text
- Color contrast: min 4.5:1
- All interactive elements: keyboard-navigable
- Font size: min 16px body, 14px labels
- Visible focus states
- `aria-label` on icon-only buttons

### Responsiveness
| Breakpoint | Behavior |
|---|---|
| <768px | Single column, hamburger nav, stacked |
| 768–1024px | 2-column grids, full nav if space allows |
| >1024px | Full layout, 3–4 column grids |

---

*End of Feature Specifications*
