import Thread from '../models/thread.model';
import BaseController from './base.controller';

const ThreadController = new BaseController(Thread);

ThreadController.index = (req, res, next) => {
  Thread.find({})
    .populate('owner', 'username')
    .then(models => res.send(models))
    .catch(next);
};

export default ThreadController;
