// Projects verified against the 18 November 2026 handoff and the live repos (23 November 2026).
// Featured order: EduCors leads (hard-coded hero card), then the AI and Python work.
export const projects = [
  {
    id: 'EduCors-Helper',
    name: 'EduCors',
    category: 'backend',
    featured: true,
    description:
      'A public API proxy I built and operate, serving 2,000+ requests a month. It handles cross-origin requests and gives developers control over their API keys, rate limits, and usage.',
    github: 'https://github.com/bsingh6636/EduCors-Helper',
    live: 'https://cors-proxy.brijeshhq.com',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'React', 'Docker', 'Tailwind CSS'],
    subtitle: 'A CORS proxy with a developer console',
    contribution:
      'Built the Express service and React dashboard, with JWT and API-key authentication, per-key rate limits, quota visibility, and request-level analytics.',
    technical:
      'Tracks monthly, daily, and per-endpoint usage in MongoDB. An SSRF guard resolves DNS and blocks private, loopback, and link-local addresses. Containerized with Docker and maintained since September 2024.',
  },
  {
    id: 'multi-workspace-rag-assistant',
    name: 'Multi-Workspace RAG Assistant',
    category: 'ai',
    featured: true,
    description:
      'A document assistant with tool calling. Each workspace has its own documents, chats, tasks, and tool-call log. Answers come only from the active workspace, with citations, or a plain "I don’t know".',
    github: 'https://github.com/bsingh6636/multi-workspace-rag-assistant',
    live: 'https://workspace-ai.brijeshhq.com',
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'Supabase Postgres',
      'pgvector',
      'Gemini',
      'zod',
      'Docker',
    ],
    subtitle: 'Workspace-scoped retrieval and validated tools',
    contribution:
      'Built with Claude Code under my own plan, design spec, and review after each part. Six zod-validated tools (tasks, Slack and Discord summaries, workspace deletion) run in a loop capped at 3 rounds, and every call is logged with its result, error, and latency.',
    technical:
      'The workspace filter sits inside the pgvector query and the workspace id is injected by the server, never taken from model arguments. A 0.62 similarity threshold filters chunks without blocking tool-only requests, a citation guard strips invented sources, deleting a workspace needs an explicit confirmation, and uploads are deduplicated by SHA-256.',
  },
  {
    id: 'rag-service',
    name: 'RAG Service',
    category: 'ai',
    featured: true,
    description:
      'A Python question-answering service I wrote by hand to understand every step: Markdown ingestion, chunking, embeddings, pgvector retrieval, cited answers, and refusal when the documents do not cover the question.',
    github: 'https://github.com/bsingh6636/rag-service',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'Gemini Embeddings',
      'Claude',
      'Docker',
    ],
    subtitle: 'Cited answers with an evaluation harness',
    contribution:
      'Built the ingestion pipeline (heading-based sections, token windows, transactional chunk replacement), exact cosine search, cited answer generation, refusal handling, and an evaluation harness that scores answers against expected sources.',
    technical:
      'Five documents produce 41 chunks. Retrieval uses top_k=3 with a 0.65 similarity cutoff, which is being calibrated with near-miss evaluation questions. A learning prototype, not a production service.',
  },
  {
    id: 'fastapi-webhook-service',
    name: 'FastAPI Webhook Processing Service',
    category: 'backend',
    featured: true,
    description:
      'A Python service that receives payment webhooks, acknowledges immediately with 202 Accepted, and processes each transaction in the background. Duplicate webhooks for the same transaction are accepted but never processed twice.',
    github: 'https://github.com/bsingh6636/Walnutfolks-assesment',
    technologies: ['Python', 'FastAPI', 'MySQL', 'Pydantic', 'Docker', 'Pytest'],
    subtitle: 'Idempotent, exactly-once webhook processing',
    contribution:
      'Designed and built the service: a non-blocking webhook endpoint with an immediate 202 response, a background worker loop, and a pytest suite.',
    technical:
      'Exactly-once processing uses a MySQL unique key plus SELECT ... FOR UPDATE SKIP LOCKED row locking for concurrent workers, with enforced state transitions and Pydantic validation.',
  },
  {
    id: 'infra',
    name: 'Self-hosted infrastructure',
    category: 'backend',
    featured: false,
    description:
      'Declarative Docker Compose and Nginx stack on AWS EC2 and Azure: one stack.yaml renders compose and Nginx configs, with validation, local previews, release snapshots, and rollback. TLS via Certbot DNS-01 (Cloudflare). Built with Claude Code under my direction; I deploy and operate it.',
    github: 'https://github.com/bsingh6636/infra',
    technologies: [
      'Docker Compose',
      'Nginx',
      'AWS EC2',
      'Azure VM',
      'Certbot',
      'Cloudflare',
      'Bash',
    ],
    subtitle: 'The stack behind my personal services',
  },
  {
    id: 'cicd-pipeline',
    name: 'CI/CD deployment pipeline',
    category: 'backend',
    featured: false,
    description:
      'GitHub Actions pipeline for a Node.js and Express API: lint, tests, Docker build, and container smoke test on every push, then commit-tagged images published to GHCR and deployed over SSH to an Azure Linux VM with a staging container, health checks, and basic rollback.',
    technologies: ['GitHub Actions', 'Docker', 'GHCR', 'Node.js', 'Express', 'Azure VM', 'SSH'],
  },
  {
    id: 'web-hook-service',
    name: 'Webhook forwarding service',
    category: 'backend',
    featured: false,
    description:
      'Multi-source webhook relay (Facebook, WhatsApp, Zoom, and a generic /:source route) that forwards events to target endpoints. Failed deliveries are stored in MongoDB with payload, headers, and error, and listed via GET /missed-requests.',
    github: 'https://github.com/bsingh6636/web-hook-service',
    technologies: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Webhooks'],
  },
  {
    id: 'travel_planner_weather_dashboard',
    name: 'Travel Planner',
    category: 'fullstack',
    featured: false,
    description:
      'Travel planner with Ixigo airport and city autocomplete (via an Express CORS proxy), trip date pickers, and a community places feed; photos are uploaded to Cloudinary by an Express and MongoDB backend.',
    github: 'https://github.com/bsingh6636/travel_planner.weather_dashboard',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Ixigo API'],
  },
  {
    id: 'Hospital_Management_System',
    name: 'Hospital Management System (MERN)',
    category: 'fullstack',
    featured: false,
    description:
      'MERN hospital application with a patient portal and admin dashboard: registration, appointment booking with status workflows, contact messages, and doctor profiles with Cloudinary avatars. Role-based JWT cookies and bcrypt hashing.',
    github: 'https://github.com/bsingh6636/Hospital_Management_System',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Cloudinary'],
  },
  {
    id: 'Stock_Market',
    name: 'Stock Market Dashboard',
    category: 'data',
    featured: false,
    description:
      'Stock dashboard with Chart.js price charts (intraday, weekly, monthly), company search via Alpha Vantage, sector performance and quotes via Financial Modeling Prep, and a rotating news sentiment card.',
    github: 'https://github.com/bsingh6636/Stock_Market',
    live: 'https://stock-market-eosin.vercel.app',
    technologies: [
      'React.js',
      'Chart.js',
      'Alpha Vantage API',
      'Financial Modeling Prep API',
      'Tailwind CSS',
    ],
  },
  {
    id: 'ShopifyOrder-FrontEnd',
    name: 'Shopify Sales Analytics Dashboard',
    category: 'data',
    featured: false,
    description:
      'React dashboard that charts a sample Shopify orders and customers dataset with Chart.js: sales over time, growth rate, new and repeat customers, cohort lifetime value, and a Leaflet map of customers by city.',
    github: 'https://github.com/bsingh6636/ShopifyOrder-FrontEnd',
    technologies: ['React.js', 'Chart.js', 'Leaflet', 'Tailwind CSS'],
  },
];
