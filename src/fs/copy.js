import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const sourceDir = path.join(dirName, 'files');
  const targetDir = path.join(dirName, 'files_copy');
  try {
    const files = await fs.promises.readdir(sourceDir, { withFileTypes: true });
    await fs.promises.mkdir(targetDir);
    files.forEach(async (file) => {
      const sourceFilePath = path.join(sourceDir, file.name);
      const targetFilePath = path.join(targetDir, file.name);
      await fs.promises.copyFile(sourceFilePath, targetFilePath);
    });
  } catch {
    console.error('FS operation failed');
  }
};

await copy();
