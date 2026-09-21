export const personal = {
  name: 'Jasir Colovic',
  logoName: 'jasir-colovic',
  role: 'Software Engineer — Front-end & DevOps',
  roleShort: 'Front-end & DevOps engineer',
  location: 'Sarajevo, Bosnia & Herzegovina',
  coords: '43.85° N, 18.41° E',
  email: 'jasircolovic@gmail.com',
  phone: '+387 61 912 458',
  github: 'https://github.com/jasircolovic',
  githubHandle: '@jasircolovic',
  githubUser: 'jasircolovic',
  linkedin: 'https://linkedin.com/in/jasir-colovic',
  linkedinHandle: 'jasir-colovic',
  intro:
    'Software engineering graduate with hands-on experience in DevOps, Linux, and cloud infrastructure (AWS/GCP, Terraform, Docker, Kubernetes), computer networking, and technical support — skilled in CI/CD automation, system monitoring, and shipping features directly with customers under tight deadlines. AWS Certified Solutions Architect.',
}

export const navLinks = [
  { label: '_hello', href: '/' },
  { label: '_about-me', href: '/about-me' },
  { label: '_projects', href: '/projects' },
  { label: '_contact-me', href: '/contact-me' },
]

export const socials = [
  { key: 'github', title: 'GitHub profile', url: personal.github, user: personal.githubHandle },
  { key: 'linkedin', title: 'LinkedIn profile', url: personal.linkedin, user: personal.linkedinHandle },
]

export const marqueeItems = [
  'React.js', 'Node.js', 'Terraform', 'Kubernetes', 'AWS',
  'Docker', 'CI/CD', 'Next.js', 'Python', 'GCP',
]

