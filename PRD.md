# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# Personal Portfolio Website — Fajar Herdiansyah

**Version:** 1.0
**Status:** Draft
**Product Owner:** Fajar Herdiansyah
**Product Type:** Personal Developer Portfolio
**Primary Role:** Full Stack Web Developer
**Languages:** Indonesian (ID) & English (EN)
**Design Reference:** First December Films — [https://1stdecember.com/](https://1stdecember.com/)
**GitHub:** [https://github.com/fahherd](https://github.com/fahherd)

---

# 1. PRODUCT OVERVIEW

## 1.1 Background

Personal Portfolio Website merupakan website profesional pribadi milik Fajar Herdiansyah yang berfungsi sebagai representasi identitas, kompetensi, pengalaman, dan hasil pekerjaan di bidang teknologi informasi, khususnya Full Stack Web Development.

Website ini tidak hanya berfungsi sebagai CV digital, tetapi sebagai platform personal branding yang memperlihatkan kemampuan melalui proyek nyata, pengalaman profesional, dan dokumentasi hasil pekerjaan.

Desain website mengambil inspirasi dari First December Films dengan pendekatan cinematic, editorial, premium, minimalist, dan visual-driven.

Pendekatan visual tersebut akan diadaptasi ke dalam konteks developer portfolio tanpa meniru identitas visual, aset, maupun konten milik website referensi.

## 1.2 Product Vision

"Building meaningful digital experiences through thoughtful engineering and creative problem-solving."

Membangun identitas profesional sebagai Full Stack Web Developer yang mampu mengembangkan aplikasi web fungsional, memahami kebutuhan sistem, serta menghasilkan solusi digital yang bermanfaat.

## 1.3 Product Goals

1. Membangun personal branding profesional sebagai Full Stack Web Developer.
2. Menampilkan proyek pengembangan aplikasi secara menarik dan terstruktur.
3. Menyediakan dokumentasi case study untuk proyek unggulan.
4. Menampilkan pengalaman kerja, pendidikan, sertifikasi, dan pencapaian.
5. Mempermudah recruiter, perusahaan, dan calon klien dalam memahami kompetensi.
6. Menyediakan akses langsung ke GitHub, LinkedIn, dan media komunikasi.
7. Menghadirkan pengalaman browsing yang premium, responsif, dan interaktif.
8. Mendukung pengunjung berbahasa Indonesia dan Inggris.

## 1.4 Success Metrics

- Seluruh halaman utama dapat diakses dengan baik.
- Seluruh proyek unggulan memiliki informasi yang lengkap.
- Pengunjung dapat mengakses demo dan repository proyek.
- Navigasi bilingual berfungsi pada semua halaman.
- Website responsif di desktop, tablet, dan mobile.
- Tidak terdapat broken links atau broken images.
- Website memiliki metadata SEO yang sesuai.
- Pengunjung dapat menemukan informasi kontak dengan mudah.

---

# 2. PERSONAL BRANDING & IDENTITY

## 2.1 Professional Identity

**Name:** Fajar Herdiansyah

**Primary Title:** Full Stack Web Developer

**Location:** Bekasi, Indonesia

**Professional Description:**

I'm Fajar Herdiansyah, a Full Stack Web Developer and Informatics Engineering student passionate about building functional web applications, exploring technology, and solving real-world problems through software development.

## 2.2 Brand Positioning

Fajar diposisikan sebagai developer yang memiliki kombinasi kemampuan:

- Web Application Development
- Backend Development
- Database Management
- Frontend Development
- IT Infrastructure & Networking
- Creative Problem Solving

Web Development merupakan identitas utama. Networking dan kompetensi kreatif menjadi nilai tambah.

## 2.3 Brand Personality

- Professional
- Technical
- Minimalist
- Creative
- Curious
- Detail-oriented
- Modern

## 2.4 Brand Communication

Website menggunakan gaya komunikasi profesional, ringkas, percaya diri, dan tidak berlebihan.

Hindari klaim seperti expert, senior developer, atau industry-leading tanpa bukti yang mendukung.

---

# 3. TARGET AUDIENCE

## 3.1 Primary Audience

### Recruiter & HR

Kebutuhan:

- Mengetahui identitas profesional.
- Melihat kemampuan teknis.
- Memeriksa pengalaman dan pendidikan.
- Menilai proyek yang pernah dikerjakan.
- Menghubungi kandidat.

### Software Development Company

Kebutuhan:

- Memahami kemampuan pengembangan aplikasi.
- Menilai kualitas proyek.
- Melihat teknologi yang digunakan.
- Memeriksa repository dan dokumentasi.

## 3.2 Secondary Audience

### Potential Clients

Kebutuhan:

- Memahami layanan dan kemampuan developer.
- Melihat hasil pekerjaan.
- Mengetahui cara menghubungi developer.

### Developer Community

Kebutuhan:

- Melihat proyek dan teknologi.
- Mengakses GitHub.
- Memahami perjalanan pengembangan kemampuan.

---

# 4. INFORMATION ARCHITECTURE

Website menggunakan pendekatan single-page editorial experience dengan halaman detail proyek yang dapat diakses secara terpisah.

## 4.1 Sitemap

```text
/
│
├── Home
│
├── About
│
├── Work
│   ├── Project 01
│   ├── Project 02
│   ├── Project 03
│   └── Project Detail
│
├── Expertise
│
├── Experience
│
├── Recognition
│   ├── Education
│   ├── Awards
│   └── Certifications
│
├── Contact
│
└── 404
```

## 4.2 Main Navigation

Navigation menggunakan pendekatan minimalis.

Elemen:

- Personal Logo / FH
- Contact
- Menu Toggle
- Language Switcher (ID / EN)

Menu overlay berisi:

- Home
- About
- Work
- Expertise
- Experience
- Recognition
- Contact
- GitHub
- LinkedIn

Navigation tetap mudah diakses saat pengunjung melakukan scrolling.

---

# 5. PAGE REQUIREMENTS

## 5.1 HOME / HERO SECTION

**Objective:** Menciptakan kesan pertama yang kuat dan memperkenalkan identitas developer.

### Content

Eyebrow:
FULL STACK WEB DEVELOPER

Main Headline:

"Building Digital Experiences Through Code & Creativity."

Supporting Text:

"I'm Fajar Herdiansyah, a developer passionate about building functional web applications and meaningful digital experiences."

Primary CTA:

- Explore My Work
- Get In Touch

Secondary Information:

- Based in Bekasi, Indonesia.
- Available for professional opportunities (hanya jika status ini benar).

### Design Requirements

- Full-screen cinematic hero.
- Background berupa foto personal atau visual teknologi yang relevan.
- Dark overlay.
- Oversized editorial typography.
- Grain/noise texture.
- Minimal navigation.
- Smooth entrance animation.
- Responsive typography.

## 5.2 INTRO / ABOUT SECTION

**Objective:** Menjelaskan latar belakang dan pendekatan profesional.

Headline:

"More Than Just Writing Code."

Content:

- Personal biography.
- Educational background.
- Interest in software engineering.
- Development philosophy.
- Professional interests.

Visual:

- Personal portrait.
- Asymmetric image composition.
- Editorial text layout.

## 5.3 SELECTED WORK / PROJECT SECTION

**Objective:** Menampilkan hasil pekerjaan sebagai bukti kemampuan teknis.

Headline:

"Things I've Built."

Setiap proyek ditampilkan dalam project showcase dengan layout visual yang bervariasi.

### Project Card Requirements

Setiap card memiliki:

- Project title.
- Short description.
- Project category.
- Technology stack.
- Preview image.
- Project year.
- View Case Study.
- Live Demo (jika tersedia).
- GitHub Repository (jika tersedia dan publik).

### Project Categories

- Web Application
- Backend Development
- Frontend Development
- Personal Project
- Academic Project

### Featured Project

**Sistem Informasi Pelayanan Puskesmas Sepanjangjaya**

Period: April 2026 – July 2026

Technology:

- PHP
- CodeIgniter
- Bootstrap
- MySQL

Key Features:

- Patient Management.
- Medical Records Management.
- Patient Registration.
- Queue Management.
- Authentication.
- Role-Based Access Control.

User Roles:

- Admin.
- Doctor.
- Registration Staff.

### Other Projects

Website harus mendukung lebih dari tiga proyek.

Repository yang sudah teridentifikasi:

1. Age Calculator — PHP.
2. My Portfolio — HTML.
3. Portoweb — Astro.

Proyek lainnya akan ditambahkan setelah inventarisasi proyek lengkap.

Jangan menampilkan proyek yang belum diverifikasi sebagai proyek selesai.

## 5.4 PROJECT DETAIL / CASE STUDY

**Objective:** Memperlihatkan kemampuan problem-solving dan proses pengembangan software.

Setiap proyek unggulan memiliki halaman detail tersendiri.

### Required Sections

1. Project Overview.
2. Background & Context.
3. Problem Statement.
4. Project Objectives.
5. My Role & Responsibilities.
6. Technology Stack.
7. System Architecture (jika tersedia).
8. Key Features.
9. UI Showcase.
10. Development Challenges.
11. Solutions & Implementation.
12. Project Outcome.
13. Live Demo.
14. GitHub Repository.
15. Related Projects.

### Case Study Rules

- Gunakan screenshot asli proyek.
- Jelaskan kontribusi pribadi secara transparan.
- Jangan mengarang hasil atau metrik.
- Bedakan kontribusi individu dan kontribusi tim.
- Sertakan batasan proyek jika relevan.

## 5.5 EXPERTISE / SKILLS SECTION

**Objective:** Memperlihatkan kompetensi teknis secara terorganisasi.

### Skill Categories

**Frontend Development**

- HTML
- Bootstrap

**Backend Development**

- PHP
- Laravel
- CodeIgniter

**Database**

- MySQL

**Networking**

- MikroTik

**Creative & Design**

- Figma
- Canva
- Social Media Visual Branding
- Content Design

**Tools**

- Visual Studio Code
- GitHub
- CapCut
- Microsoft Office

### Design

Skill tidak ditampilkan menggunakan progress bar persentase karena tidak terdapat pengukuran objektif dalam CV.

Gunakan:

- Categorized skill list.
- Technology typography.
- Logo/icon technology.
- Minimalist grid.
- Selected technology highlights.

## 5.6 EXPERIENCE SECTION

**Objective:** Menampilkan perjalanan profesional.

### Experience 01

**Content Creator & Social Media Admin**

PT. Wimisec Teknologi Indonesia

December 2024 – July 2026

Responsibilities:

- Digital content production.
- Social media management.
- Content strategy.
- Copywriting.
- Visual content design.
- Digital security education.

### Experience 02

**Staff Admin Document Control**

PT. Mahaga Pratama

August 2024 – September 2024

Responsibilities:

- VSAT installation document management.
- Management Information System.
- Site progress reporting.
- Document standardization.
- Communication coordination.

### Experience 03

**Staff Magang Administrasi**

Universitas Bhayangkara, Fakultas Hukum

April 2023 – July 2023

Responsibilities:

- Academic administration.
- Academic Information System.
- Document archiving.
- Administrative communication.

### Design

- Editorial vertical timeline.
- Large year typography.
- Company and position information.
- Short descriptions.
- Expandable details if necessary.

## 5.7 EDUCATION SECTION

### Education 01

Universitas Bina Insani

S1 Teknik Informatika

2024 – Present

IPK Semester 4: 3.75

Organization:
Computer Club Bina Insani.

### Education 02

SMK Karya Guna Bhakti 2

Teknik Komputer dan Jaringan

2021 – 2024

## 5.8 AWARDS & CERTIFICATIONS

### Awards

Juara Harapan I Bidang UI/UX

Indonesia National IT Competition 2025

Universitas Amikom Purwokerto.

### Certifications

- MikroTik Certified Network Associate (MTCNA), December 2023 – 2026.
- Sertifikat Kompetensi Keahlian BNSP, May 2024 – 2027.
- Sertifikat Uji Kompetensi Assessment, May 2024 – 2027.
- TOEIC Certificate, August 2023 – 2025.
- Network Fundamental — Aguna Course, June 2025.
- Linux System Administration — Btech Academy, August 2025.

Status sertifikat harus mengikuti masa berlaku yang tercantum.

TOEIC ditampilkan sebagai sertifikat historis, bukan sertifikat aktif.

## 5.9 ORGANIZATION / COMMUNITY

### Anon Cyber Team

Mentor Volunteer — Content Creator Division

July 2024 – July 2026.

Responsibilities:

- Cybersecurity content development.
- Content concept review.
- Digital security education.

### Computer Club Bina Insani

Member

2024 – Present.

Activities:

- Basic to intermediate programming.
- Internal technical training.
- Collaborative learning.

## 5.10 CONTACT SECTION

**Objective:** Mempermudah pengunjung menghubungi developer.

Headline:

"Have a Project in Mind? Let's Build Something."

Contact Channels:

- Email: [fahherd@gmail.com](mailto\:fahherd@gmail.com)
- GitHub: [https://github.com/fahherd](https://github.com/fahherd)
- LinkedIn: [https://www.linkedin.com/in/fajar-herdiansyah](https://www.linkedin.com/in/fajar-herdiansyah)

CTA:

- Send an Email.
- Visit GitHub.
- Connect on LinkedIn.

Contact form bersifat optional untuk MVP. Jika diimplementasikan, form harus memiliki validasi dan mekanisme pengiriman yang benar-benar berfungsi.

## 5.11 FOOTER

Content:

- Personal identity.
- Navigation links.
- Social links.
- Copyright.
- Back to top.

Closing statement:

"Designed with intention. Built with code."

---

# 6. DESIGN REQUIREMENTS

## 6.1 Design Philosophy

Desain mengadaptasi karakter visual First December Films.

Prinsip utama:

- Cinematic.
- Editorial.
- Minimalist.
- Premium.
- Typography-driven.
- Visual storytelling.
- Asymmetric composition.
- High contrast.

## 6.2 Visual Direction

### Typography

Display Typography:

- Editorial serif.
- Large expressive headlines.
- High contrast letterforms.

Body Typography:

- Modern sans-serif.
- High readability.
- Clean interface labels.

Monospace:

- Technical labels.
- Section numbering.
- Metadata.

Font selection final ditentukan dalam DESIGNSYSTEM.md.

### Color Direction

Proposed palette:

- Primary Background: #111111
- Secondary Background: #1B1B1B
- Primary Text: #F2F0EB
- Secondary Text: #A5A5A5
- Light Background: #F3F1EC
- Dark Text: #171717
- Accent: Warm Yellow / Muted Orange

Color tokens final mengikuti DESIGNSYSTEM.md.

### Layout

- Large whitespace.
- Asymmetric grids.
- Full-width media.
- Alternating light and dark sections.
- Oversized headings.
- Editorial section numbering.
- Strong visual hierarchy.

### Texture

- Subtle film grain.
- Fine noise.
- Controlled image overlays.
- Minimal borders.

### Motion

- Smooth scrolling.
- Section reveal.
- Image reveal transitions.
- Subtle parallax.
- Navigation transitions.
- Hover interactions.

Motion harus tetap ringan, tidak mengganggu pembacaan, dan menghormati prefers-reduced-motion.

## 6.3 Design Reference

Primary reference:
[https://1stdecember.com/](https://1stdecember.com/)

Elemen yang diadaptasi:

- Hero cinematic.
- Large serif typography.
- Alternating dark/light sections.
- Asymmetric editorial layout.
- Visual-driven portfolio.
- Minimal navigation.
- Numbered section markers.
- Grain texture.
- Immersive transitions.

Tidak diperbolehkan menyalin logo, foto, video, teks, atau aset proprietary First December Films.

---

# 7. FUNCTIONAL REQUIREMENTS

| ID    | Requirement                  | Priority |
| ----- | ---------------------------- | -------- |
| FR-01 | Responsive website           | Must     |
| FR-02 | Bilingual ID/EN              | Must     |
| FR-03 | Language persistence         | Should   |
| FR-04 | Navigation menu              | Must     |
| FR-05 | Project listing              | Must     |
| FR-06 | Project detail pages         | Must     |
| FR-07 | Live demo links              | Must     |
| FR-08 | GitHub repository links      | Must     |
| FR-09 | Experience timeline          | Must     |
| FR-10 | Skills categorization        | Must     |
| FR-11 | Education and certifications | Must     |
| FR-12 | Contact links                | Must     |
| FR-13 | SEO metadata                 | Must     |
| FR-14 | Smooth transitions           | Should   |
| FR-15 | Project category filtering   | Could    |
| FR-16 | Contact form                 | Could    |
| FR-17 | Blog / articles              | Future   |
| FR-18 | CMS / admin dashboard        | Future   |

---

# 8. BILINGUAL REQUIREMENTS

Website mendukung:

- Bahasa Indonesia (ID).
- English (EN).

### Language Behavior

1. Default language: English.
2. User dapat berpindah bahasa melalui language switcher.
3. Pilihan bahasa dipertahankan selama sesi dan kunjungan berikutnya.
4. Seluruh konten utama memiliki terjemahan.
5. URL menggunakan struktur bahasa yang konsisten.

Proposed URL:

```text
/en/
├── /about/
├── /work/
├── /work/project-slug/
└── /contact/

/id/
├── /tentang/
├── /karya/
├── /karya/project-slug/
└── /kontak/
```

Implementasi harus menggunakan canonical URL dan hreflang yang sesuai.

Terjemahan harus mempertahankan konteks profesional, bukan sekadar menerjemahkan kata demi kata.

---

# 9. NON-FUNCTIONAL REQUIREMENTS

## 9.1 Performance

- Optimized images.
- Lazy loading untuk media di luar viewport.
- Minimized JavaScript.
- Avoid unnecessary animation libraries.
- Efficient font loading.
- Optimized assets.

Target Core Web Vitals:

- LCP: ≤ 2.5 seconds.
- INP: ≤ 200 milliseconds.
- CLS: ≤ 0.1.

Target Lighthouse:

- Performance: ≥ 90.
- Accessibility: ≥ 90.
- Best Practices: ≥ 90.
- SEO: ≥ 90.

Target merupakan sasaran pengujian, bukan hasil yang sudah dicapai.

## 9.2 Responsiveness

Mendukung:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

Mobile experience harus mempertahankan identitas visual tanpa memaksakan layout desktop.

## 9.3 Accessibility

- Semantic HTML.
- Keyboard navigation.
- Accessible contrast.
- Descriptive alt text.
- Visible focus states.
- Reduced motion support.
- Proper heading hierarchy.

## 9.4 Security

- HTTPS.
- No exposed credentials.
- No unnecessary personal data.
- Secure contact form if implemented.
- External links use appropriate security attributes.

## 9.5 SEO

- Unique page title.
- Meta description.
- Open Graph metadata.
- Sitemap.
- robots.txt.
- Canonical URLs.
- hreflang.
- Structured data where appropriate.

---

# 10. TECHNICAL REQUIREMENTS

## 10.1 Proposed Technology Direction

Final technology stack masih perlu ditentukan saat technical planning.

Recommended direction:

**Frontend / Framework**

- Astro as primary candidate.
- HTML5.
- CSS3.
- JavaScript / TypeScript.

**Styling**

- Custom CSS.
- CSS variables.
- Responsive layout.
- Reusable design tokens.

**Animation**

- CSS transitions.
- Intersection Observer.
- GSAP only if complex animation requires it.

**Content Management**

- Structured local content (JSON / Markdown / MDX).
- No admin dashboard required for MVP.

**Deployment**

- Static hosting.
- HTTPS.
- Custom domain (if available).

Astro menjadi kandidat karena portofolio berorientasi pada konten, media, SEO, dan performa. Pemilihan final mengikuti evaluasi repository dan kebutuhan implementasi.

## 10.2 Proposed Project Structure

```text
portfolio/
│
├── public/
│   ├── images/
│   ├── videos/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── components/
│   │   ├── Navbar
│   │   ├── Footer
│   │   ├── ProjectCard
│   │   ├── SectionHeading
│   │   └── LanguageSwitcher
│   │
│   ├── layouts/
│   │
│   ├── pages/
│   │   ├── en/
│   │   └── id/
│   │
│   ├── content/
│   │   ├── projects/
│   │   ├── experience/
│   │   └── certifications/
│   │
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── animations.css
│   │
│   └── utils/
│
├── DESIGNSYSTEM.md
├── PRD.md
└── README.md
```

Struktur ini merupakan rancangan awal dan dapat disesuaikan dengan framework final.

---

# 11. MVP SCOPE

## 11.1 Included in MVP

- Home / Hero.
- About.
- Selected Work.
- Project Detail.
- Expertise.
- Experience.
- Education.
- Awards & Certifications.
- Contact.
- Footer.
- Bilingual support.
- Responsive layout.
- Basic animations.
- SEO fundamentals.
- GitHub and live demo integration.

## 11.2 Excluded from MVP

- Admin dashboard.
- User authentication.
- Blog management system.
- Database backend.
- Advanced analytics dashboard.
- Complex CMS.
- AI chatbot.
- Real-time messaging.

Fitur tersebut dapat dipertimbangkan setelah website utama selesai.

---

# 12. ACCEPTANCE CRITERIA

Website dinyatakan memenuhi kebutuhan MVP apabila:

### Visual

- [ ] Identitas visual sesuai DESIGNSYSTEM.md.
- [ ] Hero section menampilkan identitas developer.
- [ ] Editorial typography diterapkan secara konsisten.
- [ ] Dark/light section memiliki transisi visual yang baik.
- [ ] Grain texture tidak mengganggu keterbacaan.
- [ ] Seluruh section memiliki hierarki visual yang jelas.

### Functional

- [ ] Seluruh navigation berfungsi.
- [ ] Language switcher berfungsi.
- [ ] Konten Indonesia dan Inggris tersedia.
- [ ] Project cards dapat membuka detail proyek.
- [ ] Live demo membuka URL yang benar.
- [ ] Repository membuka URL GitHub yang benar.
- [ ] Contact links berfungsi.
- [ ] Tidak ada broken links.

### Technical

- [ ] Responsive di berbagai ukuran layar.
- [ ] Tidak ada console errors yang kritis.
- [ ] Tidak ada layout overflow horizontal.
- [ ] Image assets dioptimalkan.
- [ ] SEO metadata tersedia.
- [ ] Accessibility dasar terpenuhi.
- [ ] Core Web Vitals diuji.

### Content

- [ ] Seluruh informasi profesional sesuai CV.
- [ ] Tidak ada pengalaman atau pencapaian fiktif.
- [ ] Setiap proyek memiliki deskripsi yang dapat diverifikasi.
- [ ] Screenshot merupakan dokumentasi proyek yang sebenarnya.
- [ ] Status sertifikasi ditampilkan secara akurat.

---

# 13. CONTENT REQUIREMENTS

Sebelum deployment, aset berikut perlu disiapkan:

| Asset                   | Requirement                 | Status    |
| ----------------------- | --------------------------- | --------- |
| Professional portrait   | Foto personal               | Pending   |
| Hero background         | Visual cinematic            | Pending   |
| Project thumbnails      | Screenshot proyek           | Pending   |
| Project demo URLs       | Link demo                   | Pending   |
| Project repository URLs | Link publik                 | Partial   |
| Project descriptions    | Deskripsi setiap proyek     | Pending   |
| Company documentation   | Foto/dokumentasi pengalaman | Optional  |
| Award certificates      | Dokumentasi penghargaan     | Pending   |
| Certification images    | Scan sertifikat             | Optional  |
| Social links            | GitHub dan LinkedIn         | Available |

Konten yang belum tersedia menggunakan placeholder selama development dan tidak boleh dipublikasikan sebagai fakta.

---

# 14. DEVELOPMENT PHASES

## Phase 1 — Foundation

- Finalisasi DESIGNSYSTEM.md.
- Finalisasi PRD.md.
- Finalisasi content inventory.
- Pemilihan teknologi.
- Setup repository.

## Phase 2 — Design Implementation

- Global layout.
- Typography.
- Color tokens.
- Navigation.
- Responsive system.
- Animation foundations.

## Phase 3 — Core Development

- Hero.
- About.
- Projects.
- Project details.
- Skills.
- Experience.
- Education.
- Recognition.
- Contact.

## Phase 4 — Localization

- Indonesian content.
- English content.
- Language switcher.
- URL localization.
- SEO localization.

## Phase 5 — Optimization

- Performance optimization.
- Accessibility testing.
- Responsive testing.
- SEO testing.
- Browser compatibility.

## Phase 6 — Deployment

- Production build.
- Hosting configuration.
- Domain configuration.
- Final QA.
- Public release.

---

# 15. RISKS & CONSIDERATIONS

| Risk                                 | Mitigation                             |
| ------------------------------------ | -------------------------------------- |
| Terlalu banyak animasi               | Prioritaskan usability dan performance |
| Informasi proyek tidak lengkap       | Lakukan content inventory              |
| Aset visual terbatas                 | Gunakan screenshot proyek asli         |
| Konten bilingual tidak konsisten     | Gunakan struktur konten terpusat       |
| Website terlalu menyerupai referensi | Adaptasi prinsip, bukan menyalin aset  |
| Scope terlalu luas                   | Prioritaskan MVP                       |
| Klaim kompetensi tidak terbukti      | Gunakan dokumentasi dan bukti proyek   |

---

# 16. FUTURE ENHANCEMENTS

Setelah MVP:

- Developer journal / technical blog.
- Advanced project filtering.
- Interactive technical experiments.
- More detailed project architecture.
- CMS integration.
- Project analytics.
- Downloadable resume.
- Additional case studies.

---

# 17. FINAL PRODUCT DEFINITION

Personal Portfolio Website Fajar Herdiansyah merupakan website personal branding yang menggabungkan identitas Full Stack Web Developer dengan pendekatan visual cinematic editorial.

Website harus mampu menjawab tiga pertanyaan utama pengunjung:

1. Who is Fajar? — Identitas, latar belakang, dan kompetensi.
2. What has Fajar built? — Proyek, dokumentasi, dan kemampuan teknis.
3. How can I connect with Fajar? — Informasi kontak dan social links.

Keberhasilan website tidak hanya ditentukan oleh desain yang menarik, tetapi juga oleh kualitas informasi, kredibilitas proyek, performa teknis, dan kemudahan navigasi.

**Core Principle:**

"Show the work. Explain the thinking. Let the details speak."

---

**Document End — PRD v1.0**
