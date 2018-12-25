import Product from '../models/product.model';

export const index = (req, res, next) => {
  Product.find({})
    .then(products => res.send(products))
    .catch(next);
};

export const store = (req, res, next) => {
  new Product({
    name: req.body.name,
    price: req.body.price,
  })
    .save()
    .then(() => res.send('Product Created successfully'))
    .catch(next);
};

export const show = (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.send(product))
    .catch(next);
};

export const update = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.send('product updated.'))
    .catch(next);
};

export const destroy = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id)
    .then(() => res.send('Deleted successfully'))
    .catch(next);
};
