# Portfolio deployment

Pushes and merges to main build this exact commit in GitHub Actions and deploy static files to the existing shared Nginx on EC2. Use the Deploy portfolio workflow's Run workflow button for manual deployment; set deploy=false for a container build check only.

The deployment workflow calls scripts pinned to a reviewed commit of bsingh6636/infra. The [beginner walkthrough, SSH setup, checks, troubleshooting, and rollback guide](https://github.com/bsingh6636/infra/blob/master/readme/PORTFOLIO_DEPLOYMENT.md) lives there.

Required Actions variables: DEPLOY_HOST, DEPLOY_USER. Required secrets: DEPLOY_SSH_KEY, DEPLOY_KNOWN_HOSTS. Never commit private keys or frontend credentials.
