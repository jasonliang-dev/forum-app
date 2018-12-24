import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("product", ProductSchema);
