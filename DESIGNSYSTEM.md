# DESIGN SYSTEM
# Fajar Herdiansyah — Personal Portfolio

**Document:** DESIGNSYSTEM.md  
**Version:** 1.0.0  
**Status:** Final Design Specification  
**Product:** Personal Developer Portfolio  
**Owner:** Fajar Herdiansyah  
**Primary Identity:** Full Stack Web Developer  
**Design Reference:** First December Films — https://1stdecember.com/  
**Related Document:** PRD.md  
**Target Framework:** Astro (proposed)  
**Languages:** Indonesian & English

---

# 1. DESIGN SYSTEM OVERVIEW

## 1.1 Purpose

Dokumen ini mendefinisikan seluruh aturan desain, visual language, design tokens, komponen UI, layout, interaksi, dan motion yang digunakan dalam pengembangan Personal Portfolio Website Fajar Herdiansyah.

Dokumen menjadi acuan utama untuk memastikan konsistensi visual dan pengalaman pengguna di seluruh halaman.

Setiap implementasi UI wajib mengikuti spesifikasi yang tercantum di dalam dokumen ini.

## 1.2 Design Vision

"An immersive digital experience that combines editorial aesthetics, cinematic storytelling, and modern engineering."

Website harus terasa seperti editorial portfolio profesional, bukan template portfolio developer pada umumnya.

Karakter visual yang ingin dicapai:

- Cinematic: pengalaman visual yang imersif.
- Editorial: tipografi besar dengan komposisi seperti majalah.
- Minimalist: elemen visual yang digunakan secara selektif.
- Premium: penggunaan ruang, warna, dan tipografi yang terkontrol.
- Technical: tetap mencerminkan identitas software developer.
- Expressive: memiliki karakter dan identitas visual yang kuat.

## 1.3 Design Principles

### Principle 01 — Typography First

Typography menjadi elemen utama dalam membangun identitas website.

Headline harus memiliki karakter kuat dan mampu menjadi focal point tanpa membutuhkan terlalu banyak dekorasi.

### Principle 02 — Visual Storytelling

Setiap section harus memiliki tujuan komunikasi dan narasi.

Gambar, video, teks, dan whitespace harus bekerja bersama untuk menyampaikan cerita.

### Principle 03 — Controlled Contrast

Gunakan pergantian dark dan light sections untuk menciptakan ritme visual.

Tidak semua section harus menggunakan background yang sama.

### Principle 04 — Intentional Whitespace

Whitespace merupakan bagian dari desain, bukan ruang kosong yang harus selalu diisi.

Berikan jarak yang cukup antara headline, konten, dan visual.

### Principle 05 — Asymmetric Composition

Gunakan komposisi asimetris secara terkontrol untuk menghasilkan tampilan editorial.

Hindari penggunaan grid card yang terlalu monoton.

### Principle 06 — Subtle Motion

Animasi harus memperkuat pengalaman visual, bukan menjadi pusat perhatian.

### Principle 07 — Content Before Decoration

Desain tidak boleh mengalahkan kualitas informasi.

Informasi pengalaman, proyek, teknologi, dan pencapaian harus tetap mudah ditemukan dan dibaca.

---

# 2. VISUAL IDENTITY

## 2.1 Overall Art Direction

Visual direction mengambil inspirasi dari karakter First December Films.

| Element | Direction |
|---|---|
| Visual style | Cinematic editorial |
| Typography | High-contrast serif + modern sans |
| Layout | Asymmetric editorial grid |
| Background | Charcoal, off-white |
| Accent | Warm amber |
| Texture | Subtle film grain |
| Photography | Cinematic, documentary |
| Motion | Smooth, restrained |
| Navigation | Minimal floating header |
| Content presentation | Large typography and visual media |

## 2.2 Visual Personality

Website harus memberikan kesan:

- Professional, bukan corporate template.
- Creative, bukan playful.
- Modern, bukan futuristic berlebihan.
- Minimal, bukan kosong.
- Technical, bukan terlalu dekoratif.
- Premium, bukan terlalu banyak efek visual.

## 2.3 Visual Restrictions

Hindari:

- Gradient warna-warni sebagai dekorasi utama.
- Glassmorphism berlebihan.
- Neon colors.
- Excessive glow effects.
- Terlalu banyak rounded cards.
- Progress bars untuk persentase skill tanpa pengukuran objektif.
- Icon berlebihan.
- Animasi yang terlalu cepat atau terus bergerak.
- Layout dashboard sebagai gaya utama.
- Generic AI-generated illustrations sebagai pengganti dokumentasi proyek nyata.

---

# 3. COLOR SYSTEM

## 3.1 Color Philosophy

Color palette menggunakan kombinasi:

1. Dark cinematic.
2. Warm off-white.
3. Neutral gray.
4. Muted amber sebagai accent.

Warna harus memberikan kesan editorial, elegan, dan tidak mengganggu konten.

## 3.2 Core Color Tokens

### Dark Palette

| Token | HEX | Usage |
|---|---|---|
| `--color-dark-950` | #101010 | Primary dark background |
| `--color-dark-900` | #171717 | Secondary background |
| `--color-dark-800` | #222222 | Elevated surface |
| `--color-dark-700` | #303030 | Borders and separators |
| `--color-dark-600` | #454545 | Muted borders |

