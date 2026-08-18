# Feifei Li — Website Redesign Plan

> Goal: Rebuild feifeili-website in the clean, professional style of johnthompson.io —
> positioned for a data science student about to graduate (Dec 2026) who wants to
> keep two doors open: **launching a startup** and **getting hired by mid/large companies**.

---

## 1. Why this matters right now

You're 5 months from graduation. Your website is the one asset that works for both paths simultaneously:
- A recruiter at Target or UnitedHealth sees polished projects, GPA, certs, and leadership
- A startup accelerator or co-founder sees shipped products, initiative, and builder energy

John Thompson's site works because it says **"I solve real problems"** — not **"here is my resume."**
Your site should do the same, adapted for where you are.

---

## 2. Site structure (redesign)

### Current → New

| Current page | New page | Why |
|---|---|---|
| Home (index.html) | **Home** — hero + selected work + value prop | First impression. Must answer "who is this person and why should I care?" in 5 seconds |
| Projects (projects.html) | **Projects** — filterable gallery with visuals | The proof. Recruiters scan; founders dig in. Filter lets both find what matters |
| Achievements (achievements.html) | **Achievements** — keep as is (already strong) | Scholarships, awards, certs, GPA — this is your "receipts" page |
| ~~Life & Craft~~ | **Experience** — career narrative + skills + education | Replaces Life & Craft in the nav. Your story > your hobbies for a professional site |
| Contact (contact.html) | **Contact** — keep | Standard |
| — | ~~Writing~~ | Skip until you have content |
| — | ~~Services~~ | Skip until you're actively consulting |

**Life & Craft stays on the site** but moves out of the main nav — accessible via a footer link or from the About section. It shows personality (DIY, painting, outdoors) which humanizes you, but it shouldn't compete with Projects and Experience for nav space.

### New nav bar
```
Feifei Li (say: Fayfay)     Projects    Achievements    Experience    Contact
```

---

## 3. Page-by-page redesign

### 3A. Home (index.html) — the 5-second pitch

**John's pattern**: Bold headline → one-paragraph intro → CTA buttons → selected work → consulting pitch → footer

**Your version**:

```
DATA · ANALYTICS · BUILDING

I build with data, design
for people, and ship what works.

Bilingual data scientist finishing a B.S. at Metropolitan State (Dec 2026).
Two-time 1st place competition winner. Six shipped applications — from fraud
detection pipelines to team-health diagnostics. Looking for my next challenge.

[ Explore Projects ]   [ View Achievements ]
```

Then below:

**SELECTED WORK** — 2-3 featured project cards (MN Data Science Challenge, TeamUp, FlowTime) with screenshots, pulled visually from the projects page style.

**WHY FEIFEI** — a short 3-column section:
| Builder | I've shipped 6+ apps from zero to production — Streamlit, PWA, IoT |
| Analyst | 1st place in two state-level competitions. 0.8158 domain score. 4.0 GPA |
| Leader | President of Metro Analytics Club. Cargill Mentorship Lab. TCDSA Innovation Studio |

### 3B. Projects (projects.html) — filterable + visual

**John's pattern**: Tag filter bar → 2-column card grid → each card has colored header illustration + title + date + description + tech tags

**Your version**:

Add a **filter bar** at the top:
```
[ All ] [ Competition ] [ Streamlit ] [ Web App ] [ AI ] [ IoT ] [ Wellness ]
```

Upgrade each project card:
- **Colored header area** with a screenshot or themed illustration (not just text)
- Category label (e.g., "COMPETITION WINNER", "TEAM TOOL", "WELLNESS")
- Title, date, status (active / completed)
- 1-2 sentence description
- Tech tags as pills
- Try/GitHub buttons

### 3C. Achievements (achievements.html) — already strong, minor polish

Keep as-is. It already has:
- Hero banner (MN Data Science Challenge)
- Clickable achievement cards with modals
- In Photos
- Receipts, Honors & Awards, Professional Certifications, Mentorship, Education

**Minor additions**:
- Add uppercase section label style to match new design
- Ensure consistent card hover effects

