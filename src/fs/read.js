import { promises } from 'fs';
import { join } from 'path';

import { ERROR_MESSAGE, getDirPath, isExists } from '../shared/index.js';

const read = async () => {
  const __dirname = getDirPath(import.meta.url);
  const path = join(__dirname, 'files/fileToRead.txt');

  try {
    const isFileExists = await isExists(path);

    if (!isFileExists) {
      throw new Error(ERROR_MESSAGE);
    }

    const file = await promises.readFile(path);

    console.log(file.toString());
  } catch (err) {
    console.error(err);
  }
};

await read();
