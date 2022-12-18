import { fork } from 'child_process';
import { join } from 'path';

import { getDirPath } from '../shared/index.js';

const ARGUMENTS = ['Bradley Cooper', 'Jennifer Lawrence', 'Rami Malek'];

const spawnChildProcess = async (args) => {
  const __dirname = getDirPath(import.meta.url);
  const path = join(__dirname, 'files/script.js');
  const { stdin, stdout } = process;

  const childProcess = fork(path, args, { silent: true });

  childProcess.stdout.pipe(stdout);
  stdin.pipe(childProcess.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(ARGUMENTS);
