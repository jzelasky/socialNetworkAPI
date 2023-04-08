const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionBody: { type: String, required: true, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, //use a getter method to format the timestamp on query
})

const thoughtSchema = new mongoose.Schema(
  {
  thoughtText: { type: String, required: true, maxLength: 280 },
  createdAt: { type: Date }, //set default value to the current timestamp, use a getter emthod to format the timestamp on query
  username: { type: String, required: true},
  reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false, //not sure what this line means
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;