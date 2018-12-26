import bcrypt from 'bcrypt';
import isEmail from 'validator/lib/isEmail';
import User from '../models/user.model';
import BaseController from './base.controller';

const UserController = new BaseController(User);

UserController.store = (req, res, next) => {
  if (!isEmail(req.body.email)) {
    res.status(400).send({ message: 'Invalid email' });
    return;
  }

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