### Light Palette

| Token | HEX | Usage |
|---|---|---|
| `--color-light-50` | #FAF9F6 | Main light background |
| `--color-light-100` | #F3F1EC | Secondary light background |
| `--color-light-200` | #E8E5DE | Borders |
| `--color-light-300` | #D6D1C8 | Secondary surfaces |

### Text Colors

| Token | HEX | Usage |
|---|---|---|
| `--color-text-light` | #F3F1EC | Text on dark |
| `--color-text-dark` | #171717 | Text on light |
| `--color-text-muted-light` | #AAA9A4 | Secondary text on dark |
| `--color-text-muted-dark` | #66645F | Secondary text on light |

### Accent Palette

| Token | HEX | Usage |
|---|---|---|
| `--color-accent` | #E8AD32 | Main accent |
| `--color-accent-hover` | #D49A25 | Hover state |
| `--color-accent-soft` | #F4D99A | Subtle accent surface |
| `--color-accent-dark` | #67440C | Accent text on light surfaces |

Accent digunakan secara selektif untuk:
- Active navigation.
- Section number markers.
- CTA highlights.
- Small labels.
- Hover details.
- Selected interactive states.

Jangan menggunakan accent sebagai background untuk seluruh komponen.

## 3.3 Section Color Mapping

| Section | Background | Text |
|---|---|---|
| Hero | Dark 950 | Light 50 |
| Intro | Light 50 | Dark 950 |
| Selected Work | Dark 950 | Light 50 |
| About | Light 100 | Dark 950 |
| Expertise | Dark 900 | Light 50 |
| Experience | Light 50 | Dark 950 |
| Recognition | Dark 950 | Light 50 |
| Contact | Light 100 | Dark 950 |
| Footer | Dark 950 | Light 50 |

Pergantian warna tidak harus selalu kaku. Penyesuaian dapat dilakukan apabila dibutuhkan untuk menjaga alur visual dan storytelling.

## 3.4 CSS Color Variables

```css
:root {
  /* Dark */
  --color-dark-950: #101010;
  --color-dark-900: #171717;
  --color-dark-800: #222222;
  --color-dark-700: #303030;
  --color-dark-600: #454545;

  /* Light */
  --color-light-50: #FAF9F6;
  --color-light-100: #F3F1EC;
  --color-light-200: #E8E5DE;
  --color-light-300: #D6D1C8;

  /* Text */
  --color-text-light: #F3F1EC;
  --color-text-dark: #171717;
  --color-text-muted-light: #AAA9A4;
  --color-text-muted-dark: #66645F;

  /* Accent */
  --color-accent: #E8AD32;
  --color-accent-hover: #D49A25;
  --color-accent-soft: #F4D99A;
  --color-accent-dark: #67440C;

  /* Semantic */
  --color-success: #397A57;
  --color-error: #B84A42;
  --color-warning: #B77A21;
  --color-info: #527D9C;
}
```

## 3.5 Color Rules