### 3D. Experience (experience.html) — NEW

**John's pattern**: Narrative "About" section → Work Experience cards → Earlier Roles → Education

**Your version**:

**ABOUT** section:
> Bilingual (Mandarin/English) data scientist who pivoted from political science to
> computer science to data science — starting with Google certificates while working
> as a USPS letter carrier, then earning an A.S. in Computer Science (Honors, 3.93
> GPA) and now finishing a B.S. in Data Science (4.0 at Metro State, Dec 2026).
> Two-time 1st Place competition winner. Six shipped applications. VP to President
> in three months. Background in medical interpretation gives me a rare ability to
> bridge technical work with human context — whether it's healthcare data, team
> diagnostics, or community analytics.

**PROFESSIONAL EXPERIENCE** (like John's Work Experience cards):

- **President — Metro Analytics Club**
  Metropolitan State University · July 2026–Present
  Leading club strategy, partnerships, and community programming.

- **Vice President — Metro Analytics Club**
  Metropolitan State University · April–July 2026
  Built session roadmaps, RACI frameworks, and operational workflows.

- **Community Strategy & Data Liaison**
  2024–Present
  Facilitated executive sessions at MinneAnalytics and Applied AI 2025.
  Analyzed hardware repair workflows at Minnesota Tech for Success.

- **Mandarin Interpreter (Freelance)**
  2023–Present
  Medical and school settings. Bridging language gaps for LEP individuals.

- **City Carrier — United States Postal Service**
  2015–2022
  Route optimization for 400+ daily units, 99.9% accuracy.

**MENTORSHIP & PROGRAMS** (separate section):
- TCDSA Innovation Studio — Nonprofit AI Cohort (Mar–Jun 2026)
- Cargill Mentorship Lab — Inaugural Cohort (Jan–Mar 2026)
- Data Angels Mentorship — Cohort 5 (Jun–Dec 2026)
- TRIO Student Support Services Scholar (2022–Present)
- Be Bold, Break the Mold Mentorship Program

**SKILLS & TOOLS** section:
```
Languages:      Python (Pandas, NumPy, Scikit-Learn) · Java · R · SQL · JavaScript · HTML/CSS
Data & AI:      Computer Vision · Prompt Engineering · Agentic Workflows · Feature Engineering
Analytics:      Power BI · Tableau · SAP Predictive Analytics · JMP · Advanced Excel · SPSS
Cloud & Data:   Snowflake · Databricks · AWS (EC2, S3) · Docker
Frameworks:     Streamlit · Flask · Jupyter Notebook · Notion (app building)
DevOps:         Git · GitHub · Jira
Specialties:    Predictive Modeling · Data Visualization · Team Diagnostics · Bilingual (Mandarin/English)
```

**IN PROGRESS** (shows continuous learning):
- Herbal app — building with Notion (current)
- JiuZuoShu (久坐舒) — TCM self-care Streamlit app
- Snowflake & Databricks — actively learning

**EDUCATION** (duplicate from achievements, or link there)

### 3E. Contact (contact.html) — add CTA context

Add a line above the form:
> Whether you're hiring, building something, or just want to connect — I'd love to hear from you.

---

## 4. Design system changes

### What to adopt from johnthompson.io

| Element | Current (yours) | New (John's style) |
|---|---|---|
| Background | White | Subtle light blue-gray gradient (`#f0f4ff → #fff`) |
| Section labels | Playfair Display headings | Add uppercase sans-serif sub-labels ("SELECTED WORK", "EXPERIENCE") |
| Cards | Mixed styles | Consistent: white bg, 1px border, 14px radius, subtle shadow, hover lift |
| Hero | Photo stack + small text | Bold large headline (clamp 2.5rem–4rem) + paragraph + CTA buttons |
| Nav | Current style works | Keep — already clean |
| Footer | Minimal | Add social links row: GitHub · LinkedIn · Email |
| Colors | Keep #C8501A (orange) | Keep it — it's your brand. Add a navy (#0f1a3d) for dark sections |
| Fonts | Playfair Display + Karla | Keep — they work well |

### CSS additions needed
- `.section-label` — uppercase, letter-spacing, small, color: navy
- `.card-hover` — translateY(-4px) + shadow on hover
- `.hero-headline` — bold, clamp(2rem, 5vw, 3.5rem)
- `.cta-btn-primary` / `.cta-btn-outline` — button pair
- `.filter-bar` — horizontal pill row with active state
- `.gradient-bg` — subtle page background
- `.social-footer` — icon/text links row

---

## 5. Career positioning tips

### The dual-path problem

You want to appeal to **two very different audiences**:

| | Corporate recruiter | Startup / co-founder |
|---|---|---|
| **They scan for** | GPA, certs, known tools, internships, team fit | Shipped products, initiative, speed, scrappiness |
| **Red flags** | No experience, no structure, messy presentation | Only coursework, no real builds, needs hand-holding |
| **Your advantage** | 4.0 GPA, 9 certs, 6 Dean's Lists, Phi Theta Kappa | 6+ shipped apps, won 2 competitions solo, President of analytics club |

### What your site should signal

1. **"I ship things"** — not "I study things." Every project should have a live link or demo. This is your biggest differentiator vs. other students. John Thompson does this well — every project is clickable.

2. **"I solve real problems"** — frame each project as problem→solution, not technology→features. "Identified geographic blind spots in burn-care access" beats "Built a hackathon project with Python."

3. **"I lead"** — VP→President in 3 months. Cargill cohort. TCDSA build cohort. These show you don't wait to be told what to do.

4. **"I'm rigorous"** — 4.0 GPA, 0.8158 domain score, 5.0/5.0 hackathon score. The numbers speak.

### Practical tips

**For corporate applications:**
- Add your website URL to your LinkedIn and resume header
- The Experience page is critical — recruiters expect a career narrative, not just a project gallery
- Make sure your Skills section lists exact tools companies search for: Python, SQL, Tableau, Power BI, scikit-learn, pandas, Git
- Keep the Achievements page — scholarships and GPA matter for entry-level

**For startup path:**
- The Projects page is your pitch deck. Each shipped app = proof you can build
- Consider adding a "Work with me" CTA or section — not a full Services page, just: "I'm open to co-founding, contracting, or joining an early-stage team"
- Your TeamUp and Team Doctor apps are literally startup products — position them that way
- The AI Magic Night demo is networking gold — mention it prominently

**For both:**
- Remove Life & Craft from main nav (keep as footer link) — it's charming but dilutes the professional signal
- Make sure every project has a GitHub link — recruiters and founders both check
- Add a one-line "status" to each project: active, completed, demo available
- Your competition wins are unusually strong for a student — lead with them

---

## 6. Implementation order

| # | Task | Effort | Impact |
|---|------|--------|--------|
| 1 | Redesign Home: bold hero + CTA + selected work | 2-3 hrs | Highest — first impression |
| 2 | Add tag filter to Projects page | 1 hr | High — shows interactivity |
| 3 | Upgrade project cards with screenshots/visuals | 2-3 hrs | High — visual proof |
| 4 | Build Experience page | 2 hrs | High — corporate path needs this |
| 5 | Move Life & Craft to footer link, update nav | 30 min | Medium — cleaner nav |
| 6 | Add social footer to all pages | 30 min | Medium — professionalism |
| 7 | Apply design system (gradient bg, section labels, card consistency) | 1-2 hrs | Medium — polish |
| 8 | Add "Open to opportunities" CTA on Contact page | 15 min | Low effort, high signal |

**Total estimated: ~10-12 hours of implementation**

---

## 7. Technical notes

- Static HTML/CSS/JS — no build system, no framework
- Tag filter: pure vanilla JS, toggle `display:none` by `data-tags` attribute
- Screenshots for project cards: take real screenshots, save as JPG in `photos/`
- New pages copy the nav/footer pattern from existing pages
- Keep Playfair Display + Karla fonts, #C8501A orange accent
- All new pages include `<script src="site.js"></script>`
- Host on GitHub Pages or Cloudflare Pages (already using Cloudflare for other projects)
