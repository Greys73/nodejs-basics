import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { stdout } from "node:process";

const dirName = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const fileName = 'fileToRead.txt';
  const filePath = path.join(dirName, 'files', fileName);
  const stream = fs.createReadStream(filePath, 'utf8');
  stream.pipe(stdout);
  stream.on('end', () => console.log('\n'));
};

await read();