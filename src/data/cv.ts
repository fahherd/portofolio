import type { Localized, Period } from './types';

export interface ExperienceEntry {
  id: string;
  role: Localized<string>;
  company: string;
  period: Period;
  responsibilities: Localized<string[]>;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: Localized<string>;
  period: Period;
  grade?: Localized<string>;
  organization?: string;
}

export interface AwardEntry {
  id: string;
  title: Localized<string>;
  event: string;
  institution: string;
  year: number;
}

export interface CertificationEntry {
  id: string;
  name: string;
  issuer?: string;
  period: {
    start: string;
    end?: string | null;
  };
  status: 'completed' | 'historical';
  note?: Localized<string>;
}

export interface OrganizationEntry {
  id: string;
  name: string;
  role: Localized<string>;
  period: Period;
  responsibilities: Localized<string[]>;
  description?: Localized<string>;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'samudera-indonesia',
    role: {
      id: 'IT Business Analyst Intern',
      en: 'IT Business Analyst Intern',
    },
    company: 'PT. Masaji Kargosentra Tama — Samudera Indonesia Group',
    period: { start: '2026-08', end: '2026-11' },
    responsibilities: {
      id: [
        'Mengidentifikasi kebutuhan pengguna (user requirements) dari divisi operasional dan menerjemahkannya langsung menjadi spesifikasi teknis serta pengembangan fitur aplikasi.',
        'Terlibat aktif dalam pengembangan dan implementasi fitur sistem internal maupun modul manajemen gudang (Warehouse Management System), seperti alur Crossdocking dan Stock Opname.',
        'Berkoordinasi langsung dengan pengguna akhir (end-user) untuk melakukan uji coba fitur, validasi data, perbaikan bug, serta penyempurnaan antarmuka agar sesuai dengan alur kerja operasional di lapangan.',
        'Memastikan sistem dan fitur baru yang dideploy berjalan stabil dan siap digunakan dalam operasional harian.',
      ],
      en: [
        'Identified user requirements from operational divisions and translated them directly into technical specifications and application feature development.',
        'Actively contributed to the development and implementation of internal system features and Warehouse Management System modules, including Crossdocking and Stock Opname workflows.',
        'Coordinated directly with end users to test features, validate data, fix bugs, and refine interfaces to match on-site operational workflows.',
        'Ensured newly deployed systems and features ran reliably and were ready for daily operations.',
      ],
    },
  },
  {
    id: 'wimisec',
    role: {
      id: 'Content Creator & Social Media Admin',
      en: 'Content Creator & Social Media Admin',
    },
    company: 'PT. Wimisec Teknologi Indonesia',
    period: { start: '2024-12', end: '2026-07' },
    responsibilities: {
      id: [
        'Produksi konten digital.',
        'Pengelolaan media sosial.',
        'Penyusunan strategi konten.',
        'Copywriting.',
        'Desain konten visual.',
        'Edukasi keamanan digital.',
      ],
      en: [
        'Digital content production.',
        'Social media management.',
        'Content strategy.',
        'Copywriting.',
        'Visual content design.',
        'Digital security education.',
      ],
    },
  },
  {
    id: 'mahaga',
    role: {
      id: 'Staff Admin Document Control',
      en: 'Document Control Administrator',
    },
    company: 'PT. Mahaga Pratama',
    period: { start: '2024-08', end: '2024-09' },
    responsibilities: {
      id: [
        'Pengelolaan dokumen instalasi VSAT.',
        'Penggunaan Sistem Informasi Manajemen.',
        'Pelaporan progres site.',
        'Standardisasi dokumen.',
        'Koordinasi komunikasi.',
      ],
      en: [
        'VSAT installation document management.',
        'Management Information System.',
        'Site progress reporting.',
        'Document standardization.',
        'Communication coordination.',
      ],
    },
  },
  {
    id: 'ubh',
    role: {
      id: 'Staff Magang Administrasi',
      en: 'Administrative Intern',
    },
    company: 'Universitas Bhayangkara, Fakultas Hukum',
    period: { start: '2023-04', end: '2023-07' },
    responsibilities: {
      id: [
        'Administrasi akademik.',
        'Penggunaan Sistem Informasi Akademik.',
        'Pengarsipan dokumen.',
        'Komunikasi administratif.',
      ],
      en: [
        'Academic administration.',
        'Academic Information System.',
        'Document archiving.',
        'Administrative communication.',
      ],
    },
  },
];

export const education: EducationEntry[] = [
  {
    id: 'binainsani',
    institution: 'Universitas Bina Insani',
    degree: {
      id: 'S1 Teknik Informatika',
      en: 'Bachelor of Informatics Engineering',
    },
    period: { start: '2024', end: null },
    grade: {
      id: 'IPK Semester 4: 3.75',
      en: 'GPA, Semester 4: 3.75',
    },
    organization: '',
  },
  {
    id: 'smk',
    institution: 'SMK Karya Guna Bhakti 2',
    degree: {
      id: 'Teknik Komputer dan Jaringan',
      en: 'Computer and Network Engineering',
    },
    period: { start: '2021', end: '2024' },
  },
];

