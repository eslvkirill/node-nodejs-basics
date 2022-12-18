import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createUnzip } from 'zlib';

import { getDirPath } from '../shared/index.js';

const decompress = async () => {
  const __dirname = getDirPath(import.meta.url);
  const archive = join(__dirname, 'files/archive.zip');
  const decompressFile = join(__dirname, 'files/fileToCompress.txt');

  const readStream = createReadStream(archive);
  const writeStream = createWriteStream(decompressFile);

  readStream.pipe(createUnzip()).pipe(writeStream);
};

await decompress();
