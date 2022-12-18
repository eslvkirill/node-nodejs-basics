const parseEnv = () => {
  const prefix = 'RSS_';
  const allVariables = process.env;
  const result = Object.keys({ ...allVariables })
    .filter((variableKey) => variableKey.startsWith(prefix))
    .map((variableKey) => `${variableKey} = ${allVariables[variableKey]}`)
    .join('; ');

  console.log(result);
};

parseEnv();
