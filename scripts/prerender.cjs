// Generate readable production HTML directly from the same React components.
// This keeps crawler/no-JS content in sync with the interactive portfolio.
const fs = require('node:fs');
const path = require('node:path');
const babel = require('@babel/core');
const React = require('react');
const { renderToString } = require('react-dom/server');
const sourceRoot = path.resolve(__dirname, '../src') + path.sep;
const previousLoaders = {};
for (const extension of ['.js', '.jsx']) {
  previousLoaders[extension] = require.extensions[extension];
  require.extensions[extension] = (module, filename) => {
    if (!filename.startsWith(sourceRoot)) return previousLoaders[extension](module, filename);
    const { code } = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
      filename,
      babelrc: false,
      configFile: false,
      presets: [
        [require.resolve('@babel/preset-env'), { targets: { node: 'current' } }],
        [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
      ],
    });
    module._compile(code, filename);
  };
}
const escapeAttr = (value) => String(value).replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);

// Swap the page-specific head tags (title, description, canonical, robots,
// Open Graph, Twitter) so link previews show the right page.
function withHead(html, { title, description, url, robots }) {
  const setMeta = (doc, attr, key, value) => {
    const tag = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
    if (!tag.test(doc)) throw new Error(`Missing <meta ${attr}="${key}"> in build/index.html.`);
    return doc.replace(tag, (_, open, close) => `${open}${escapeAttr(value)}${close}`);
  };
  let doc = html
    .replace(/<title>[^<]*<\/title>/, () => `<title>${escapeAttr(title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, (_, a, b) => `${a}${url}${b}`);
  for (const [attr, key, value] of [
    ['name', 'description', description],
    ['name', 'robots', robots],
    ['property', 'og:url', url],
    ['property', 'og:title', title],
    ['property', 'og:description', description],
    ['name', 'twitter:url', url],
    ['name', 'twitter:title', title],
    ['name', 'twitter:description', description],
  ])
    doc = setMeta(doc, attr, key, value);
  return doc;
}

try {
  const App = require('../src/App').default;
  const { roles, resumePath, pageTitle } = require('../src/data/roles');
  const buildDir = path.resolve(__dirname, '../build');
  const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
  const marker = /<div id="root">[\s\S]*<\/div>(?=\s*<\/body>)/;
  if (!marker.test(template)) throw new Error('The root element is missing from build/index.html.');
  const render = (urlPath) => {
    const markup = renderToString(React.createElement(App, { path: urlPath }));
    return template.replace(
      marker,
      () => `<div id="root" data-prerendered="true" data-path="${urlPath}">${markup}</div>`
    );
  };

  fs.writeFileSync(path.join(buildDir, 'index.html'), render('/'));

  // Role pages are for sharing, not search: noindex, with their own previews.
  let count = 0;
  for (const role of roles) {
    for (const [name, view] of [null, ...(role.variants || [])].flatMap((n) => [
      [n, 'resume'],
      [n, 'video'],
    ])) {
      const urlPath = resumePath(role, name, view);
      const title = pageTitle(role, view);
      const html = withHead(render(urlPath), {
        title,
        description: role.summary,
        url: `https://brijeshhq.com${urlPath}`,
        robots: 'noindex, nofollow',
      });
      const file = path.join(buildDir, urlPath, 'index.html');
      count += 1;
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
    }
  }
  console.log(`Prerendered portfolio and ${count} resume and video pages under /resume/.`);
} finally {
  for (const [extension, loader] of Object.entries(previousLoaders)) {
    if (loader) require.extensions[extension] = loader;
    else delete require.extensions[extension];
  }
}
