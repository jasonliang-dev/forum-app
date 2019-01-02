import { isMongoId } from 'validator';
import Thread from '../models/thread.model';
import BaseController from './base.controller';

const ThreadController = new BaseController(Thread);

const { store } = ThreadController;

ThreadController.index = (req, res, next) => {
  Thread.find({})
    .populate('owner', 'username')
    .then(threads => res.send(threads))
    .catch(next);
};

ThreadController.store = (req, res, next) => {
  req.body.owner = req.user._id;
  store(req, res, next);
};

ThreadController.show = (req, res, next) => {
  if (!isMongoId(req.params.id)) res.sendStatus(404);
  else
    Thread.findById(req.params.id)
      .populate('owner', 'username')
      .populate({
        path: 'replies',
        populate: {
          path: 'user',
          select: 'username',
        },
      })
      .then(thread =>
        thread
          ? res.send({ data: thread })
          : res.status(404).send({ message: 'Cannot find record' }),
      )
      .catch(next);
};

export default ThreadController;
