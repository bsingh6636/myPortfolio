# Brijesh Kushwaha’s portfolio

[![ESLint](https://github.com/bsingh6636/myPortfolio/actions/workflows/eslint.yml/badge.svg)](https://github.com/bsingh6636/myPortfolio/actions/workflows/eslint.yml)

A personal developer portfolio built with React and plain CSS. The design uses warm paper tones, charcoal type, restrained rust and olive accents, and a real photograph. Experience, project write-ups, and a grouped skills inventory carry the page.

## Run locally

Use Node.js 20 or newer.

```sh
npm ci
npm start
```

The development server runs at http://localhost:3000. Runtime dependencies are React, React DOM, and Lucide icons. Build tools are kept in `devDependencies`; Babel is required by the prerender script and the existing React build pipeline.

## Code checks

```sh
npm run lint
npm run lint:fix
```

ESLint rules live in `.eslintrc.json`, formatting settings in `.prettierrc.json`, and generated-file exclusions in `.eslintignore`. Lint checks JavaScript and JSX for correctness and formatting; errors and warnings fail the check. `lint:fix` formats files and fixes supported issues.

The ESLint GitHub Actions workflow runs on every push and pull request, showing a green check on success and a red cross on failure. Each run includes a pass/fail summary.

## Production build

```sh
npm run build
```

This produces `build/` and prerenders the React components into `build/index.html`. Visitors and crawlers receive readable profile content before JavaScript runs. Native disclosures keep experience details and all eleven projects available without JavaScript. Interactive filters, theme preferences, and the contact form run in the browser.

Preview the production build:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory build
```

The Docker and Nginx setup serves `build/` and returns a real 404 for unknown paths. The Docker build uses Node.js 24 and the committed package lock. On pushes and merges to `main`, the deployment workflow first requires ESLint to pass, then builds and tests the container, exports the static files, and deploys them through the shared Nginx on EC2. Lint failures block deployment, including manual deployment runs. See [DEPLOYMENT.md](DEPLOYMENT.md) for the required settings and deployment guide.

## Edit content

- `src/data/profile.js`: contact details, work history, skills, learning, certifications, achievements.
- `src/data/projects.js`: every project preserved from the original portfolio, with descriptions and source/live links.
- `src/components/sections/`: page sections.
- `src/App.css`: responsive design, themes, print layout, and reduced-motion support.
- `public/resume.pdf`: the supplied `brijesh_immediate_joiner-YOE-1.pdf`.
- `public/images/og-image.svg`: editable source of the social sharing image.

## Content sources and reconciliation

Professional content was merged from the existing portfolio, the supplied profile handoff, and the supplied resume. Embedded resume-writing and job-application instructions were treated as document context, not as requests to change resumes, apply to jobs, or contact anyone.

- Brijesh confirmed that his entire Vedak tenure, November 2024 to September 2026, was as a Full Stack Engineer. This direct correction takes precedence over the role split in the supplied PDF. Backend and frontend contributions are shown together, with deployment support reduced to one short note. The earlier AQMENZ internship, its contributions, and its reported metrics remain.
- EduCors uses the corrected 2,000+ monthly requests, rather than the obsolete 50,000+ number.
- Cashfree is described as the Verification Suite, rather than payment collection.
- Infrastructure credits Claude Code for the build and Brijesh for deployment and operation. Azure details from the handoff and AWS/config-driven deployment details from the existing portfolio are retained.
- Every original project, certification, contact channel, and skill is retained. Tools present only in the older skills inventory are grouped under additional cloud and database tools; skill rankings were removed. Firebase remains in the original project descriptions and project tools, where its use is documented.
- Jenkins, Kubernetes, and Terraform are explicitly listed as currently learning, following the supplied PDF.
- job-tracker-mcp is labeled as built with Claude as a learning project. Authentication and service tooling are included without inventing repository URLs or an unconfirmed 2FA stack.
- The supplied resume is served consistently from `/resume.pdf`. The former remote resume lookup was removed to prevent an older API response from replacing this PDF with stale content.

The displayed Vedak title and dates follow Brijesh’s direct clarification. No new impact metrics have been invented.

## Contact behavior

The form preserves the existing contact API at `https://backend-dev-beige.vercel.app/api/contact`. It provides a visible success state, a 15-second timeout, retained form input on failure, and an email-app fallback. Browser verification mocks success and failure responses so no test messages are sent. Actual delivery still depends on the existing external API.

Both `bkushwaha.dev@gmail.com` and `brijesh@brijeshhq.com`, the phone number, GitHub, LinkedIn, and resume links remain available independently of the form.
