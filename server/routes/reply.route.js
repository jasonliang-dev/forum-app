import express from 'express';
import passport from 'passport';
import replyController from '../controllers/reply.controller';
import { resource } from './utils';

const router = express.Router();

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  replyController.store,
);

resource(router, '/', replyController);

export default router;
