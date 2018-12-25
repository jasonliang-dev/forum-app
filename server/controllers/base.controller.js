export default class BaseController {
  constructor(model) {
    this.Model = model;
    this.index = ::this.index;
    this.store = ::this.store;
    this.show = ::this.show;
    this.update = ::this.update;
    this.destroy = ::this.destroy;
  }

  index(req, res, next) {
    this.Model.find({})
      .then(models => res.send(models))
      .catch(next);
  }

  store(req, res, next) {
    new this.Model(req.body)
      .save()
      .then(() => res.status(201).send('Created successfully'))
      .catch(next);
  }

  show(req, res, next) {
    this.Model.findById(req.params.id)
      .then(model => res.send(model))
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
