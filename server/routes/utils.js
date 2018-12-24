// eslint-disable-next-line import/prefer-default-export
export const resource = (router, route, controller) => {
  router.get(`${route}/`, controller.index);
  // router.get(`${route}/create`, controller.create);
  router.post(`${route}/`, controller.store);
  router.get(`${route}/:id`, controller.show);
  // router.get(`${route}/:id/edit`, controller.edit);
  router.put(`${route}/:id`, controller.update);
  router.delete(`${route}/:id`, controller.destroy);
};
