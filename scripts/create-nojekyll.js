import fs from 'fs';
import path from 'path';

const docsDir = path.resolve(process.cwd(), 'docs');
const nojekyllPath = path.join(docsDir, '.nojekyll');

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

fs.writeFileSync(nojekyllPath, '');
console.log(`Created ${nojekyllPath}`);
