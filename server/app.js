/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import * as productController from './controllers/product.controller';
import indexRoute from './routes/index.route';
import { resource } from './routes/utils';

const dbURL =
  process.env.MONGODB_URI ||
  'mongodb://root:password1@ds243254.mlab.com:43254/forum';

mongoose.connect(
  dbURL,
  { useNewUrlParser: true },
);
mongoose.Promise = Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
resource(app, '/products', productController);

// 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  next(err);
});

module.exports = app;
