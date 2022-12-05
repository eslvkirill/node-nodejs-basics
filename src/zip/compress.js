import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip } from 'zlib';

import { getDirPath } from '../shared/index.js';

const compress = async () => {
  const __dirname = getDirPath(import.meta.url);
  const compressFile = join(__dirname, 'files/fileToCompress.txt');
  const archive = join(__dirname, 'files/archive.zip');

  const readStream = createReadStream(compressFile);
  const writeStream = createWriteStream(archive);

  readStream.pipe(createGzip()).pipe(writeStream);
};

await compress();
