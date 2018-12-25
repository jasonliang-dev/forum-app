// eslint-disable-next-line import/prefer-default-export
export const resource = (router, route, controller) => {
  // create
  router.post(`${route}/`, controller.store);
  // read
  router.get(`${route}/`, controller.index);
  router.get(`${route}/:id`, controller.show);
  // update
  router.put(`${route}/:id`, controller.update);
  // delete
  router.delete(`${route}/:id`, controller.destroy);
  // it's C.R.U.D.!
};
