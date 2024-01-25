import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const filePath = path.join(dirName, 'files');
    const files = await fs.promises.readdir(filePath);
    for (const file of files) console.log(file);
  } catch {
    console.error('FS operation failed');
  }
};

await list();