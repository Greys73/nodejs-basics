import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    const fileName = 'fileToRemove.txt';
    const filePath = path.join(dirName, 'files', fileName);
    await fs.promises.unlink(filePath);
  } catch {
    console.error('FS operation failed');
  }
};

await remove();