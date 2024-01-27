import fs from 'node:fs';
import zlib from 'node:zlib';
import stream from 'node:stream';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const sourcePath = path.join(dirName, 'files', 'fileToCompress.txt');
  const archivePath = path.join(dirName, 'files', 'archive.gz');
  const archive = fs.createReadStream(archivePath);
  const source = fs.createWriteStream(sourcePath, 'utf8');
  const unzip = zlib.createGunzip();
  
  stream.pipeline(archive, unzip, source, (err) => {
      if (err) {
        console.error('FS operation failed');
        process.exit();
      }
  });
};

await decompress();