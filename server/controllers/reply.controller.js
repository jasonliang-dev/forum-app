import { isMongoId } from 'validator';
import Reply from '../models/reply.model';
import Thread from '../models/thread.model';
import BaseController from './base.controller';

const ReplyController = new BaseController(Reply);

ReplyController.store = (req, res, next) => {
  req.body.user = req.user._id;

  const reply = new Reply(req.body);

  if (!isMongoId(req.body.threadId)) res.sendStatus(404);
  else {
    const pushToThread = Thread.findByIdAndUpdate(req.body.threadId, {
      $push: { replies: reply },
    }).then(
      thread =>
        thread || res.status(404).send({ message: 'Cannot find thread' }),
    );

    const storeToCollection = reply.save();

    Promise.all([pushToThread, storeToCollection])
      .then(data => res.send({ data, message: 'created reply' }))
      .catch(next);
  }
};

export default ReplyController;
