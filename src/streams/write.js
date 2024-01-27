import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as readline from 'node:readline';
import process from 'node:process';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const fileName = 'fileToWrite.txt';
  const filePath = path.join(dirName, 'files', fileName);

  const reader = readline.createInterface(process.stdin, process.stdout);
  const writer = fs.createWriteStream(filePath);
  
  console.log('Write some text:');
  reader.on('line',(data) => {
    writer.write(`${data}\n`);
    process.exit();
  }); 
  process.on('SIGINT', () => process.exit());
};

await write();