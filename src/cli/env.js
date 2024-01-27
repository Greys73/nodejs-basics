const parseEnv = () => {
  const allVars = process.env;
  const rssVars = Object.keys(allVars).filter((e) => e.startsWith('RSS_'));
  rssVars.forEach(rssVar => console.log(`${rssVar}=${process.env[rssVar]};`));
};

parseEnv();