export const awards: AwardEntry[] = [
  {
    id: 'amikom-2025',
    title: {
      id: 'Juara Harapan I Bidang UI/UX',
      en: 'First Honorable Mention, UI/UX Category',
    },
    event: 'Indonesia National IT Competition 2025',
    institution: 'Universitas Amikom Purwokerto',
    year: 2025,
  },
];

export const certifications: CertificationEntry[] = [
  {
    id: 'mtcna',
    name: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik',
    period: { start: '2023-12', end: '2026' },
    status: 'completed',
    note: {
      id: 'Masa berlaku hingga 2026.',
      en: 'Validity through 2026.',
    },
  },
  {
    id: 'bnsp',
    name: 'Sertifikat Kompetensi Keahlian BNSP',
    issuer: 'BNSP',
    period: { start: '2024-05', end: '2027' },
    status: 'completed',
    note: {
      id: 'Masa berlaku hingga 2027.',
      en: 'Validity through 2027.',
    },
  },
  {
    id: 'assessment',
    name: 'Sertifikat Uji Kompetensi Assessment',
    period: { start: '2024-05', end: '2027' },
    status: 'completed',
    note: {
      id: 'Masa berlaku hingga 2027.',
      en: 'Validity through 2027.',
    },
  },
  {
    id: 'toeic',
    name: 'TOEIC Certificate',
    issuer: 'TOEIC',
    period: { start: '2023-08', end: '2025' },
    status: 'historical',
    note: {
      id: 'Sertifikat historis.',
      en: 'Historical certificate.',
    },
  },
  {
    id: 'network-fundamental',
    name: 'Network Fundamental',
    issuer: 'Aguna Course',
    period: { start: '2025-06', end: null },
    status: 'completed',
  },
  {
    id: 'linux-admin',
    name: 'Linux System Administration',
    issuer: 'Btech Academy',
    period: { start: '2025-08', end: null },
    status: 'completed',
  },
];

export const organizations: OrganizationEntry[] = [
  {
    id: 'hmtif',
    name: 'Universitas Bina Insani',
    role: {
      id: 'Ketua Himpunan — HMTIF',
      en: 'Student Association President — HMTIF',
    },
    period: { start: '2026-08', end: null },
    responsibilities: { id: [], en: [] },
    description: {
      id: 'Memimpin arah strategis, koordinasi pengurus, dan pelaksanaan program kerja himpunan mahasiswa Teknik Informatika. Berperan aktif sebagai penghubung antara mahasiswa, pihak kampus, serta mitra eksternal dalam menyukseskan berbagai agenda akademik maupun pengembangan teknologi.',
      en: 'Lead the strategic direction, board coordination, and work programs of the Informatics Engineering student association. Act as a liaison between students, the university, and external partners to support academic initiatives and technology development.',
    },
  },
  {
    id: 'anon-cyber-team',
    name: 'Anon Cyber Team',
    role: {
      id: 'Mentor Volunteer — Divisi Content Creator',
      en: 'Mentor Volunteer — Content Creator Division',
    },
    period: { start: '2024-07', end: '2026-07' },
    responsibilities: {
      id: [
        'Pengembangan konten keamanan siber.',
        'Review konsep konten.',
        'Edukasi keamanan digital.',
      ],
      en: [
        'Cybersecurity content development.',
        'Content concept review.',
        'Digital security education.',
      ],
    },
  },
  {
    id: 'computer-club',
    name: 'Computer Club Bina Insani',
    role: {
      id: 'Anggota',
      en: 'Member',
    },
    period: { start: '2024', end: null },
    responsibilities: {
      id: [
        'Pembelajaran pemrograman dasar hingga menengah.',
        'Pelatihan teknis internal.',
        'Pembelajaran kolaboratif.',
      ],
      en: [
        'Basic to intermediate programming.',
        'Internal technical training.',
        'Collaborative learning.',
      ],
    },
  },
];

export const skillGroups = [
  {
    id: 'frontend',
    title: { id: 'Frontend Development', en: 'Frontend Development' },
    items: ['HTML', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: { id: 'Backend Development', en: 'Backend Development' },
    items: ['PHP', 'Laravel', 'CodeIgniter'],
  },
  {
    id: 'database',
    title: { id: 'Database', en: 'Database' },
    items: ['MySQL'],
  },
  {
    id: 'networking',
    title: { id: 'Networking', en: 'Networking' },
    items: ['MikroTik'],
  },
  {
    id: 'creative',
    title: { id: 'Creative & Design', en: 'Creative & Design' },
    items: [
      'Figma',
      'Canva',
      'Social Media Visual Branding',
      'Content Design',
    ],
  },
  {
    id: 'tools',
    title: { id: 'Tools', en: 'Tools' },
    items: ['Visual Studio Code', 'GitHub', 'CapCut', 'Microsoft Office'],
  },
] satisfies Array<{
  id: string;
  title: Localized<string>;
  items: string[];
}>;
