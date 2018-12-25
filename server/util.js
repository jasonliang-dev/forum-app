export const inspect = x => {
  console.log(x); // eslint-disable-line no-console
  return x;
};

export const pick = (props, obj) => {
  const result = {};

  props.forEach(prop => {
    if (prop in obj) result[prop] = obj[prop];
  });

  return result;
};