1. Jangan menggunakan pure black (#000000) sebagai background utama.
2. Gunakan off-white daripada pure white.
3. Accent hanya digunakan untuk penekanan.
4. Pastikan kontras teks memenuhi WCAG AA.
5. Jangan menggunakan warna muted untuk teks kecil yang tidak terbaca.
6. Interactive states harus tetap memiliki kontras yang jelas.

---

# 4. TYPOGRAPHY SYSTEM

## 4.1 Typography Direction

Typography adalah elemen identitas visual paling dominan.

Gunakan kombinasi tiga karakter:

1. Editorial Serif — headline dan statement.
2. Modern Sans-serif — body dan interface.
3. Monospace — metadata dan technical labels.

## 4.2 Font Selection

### Display Font

**Instrument Serif**

Usage:
- Hero headline.
- Section headlines.
- Editorial statements.
- Large project titles.
- Closing statements.

Karakter:
- Elegant.
- Expressive.
- Editorial.
- High contrast.
- Premium.

### Body Font

**DM Sans**

Usage:
- Paragraphs.
- Navigation.
- Project descriptions.
- Buttons.
- General interface.
- Experience descriptions.

Karakter:
- Modern.
- Clean.
- Neutral.
- Highly readable.

### Monospace Font

**IBM Plex Mono**

Usage:
- Section labels.
- Project metadata.
- Year indicators.
- Technical stack.
- Numbering.
- Small technical annotations.

Font harus di-host secara lokal atau dimuat menggunakan metode yang mempertimbangkan performa dan lisensinya.

## 4.3 Font Import

Jika menggunakan Google Fonts:

```css
@import url(
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap'
);
```

Untuk production, self-hosting font yang sudah dioptimalkan lebih disarankan.

## 4.4 Font Variables

```css
:root {
  --font-display: "Instrument Serif", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
}
```

## 4.5 Type Scale

Ukuran menggunakan fluid typography dengan `clamp()`.

| Token | Desktop | Mobile | Usage |
|---|---:|---:|---|
| Display XL | 112px | 56px | Hero |
| Display LG | 88px | 48px | Main section |
| Display MD | 68px | 40px | Section heading |
| Heading XL | 48px | 34px | Project title |
| Heading LG | 36px | 28px | Subheading |
| Heading MD | 28px | 24px | Card title |
| Body LG | 20px | 18px | Intro paragraph |
| Body MD | 16px | 16px | Standard body |
| Body SM | 14px | 14px | Supporting text |
| Label | 12px | 11px | Metadata |
| Caption | 11px | 10px | Technical label |

## 4.6 Fluid Typography

```css
:root {
  --text-display-xl: clamp(3.5rem, 8vw, 7rem);
  --text-display-lg: clamp(3rem, 6.5vw, 5.5rem);
  --text-display-md: clamp(2.5rem, 5vw, 4.25rem);

  --text-heading-xl: clamp(2.1rem, 3.5vw, 3rem);
  --text-heading-lg: clamp(1.75rem, 3vw, 2.25rem);
  --text-heading-md: clamp(1.5rem, 2.5vw, 1.75rem);

  --text-body-lg: clamp(1.125rem, 1.5vw, 1.25rem);
  --text-body-md: 1rem;
  --text-body-sm: 0.875rem;
}
```

## 4.7 Typography Rules

### Display

- Gunakan Instrument Serif.
- Line-height: 0.88–1.05.
- Letter-spacing: -0.04em hingga -0.02em.
- Headline harus memiliki ruang visual yang cukup.
- Hindari headline terlalu panjang dalam satu baris.

### Body

- Gunakan DM Sans.
- Line-height: 1.5–1.75.
- Letter-spacing: normal hingga -0.01em.
- Maximum paragraph width: 65–75 characters.

### Labels

- Gunakan IBM Plex Mono.
- Uppercase.
- Letter-spacing: 0.04em–0.08em.
- Gunakan ukuran kecil secara konsisten.

---

# 5. SPACING SYSTEM

## 5.1 Spacing Philosophy

Gunakan spacing berbasis kelipatan 4px.

Tujuannya adalah menghasilkan konsistensi dan ritme visual pada setiap komponen.

## 5.2 Spacing Tokens

| Token | Value |
|---|---:|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |
| `--space-32` | 128px |
| `--space-40` | 160px |
| `--space-48` | 192px |

## 5.3 Section Spacing

| Breakpoint | Vertical Padding |
|---|---:|
| Desktop | 128–160px |
| Tablet | 88–112px |
| Mobile | 64–88px |

Spacing dapat disesuaikan berdasarkan kebutuhan konten, tetapi jangan membuat section terlalu rapat.

## 5.4 Content Spacing

- Heading to paragraph: 24–32px.
- Paragraph to paragraph: 20–24px.
- Section heading to content: 48–72px.
- Card internal spacing: 20–32px.
- Grid gap: 24–40px.
- Navigation spacing: 24–40px.

## 5.5 CSS Variables

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-40: 10rem;
  --space-48: 12rem;
}
```

---

# 6. GRID & LAYOUT SYSTEM

## 6.1 Grid Philosophy

Gunakan editorial grid dengan 12 columns sebagai basis desktop layout.

Grid tidak harus simetris pada setiap section.

Perbedaan ukuran kolom dan posisi elemen justru digunakan untuk membangun karakter visual.

## 6.2 Container Width

| Token | Value |
|---|---:|
| `--container-sm` | 640px |
| `--container-md` | 768px |
| `--container-lg` | 1024px |
| `--container-xl` | 1280px |
| `--container-2xl` | 1440px |

Maximum content width: 1440px.

## 6.3 Container Padding

| Screen | Horizontal Padding |
|---|---:|
| Desktop | 48–64px |
| Tablet | 32px |
| Mobile | 20–24px |

## 6.4 Grid Configuration

### Desktop

- 12 columns.
- Gap: 24px.
- Container: maximum 1440px.

### Tablet

- 8 columns.
- Gap: 20px.

### Mobile

- 4 columns.
- Gap: 12–16px.

## 6.5 CSS Grid Foundation

```css
.container {
  width: min(
    calc(100% - 2 * var(--container-padding)),
    1440px
  );
  margin-inline: auto;
}

.editorial-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
}

:root {
  --container-padding: 56px;
}

