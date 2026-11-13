import type { Localized } from './types';

export interface HeroCopy {
  eyebrow: string;
  lines: Array<{ text: string; emphasis?: boolean }>;
  support: string;
  location: string;
  role: string;
  index: string;
  scroll: string;
}

export interface AboutCopy {
  title: string;
  lede: string;
  paragraphs: string[];
  quote: string;
  portraitCaption: string;
}

export interface ContactCopy {
  lines: Array<{ text: string; emphasis?: boolean }>;
  lede: string;
  emailLabel: string;
  emailAction: string;
  socialLabel: string;
}

export const site = {
  name: 'Fajar Herdiansyah',
  title: 'Full Stack Web Developer',
  location: 'Bekasi, Indonesia',
  email: 'fahherd@gmail.com',
  github: 'https://github.com/fahherd',
  linkedin: 'https://www.linkedin.com/in/fajar-herdiansyah',
  instagram: 'https://www.instagram.com/fahherd/',
  portrait: {
    src: '/images/profile.jpeg',
    alt: 'Fajar Herdiansyah',
  },
  hero: {
    id: {
      eyebrow: 'FULL STACK WEB DEVELOPER',
      lines: [
        { text: 'Membangun Pengalaman' },
        { text: 'Digital Melalui Kode' },
        { text: '& Kreativitas.', emphasis: true },
      ],
      support:
        'Saya Fajar Herdiansyah, developer yang berfokus membangun aplikasi web fungsional dan pengalaman digital yang bermakna.',
      location: 'Bekasi, Indonesia',
      role: '',
      index: '',
      scroll: 'Gulir untuk menjelajah',
    },
    en: {
      eyebrow: 'FULL STACK WEB DEVELOPER',
      lines: [
        { text: 'Building Digital' },
        { text: 'Experiences Through' },
        { text: 'Code & Creativity.', emphasis: true },
      ],
      support:
        "I'm Fajar Herdiansyah, a developer passionate about building functional web applications and meaningful digital experiences.",
      location: 'Bekasi, Indonesia',
      role: '',
      index: '',
      scroll: 'Scroll to explore',
    },
  } satisfies Localized<HeroCopy>,
  about: {
    id: {
      title: 'Lebih dari Sekadar Menulis Kode.',
      lede:
        'Merancang sistem web yang rapi di balik layar, dan jernih di hadapan pengguna.',
      paragraphs: [
        'Sebagai mahasiswa Teknik Informatika di Universitas Bina Insani dan Full Stack Web Developer di Bekasi, saya berfokus menjembatani logika backend yang kompleks dengan antarmuka yang bersih dan mudah digunakan.',
        'bekerja dengan ekosistem PHP, CodeIgniter, Laravel, dan MySQL. Latar belakang saya di bidang jaringan komputer dan produksi konten kreatif turut membentuk cara kerja saya yang sistematis, mulai dari merancang fondasi data hingga memastikan setiap elemen visual punya fungsi yang jelas.',
        'Saat ini, saya aktif mengembangkan diri lewat proyek kolaboratif, organisasi mahasiswa, dan riset teknologi mandiri.',
      ],
      quote:
        "Programming isn't about what you know; it's about what you can figure out.",
      portraitCaption: 'Fajar Herdiansyah — Bekasi, Indonesia',
    },
    en: {
      title: 'More Than Just Writing Code.',
      lede:
        'I build web applications with a focus on structure, clarity, and real-world use.',
      paragraphs: [
        "I'm an Informatics Engineering student at Universitas Bina Insani and a Full Stack Web Developer based in Bekasi. My work sits at the intersection of backend logic, database structure, and interface clarity — building systems that are functional, understandable, and maintainable.",
        'My background includes web application development with PHP, CodeIgniter, Laravel, and MySQL, along with networking fundamentals and creative content production. That combination shapes how I approach problems: understand the system, design the flow, then build the interface.',
        "I'm currently deepening my skills through academic projects, organizational work, and independent exploration. I care about the details that make software useful — clear data models, predictable behavior, and interfaces that respect the people using them.",
      ],
      quote: 'Show the work. Explain the thinking. Let the details speak.',
      portraitCaption: 'Fajar Herdiansyah — Bekasi, Indonesia',
    },
  } satisfies Localized<AboutCopy>,
  contact: {
    id: {
      lines: [
        { text: 'Punya Proyek' },
        { text: 'dalam Pikiran?' },
        { text: 'Mari Bangun Sesuatu.', emphasis: true },
      ],
      lede:
        'Untuk pertanyaan profesional, kolaborasi, atau diskusi seputar pengembangan web, hubungi saya melalui email atau LinkedIn.',
      emailLabel: 'Email',
      emailAction: 'Kirim Email',
      socialLabel: 'Media Sosial',
    },
    en: {
      lines: [
        { text: 'Have a Project' },
        { text: 'in Mind?' },
        { text: "Let's Build Something.", emphasis: true },
      ],
      lede:
        'For professional inquiries, collaboration, or a conversation about web development, reach out through email or LinkedIn.',
      emailLabel: 'Email',
      emailAction: 'Send an Email',
      socialLabel: 'Social',
    },
  } satisfies Localized<ContactCopy>,
};
