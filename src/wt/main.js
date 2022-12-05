import { cpus } from 'os';
import { join } from 'path';
import { Worker } from 'worker_threads';

import { getDirPath } from '../shared/index.js';

const performCalculations = async () => {
  const cpu = cpus();
  const workers = [];

  for (let index = 0; index < cpu.length; index++) {
    workers.push(createPromiseWorker(10 + index));
  }

  const result = await Promise.all(workers);

  console.log(result);

  return result;
};

const createPromiseWorker = (workerData) => {
  return new Promise((resolve) => {
    const __dirname = getDirPath(import.meta.url);
    const file = join(__dirname, 'worker.js');

    const worker = new Worker(file, { workerData });

    worker
      .on('message', (result) => resolve({ status: 'resolved', data: result }))
      .on('error', () => resolve({ status: 'error', data: null }));
  });
};

await performCalculations();