@media (max-width: 1024px) {
  .editorial-grid {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  :root {
    --container-padding: 32px;
  }
}

@media (max-width: 640px) {
  .editorial-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  :root {
    --container-padding: 20px;
  }
}
```

## 6.6 Editorial Composition Patterns

Gunakan beberapa pola berikut:

**Pattern A — Split Layout**

- Label pada kolom kiri.
- Heading dan paragraph pada kolom tengah.
- Image pada kolom kanan.

**Pattern B — Asymmetric Media**

- Image utama menggunakan 7 kolom.
- Image pendukung menggunakan 5 kolom.
- Vertical alignment berbeda.

**Pattern C — Full Bleed**

- Image atau video memenuhi seluruh lebar viewport.
- Dapat disertai overlay text.

**Pattern D — Offset Layout**

- Heading ditempatkan di kolom tertentu.
- Konten dimulai lebih jauh dari heading.
- Menghasilkan ritme editorial.

**Pattern E — Staggered Grid**

- Project cards memiliki tinggi dan posisi yang bervariasi.
- Gunakan alignment yang terkontrol.
- Hindari masonry yang sulit dibaca.

---

# 7. BORDER, RADIUS & DEPTH

## 7.1 Border

Gunakan border tipis dan subtle.

```css
:root {
  --border-dark: rgba(243, 241, 236, 0.16);
  --border-light: rgba(23, 23, 23, 0.14);
  --border-strong: rgba(243, 241, 236, 0.3);
}
```

## 7.2 Border Radius

Website menggunakan bentuk yang cenderung geometris.

| Token | Value | Usage |
|---|---:|---|
| `--radius-none` | 0px | Editorial media |
| `--radius-sm` | 2px | Small UI |
| `--radius-md` | 4px | Buttons |
| `--radius-lg` | 8px | Special components |
| `--radius-full` | 9999px | Small status indicators |

Default image radius: 0px.

Default button radius: 2–4px.

Jangan menggunakan rounded cards sebagai gaya dominan.

## 7.3 Shadows

Shadow hanya digunakan untuk komponen yang benar-benar memerlukan depth.

```css
:root {
  --shadow-subtle: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-overlay: 0 12px 40px rgba(0, 0, 0, 0.22);
}
```

Desain utama tetap mengandalkan warna, kontras, dan komposisi, bukan shadow.

---

# 8. TEXTURE & MEDIA SYSTEM

## 8.1 Film Grain

Film grain merupakan elemen pendukung identitas cinematic.

Ketentuan:
- Sangat subtle.
- Opacity rendah.
- Tidak mengganggu teks.
- Tidak menyebabkan rendering berat.
- Tidak menutupi detail visual.

Implementasi dapat menggunakan optimized noise texture dengan pseudo-element.

```css
.noise-overlay::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("/images/noise.webp");
  background-repeat: repeat;
  mix-blend-mode: soft-light;
}
```

Texture bersifat dekoratif dan tidak boleh menghalangi interaksi.

## 8.2 Image Direction

Gunakan gambar yang memiliki karakter:

- Cinematic lighting.
- Natural contrast.
- Documentary photography.
- Clean composition.
- Controlled color grading.
- Authentic project screenshots.

Untuk personal portrait, gunakan foto asli yang representatif.

## 8.3 Image Aspect Ratios

| Usage | Ratio |
|---|---|
| Hero background | 16:9 atau 16:10 |
| Project showcase | 16:9 |
| Project portrait | 4:5 |
| Personal portrait | 4:5 |
| Small editorial image | 3:4 |
| Full-width visual | 16:9 atau natural ratio |

## 8.4 Image Behavior

- Gunakan `object-fit: cover` untuk cinematic media.
- Gunakan `object-fit: contain` untuk screenshot UI yang harus terlihat utuh.
- Hindari cropping informasi penting.
- Gunakan `aspect-ratio` untuk mencegah layout shift.
- Gunakan lazy loading untuk gambar di luar viewport.
- Hero image dapat diprioritaskan melalui preload atau fetch priority.
- Sediakan fallback image.

## 8.5 Video Direction

Video dapat digunakan pada:
- Hero background.
- Selected work.
- Project showcase.

Ketentuan:
- Muted autoplay jika menjadi background.
- Loop hanya jika diperlukan.
- Sediakan poster image.
- Sediakan fallback untuk mobile.
- Hindari autoplay video besar pada jaringan terbatas.
- Video tidak boleh mengganggu aksesibilitas.

---

# 9. COMPONENT SYSTEM

Seluruh komponen harus menggunakan design tokens dan memiliki state yang konsisten.

## 9.1 Navigation

### Header

Karakter:
- Minimal.
- Fixed atau sticky.
- Transparan di atas hero.
- Memiliki background solid saat diperlukan untuk readability.
- Logo di kiri.
- Contact dan menu di kanan.

Desktop:
- Logo.
- Contact CTA.
- Menu toggle.

Mobile:
- Logo.
- Menu toggle.
- Contact dapat dipindahkan ke dalam menu.

### Navigation Overlay

Overlay menu menggunakan tampilan editorial.

Content:
- Large navigation links.
- Numbered links.
- Social media.
- Contact information.
- Language switcher.

Interaction:
- Menu membuka dengan transition.
- Background dapat menggunakan dark atau light surface.
- Menu harus dapat ditutup dengan tombol close dan Escape.
- Focus harus dikelola dengan benar.
- Body scrolling dikunci ketika overlay terbuka.

## 9.2 Buttons

### Primary Button

Usage:
- Contact CTA.
- Main action.
- Explore work.

Style:
- Solid dark atau light background sesuai section.
- High contrast.
- Small radius.
- Strong typography.

### Secondary Button

Usage:
- GitHub.
- Live demo.
- Supporting navigation.

Style:
- Transparent.
- Border.
- Hover background transition.

### Accent Marker Button

Usage:
- Section markers.
- Small editorial navigation.

Style:
- Accent background.
- Dark text.
- Minimal geometry.

Button sizing:

| Type | Height |
|---|---:|
| Small | 36px |
| Medium | 44px |
| Large | 52px |

Minimum interactive target harus memenuhi rekomendasi aksesibilitas, idealnya 44 × 44px.

## 9.3 Section Heading

Setiap section heading menggunakan struktur:

```text
[01] / SECTION LABEL

Large Editorial Heading

