import { Schema, model, SchemaTypes } from 'mongoose';

const { ObjectId } = SchemaTypes;

const UserSchema = new Schema({
  username: { type: String, required: true, max: 20 },
  password: { type: String, required: true },
  about: { type: String },
  threads: [{ type: ObjectId, ref: 'thread' }],
  friends: [{ type: ObjectId, ref: 'user' }],
  joinedDate: { type: Date, required: true, default: Date.now },
  lastLogin: { type: Date },
});

const User = model('user', UserSchema);

export default User;
