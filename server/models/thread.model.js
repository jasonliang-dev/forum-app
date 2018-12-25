import { Schema, model, SchemaTypes } from 'mongoose';

const { ObjectId } = SchemaTypes;

const ThreadModel = new Schema({
  title: { type: String, required: true, max: 50 },
  body: { type: String, required: true },
  viewCount: { type: Number, required: true, default: 0 },
  created: { type: Date, required: true, default: Date.now },
  replies: [{ type: ObjectId, ref: 'reply' }],
});

const Thread = model('thread', ThreadModel);

export default Thread;