Supporting paragraph (optional)
```

Properties:
- Section number.
- Monospace label.
- Display serif headline.
- Optional description.

Heading harus konsisten tetapi komposisi dapat berubah berdasarkan layout.

## 9.4 Project Card

Project Card menjadi salah satu komponen paling penting.

Content:
- Preview image.
- Project title.
- Category.
- Year.
- Short description.
- Technology labels.
- View details.

Design:
- Image menjadi elemen dominan.
- Metadata menggunakan monospace.
- Title menggunakan display atau body typography sesuai ukuran.
- No excessive card shadows.
- Hover image zoom sangat subtle.

Project card harus mendukung variasi ukuran dan posisi.

## 9.5 Project Metadata

Metadata dapat berisi:

```text
PROJECT 01
WEB APPLICATION
2026
PHP / CODEIGNITER / MYSQL
```

Gunakan IBM Plex Mono dengan ukuran kecil.

## 9.6 Technology Tags

Technology tags menggunakan tampilan minimal.

- Border tipis.
- No gradient.
- Small typography.
- Neutral background.
- Accent hanya untuk selected state.

Contoh:

```text
PHP
LARAVEL
MYSQL
ASTRO
JAVASCRIPT
```

## 9.7 Experience Timeline

Gunakan editorial timeline.

Content:
- Period.
- Position.
- Company.
- Description.
- Responsibilities.

Visual:
- Year atau period pada kolom kiri.
- Position dan company pada kolom utama.
- Border horizontal sebagai separator.
- Optional expandable details.

## 9.8 Skills List

Skills dikelompokkan berdasarkan kategori.

Gunakan:
- Typography.
- Grid.
- Technology logos jika relevan.
- Minimal separators.

Hindari:
- Random progress percentages.
- Skill ratings tanpa bukti.
- Circular progress indicators.

## 9.9 Contact Component

Contact section menggunakan headline besar dan CTA yang jelas.

Elements:
- Editorial headline.
- Supporting text.
- Email link.
- GitHub link.
- LinkedIn link.
- Optional contact form.

Contact form jika dibuat harus memiliki:
- Input labels.
- Validation states.
- Loading state.
- Success state.
- Error state.
- Accessible feedback.

## 9.10 Footer

Footer memiliki:
- Large personal identity.
- Navigation columns.
- Social links.
- Email.
- Copyright.
- Back-to-top.

Gunakan whitespace yang luas dan typography yang kuat.

---

# 10. MOTION & INTERACTION SYSTEM

## 10.1 Motion Philosophy

Motion harus memberikan kesan:
- Smooth.
- Controlled.
- Cinematic.
- Natural.
- Intentional.

Animasi tidak boleh mengurangi performa atau menghambat navigasi.

## 10.2 Motion Tokens

### Duration

| Token | Duration | Usage |
|---|---:|---|
| `--duration-fast` | 150ms | Hover |
| `--duration-normal` | 300ms | UI transitions |
| `--duration-medium` | 500ms | Image reveal |
| `--duration-slow` | 800ms | Section reveal |
| `--duration-cinematic` | 1200ms | Hero entrance |

### Easing

```css
:root {
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-cinematic: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-linear: linear;
}
```

## 10.3 Animation Patterns

### Hero Entrance

- Headline fade-in.
- Slight vertical movement.
- Background media reveal.
- Navigation fade-in.

### Section Reveal

- Content fades in.
- Small vertical movement.
- Triggered when entering viewport.
- Staggering hanya jika diperlukan.

### Image Reveal

- Clip-path reveal.
- Subtle scale.
- Optional opacity transition.

### Hover Interaction

- Image scale: 1.02–1.04.
- Text color transition.
- Arrow movement: 4–8px.
- Button background transition.

### Navigation

- Overlay fade.
- Menu links stagger.
- Background transition.
- Focus management.

## 10.4 Motion Restrictions

- Jangan menggunakan parallax berlebihan.
- Jangan membuat semua elemen bergerak.
- Hindari scroll hijacking.
- Jangan memaksa smooth scrolling yang merusak browser behavior.
- Jangan menggunakan animasi infinite tanpa alasan.
- Animasi tidak boleh menjadi syarat untuk melihat konten.

## 10.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 10.6 Recommended Animation Strategy

Prioritas implementasi:

1. Native CSS transitions.
2. Intersection Observer.
3. CSS keyframes.
4. GSAP untuk animasi kompleks yang benar-benar diperlukan.

Lenis atau scroll library lain bersifat opsional. Jangan menambahkan library animasi hanya untuk efek sederhana.

---

# 11. RESPONSIVE DESIGN SYSTEM

## 11.1 Breakpoints

Gunakan mobile-first approach.

| Breakpoint | Width | Target |
|---|---:|---|
| Mobile S | 320px | Small phones |
| Mobile L | 640px | Large phones |
| Tablet | 768px | Tablets |
| Laptop | 1024px | Small desktops |
| Desktop | 1280px | Standard desktops |
| Wide | 1440px+ | Large displays |

## 11.2 Responsive Rules

### Desktop

- Full editorial grid.
- Large display typography.
- Asymmetric layouts.
- Wide media.
- Expanded navigation.

### Tablet

- Simplified grid.
- Reduce typography.
- Adjust image placement.
- Reduce section spacing.
- Maintain visual hierarchy.

### Mobile

- Single-column content flow where appropriate.
- Reduced headline size.
- Smaller horizontal padding.
- Simplified image composition.
- Mobile menu overlay.
- Touch-friendly controls.
- Reduced parallax and animation.
- No horizontal overflow.

## 11.3 Mobile Layout Rules

1. Prioritaskan urutan informasi.
2. Jangan memaksakan 12-column desktop composition.
3. Hindari headline yang terpotong.
4. Gunakan image ratio yang sesuai.
5. Semua CTA harus mudah dijangkau.
6. Gunakan spacing yang konsisten.
7. Pertahankan alternating dark/light sections.
8. Jangan menghilangkan informasi penting hanya demi layout.

---

# 12. PAGE-SPECIFIC DESIGN DIRECTION

## 12.1 Home / Hero

Visual:
- Full viewport cinematic background.
- Dark overlay.
- Large centered atau offset serif headline.
- Minimal header.
- Small developer identification label.
- Scroll indicator.

Content:
- FULL STACK WEB DEVELOPER.
- Building Digital Experiences Through Code & Creativity.
- Fajar Herdiansyah.
- Explore My Work.

Hero harus langsung memperlihatkan identitas developer, bukan hanya menampilkan animasi dekoratif.

## 12.2 Intro / About

Visual:
- Light background.
- Large editorial heading.
- Asymmetric image placement.
- Large paragraph.
- Section marker.

Content:
- Biography.
- Development philosophy.
- Educational context.
- Professional interests.

## 12.3 Selected Work

Visual:
- Dark background.
- Large serif section heading.
- Asymmetric project grid.
- Large thumbnails.
- Minimal project metadata.

Project layout harus memprioritaskan kualitas dokumentasi dan screenshot asli.

## 12.4 Expertise

Visual:
- Dark background.
- Large typography.
- Categorized skill grid.
- Thin separators.

Content:
- Frontend.
- Backend.
- Database.
- Networking.
- Tools.

## 12.5 Experience

Visual:
- Light background.
- Editorial timeline.
- Large period labels.
- Clear company and position hierarchy.

## 12.6 Recognition

Visual:
- Dark background.
- Table/list-based presentation.
- Large heading.
- Thin separators.

Content:
- Awards.
- Education.
- Certifications.
- Organization.

## 12.7 Contact

Visual:
- Light background.
- Oversized headline.
- Large email CTA.
- Social links.
- Minimal decoration.

## 12.8 Footer

Visual:
- Dark background.
- Large brand identity.
- Multi-column navigation.
- Minimal copyright.

---

# 13. ICONOGRAPHY SYSTEM

Icon digunakan secara selektif.

Style:
- Outline icons.
- Consistent stroke width.
- Minimal detail.
- Neutral colors.

Recommended icon library:
- Lucide Icons.

Usage:
- External links.
- Navigation.
- Arrow indicators.
- Social media.
- UI controls.

Icon tidak boleh menggantikan label penting.

---

# 14. ACCESSIBILITY SYSTEM

Seluruh implementasi wajib memperhatikan accessibility.

## 14.1 Contrast

Target:
- WCAG AA.
- 4.5:1 untuk normal text.
- 3:1 untuk large text.
- 3:1 untuk elemen visual UI yang relevan.

## 14.2 Keyboard Navigation

- Seluruh link dapat diakses menggunakan keyboard.
- Buttons dapat dioperasikan dengan keyboard.
- Menu memiliki Escape behavior.
- Focus indicator terlihat jelas.
- Focus tidak boleh hilang dalam modal atau overlay.

## 14.3 Semantic HTML

Gunakan:
- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `button`
- `a`

Hindari penggunaan elemen non-semantic untuk interactive controls.

## 14.4 Images

- Gunakan descriptive alt text.
- Decorative image menggunakan empty alt.
- Hindari alt text generik seperti "image1".
- Jangan menampilkan informasi penting hanya di dalam gambar.

---

# 15. BILINGUAL DESIGN RULES

Website mendukung Bahasa Indonesia dan Inggris.

Design system harus mengakomodasi perbedaan panjang teks.

Ketentuan:
1. Heading tidak boleh memiliki fixed width yang terlalu sempit.
2. Button harus dapat menyesuaikan panjang teks.
3. Navigation harus tetap rapi.
4. Paragraph menggunakan flexible width.
5. Language switcher harus konsisten.
6. Konten harus menggunakan typography dan hierarchy yang sama.
7. Layout tidak boleh rusak saat bahasa diganti.

Default language sesuai PRD: English.

Bahasa Indonesia tersedia sebagai alternatif.

---

# 16. DESIGN TOKENS — COMPLETE CSS FOUNDATION

Berikut fondasi CSS yang dapat digunakan sebagai titik awal implementasi.

```css
:root {
  /* =========================
     COLORS
  ========================= */

  --color-dark-950: #101010;
  --color-dark-900: #171717;
  --color-dark-800: #222222;
  --color-dark-700: #303030;
  --color-dark-600: #454545;

  --color-light-50: #FAF9F6;
  --color-light-100: #F3F1EC;
  --color-light-200: #E8E5DE;
  --color-light-300: #D6D1C8;

  --color-text-light: #F3F1EC;
  --color-text-dark: #171717;
  --color-text-muted-light: #AAA9A4;
  --color-text-muted-dark: #66645F;

  --color-accent: #E8AD32;
  --color-accent-hover: #D49A25;
  --color-accent-soft: #F4D99A;
  --color-accent-dark: #67440C;

  /* =========================
     TYPOGRAPHY
  ========================= */

  --font-display: "Instrument Serif", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  --text-display-xl: clamp(3.5rem, 8vw, 7rem);
  --text-display-lg: clamp(3rem, 6.5vw, 5.5rem);
  --text-display-md: clamp(2.5rem, 5vw, 4.25rem);

  --text-heading-xl: clamp(2.1rem, 3.5vw, 3rem);
  --text-heading-lg: clamp(1.75rem, 3vw, 2.25rem);
  --text-heading-md: clamp(1.5rem, 2.5vw, 1.75rem);

  --text-body-lg: clamp(1.125rem, 1.5vw, 1.25rem);
  --text-body-md: 1rem;
  --text-body-sm: 0.875rem;

  /* =========================
     SPACING
  ========================= */

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-40: 10rem;
  --space-48: 12rem;

  /* =========================
     LAYOUT
  ========================= */

  --container-width: 1440px;
  --container-padding: 56px;

  --grid-gap: 24px;

  /* =========================
     BORDERS
  ========================= */

  --border-dark: rgba(243, 241, 236, 0.16);
  --border-light: rgba(23, 23, 23, 0.14);

  --radius-none: 0;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-full: 9999px;

  /* =========================
     MOTION
  ========================= */

  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-medium: 500ms;
  --duration-slow: 800ms;
  --duration-cinematic: 1200ms;

  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-cinematic: cubic-bezier(0.77, 0, 0.175, 1);
}

