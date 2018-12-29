import bcrypt from 'bcrypt';
import isEmail from 'validator/lib/isEmail';
import User from '../models/user.model';
import BaseController from './base.controller';

const UserController = new BaseController(User);

UserController.validate = (req, res, next) => {
  const response = {};

  const validateError = (field, message) => {
    res.status(400);
    response[field] = message;
  };

  if (!req.body.email) validateError('email', 'Missing email');

  if (!isEmail(req.body.email)) validateError('email', 'Invalid email');

  if (req.body.password !== req.body.passwordConfirm)
    validateError('password', 'Passwords do not match');

  const findEmail = User.find({ email: req.body.email })
    .then(users => {
      if (users.length) validateError('email', 'Email already taken');
    })
    .catch(next);

  const findUsername = User.find({ username: req.body.username })
    .then(users => {
      if (users.length) validateError('username', 'Username already taken');
    })
    .catch(next);

  Promise.all([findEmail, findUsername])
    .then(() => {
      res.send(Object.keys(response).length ? response : { success: true });
    })
    .catch(next);
};

UserController.store = (req, res, next) => {
  const hashed = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashed;

  new User(req.body)
    .save()
    .then(data =>
      res
        .status(201)
        .send({ data: { _id: data._id }, message: 'Created successfully' }),
    )
    .catch(next);
};

UserController.authenticate = (req, res, next) => {
  User.findOne({ username: req.body.username })
    .select('+password')
    .then(user => user || res.status(401).send({ message: 'User not found' }))
    .then(user =>
      bcrypt
        .compare(req.body.password, user.password)
        .then(isValid =>
          isValid
            ? res.send({ data: user })
            : res.status(401).send({ message: 'Incorrect password' }),
        ),
    )
    .catch(next);
};

export default UserController;
