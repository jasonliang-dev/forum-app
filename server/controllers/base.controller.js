import { isMongoId } from 'validator';

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
    const { id } = req.params;

    if (!isMongoId(id)) res.sendStatus(404);
    else
      this.Model.findById(id)
        .then(model => (model ? res.send(model) : res.sendStatus(404)))
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
