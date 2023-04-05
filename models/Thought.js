const mongoose = require('mongoose');

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array fireld on query

const reactionSchema = new mongoose.Schema({

  reactionId: { }, //use mongoose's ObjectId data type, default value is set to a new ObejctId
  reactionBody: { type: String, required: true }, //add 280 character max
  username: { type: String, required: true}, //user that created the reaction, what needs to be referenced where?
  createdAt: { type: Date }, //set default value to the current timestamp, use a getter emthod to format the timestamp on query
})

const thoughtSchema = new mongoose.Schema(
  {
  thoughtText: { type: String, required: true }, //add 280 character max
  createdAt: { type: Date }, //set default value to the current timestamp, use a getter emthod to format the timestamp on query
  username: { type: String, required: true}, // the user that created the thought, what needs to be referenced where?
  reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false, //not sure what this line means
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})


const Thought = mongoose.model('Thought', thoughtSchema);

//const handleError = (err) => console.error(err);

module.exports = Thought;