import Product from "../models/product.model";

const index = (req, res, next) => {
  Product.find({}, (err, products) => {
    if (err) next(err);
    else res.send(products);
  });
};

const store = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price
  });

  product.save(err => {
    if (err) next(err);
    else res.send("Product Created successfully");
  });
};

const show = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) next(err);
    else res.send(product);
  });
};

const update = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
    if (err) next(err);
    else res.send("Product updated.");
  });
};

const destroy = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, err => {
    if (err) next(err);
    else res.send("Deleted successfully!");
  });
};

export default {
  index,
  create() {},
  store,
  show,
  edit() {},
  update,
  destroy
};