/* =========================
   BASE
========================= */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--color-dark-950);
  color: var(--color-text-light);
  font-family: var(--font-body);
  font-size: var(--text-body-md);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img,
video {
  display: block;
  max-width: 100%;
}

button,
input,
textarea {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  font-weight: 400;
}

p {
  margin: 0;
}

/* =========================
   CONTAINER
========================= */

.container {
  width: min(
    calc(100% - 2 * var(--container-padding)),
    var(--container-width)
  );
  margin-inline: auto;
}

/* =========================
   SECTION
========================= */

.section {
  position: relative;
  padding-block: clamp(4rem, 10vw, 10rem);
  overflow: clip;
}

.section--dark {
  background: var(--color-dark-950);
  color: var(--color-text-light);
}

.section--light {
  background: var(--color-light-50);
  color: var(--color-text-dark);
}

/* =========================
   TYPOGRAPHY
========================= */

.display {
  font-family: var(--font-display);
  font-size: var(--text-display-xl);
  line-height: 0.92;
  letter-spacing: -0.035em;
}

.heading {
  font-family: var(--font-display);
  font-size: var(--text-display-md);
  line-height: 0.98;
  letter-spacing: -0.03em;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1024px) {
  :root {
    --container-padding: 32px;
    --grid-gap: 20px;
  }
}

