import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'components', 'pages');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace button styles (assuming anything with bg-foreground hover:bg-foreground/90 text-background is a button)
  content = content.replace(/bg-foreground hover:bg-foreground\/90 text-background/g, 'bg-accent hover:bg-accent-hover text-foreground shadow-sm');
  
  // Replace hover button with borders
  content = content.replace(/border border-foreground hover:bg-foreground hover:text-background/g, 'border border-secondary hover:border-foreground text-foreground');

  // Replace remaining bg-foreground text-background with surface or background depending on context
  // Manual overrides for known sections in grep output
  content = content.replace(/bg-foreground text-background p-8 lg:p-12/g, 'bg-surface text-foreground p-8 lg:p-12 border border-secondary');
  content = content.replace(/bg-foreground text-background p-10/g, 'bg-surface text-foreground p-10 border border-secondary');
  content = content.replace(/bg-foreground text-background overflow-hidden/g, 'bg-background text-foreground overflow-hidden border-b border-secondary');
  content = content.replace(/bg-foreground text-background px-2.5/g, 'bg-accent/20 text-accent-dark px-2.5'); // Badges
  content = content.replace(/bg-foreground text-background px-3/g, 'bg-accent/20 text-accent-dark px-3'); // Badges
  content = content.replace(/bg-foreground\/80 backdrop-blur-sm text-background px-2.5/g, 'bg-surface/90 backdrop-blur-sm text-foreground px-2.5 border border-secondary'); // Badges
  
  // Generic fallback for any remaining bg-foreground text-background (mostly buttons or small cards)
  content = content.replace(/bg-foreground text-background/g, 'bg-accent text-foreground');
  content = content.replace(/bg-foreground\/5/g, 'bg-surface border border-secondary');

  // Change old radiuses to new specified radiuses if we see them explicitly
  content = content.replace(/rounded-2xl/g, 'rounded-[28px]');
  content = content.replace(/rounded-xl/g, 'rounded-[20px]');

  fs.writeFileSync(filePath, content, 'utf8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(pagesDir);
console.log('UI update script completed.');
