export const inspect = x => {
  console.log(x); // eslint-disable-line no-console
  return x;
};

export const sleep = ms => x =>
  new Promise(resolve => setTimeout(() => resolve(x), ms));
