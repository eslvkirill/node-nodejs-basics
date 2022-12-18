import { promises } from 'fs';
import { join } from 'path';

import { ERROR_MESSAGE, getDirPath, isExists } from '../shared/index.js';

const list = async () => {
  const __dirname = getDirPath(import.meta.url);
  const sourceFolder = join(__dirname, 'files');

  try {
    const isFolderExists = await isExists(sourceFolder);

    if (!isFolderExists) {
      throw new Error(ERROR_MESSAGE);
    }

    const files = await promises.readdir(sourceFolder);

    files.forEach((file) => console.log(file));
  } catch (err) {
    console.error(err);
  }
};

await list();
