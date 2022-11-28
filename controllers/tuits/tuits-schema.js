import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  replies: Number,
  retuits: Number,
  disliked: Boolean,
  dislikes: Number,
}, { collection: 'tuits' });
export default schema;