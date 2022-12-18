import { promises } from 'fs';
import { join } from 'path';

import { ERROR_MESSAGE, getDirPath, isExists } from '../shared/index.js';

const remove = async () => {
  const __dirname = getDirPath(import.meta.url);
  const path = join(__dirname, 'files/fresh.txt');

  try {
    const isFileExists = await isExists(path);

    if (!isFileExists) {
      throw new Error(ERROR_MESSAGE);
    }

    return await promises.unlink(path);
  } catch (err) {
    console.error(err);
  }
};

await remove();
