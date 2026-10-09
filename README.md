# Getting Started with Create React App

[![ESLint](https://github.com/bsingh6636/myPortfolio/actions/workflows/eslint.yml/badge.svg)](https://github.com/bsingh6636/myPortfolio/actions/workflows/eslint.yml)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Checks JavaScript and JSX files using ESLint's recommended rules, the Create React App rules, and explicit rules configured in `.eslintrc.json`. Prettier formatting is enforced through ESLint using `.prettierrc.json`. Errors and warnings cause the command to fail. Generated files are excluded through `.eslintignore`.

The explicit rules enforce strict equality, `const` where possible, no `var` or `debugger`, no duplicate imports, and no unused variables or parameters. Unused parameters prefixed with `_` are allowed. JSX lists require keys, duplicate JSX props are rejected, and React hooks are checked for valid usage and dependency arrays. Console calls warn, except for `console.warn` and `console.error`.

### `npm run lint:fix`

Runs the same checks and automatically fixes supported issues, including formatting: two-space indentation, single quotes in JavaScript, double quotes in JSX, semicolons, spacing, line wrapping, and extra blank lines. Any remaining code correctness issues must be corrected manually.

For inline diagnostics in VS Code, install the ESLint extension (`dbaeumer.vscode-eslint`).

GitHub Actions runs `npm run lint` on every push and pull request using `.github/workflows/eslint.yml`. The ESLint check shows a green check when it passes and a red cross when it fails. Warnings and formatting violations also fail the check. Each Actions run includes a summary showing ✅ ESLint passed or ❌ ESLint failed. You can view the results in the repository's Actions tab or the commit and pull request checks. Commit and push the workflow and lint configuration to activate these checks on GitHub.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
