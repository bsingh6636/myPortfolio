// Generate readable production HTML directly from the same React components.
// This keeps crawler/no-JS content in sync with the interactive portfolio.
const fs = require("node:fs");
const path = require("node:path");
const babel = require("@babel/core");
const React = require("react");
const { renderToString } = require("react-dom/server");
const sourceRoot = path.resolve(__dirname, "../src") + path.sep;
const previousLoaders = {};
for (const extension of [".js", ".jsx"]) {
  previousLoaders[extension] = require.extensions[extension];
  require.extensions[extension] = (module, filename) => {
    if (!filename.startsWith(sourceRoot))
      return previousLoaders[extension](module, filename);
    const { code } = babel.transformSync(fs.readFileSync(filename, "utf8"), {
      filename,
      babelrc: false,
      configFile: false,
      presets: [
        [
          require.resolve("@babel/preset-env"),
          { targets: { node: "current" } },
        ],
        [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
      ],
    });
    module._compile(code, filename);
  };
}
try {
  const App = require("../src/App").default;
  const markup = renderToString(React.createElement(App));
  const file = path.resolve(__dirname, "../build/index.html");
  const html = fs.readFileSync(file, "utf8");
  const marker = /<div id="root">[\s\S]*<\/div>(?=\s*<\/body>)/;
  if (!marker.test(html))
    throw new Error("The root element is missing from build/index.html.");
  fs.writeFileSync(
    file,
    html.replace(marker, () => `<div id="root">${markup}</div>`),
  );
  console.log(
    "Prerendered portfolio: complete profile available before JavaScript.",
  );
} finally {
  for (const [extension, loader] of Object.entries(previousLoaders)) {
    if (loader) require.extensions[extension] = loader;
    else delete require.extensions[extension];
  }
}
