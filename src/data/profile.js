export const profile = {
  name: 'Brijesh Kumar Kushwaha',
  displayName: 'Brijesh Kushwaha',
  headline: 'Full Stack Engineer (MERN)',
  roleTitle: 'Full Stack Developer',
  location: 'Bengaluru, India',
  email: 'bkushwaha.dev@gmail.com',
  domainEmail: 'brijesh@brijeshhq.com',
  phone: '+91 8050578803',
  phoneHref: 'tel:+918050578803',
  github: 'https://github.com/bsingh6636',
  linkedin: 'https://linkedin.com/in/bsingh6636',
  resume: '/resume.pdf',
};

// Vedak relieving letter confirms title as Full Stack Developer.
// Headline and self-description use Full Stack Engineer (MERN).
export const experience = [
  {
    id: 'vedak-fullstack',
    company: 'Vedak',
    context: 'Expert network platform',
    role: 'Full Stack Developer',
    period: 'Nov 2024 – Sep 2026',
    type: 'Full time · Bengaluru',
    summary:
      'Built and maintained multi-service Node.js and Python backends, third-party integrations, and customer-facing and internal React applications for an expert network platform.',
    bullets: [
      'Built two core customer-facing applications: the Client Portal (role-based scheduling, expert rating workflows, and Zoom recording access) and Expert Portal (profile management, skill-matched opportunity discovery, and GST verification for payouts).',
      'Owned the video conferencing lifecycle: integrated the Zoom Meeting SDK with signed tokens for embedded in-product calls, and built a webhook-driven pipeline streaming cloud recordings to AWS S3 (SDK v3) with composite key deduplication and retries.',
      'Built an AWS SQS activity pipeline with an isolated batch consumer service, partial failure handling, and dead-letter queues. Engineered a queued delivery pipeline fanning out recordings and transcripts per client with individual failure retry.',
      'Replaced host-level crontabs with a production MySQL and Redis job scheduler featuring execution history, timeout-based failure handling, and Datadog alerts; planned and led the live cutover.',
      'Built and shipped an internal Python RAG chatbot, used by the team in production, that answers questions from internal documents, policies, and profile data through embeddings and PostgreSQL with pgvector. Role-based access is enforced before retrieval, so restricted documents never reach the model, and the prompt answers only from retrieved chunks or says nothing relevant was found.',
      'Built an LLM classification service on the OpenAI Assistants API with an injected domain taxonomy and a fixed category list, routing records that matched no category to admin review instead of guessing.',
      'Migrated the component library from Material UI to Shadcn/ui (Tailwind CSS, Radix UI), and reduced frontend bundle size by 35% via code-splitting (load time 3.2s to 2.4s). Built real-time notifications on Socket.IO for 500+ concurrent users, boolean expert search, and cross-tab form coordination using the BroadcastChannel API.',
      'Integrated the Cashfree Verification Suite (HMAC-SHA256 webhook signature verification, bank account and PAN KYC checks), and built a two-way sync API integration with a global enterprise consulting client.',
    ],
    details: [
      'Published an internal npm package consolidating Sequelize models and database migrations across backend services.',
      'Centralized error logging and Datadog monitoring across backend services, reducing mean time to resolution by 45%. Used Datadog and the Datadog MCP server to diagnose production issues.',
      'Implemented CDN delivery with AWS CloudFront, Docker containerization, and GitHub Actions CI/CD workflows for linting and deployments.',
    ],
    supportingWork:
      'Also contributed to Docker deployments, AWS CloudFront CDN delivery, GitHub Actions workflows, and production release monitoring.',
    technologies: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Python',
      'Node.js',
      'Express',
      'FastAPI',
      'React',
      'Redux Toolkit',
      'Vite',
      'Tailwind CSS',
      'Shadcn/ui',
      'Socket.IO',
      'PostgreSQL (pgvector)',
      'MySQL',
      'Redis',
      'Sequelize',
      'AWS (S3, SQS, CloudFront, Lambda, EC2)',
      'Zoom Meeting SDK',
      'Cashfree Verification Suite',
      'OpenAI Assistants API',
      'RAG',
      'Datadog',
      'Datadog MCP',
      'PostHog',
      'Infisical',
    ],
  },
  {
    id: 'aqmenz',
    company: 'AQMENZ Automation',
    context: 'AQMENZ Automation Pvt. Ltd · Industrial automation & software',
    role: 'Software Development Intern',
    period: 'Aug 2023 – Oct 2023',
    type: 'Internship · Bengaluru',
    summary:
      'Built responsive React and Redux applications, worked on UI performance, and collaborated on REST API integration.',
    bullets: [
      'Developed modular React interfaces and optimized rendering cycles, improving client performance by 30%.',
      'Improved frontend features and responsiveness, contributing to a 25% increase in user engagement.',
      'Built Jest unit tests and worked with the team on UI delivery and REST API integration.',
    ],
    details: [],
    technologies: [
      'React',
      'Redux',
      'JavaScript',
      'Jest',
      'Tailwind CSS',
      'HTML / CSS',
      'REST APIs',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'Bash', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & systems',
    items: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST API design',
      'API architecture',
      'WebSockets (Socket.IO)',
      'Webhooks',
      'Event-driven architecture',
      'Distributed systems',
      'Message queues (AWS SQS, DLQ)',
      'Microservices',
      'Job scheduling',
      'Boolean search',
      'HMAC-SHA256 verification',
      'Idempotency & retries',
      'Exactly-once processing',
      'Rate limiting',
      'Sequelize ORM',
    ],
  },
  {
    title: 'Generative AI & LLMs',
    items: [
      'Retrieval-augmented generation (RAG)',
      'Embeddings & vector search (pgvector)',
      'Access control before retrieval',
      'Citation grounding & refusal handling',
      'Tool calling with zod-validated schemas',
      'Bounded agent loops & call logging',
      'Human confirmation before destructive actions',
      'Prompt-injection defences',
      'Evaluation harnesses',
      'OpenAI, Gemini & Claude APIs',
    ],
  },
  {
    title: 'Agentic development',
    items: [
      'Claude Code',
      'OpenAI Codex',
      'GitHub Copilot',
      'MCP servers as a consumer (Datadog, Atlassian, Supabase)',
      'Custom Agent Skills',
      'Claude Design',
      'Spec-first planning & AI change logs',
    ],
  },
  {
    title: 'Frontend',
    items: [
      'React.js',
      'Redux / Redux Toolkit',
      'Context API',
      'Vite',
      'Webpack',
      'Babel',
      'Tailwind CSS',
      'Shadcn/ui',
      'Material UI',
      'Responsive UI',
      'Code-splitting & bundle optimization',
      'BroadcastChannel API',
      'Jest',
    ],
  },
  {
    title: 'Databases',
    items: [
      'MySQL (production, 2 years at Vedak)',
      'PostgreSQL with pgvector',
      'Redis (locking & pub/sub)',
      'MongoDB (personal projects)',
      'Database migrations',
      'DBMS & query optimization',
    ],
  },
  {
    title: 'Cloud & delivery',
    items: [
      'AWS (S3, SQS, CloudFront, Lambda, EC2)',
      'AWS SDK v3',
      'Azure VMs',
      'Docker & Docker Compose',
      'Docker buildx',
      'Nginx reverse proxy',
      'SSL / TLS / Certbot',
      'GitHub Actions (CI/CD)',
      'Git / GitHub',
      'Vercel',
      'Netlify',
      'cPanel',
      'Production migrations & cutovers',
      'Bash automation',
    ],
  },
  {
    title: 'Observability & engineering practices',
    items: [
      'Datadog monitoring & alerting',
      'Datadog MCP server for debugging',
      'PostHog',
      'Centralized error logging',
      'Production debugging & incident tracing',
      'Runbooks & documentation',
      'Code review & PR review',
      'System design & LLD',
      'Data structures & algorithms',
      'Operating systems & concurrency',
      'Computer networks',
      'Agile & Jira',
    ],
  },
  {
    title: 'Integrations & security',
    items: [
      'Zoom Meeting SDK & webhooks',
      'Cashfree Verification Suite',
      'JWT & OAuth 2.0',
      'RBAC (Role-based access control)',
      'API-key authentication',
      'TOTP two-factor authentication (2FA)',
      'HMAC webhook verification',
      'helmet',
      'Infisical',
      'Cloudinary',
      'DNS / MX / SPF / DKIM / DMARC',
    ],
  },
];

export const additionalSkills = ['AWS Lambda', 'AWS RDS', 'DynamoDB'];
export const learning = ['Kubernetes (Pods, Deployments, Services)', 'Terraform', 'Jenkins'];
export const certifications = [
  { name: 'React.js & Node.js', issuer: 'NamasteDev' },
  {
    name: 'AWS Cloud Fundamentals & Core Services',
    issuer: 'Amazon Web Services Training',
  },
  { name: 'Technical Certifications', issuer: 'AICTE' },
];
export const achievements = [
  {
    title: 'College coding competition winner',
    description: 'Algorithmic problem solving in college programming competitions.',
  },
  {
    title: 'Class representative',
    description:
      'Represented the student cohort and coordinated department activities during engineering at VTU.',
  },
  {
    title: 'Published an internal npm package',
    description:
      'Consolidated Sequelize models, migrations, and schema contracts across backend services at Vedak.',
  },
  {
    title: 'Production scheduler cutover',
    description:
      'Led the production cutover from host crontabs to database-driven job scheduling on MySQL and Redis.',
  },
  {
    title: 'Internal RAG chatbot in production',
    description:
      'Shipped a Python retrieval chatbot with pgvector and role-based access before retrieval, used by the team in production.',
  },
];
