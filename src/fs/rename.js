import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const wrongFile = path.join(dirName, 'files', 'wrongFilename.txt');
  const properFile = path.join(dirName, 'files', 'properFilename.md');
  try {
    await fs.promises.access(properFile);
    console.error('FS operation failed (*.md file already exists)');
  } catch {
    try {
      await fs.promises.rename(wrongFile, properFile);
    } catch {
      console.error(`FS operation failed (there's no *.txt file)`);
    }
  }
};

await rename();