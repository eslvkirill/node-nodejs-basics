import { createWriteStream } from 'fs';
import { join } from 'path';

import { getDirPath } from '../shared/index.js';

const write = async () => {
  const __dirname = getDirPath(import.meta.url);
  const path = join(__dirname, 'files/fileToWrite.txt');

  const stream = createWriteStream(path);

  return process.stdin.pipe(stream);
};

await write();
