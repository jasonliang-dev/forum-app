const Model = {};

const index = (req, res, next) => {
  Model.find({}, (err, models) => {
    if (err) next(err);
    else res.send(models);
  });
};

const create = (req, res) => {
  res.render("create");
};

const store = (req, res, next) => {
  const model = new Model({});

  model.save(err => {
    if (err) next(err);
    else res.send("Model Created successfully");
  });
};

const show = (req, res, next) => {
  Model.findById(req.params.id, (err, model) => {
    if (err) next(err);
    else res.send(model);
  });
};

const edit = (req, res) => {
  res.render("edit");
};

const update = (req, res, next) => {
  Model.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
    if (err) next(err);
    else res.send("Model updated.");
  });
};

const destroy = (req, res, next) => {
  Model.findByIdAndRemove(req.params.id, err => {
    if (err) next(err);
    else res.send("Deleted successfully!");
  });
};

export default {
  index,
  create,
  store,
  show,
  edit,
  update,
  destroy
};
