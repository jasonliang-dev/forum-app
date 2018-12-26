import express from 'express';

const router = express.Router();

router.get('/', req => {
  if (req.session) {
    req.session.destroy();
  }
});
