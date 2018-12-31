import express from 'express';
import passport from 'passport';
import userController from '../controllers/user.controller';
import { resource } from './utils';

const router = express.Router();

router.post('/auth', userController.authenticate);
router.post('/validate', userController.validate);
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  },
);

resource(router, '/', userController);

export default router;
