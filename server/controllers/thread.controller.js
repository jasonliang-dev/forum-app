import Thread from '../models/thread.model';
import BaseController from './base.controller';

const ThreadController = new BaseController(Thread);

const { store } = ThreadController;

ThreadController.index = (req, res, next) => {
  Thread.find({})
    .populate('owner', 'username')
    .populate({
      path: 'replies',
      populate: {
        path: 'userId',
        select: 'username',
      },
    })
    .then(models => res.send(models))
    .catch(next);
};

ThreadController.store = (req, res, next) => {
  req.body.owner = req.user._id;
  store(req, res, next);
};

export default ThreadController;
