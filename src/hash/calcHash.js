import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const fileName = 'fileToCalculateHashFor.txt';
  const filePath = path.join(dirName, 'files', fileName);
  const stream = fs.createReadStream(filePath, 'utf8');
  const hash = crypto.createHash('sha256');
  stream.pipe(hash).setEncoding('hex').pipe(stdout);
  stream.on('end', () => console.log('\n'));
};

await calculateHash();