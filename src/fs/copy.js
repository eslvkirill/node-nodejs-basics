import { promises } from 'fs';
import { join } from 'path';

import { ERROR_MESSAGE, getDirPath, isExists } from '../shared/index.js';

const copy = async () => {
  const __dirname = getDirPath(import.meta.url);
  const sourceFolder = join(__dirname, 'files');
  const copyFolder = join(__dirname, 'files_copy');

  try {
    const isSourceFolderExists = await isExists(sourceFolder);
    const isCopyFolderExists = await isExists(copyFolder);

    if (!isSourceFolderExists || isCopyFolderExists) {
      throw new Error(ERROR_MESSAGE);
    }

    await promises.mkdir(copyFolder);
    await copyEntities(sourceFolder, copyFolder);
  } catch (err) {
    console.log(err);
  }
};

const copyEntities = async (sourceFolder, copyFolder) => {
  const entities = await promises.readdir(sourceFolder, {
    withFileTypes: true,
  });

  return entities.forEach(async (entity) => {
    const sourcePath = join(sourceFolder, entity.name);
    const copyPath = join(copyFolder, entity.name);

    if (entity.isDirectory()) {
      await copyDir(sourcePath, copyPath);
    } else {
      await promises.copyFile(sourcePath, copyPath);
    }
  });
};

copy();
