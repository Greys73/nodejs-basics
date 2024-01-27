import os from 'node:os';
import wt from 'node:worker_threads';

const INCREMENT = 10;
const WORKER_PATH = './src/wt/worker.js';

const performCalculations = async () => {
  const numOfCores = os.cpus().length;
  const workersPromises = [];
  for(let i = 0; i < numOfCores; i++) {
    const workPromise = new Promise((resolve) => {
      const worker = new wt.Worker(WORKER_PATH, {workerData: INCREMENT + i});
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });
    workersPromises.push(workPromise);
  }
  const result = await Promise.all(workersPromises);
  console.log(result);
};

await performCalculations();