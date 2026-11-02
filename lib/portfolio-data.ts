export type Profile = {
  name: string
  logo: string
  role: string
  roleLine?: string
  headline?: string
  tagline?: string
  subheadline: string
  location: string
  availability?: string
}

export const PROFILE: Profile = {
  name: 'Dhaffa Harfansyah',
  logo: 'Dhaffa.web',
  role: 'Creative Technologist',
  subheadline:
    'Digital Business student exploring AI, creative technology, visual communication, and digital products through real-world projects.',
  location: 'Padang, Indonesia',
}

export const NAV_LINKS = [
  { label: 'Tentang', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Project', href: '#projects' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'Lab', href: '#lab' },
  { label: 'Kontak', href: '#contact' },
]

export type BuildStatus = 'Learning' | 'Building' | 'Experimenting'

export const CURRENTLY_BUILDING: {
  title: string
  status: BuildStatus
  description: string
}[] = [
  {
    title: 'AI Engineering',
    status: 'Learning',
    description: 'Mendalami Python, model AI, dan computer vision untuk problem nyata.',
  },
  {
    title: 'Creative Technology',
    status: 'Building',
    description: 'Menggabungkan kode dan desain menjadi pengalaman interaktif.',
  },
  {
    title: 'Digital Products',
    status: 'Building',
    description: 'Merancang produk digital yang bermakna dari ide hingga eksekusi.',
  },
  {
    title: 'Motion & Visual Experiments',
    status: 'Experimenting',
    description: 'Bereksperimen dengan motion, visual, dan interaksi berbasis web.',
  },
]

export const TIMELINE = [
  'Business',
  'Web',
  'AI',
  'Creative Technology',
  'Digital Products',
]

export type SkillGroup = {
  category: string
  index?: string
  items: { name: string; learning?: boolean }[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'AI & Technology',
    items: [
      { name: 'Python' },
      { name: 'Computer Vision', learning: true },
      { name: 'OpenCV' },
      { name: 'Machine Learning', learning: true },
      { name: 'Data Analysis' },
      { name: 'Git / GitHub' },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript', learning: true },
    ],
  },
  {
    category: 'Creative & Visual',
    items: [{ name: 'Fotografi' }, { name: 'Video / Content Creator' }],
  },
  {
    category: 'Business',
    items: [
      { name: 'Digital Business' },
      { name: 'Event Organizer' },
      { name: 'Komunikasi' },
    ],
  },
]

export type ProjectCategory = 'AI' | 'CODE' | 'CREATIVE' | 'IOT' | 'EVENT' | 'PROJECT' | 'RESEARCH'

export type ProjectDetailSection = {
  label: string
  content: string
}

export type Project = {
  id: string
  title: string
  categories: ProjectCategory[]
  categoryLabel: string
  summary: string
  tags: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  detail: {
    overview: string
    problem: string
    concept: string
    process: string
    technology: string
    result: string
  }
}

export const PROJECTS: Project[] = [
   {
    id: 'rosa-ai',
    title: 'ROSA AI',
    categories: ['AI', 'IOT', 'CODE'],
    categoryLabel: 'AI · IoT · Automation',
    image: '/image/rosa-ai.png',
    summary:
      'Sistem berbasis AI, IoT, software, dan hardware untuk membantu memantau dan mengendalikan lingkungan fisik secara cerdas.',

    tags: ['#AI', '#IoT', '#Automation'],

    detail: {
      overview:
        'ROSA AI merupakan solusi yang menghubungkan kecerdasan buatan dengan perangkat fisik untuk melakukan monitoring, analisis, dan kontrol terhadap lingkungan secara real-time.',

      problem:
        'Sistem monitoring dan kontrol konvensional sering berjalan secara terpisah. Dibutuhkan sistem yang dapat menghubungkan data, kecerdasan, dan perangkat fisik dalam satu alur.',

      concept:
        'Menggabungkan AI, IoT, software, dan hardware sehingga informasi dari lingkungan dapat dipantau, dianalisis, dan diterjemahkan menjadi tindakan pada perangkat.',

      process:
        'Mengembangkan konsep produk, mengeksplorasi use case, membuat prototype dan visualisasi, serta mengembangkan komunikasi produk melalui video, visual, dan demonstrasi teknologi.',

      technology:
        'Artificial Intelligence, IoT, Software, Hardware, Automation.',

      result:
        'Menghasilkan konsep dan prototype solusi AIoT yang dapat digunakan untuk berbagai kebutuhan seperti monitoring mesin, safety detection, access control, process control, dan energy management.',
    },
  },
{
  id: 'kyos-photobooth',
  title: "Kyos Photobooth",
  categories: ['CREATIVE', 'EVENT'],
  categoryLabel: 'Creative · Event · Experience',
  image: '/image/kyos.png',
  summary:
    'Mobile street photobooth yang hadir dan berpindah dari satu event ke event lainnya.',

  tags: ['#Photobooth', '#Event', '#Creative', '#Experience'],

  detail: {
    overview:
      "Kyo's Photobooth merupakan konsep mobile street photobooth yang hadir di berbagai event dan berpindah dari satu lokasi ke lokasi lainnya.",

    problem:
      'Setiap event memiliki karakter, suasana, dan pengunjung yang berbeda. Dibutuhkan konsep photobooth yang fleksibel dan dapat beradaptasi dengan berbagai lokasi serta jenis event.',

    concept:
      'Membangun pengalaman photobooth mobile yang dapat dibawa ke berbagai event dengan identitas visual yang konsisten dan pengalaman foto yang menarik bagi pengunjung.',

    process:
      'Menyiapkan konsep visual, setup photobooth di lokasi, mengatur pengalaman pengunjung, serta menyesuaikan operasional dengan karakter setiap event.',

    technology:
      'Photobooth System, Photography, Visual Design, Event Experience.',

    result:
      'Menghadirkan pengalaman photobooth yang fleksibel dan mobile di berbagai event dengan konsep yang dapat beradaptasi pada setiap lokasi.',
  },
},
  
  {
    id: 'sbsn-pnp',

    title: 'SBSN PNP',

    categories: ['CODE'],

    categoryLabel: 'Web · Campus System',

    image: '/image/SBSN WEB.png',

    summary:

      'Website peminjaman ruangan Gedung SBSN Politeknik Negeri Padang untuk mahasiswa dan dosen.',

    tags: ['#WebDevelopment', '#RoomBooking'],

    detail: {

      overview:

        'Sistem berbasis web yang membantu mahasiswa dan dosen melakukan peminjaman ruangan di Gedung SBSN Politeknik Negeri Padang, mulai dari lantai satu hingga lantai empat.',

      problem:

        'Proses peminjaman ruangan membutuhkan pengelolaan jadwal dan informasi ketersediaan ruang yang terstruktur agar penggunaan ruangan oleh mahasiswa dan dosen dapat dikelola dengan lebih mudah.',

      concept:

        'Membangun website peminjaman ruangan yang memungkinkan pengguna melihat ruangan berdasarkan lantai, mengetahui informasi penggunaan ruangan, dan mengajukan peminjaman sesuai kebutuhan.',

      process:

        'Merancang struktur informasi gedung dan ruangan, membuat alur peminjaman, mengembangkan antarmuka website, serta mengatur data ruangan dan jadwal peminjaman.',

      technology: 'Web Development, Database, User Interface.',

      result:

        'Menghasilkan sistem peminjaman ruangan berbasis web yang membantu mahasiswa dan dosen mengelola penggunaan ruangan Gedung SBSN secara lebih terstruktur.',

    },

  },

{
id: 'smart-access-door-pnp',
title: 'Smart Access Door PNP',
categories: ['PROJECT', 'CREATIVE'],
categoryLabel: 'Project · Documentation',
image: '/image/smart acces door.jpeg',
summary:
    'Terlibat dalam dokumentasi, pelaporan, publikasi, dan pengelolaan administrasi proyek Smart Access Door di Politeknik Negeri Padang.',
tags: ['#Documentation', '#Publication', '#ProjectManagement'],

  detail: {

    overview:
      'Smart Access Door PNP merupakan proyek pengembangan sistem akses pintu berbasis teknologi di lingkungan Politeknik Negeri Padang.',

    problem:
      'Proyek membutuhkan dokumentasi, pelaporan, publikasi, serta pengelolaan administrasi dan perizinan agar proses pengembangan dan implementasi dapat terdokumentasi dengan baik.',

    concept:
      'Mendukung jalannya proyek dari sisi non-teknis melalui pengelolaan dokumentasi, penyusunan laporan, publikasi kegiatan, serta koordinasi kebutuhan administrasi dan perizinan.',

    process:
      'Mendokumentasikan proses dan kegiatan proyek, menyusun serta mengelola laporan, menyiapkan materi publikasi, dan membantu proses administrasi serta perizinan yang diperlukan selama proyek berlangsung.',

    technology:
      'Digital Documentation, Content Creation, Reporting, Project Administration.',

    result:
      'Mendukung dokumentasi dan komunikasi proyek sehingga perkembangan, kegiatan, dan hasil Smart Access Door PNP dapat terdokumentasi serta dikomunikasikan dengan baik.',

  },
  },
   {
    id: 'riset-umkm-berkelanjutan',
    title: 'Riset UMKM Berkelanjutan',
    categories: ['RESEARCH'],
    categoryLabel: 'Research · Business',
    image: '/image/riset umkm.jpg',
    summary:
      'Penelitian strategi pengembangan UMKM di era digital, untuk jurusan Administrasi Niaga.',
    tags: ['#Research', '#UMKM'],
    detail: {
      overview:
        'Penelitian yang mengkaji strategi pengembangan UMKM agar berkelanjutan di era digital, dikerjakan untuk jurusan Administrasi Niaga.',
      problem:
        'Banyak UMKM belum optimal memanfaatkan transformasi digital untuk pertumbuhan yang berkelanjutan.',
      concept:
        'Memetakan tantangan dan peluang UMKM, lalu menyusun arah strategi pengembangan yang relevan dengan kondisi digital saat ini.',
      process:
        'Melakukan studi literatur, mengumpulkan data, dan menganalisis strategi yang dapat diterapkan untuk keberlanjutan UMKM.',
      technology: 'Metode penelitian, analisis data, studi strategi bisnis digital.',
      result:
        'Menghasilkan temuan dan rekomendasi strategi pengembangan UMKM berkelanjutan sebagai output penelitian akademik.',
    },
  },
]

export type LabStatus = 'EXPERIMENT' | 'PROTOTYPE' | 'BUILDING' | 'ARCHIVED'

export type LabItem = {
  id: string
  title: string
  status: LabStatus
  description: string
  tags: string[]
}

export const LAB_ITEMS: LabItem[] = [
  {
    id: 'gesture-ui',
    title: 'Gesture-Controlled UI',
    status: 'EXPERIMENT',
    description:
      'Eksperimen mengendalikan antarmuka web hanya dengan gerakan tangan lewat webcam.',
    tags: ['Computer Vision', 'Web'],
  },
  {
    id: 'campus-assistant',
    title: 'Campus AI Assistant',
    status: 'BUILDING',
    description:
      'Prototipe asisten berbasis LLM untuk menjawab pertanyaan seputar kehidupan kampus.',
    tags: ['LLM', 'Python'],
  },
  {
    id: 'generative-visuals',
    title: 'Generative Visual Studies',
    status: 'PROTOTYPE',
    description:
      'Studi visual generatif berbasis kode untuk poster dan motion pendek.',
    tags: ['Creative Coding', 'Motion'],
  },
  {
    id: 'data-stories',
    title: 'UMKM Data Stories',
    status: 'ARCHIVED',
    description:
      'Eksperimen memvisualkan data UMKM menjadi narasi visual yang mudah dipahami.',
    tags: ['Data', 'Visual'],
  },
]

export type Experience = {
  logo: string
  name: string
  role: string
  description: string
  period: string
}

export const EXPERIENCE: Experience[] = [
  { logo: '/image/Halcom logo.jpeg', name: 'PT HALCOM Inovasi Teknologi', role: 'AI Solutions', description: 'Mengembangkan product AI dan memasarkannya menjadi product nyata dan dikenal semua orang.', period: 'Januari - Juni 2024' },
  { logo: '/image/hydtech logo.png', name: ' CV Hydtech Inovasi Digital', role: 'AI Solutions', description: 'Berkontribusi dalam pengembangan solusi teknologi berbasis IoT dan software.', period: 'Juli - Desember 2024' },
  { logo: '/image/dangau.jpeg', name: 'Dangau Studio', role: 'IT and Media Creative', description: 'Membantu tim produk dalam riset pasar dan pengembangan fitur produk digital.', period: 'Januari - Maret 2025' },
  { logo: '/image/hipmi pt sumbar.jpg', name: ' Bakorda HIPMI PT Sumbar', role: 'External Compartement', description: 'Memimpin divisi digital dalam organisasi kewirausahaan mahasiswa.', period: '2024 - Sekarang' },
]

export type ContactItem = {
  label: string
  value: string
  href: string
  icon?: 'email' | 'instagram' | 'linkedin' | 'github' | 'whatsapp' | 'substack'
}

export const CONTACTS: ContactItem[] = [
  { label: 'Email', value: 'dhanzymediatech@gmail.com', href: 'mailto:dhanzymediatech@gmail.com', icon: 'email' },
  { label: 'Instagram', value: '@dhaffa.hrfnsyh', href: 'https://www.instagram.com/dhaffa.hrfnsyh', icon: 'instagram' },
  { label: 'LinkedIn', value: 'Dhaffa Harfansyah', href: 'https://www.linkedin.com/in/dhaffa-harfansyah-a165aa2b4', icon: 'linkedin' },
  { label: 'GitHub', value: 'github.com/dhanzyxone', href: 'https://github.com/dhanzyxone', icon: 'github' },
  { label: 'WhatsApp', value: '+62 851-2620-5130', href: 'https://wa.me/6285126205130', icon: 'whatsapp' },
  { label: 'Substack', value: 'Substack', href: 'https://substack.com/@dhaffaharfansyah?utm_source=share&utm_medium=android&r=9e4fa7', icon: 'substack' },
]
