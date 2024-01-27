import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const fileName = 'fresh.txt';
  const filePath = path.join(dirName, 'files', fileName);
  const stream = fs.createWriteStream(filePath, { flags: 'wx' });
  stream.on('error', () => console.error('FS operation failed'));
  stream.on('finish', () => console.log(`Done: text was saved to ${filePath}`));
  stream.write('I am fresh and young\n');
  stream.end();
};

await create();