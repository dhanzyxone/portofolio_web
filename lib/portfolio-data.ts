export const PROFILE = {
  name: 'Dhaffa Harfansyah',
  logo: 'Dhaffa.web',
  role: 'Creative Technologist',
  roleLine: 'AI × CODE × CREATIVE',
  tagline: 'Creative Technologist · AI · Code · Creative',
  headline: 'I build digital experiences where AI meets creativity.',
  subheadline:
    'Digital Business student exploring AI, creative technology, visual communication, and digital products through real-world projects.',
  location: 'Padang, Indonesia',
  availability: 'Tersedia untuk kolaborasi',
}

export const NAV_LINKS = [
  { label: 'Tentang', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Project', href: '#projects' },
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
  index: string
  items: { name: string; learning?: boolean }[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'AI & Technology',
    index: '01',
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
    index: '02',
    items: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript', learning: true },
    ],
  },
  {
    category: 'Creative & Visual',
    index: '03',
    items: [{ name: 'Fotografi' }, { name: 'Video / Content Creator' }],
  },
  {
    category: 'Business',
    index: '04',
    items: [
      { name: 'Digital Business' },
      { name: 'Event Organizer' },
      { name: 'Komunikasi' },
    ],
  },
]

export type ProjectCategory = 'AI' | 'CODE' | 'CREATIVE'

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
    id: 'hand-gesture-detection',
    title: 'Hand Gesture Detection',
    categories: ['AI'],
    categoryLabel: 'AI · Computer Vision',
    summary:
      'Project Python menggunakan OpenCV dan MediaPipe untuk mendeteksi gerakan tangan secara real-time.',
    tags: ['#Python', '#OpenCV'],
    detail: {
      overview:
        'Sistem deteksi gerakan tangan real-time yang membaca input kamera dan mengenali posisi serta gestur tangan menggunakan pipeline computer vision.',
      problem:
        'Interaksi manusia-komputer sering terbatas pada keyboard dan mouse. Dibutuhkan cara mengeksplorasi input berbasis gestur yang lebih natural dan tanpa sentuhan.',
      concept:
        'Menggunakan pelacakan landmark tangan untuk memetakan titik-titik sendi jari, lalu menerjemahkan pola posisi tersebut menjadi gestur yang dapat dikenali.',
      process:
        'Membangun alur capture kamera dengan OpenCV, mengintegrasikan MediaPipe untuk deteksi 21 landmark tangan, lalu menguji akurasi pengenalan pada kondisi pencahayaan berbeda.',
      technology: 'Python, OpenCV, MediaPipe.',
      result:
        'Prototipe berfungsi mendeteksi tangan dan landmark secara real-time, menjadi fondasi untuk eksperimen interaksi berbasis gestur berikutnya.',
    },
  },
  {
    id: 'llm-layanan-akademik',
    title: 'LLM untuk Layanan Akademik',
    categories: ['AI', 'CODE'],
    categoryLabel: 'AI · NLP',
    summary:
      'Pengembangan sistem AI berbasis Large Language Model untuk layanan akademik di Politeknik Negeri Padang.',
    tags: ['#LLM', '#Python'],
    detail: {
      overview:
        'Pengembangan sistem berbasis Large Language Model yang ditujukan untuk membantu layanan akademik di lingkungan Politeknik Negeri Padang.',
      problem:
        'Layanan akademik menerima banyak pertanyaan berulang dari mahasiswa. Proses manual memakan waktu dan kurang responsif.',
      concept:
        'Memanfaatkan kemampuan pemahaman bahasa alami dari LLM untuk menjawab pertanyaan seputar layanan akademik secara kontekstual.',
      process:
        'Mengumpulkan kebutuhan informasi akademik, menyiapkan alur interaksi berbasis bahasa, dan mengeksplorasi integrasi model bahasa dengan konteks data kampus.',
      technology: 'Python, Large Language Models (LLM), Natural Language Processing.',
      result:
        'Sistem dalam tahap pengembangan sebagai eksplorasi penerapan AI generatif pada konteks layanan akademik nyata.',
    },
  },
  {
    id: 'riset-umkm-berkelanjutan',
    title: 'Riset UMKM Berkelanjutan',
    categories: ['CREATIVE'],
    categoryLabel: 'Research · Business',
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

export const MOMENTS = [
  { src: '/moments/coding.png', label: 'Coding', alt: 'Suasana ruang kerja coding di malam hari' },
  { src: '/moments/conference.png', label: 'Conference', alt: 'Suasana panggung konferensi teknologi' },
  { src: '/moments/teamwork.png', label: 'Team Work', alt: 'Kolaborasi tim di sekitar meja kerja' },
  { src: '/moments/achievement.png', label: 'Achievement', alt: 'Trofi penghargaan dengan pencahayaan dramatis' },
  { src: '/moments/daily.png', label: 'Daily Life', alt: 'Suasana kota saat senja' },
]

export const CONTACTS = [
  { label: 'Email', value: 'dhanzymediatech@gmail.com', href: 'mailto:dhanzymediatech@gmail.com' },
  { label: 'Instagram', value: '@dhaffa.hrfnsyh', href: 'https://www.instagram.com/dhaffa.hrfnsyh' },
  { label: 'LinkedIn', value: 'Dhaffa Harfansyah', href: 'https://www.linkedin.com/in/dhaffa-harfansyah-a165aa2b4' },
  { label: 'GitHub', value: 'github.com/dhaffa', href: 'https://github.com/dhaffa' },
  { label: 'WhatsApp', value: '+62 851-2620-5130', href: 'https://wa.me/6285126205130' },
]
