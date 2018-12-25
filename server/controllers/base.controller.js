export default class BaseController {
  constructor(model) {
    this.Model = model;
  }

  index(req, res, next) {
    this.Model.find({})
      .then(products => res.send(products))
      .catch(next);
  }

  store(req, res, next) {
    new this.Model(req.body)
      .save()
      .then(() => res.send('Created successfully'))
      .catch(next);
  }

  show(req, res, next) {
    this.Model.findById(req.params.id)
      .then(product => res.send(product))
      .catch(next);
  }

  update(req, res, next) {
    this.Model.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => res.send('Updated successfully.'))
      .catch(next);
  }

  destroy(req, res, next) {
    this.Model.findByIdAndRemove(req.params.id)
      .then(() => res.send('Deleted successfully'))
      .catch(next);
  }
}
