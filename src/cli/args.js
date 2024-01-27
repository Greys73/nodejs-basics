const parseArgs = () => {
  const allArgs = process.argv.slice(2);
  let result = '';
  for(let i=0; i < allArgs.length; i+=2) {
    result += `${allArgs[i].slice(2)} is ${allArgs[i+1]}, `;
  }
  console.log(result);
};

parseArgs();