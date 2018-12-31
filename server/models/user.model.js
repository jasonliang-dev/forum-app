import { Schema, model, SchemaTypes } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const { ObjectId } = SchemaTypes;

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true, trim: true },
  username: { type: String, unique: true, required: true, trim: true, max: 20 },
  password: { type: String, required: true, select: false, min: 8 },
  about: { type: String },
  friends: [{ type: ObjectId, ref: 'user' }],
  joinedDate: { type: Date, required: true, default: Date.now },
  lastLogin: { type: Date },
});

UserSchema.plugin(uniqueValidator);

const User = model('user', UserSchema);

export default User;
