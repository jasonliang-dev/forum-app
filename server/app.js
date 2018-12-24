/* eslint-disable no-console */

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";

const dbURL =
  process.env.MONGODB_URI ||
  "mongodb://root:password1@ds243254.mlab.com:43254/forum";

mongoose.connect(
  dbURL,
  { useNewUrlParser: true }
);
mongoose.Promise = Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index.routes"));
app.use("/products", require("./routes/product.routes"));

module.exports = app;
