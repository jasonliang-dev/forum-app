import { isMongoId } from 'validator';

// send 404 if no data
// otherwise, respond
export const sendOr404 = (responseObject, message) => data =>
  data
    ? responseObject.send({ data, message })
    : responseObject.sendStatus(404);

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
      .then(data =>
        res.status(201).send({ data, message: 'Created successfully' }),
      )
      .catch(next);
  }

  show(req, res, next) {
    if (!isMongoId(req.params.id)) res.sendStatus(404);
    else
      this.Model.findById(req.params.id)
        .then(sendOr404(res))
        .catch(next);
  }

  update(req, res, next) {
    if (!isMongoId(req.params.id)) res.sendStatus(404);
    else
      this.Model.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(sendOr404(res, 'Updated successfully'))
        .catch(next);
  }

  destroy(req, res, next) {
    if (!isMongoId(req.params.id)) res.sendStatus(404);
    else
      this.Model.findByIdAndRemove(req.params.id)
        .then(sendOr404(res, 'Deleted successfully'))
        .catch(next);
  }
}
