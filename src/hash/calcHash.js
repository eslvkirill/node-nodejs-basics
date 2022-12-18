import { promises } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';

import { getDirPath } from '../shared/index.js';

const calculateHash = async () => {
  const __dirname = getDirPath(import.meta.url);
  const path = join(__dirname, 'files/fileToCalculateHashFor.txt');

  try {
    const file = await promises.readFile(path);
    const hash = createHash('sha256').update(file).digest('hex');

    console.log(hash);
  } catch (err) {
    console.log(err);
  }
};

await calculateHash();
