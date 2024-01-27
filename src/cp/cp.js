import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cp from 'node:child_process';
import process from 'node:process';

const dirName = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const modulePath = path.join(dirName, 'files', 'script.js');
  const child = cp.fork(modulePath, args, {stdio: 'pipe'});
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
