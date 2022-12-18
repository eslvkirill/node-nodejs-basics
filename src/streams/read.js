import { createReadStream } from 'fs';
import { join } from 'path';

import { getDirPath } from '../shared/index.js';

const read = async () => {
  const __dirname = getDirPath(import.meta.url);
  const path = join(__dirname, 'files/fileToRead.txt');

  const stream = createReadStream(path);

  return stream.pipe(process.stdout);
};

await read();
