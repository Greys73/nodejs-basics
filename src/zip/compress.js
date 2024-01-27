import fs from 'node:fs';
import zlib from 'node:zlib';
import stream from 'node:stream';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const dirName = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {  
  const sourcePath = path.join(dirName, 'files', 'fileToCompress.txt');
  const archivePath = path.join(dirName, 'files', 'archive.gz');
  const source = fs.createReadStream(sourcePath, 'utf8');
  const archive = fs.createWriteStream(archivePath);
  const gzip = zlib.createGzip();
  
  stream.pipeline(source, gzip, archive, (err) => {
      if (err) {
        console.error('FS operation failed');
        process.exit();
      }
  });
};

await compress();