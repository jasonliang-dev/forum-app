export const formPost = (event, url) => {
  event.preventDefault();
  const data = new FormData(event.target);

  return fetch(url, {
    method: 'POST',
    data,
  });
};

export const inspect = x => {
  console.log(x); // eslint-disable-line no-console
  return x;
};
