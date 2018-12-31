import express from 'express';
import passport from 'passport';
import threadController from '../controllers/thread.controller';
import { resource } from './utils';

const router = express.Router();

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  threadController.store,
);

resource(router, '/', threadController);

export default router;
