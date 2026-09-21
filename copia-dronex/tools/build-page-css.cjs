// Rebuild after editing the original CSS listed in services/data/*-styles.json.
const fs = require('fs');
const path = require('path');
const { transformSync } = require('esbuild');
const root = path.resolve(__dirname, '..');
const data = path.join(root, 'services/data');
const destination = path.join(root, 'assets/css/pages');
fs.mkdirSync(destination, { recursive: true });
for (const filename of fs.readdirSync(data).filter(name => name.endsWith('-styles.json'))) {
    const styles = JSON.parse(fs.readFileSync(path.join(data, filename), 'utf8'));
    const css = styles.map(file => fs.readFileSync(path.join(root, file), 'utf8')).join('\n');
    const result = transformSync(css, { loader: 'css', minify: true, target: 'es2020' });
    fs.writeFileSync(path.join(destination, filename.replace('-styles.json', '.css')), result.code);
}
console.log('Page styles rebuilt.');
