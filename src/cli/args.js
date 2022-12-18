const parseArgs = () => {
  const allArguments = process.argv;
  const result = [];

  for (let i = 2; i < allArguments.length; i += 2) {
    result.push(`${allArguments[i]} is ${allArguments[i + 1]}`);
  }
  result.join(', ');

  console.log(result);
};

parseArgs();
