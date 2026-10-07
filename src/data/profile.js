export const profile = {
  name: "Brijesh Kumar Kushwaha",
  displayName: "Brijesh Kushwaha",
  location: "Bengaluru, India",
  email: "bkushwaha.dev@gmail.com",
  domainEmail: "brijesh@brijeshhq.com",
  phone: "+91 8050578803",
  phoneHref: "tel:+918050578803",
  github: "https://github.com/bsingh6636",
  linkedin: "https://linkedin.com/in/bsingh6636",
  resume: "/resume.pdf",
};

// Brijesh confirmed the full Vedak tenure was Full Stack Engineer.
// Production support was a small part of the role, not a separate position.
export const experience = [
  {
    id: "vedak-fullstack",
    company: "Vedak",
    context: "Expert network platform",
    role: "Full Stack Engineer",
    period: "Nov 2024 – Sep 2026",
    type: "Full time · Bengaluru",
    summary:
      "Built and maintained a multi-service Node.js backend and customer-facing and internal React applications for an expert network platform.",
    bullets: [
      "Built React interfaces for Socket.IO notifications serving 500+ concurrent users, expert ratings with dynamic filtering, and an internal CRM reporting module.",
      "Reduced the frontend bundle by 35% through code-splitting, bringing load time from 3.2s to 2.4s. Worked with Vite, Redux, and Tailwind, and migrated components from Material UI to shadcn/ui.",
      "Built a webhook pipeline streaming Zoom recordings directly to AWS S3 with SDK v3, idempotency checks, and retries. Added authenticated, role-based recording playback for the team and clients.",
      "Built an AWS SQS activity pipeline with a separate batch consumer, partial failure handling, and a dead-letter queue. A separate queued pipeline delivers recordings and transcripts per client, retrying individual failures up to three times.",
      "Replaced host crontabs with a MySQL and Redis job scheduler, adding execution history, runtime schedule changes without redeployment, and Datadog failure alerts. Led the production cutover.",
      "Integrated the Cashfree Verification Suite, including HMAC-SHA256 webhook verification and a polling workaround for an unavailable balance endpoint.",
      "Built a two-way enterprise API integration syncing new experts and call schedules, alongside automated transcript delivery for a global consulting firm.",
    ],
    details: [
      "Published an internal npm package sharing Sequelize models and migrations across backend repositories.",
      "Built an OpenAI Assistants API classification service using a custom domain taxonomy to replace manual project categorization.",
      "Set up centralized error logging and Datadog monitoring across backend services, reducing mean time to resolution by 45%. Used the Datadog MCP server to help trace application issues.",
    ],
    supportingWork:
      "Also helped with Docker deployments, GitHub Actions workflows, and production debugging on AWS.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "React",
      "Redux",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Socket.IO",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Sequelize",
      "AWS S3 / SQS",
      "Zoom API",
      "Cashfree Verification",
      "OpenAI Assistants API",
      "Datadog",
    ],
  },
  {
    id: "aqmenz",
    company: "AQMENZ Automation",
    context: "AQMENZ Automation Pvt. Ltd · Industrial automation & software",
    role: "Frontend Developer Intern",
    period: "Aug 2023 – Oct 2023",
    type: "Internship · Bengaluru",
    summary:
      "Built responsive React and Redux applications, worked on UI performance, and collaborated on API integration.",
    bullets: [
      "Developed modular React interfaces and optimized rendering cycles, improving client performance by 30%.",
      "Improved frontend features and responsiveness, contributing to a 25% increase in user engagement.",
      "Built Jest unit tests and worked with the team on UI delivery and REST API integration.",
    ],
    details: [],
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "Jest",
      "Tailwind CSS",
      "HTML / CSS",
      "REST APIs",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "Bash",
      "Python (scripting)",
      "HTML5",
      "CSS3",
      "C / C++",
    ],
  },
  {
    title: "Backend & systems",
    items: [
      "Node.js",
      "Express.js",
      "REST API design",
      "API architecture",
      "WebSockets / Socket.IO",
      "Webhooks",
      "Event-driven architecture",
      "Multi-service backends",
      "AWS SQS & dead-letter queues",
      "Job scheduling",
      "Idempotency & retries",
      "Rate limiting",
      "Sequelize ORM",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Redux / Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Responsive UI",
      "Code-splitting & bundle optimization",
      "WebSocket clients",
      "Jest",
    ],
  },
  {
    title: "Data",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Database migrations",
      "DBMS & query optimization",
    ],
  },
  {
    title: "Cloud & delivery",
    items: [
      "AWS EC2 / S3 / SQS / IAM",
      "AWS SDK v3",
      "Azure VMs",
      "Docker & Docker Compose",
      "Docker buildx",
      "Nginx",
      "Linux",
      "SSL / TLS / Certbot",
      "GitHub Actions",
      "Git / GitHub",
      "Vercel",
      "Backup & disaster recovery",
      "Production migrations & cutovers",
      "Bash automation",
    ],
  },
  {
    title: "Security & integrations",
    items: [
      "JWT",
      "OAuth 2.0",
      "RBAC",
      "API-key authentication",
      "HMAC-SHA256 verification",
      "helmet",
      "Infisical",
      "ISO 27001 audit work / Scrut",
      "Zoom API & SDK",
      "Cashfree Verification Suite",
      "Cloudinary",
      "DNS / MX / SPF / DKIM / DMARC",
      "Cloudflare DNS",
      "ImprovMX",
      "Brevo SMTP",
    ],
  },
  {
    title: "Observability & practice",
    items: [
      "Datadog monitoring & alerting",
      "PostHog",
      "Centralized error logging",
      "Production debugging",
      "Runbooks & documentation",
      "Code review",
      "Agile",
      "System design",
      "Data structures & algorithms",
      "Operating systems",
      "Computer networks",
      "OOP",
      "Software engineering",
      "Cloud computing",
    ],
  },
  {
    title: "LLM integration & developer tools",
    items: [
      "OpenAI Assistants API",
      "Custom domain taxonomy & prompts",
      "Claude Code",
      "OpenAI Codex",
      "MCP servers",
      "Datadog MCP for debugging",
      "Atlassian MCP",
      "job-tracker-mcp",
      "Custom Agent Skills",
      "Claude Design",
    ],
  },
  {
    title: "Other project tools",
    items: [
      "Firebase authentication",
      "Gemini API",
      "TMDB API",
      "Chart.js",
      "Leaflet",
      "PrimeReact",
      "Alpha Vantage API",
      "Financial Modeling Prep API",
      "Ixigo API",
      "bcrypt",
    ],
  },
];

// Retained without proficiency claims from the prior site's inventory.
export const additionalSkills = [
  "AWS Lambda",
  "AWS RDS",
  "DynamoDB",
  "Redis caching & pub/sub",
];
export const learning = [
  "Jenkins",
  "Kubernetes (Pods, Deployments, Services)",
  "Terraform",
];
export const certifications = [
  { name: "React.js & Node.js", issuer: "NamasteDev" },
  {
    name: "AWS Cloud Fundamentals & Core Services",
    issuer: "Amazon Web Services Training",
  },
  { name: "Technical Certifications", issuer: "AICTE" },
];
export const achievements = [
  {
    title: "College coding competition winner",
    description:
      "Algorithmic problem solving in college programming competitions.",
  },
  {
    title: "Class representative",
    description:
      "Represented the student cohort and coordinated department activities during engineering.",
  },
  {
    title: "Published an internal npm package",
    description:
      "Shared Sequelize models, migrations, and schema contracts across backend repositories.",
  },
  {
    title: "Production scheduler cutover",
    description:
      "Led the migration from host crontabs to database scheduling with execution history and failure alerts.",
  },
];
