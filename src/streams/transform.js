import { Transform } from 'stream';

const transform = async () => {
  const { stdin, stdout } = process;
  const reverse = new Transform({
    transform: (chunk, _, callback) => callback(null, chunk.reverse()),
  });

  return stdin.pipe(reverse).pipe(stdout);
};

await transform();
