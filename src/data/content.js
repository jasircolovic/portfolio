export const personal = {
  name: 'Jasir Colovic',
  role: 'Software Engineer — Front-end & DevOps',
  location: 'Sarajevo, Bosnia & Herzegovina',
  coords: '43.85° N, 18.41° E',
  email: 'jasircolovic@gmail.com',
  phone: '+387 61 912 458',
  github: 'https://github.com/jasircolovic',
  githubHandle: '@jasircolovic',
  linkedin: 'https://linkedin.com/in/jasir-colovic',
  linkedinHandle: 'jasir-colovic',
  intro:
    'Final-year software engineer building scalable, user-focused applications — from React interfaces to Terraform-provisioned cloud infrastructure, with a taste for clean architecture and automated pipelines.',
}

export const navLinks = [
  { num: '01', label: 'Work', href: '#work' },
  { num: '02', label: 'Skills', href: '#skills' },
  { num: '03', label: 'Education', href: '#education' },
  { num: '04', label: 'Contact', href: '#contact' },
]

export const marqueeItems = [
  'React.js', 'Node.js', 'Terraform', 'Kubernetes', 'AWS',
  'Docker', 'CI/CD', 'Next.js', 'Python', 'GCP',
]

export const experience = [
  {
    num: '01',
    company: 'Bloomteq',
    title: 'DevOps Intern',
    meta: 'Sarajevo · Mar — Jul 2025',
    bullets: [
      'Built CI/CD pipelines with GitHub Actions to automate testing and deployment workflows.',
      'Provisioned AWS and GCP infrastructure using Terraform as code.',
      'Containerized applications with Docker; orchestrated deployments via Kubernetes.',
      'Implemented secure secrets management with HashiCorp Vault and GitOps practices.',
    ],
  },
  {
    num: '02',
    company: 'Ekipa × Deutsche Telekom',
    title: 'Full-Stack Developer',
    meta: 'Sarajevo · Oct 2024 — Feb 2025',
    bullets: [
      'Led development of a full-stack student platform using JavaScript, HTML5, and CSS3.',
      'Shipped AI-powered search, authentication, admin dashboard, and REST API integrations.',
      'Architected the front-end for scalability, with clean separation of FE / BE / QA repositories.',
      'Ran QA testing cycles to improve stability, performance, and security.',
    ],
  },
  {
    num: '03',
    company: 'Ecronix — Linktastic',
    title: 'Front-End Developer',
    meta: 'Vienna (Remote) · Apr — Dec 2024',
    bullets: [
      'Built a responsive, performance-tuned UI for Linktastic in React.js.',
      'Integrated REST APIs and interactive data features alongside the back-end team.',
      'Improved cross-device performance through modern CSS and JavaScript optimization.',
      'Operated in agile workflows with Git and Figma handoffs.',
    ],
  },
  {
    num: '04',
    company: 'GOOD & BEST Hackathons',
    title: 'Participant — 4th / 24 · 7th / 21',
    meta: 'Bosnia · 2022',
    bullets: [
      'Shipped React-based web applications under 24-hour constraints.',
      'Delivered functional prototypes in competitive environments, placing in both events.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'DevOps / Cloud',
    items: [
      'AWS (Certified Solutions Architect)',
      'Google Cloud',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Ansible',
      'CI/CD · GitHub Actions',
    ],
  },
  {
    title: 'Front-end',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5 · CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Back-end',
    items: ['Node.js · Express', 'RESTful APIs', 'Java Spring Boot', 'Python'],
  },
  {
    title: 'Languages',
    items: [
      'Python — Advanced',
      'Java — Intermediate',
      'C++ — Intermediate',
      'C# — Beginner',
      'LaTeX',
    ],
  },
  {
    title: 'Spoken',
    items: [
      'Bosnian — Native',
      'English — Fluent',
      'German — Intermediate',
      'Russian — Basic',
    ],
  },
]

export const education = [
  {
    course: 'B.S. in Software Engineering',
    inst: 'International University of Sarajevo — scholarship recipient',
    date: '2022 — 2026',
  },
  {
    course: 'Software Testing & Analysis',
    inst: 'IUS — unit, integration & system testing',
    date: 'Sep 2024 — Jan 2025',
  },
  {
    course: 'Google Cloud Architecture',
    inst: 'Compute Engine, Kubernetes, CloudSQL',
    date: 'Dec 2024 — Feb 2025',
  },
  {
    course: 'Big Data Analytics',
    inst: 'IUS — large-scale data analysis & tooling',
    date: 'Feb 2025 — May 2025',
  },
  {
    course: 'Cyber Security',
    inst: 'IUS — Cisco Cybersecurity Essentials Badge',
    date: 'IUS',
  },
  {
    course: 'Network Programming',
    inst: 'Secure REST APIs, Python network automation',
    date: 'IUS',
  },
  {
    course: 'Fundamentals of Data Science',
    inst: 'IUS — ML for classification & regression',
    date: 'Feb 2024 — May 2024',
  },
]
