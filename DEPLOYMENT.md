# Portfolio deployment

Pushes and merges to `main` run ESLint on the exact commit first. Only a passing lint check proceeds to the Docker build, container checks, and deployment of static files to the existing shared Nginx on EC2. Lint errors, warnings, or formatting violations block both build and deployment.

The deployment workflow reuses `.github/workflows/eslint.yml`, so the same rules apply to pull requests and deployments. Use the Deploy portfolio workflow's Run workflow button on `main` for manual deployment; set deploy=false to run lint and the container build check without deploying. Manual runs must also pass lint before proceeding.

The deployment workflow calls scripts pinned to a reviewed commit of bsingh6636/infra. The [beginner walkthrough, SSH setup, checks, troubleshooting, and rollback guide](https://github.com/bsingh6636/infra/blob/master/readme/PORTFOLIO_DEPLOYMENT.md) lives there.

Required Actions variables: DEPLOY_HOST, DEPLOY_USER. Required secrets: DEPLOY_SSH_KEY, DEPLOY_KNOWN_HOSTS. Never commit private keys or frontend credentials.
