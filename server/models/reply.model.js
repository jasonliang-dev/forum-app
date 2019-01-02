import { Schema, model, SchemaTypes } from 'mongoose';

const { ObjectId } = SchemaTypes;

const ReplyModel = new Schema({
  body: { type: String, required: true },
  user: { type: ObjectId, ref: 'user', required: true },
  created: { type: Date, required: true, default: Date.now },
});

const Reply = model('reply', ReplyModel);

export default Reply;
