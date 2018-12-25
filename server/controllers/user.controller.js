import bcrypt from 'bcrypt';
import User from '../models/user.model';
import BaseController from './base.controller';

const UserController = new BaseController(User);

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

export default UserController;
