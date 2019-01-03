import express from 'express';
import passport from 'passport';
import threadController from '../controllers/thread.controller';
import { resource } from './utils';

const router = express.Router();

router.post(
  '/',
  passport.authenticate('user', { session: false }),
  threadController.store,
);

router.delete(
  '/:id',
  passport.authenticate('user', { session: false }),
  threadController.destroy,
);

resource(router, '/', threadController);

export default router;
