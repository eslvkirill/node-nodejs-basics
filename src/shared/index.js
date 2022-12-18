import { promises } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ERROR_MESSAGE = 'FS operation failed';

const getDirPath = (url) => join(dirname(fileURLToPath(url)));

const isExists = async (path) => {
  try {
    return await promises.stat(path).then(
      () => true,
      () => false
    );
  } catch {
    return false;
  }
};

export { getDirPath, isExists, ERROR_MESSAGE };
