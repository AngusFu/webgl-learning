const glob = require("glob")
const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>WebGL learning</title>
</head>
<body>
  <h1>WebGL learning</h1>
  <ul>@@LIS@@</ul>
</body>
</html>`;
glob("ch*/*.html", function (er, files = []) {
  const listContent = files
    .map(f => `<li><a href="${f}">/${f}</a></li>`)
    .join('\n');
  fs.writeFileSync('index.html', html.replace('@@LIS@@', listContent));
});