@media (max-width: 640px) {
  :root {
    --container-padding: 20px;
    --grid-gap: 16px;
  }
}
```

Catatan: CSS di atas merupakan fondasi token dan base styling. Komponen, responsive behavior, dan section-specific styles tetap diimplementasikan pada stylesheet masing-masing.

---

# 17. COMPONENT ARCHITECTURE

Design system harus diterapkan menggunakan reusable components.

Proposed component structure:

```text
src/
│
├── components/
│   │
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   └── Container.astro
│   │
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── SectionHeading.astro
│   │   ├── SectionMarker.astro
│   │   ├── ProjectTag.astro
│   │   └── SocialLink.astro
│   │
│   ├── project/
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   ├── ProjectMetadata.astro
│   │   └── ProjectGallery.astro
│   │
│   ├── experience/
│   │   └── ExperienceTimeline.astro
│   │
│   └── sections/
│       ├── Hero.astro
│       ├── Intro.astro
│       ├── SelectedWork.astro
│       ├── Expertise.astro
│       ├── Experience.astro
│       ├── Recognition.astro
│       └── Contact.astro
│
├── styles/
│   ├── tokens.css
│   ├── reset.css
│   ├── global.css
│   ├── typography.css
│   ├── layout.css
│   ├── components.css
│   └── animations.css
```

Rules:
- Gunakan reusable components.
- Hindari duplikasi CSS.
- Semua warna menggunakan tokens.
- Semua spacing mengacu pada spacing system.
- Semua typography mengacu pada typography system.
- Jangan membuat komponen baru yang melanggar design principles tanpa alasan kuat.

---

# 18. PERFORMANCE REQUIREMENTS

Visual experience harus tetap cepat.

Rules:

1. Prioritaskan CSS animation.
2. Hindari JavaScript untuk animasi sederhana.
3. Gunakan optimized image formats seperti AVIF atau WebP.
4. Gunakan responsive image sources.
5. Lazy-load image di luar viewport.
6. Prioritaskan loading hero assets.
7. Hindari autoplay video besar pada perangkat mobile.
8. Gunakan font subset jika memungkinkan.
9. Hindari terlalu banyak font weights.
10. Hindari layout shifts.
11. Batasi penggunaan third-party scripts.
12. Jangan menambahkan library tanpa kebutuhan yang jelas.

Performance target mengikuti PRD:

- Lighthouse Performance ≥ 90.
- LCP ≤ 2.5s.
- INP ≤ 200ms.
- CLS ≤ 0.1.

---

# 19. IMPLEMENTATION RULES FOR AI CODING AGENTS

Bagian ini wajib diperhatikan ketika menggunakan AI coding agent untuk mengembangkan website.

## 19.1 Design System Compliance

AI coding agent wajib:

- Membaca DESIGNSYSTEM.md sebelum membuat UI.
- Membaca PRD.md sebelum menentukan struktur halaman.
- Menggunakan color tokens yang tersedia.
- Menggunakan typography yang sudah ditentukan.
- Mengikuti spacing system.
- Mengikuti grid system.
- Menggunakan reusable components.
- Mengikuti responsive rules.
- Mengikuti motion guidelines.

## 19.2 Visual Consistency

Dilarang:

- Mengganti font tanpa alasan.
- Mengubah palette tanpa persetujuan.
- Menambahkan gradient secara sembarangan.
- Menggunakan rounded cards sebagai pola utama.
- Membuat layout generic developer portfolio.
- Menggunakan warna accent secara berlebihan.
- Membuat semua section terlihat sama.
- Menggunakan animasi yang mengganggu readability.

## 19.3 Content Integrity

AI coding agent tidak boleh mengarang:

- Pengalaman kerja.
- Project descriptions.
- Project metrics.
- Awards.
- Certifications.
- Client names.
- Professional achievements.

Jika data belum tersedia, gunakan placeholder yang jelas dan mudah diganti.

## 19.4 Responsive Compliance

Setiap komponen wajib diuji pada:
- 320px.
- 375px.
- 640px.
- 768px.
- 1024px.
- 1280px.
- 1440px.

## 19.5 Component Development

Sebelum membuat komponen baru:
1. Periksa apakah komponen serupa sudah tersedia.
2. Gunakan komponen yang ada jika sesuai.
3. Hindari duplikasi.
4. Pastikan props memiliki tujuan yang jelas.
5. Pastikan komponen responsif.

## 19.6 Visual Quality Assurance

Setiap halaman harus melalui pemeriksaan:

- Typography consistency.
- Spacing consistency.
- Color consistency.
- Image quality.
- Responsive layout.
- Interaction states.
- Accessibility.
- Performance.

---

# 20. DESIGN SYSTEM ACCEPTANCE CRITERIA

Design system dinyatakan berhasil diterapkan apabila:

## Visual Identity

- [ ] Website memiliki cinematic editorial identity.
- [ ] Typography serif dan sans-serif konsisten.
- [ ] Warna dark dan light diterapkan sesuai section.
- [ ] Accent digunakan secara terkontrol.
- [ ] Grain texture subtle.
- [ ] Visual storytelling menjadi bagian utama.

## Layout

- [ ] Desktop menggunakan editorial grid.
- [ ] Asymmetric composition diterapkan secara konsisten.
- [ ] Whitespace terjaga.
- [ ] Container dan spacing konsisten.
- [ ] Tidak ada horizontal overflow.

## Components

- [ ] Header dan navigation konsisten.
- [ ] Button memiliki state yang jelas.
- [ ] Project cards reusable.
- [ ] Section headings konsisten.
- [ ] Experience timeline konsisten.
- [ ] Footer mengikuti visual identity.

## Motion

- [ ] Hero entrance smooth.
- [ ] Section reveal tidak berlebihan.
- [ ] Hover states konsisten.
- [ ] Navigation transition berfungsi.
- [ ] Reduced motion tersedia.

## Responsive

- [ ] Desktop layout sesuai.
- [ ] Tablet layout sesuai.
- [ ] Mobile layout sesuai.
- [ ] Typography fluid.
- [ ] Touch interactions nyaman.

## Accessibility & Performance

- [ ] WCAG AA contrast diperiksa.
- [ ] Keyboard navigation berfungsi.
- [ ] Alt text tersedia.
- [ ] Reduced motion didukung.
- [ ] Images dioptimalkan.
- [ ] Core Web Vitals diuji.

---

# 21. FINAL DESIGN DIRECTION

Personal Portfolio Fajar Herdiansyah harus memiliki identitas visual yang kuat melalui perpaduan:

**CINEMATIC + EDITORIAL + MINIMALISM + ENGINEERING**

Karakter First December Films menjadi inspirasi dalam hal komposisi, tipografi, visual storytelling, dan pengalaman navigasi.

Namun, identitas akhir tetap harus merepresentasikan Fajar sebagai Full Stack Web Developer.

Website bukan sekadar menampilkan daftar teknologi yang dikuasai.

Website harus memperlihatkan:
- Siapa Fajar.
- Bagaimana Fajar berpikir.
- Apa yang telah Fajar bangun.
- Bagaimana Fajar menyelesaikan masalah.
- Apa yang membuat hasil pekerjaannya bernilai.

**Final Design Statement:**

"Less decoration. Stronger identity. Better storytelling. Meaningful engineering."

---

**END OF DOCUMENT — DESIGNSYSTEM v1.0.0**
