import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  let data = '';
  const fileName = 'fileToRead.txt';
  const filePath = path.join(dirName, 'files', fileName);
  const stream = fs.createReadStream(filePath, 'utf8');
  stream.on('data', (chunk) => data += chunk);
  stream.on('end', () => console.log(data));
  stream.on('error', () => console.error('Error: FS operation failed'));
};

await read();