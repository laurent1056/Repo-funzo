import fs from 'fs';

/** Read a markdown file and return its content as a string */
export function readMarkdownFile(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    return '';
  }
  return fs.readFileSync(filePath, 'utf-8');
}

/** Extract the North Star statement from north_star.md */
export function extractNorthStar(content: string): string {
  // The North Star is the bold text between **...**
  // in the "## My North Star" section
  const match = content.match(/\*\*(.+?)\*\*/);
  if (match) {
    return match[1];
  }
  // Fallback: return first non-header, non-empty line
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('---') && !trimmed.startsWith('*')) {
      return trimmed;
    }
  }
  return 'Define your North Star in north_star.md';
}