export const experience = [
  {
    num: '01',
    company: 'Brookstone Partners',
    title: 'AI Solutions Engineering Intern',
    meta: 'New York, USA (Remote) · Jun — Sep 2026',
    bullets: [
      'Worked as a forward-deployed engineer, translating customer needs directly into product features.',
      'Delivered customer-requested functionality end-to-end, iterating on the product from continuous client feedback.',
      'Collaborated daily with a U.S.-based team across a 6+ hour time-zone difference, in frequent client and internal meetings.',
      'Regularly took on responsibilities beyond a typical internship to meet client deadlines and deliverables.',
    ],
  },
  {
    num: '02',
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
    num: '03',
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
    num: '04',
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
    num: '05',
    company: 'GOOD & BEST Hackathons',
    title: 'Participant — 4th / 24 · 7th / 21',
    meta: 'Bosnia · 2022',
    bullets: [
      'Shipped React-based web applications under 24-hour constraints.',
      'Delivered functional prototypes in competitive environments, placing in both events.',
    ],
  },
  {
    num: '06',
    company: 'Freelance',
    title: 'Independent Technical Support',
    meta: 'Sarajevo · 2018 — Present',
    bullets: [
      'Installed and configured Windows operating systems and drivers across multiple machines.',
      'Diagnosed and resolved hardware and software issues, including performance bottlenecks and system errors.',
      'Troubleshot network connectivity issues — IP configuration, routers, and internet access.',
      'Provided on-site and remote technical support to end users.',
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

// ---- Projects (derived from real experience) ----
export const projectTags = ['all', 'react', 'devops', 'full-stack', 'ui']

export const projects = [
  {
    id: 1,
    title: 'linktastic-ui',
    tags: ['react', 'ui'],
    color: 'from-[#4D5BCE] to-[#43D9AD]',
    description:
      'Responsive, performance-tuned React interface for Linktastic, integrating REST APIs and interactive data features. Built remotely with Ecronix (Vienna).',
    stack: ['React', 'REST API', 'CSS3', 'Figma'],
    demo: '#',
    code: personal.github,
  },
  {
    id: 2,
    title: 'student-platform',
    tags: ['full-stack', 'react'],
    color: 'from-[#E99287] to-[#4D5BCE]',
    description:
      'Full-stack student platform with AI-powered search, authentication, an admin dashboard and REST integrations. Delivered for Deutsche Telekom via Ekipa.',
    stack: ['JavaScript', 'Node.js', 'REST API', 'AI Search'],
    demo: '#',
    code: personal.github,
  },
  {
    id: 3,
    title: 'cloud-pipelines',
    tags: ['devops'],
    color: 'from-[#43D9AD] to-[#5565E8]',
    description:
      'CI/CD pipelines and Infrastructure-as-Code provisioning AWS & GCP with Terraform, Docker and Kubernetes, plus Vault-based secrets management. Built at Bloomteq.',
    stack: ['Terraform', 'Kubernetes', 'Docker', 'GitHub Actions'],
    demo: '#',
    code: personal.github,
  },
  {
    id: 4,
    title: 'hackathon-apps',
    tags: ['react', 'ui'],
    color: 'from-[#5565E8] to-[#C98BDF]',
    description:
      'React web apps shipped under 24-hour constraints at the GOOD & BEST hackathons, placing 4th/24 and 7th/21 with functional prototypes.',
    stack: ['React', 'JavaScript', 'Rapid Prototyping'],
    demo: '#',
    code: personal.github,
  },
  {
    id: 5,
    title: 'network-thesis',
    tags: ['devops'],
    color: 'from-[#5565E8] to-[#43D9AD]',
    description:
      'B.S. thesis: a resilient dual-core network architecture for SMEs — designed for redundancy, failover, and secure segmentation.',
    stack: ['Networking', 'Security', 'Cisco', 'IaC'],
    demo: '#',
    code: personal.github,
  },
]

// ---- About page file tree ----
export const aboutSections = [
  {
    key: 'professional-info',
    icon: '💼',
    files: [
      {
        key: 'experience',
        label: 'experience',
        body: [
          'Software engineer with hands-on experience across the stack —',
          'from React front-ends to Terraform-provisioned cloud infrastructure,',
          'plus computer networking and hands-on technical support.',
          '',
          'Most recently an AI Solutions Engineering Intern at Brookstone Partners',
          '(NYC, remote), working forward-deployed with customers to ship features',
          'end-to-end. Before that: DevOps Intern at Bloomteq (CI/CD, AWS/GCP,',
          'Docker, Kubernetes), a full-stack student platform for Deutsche Telekom',
          '(via Ekipa), and a responsive React UI for Linktastic (Ecronix).',
          '',
          'Graduated B.S. Software Engineering from IUS (2026); thesis on resilient',
          'dual-core network design for SMEs. AWS Certified Solutions Architect.',
        ],
      },
      {
        key: 'hard-skills',
        label: 'hard-skills',
        body: [
          'Front-end: React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind.',
          'DevOps / Cloud: AWS (Certified Solutions Architect), GCP, Kubernetes,',
          'Docker, Terraform, Ansible, CI/CD with GitHub Actions.',
          'Back-end: Node.js / Express, RESTful APIs, Java Spring Boot, Python.',
        ],
      },
      {
        key: 'soft-skills',
        label: 'soft-skills',
        body: [
          'Clear communicator across FE / BE / QA teams, comfortable in agile',
          'workflows with Git and Figma handoffs. Competitive under pressure —',
          'placed in two 24-hour hackathons — and driven by clean architecture,',
          'automation and continuous learning.',
        ],
      },
    ],
  },
  {
    key: 'personal-info',
    icon: '👤',
    files: [
      {
        key: 'bio',
        label: 'bio',
        body: [
          'Based in Sarajevo, Bosnia & Herzegovina (43.85° N, 18.41° E).',
          'B.S. in Software Engineering at the International University of Sarajevo',
          'as a scholarship recipient, graduated in 2026 — with a thesis on',
          'resilient dual-core network design for SMEs.',
        ],
      },
      {
        key: 'interests',
        label: 'interests',
        body: [
          'Cloud architecture, automated pipelines, clean front-end systems, and',
          'anything that makes shipping software faster and safer.',
        ],
      },
      {
        key: 'languages',
        label: 'languages',
        body: [
          'Bosnian — Native',
          'English — Fluent',
          'German — Intermediate',
          'Russian — Basic',
        ],
      },
    ],
  },
]
