import { promises } from 'fs';
import { join } from 'path';

import { ERROR_MESSAGE, getDirPath, isExists } from '../shared/index.js';

const rename = async () => {
  const __dirname = getDirPath(import.meta.url);
  const oldPath = join(__dirname, 'files/wrongFilename.txt');
  const newPath = join(__dirname, 'files/properFilename.md');

  try {
    const isOldPathExists = await isExists(oldPath);
    const isNewPathExists = await isExists(newPath);

    if (!isOldPathExists || isNewPathExists) {
      throw new Error(ERROR_MESSAGE);
    }

    return await promises.rename(oldPath, newPath);
  } catch (err) {
    console.error(err);
  }
};

await rename();
