// Projects preserved from the existing portfolio and merged with supplied profile details.
export const projects = [
  {
    id: 'EduCors-Helper',
    name: 'EduCors',
    category: 'backend',
    featured: true,
    description:
      'A public API proxy I built and operate, serving 2,000+ requests a month. It handles cross-origin requests and gives developers control over their API keys and usage.',
    github: 'https://github.com/bsingh6636/EduCors-Helper',
    live: 'https://cors-proxy.brijeshhq.com',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'React', 'Docker', 'Tailwind CSS'],
    subtitle: 'A CORS proxy with a developer console',
    contribution:
      'Built the Express service and React dashboard, with JWT and API-key authentication, per-key rate limits, quota visibility, and request-level analytics.',
    technical:
      'Tracks total, monthly, daily, and per-endpoint usage in MongoDB. Containerized with Docker and maintained since September 2024.',
  },
  {
    id: 'web-hook-service',
    name: 'Webhook forwarding service',
    category: 'backend',
    featured: true,
    description:
      'Multi source webhook relay (Facebook, WhatsApp, Zoom, and a generic /:source route) that forwards events to target endpoints. Failed deliveries are stored in MongoDB with payload, headers, and error, and listed via GET /missed-requests.',
    github: 'https://github.com/bsingh6636/web-hook-service',
    technologies: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Webhooks', 'REST API'],
    subtitle: 'Making failed event delivery recoverable',
    contribution:
      'Built the TypeScript service, persistent failed-delivery capture, and an API for inspecting and replaying missed events.',
    technical:
      'Failed payloads, headers, and errors are stored in MongoDB and can be inspected through GET /missed-requests.',
    live: 'https://web-hook-service.vercel.app',
  },
  {
    id: 'infra',
    name: 'Self-hosted infrastructure',
    category: 'backend',
    featured: true,
    description:
      'Declarative Docker Compose and Nginx stack on AWS EC2: one stack.yaml renders compose and Nginx configs, with validation checks, local previews, release snapshots, and rollback. TLS via Certbot DNS-01 (Cloudflare) per root domain.',
    github: 'https://github.com/bsingh6636/infra',
    technologies: [
      'Docker Compose',
      'Nginx',
      'AWS EC2',
      'Certbot',
      'Bash',
      'Node.js',
      'SSL/TLS',
      'Azure VM',
      'Cloudflare',
      'Claude Code',
    ],
    subtitle: 'The stack behind my personal services',
    contribution:
      'Directed Claude Code to build the stack. I deployed it and continue to operate it, including the AWS EC2 deployment and the earlier Azure VM setup.',
    technical:
      'Includes separate dev and production setups, multi-domain routing, wildcard SSL, certificate renewal scripts, and multi-platform Docker buildx images.',
  },
  {
    id: 'sahayog-crowdfunding',
    name: 'Sahayog Crowdfunding Platform',
    category: 'fullstack',
    featured: false,
    description:
      'Fundraising and crowdfunding platform for Nepal: users create campaigns, admins review them, and donors record pledges (eSewa, Khalti, bank transfer). Includes JWT auth, organiser updates, a blog, and rate limited APIs. Also includes donor leaderboards, Cloudinary uploads, helmet, and per-route rate limits.',
    github: 'https://github.com/bsingh6636/sahayog-crowdfunding',
    live: 'https://nepalfundme.com',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
  },
  {
    id: 'swiggy.clone',
    name: 'Food Delivery Application (Swiggy Clone)',
    category: 'fullstack',
    featured: false,
    description:
      'Food delivery web app that loads live Swiggy restaurant data through the EduCors proxy (with mock data fallback), a Redux Toolkit cart, Firebase phone OTP verification at checkout, lazy loaded routes, and shimmer loading placeholders.',
    github: 'https://github.com/bsingh6636/swiggy.clone',
    technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Firebase Phone Auth', 'Leaflet'],
  },
  {
    id: 'Hospital_Management_System',
    name: 'Hospital Management System (MERN)',
    category: 'fullstack',
    featured: false,
    description:
      'MERN hospital application with a patient portal and admin dashboard: registration, appointment booking with status workflows, contact messages, and doctor profiles with Cloudinary avatars. Role based JWT cookies and bcrypt hashing.',
    github: 'https://github.com/bsingh6636/Hospital_Management_System',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Cloudinary'],
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
  {
    id: 'NetflixGpt',
    name: 'NetflixGPT (AI Movie Search)',
    category: 'data',
    featured: false,
    description:
      'Movie discovery app where natural language queries are sent to Google Gemini for movie suggestions, then looked up on TMDB for posters and trailers. Firebase authentication and Redux Toolkit state management.',
    github: 'https://github.com/bsingh6636/NetflixGpt',
    live: 'https://nwtflixgpt.web.app',
    technologies: ['React.js', 'Redux Toolkit', 'Gemini API', 'TMDB API', 'Firebase'],
  },
  {
    id: 'Stock_Market',
    name: 'Stock Market Dashboard',
    category: 'data',
    featured: false,
    description:
      'Stock dashboard with Chart.js price charts (intraday, weekly, monthly) and company search via Alpha Vantage, sector performance and market quotes via Financial Modeling Prep, a rotating news sentiment card, and Firebase auth.',
    github: 'https://github.com/bsingh6636/Stock_Market',
    live: 'https://stock-market-eosin.vercel.app',
    technologies: [
      'React.js',
      'Alpha Vantage API',
      'Financial Modeling Prep API',
      'Chart.js',
      'Tailwind CSS',
      'Firebase',
    ],
  },
  {
    id: 'Artwork-Data-Table',
    name: 'Artwork Data Table',
    category: 'data',
    featured: false,
    description:
      'TypeScript React app that lists Art Institute of Chicago artworks in a PrimeReact DataTable with server side pagination, multi row selection, an overlay panel to select N rows across pages, and a loading spinner.',
    github: 'https://github.com/bsingh6636/Artwork-Data-Table',
    technologies: ['TypeScript', 'React.js', 'PrimeReact', 'Vite', 'Art Institute of Chicago API'],
  },
  {
    id: 'travel_planner_weather_dashboard',
    name: 'Travel Planner',
    category: 'fullstack',
    featured: false,
    description:
      'Travel planner with Ixigo airport and city autocomplete (via an Express CORS proxy), trip date pickers, and a community places feed; photos are uploaded to Cloudinary by an Express and MongoDB backend service.',
    github: 'https://github.com/bsingh6636/travel_planner.weather_dashboard',
    technologies: ['React', 'Node.js', 'Express', 'Ixigo API', 'Cloudinary', 'MongoDB'],
  },
];
