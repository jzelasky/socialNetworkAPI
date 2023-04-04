const mongoose = require('mongoose');

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array fireld on query
//Add reaction schema (see readme for details), to be used as the reaction field's subdocument schema in the Thought model

const thoughtSchema = new mongoose.Schema({

  thoughtText: { type: String, required: true }, //add must be between 1 and 280 characters
  createdAt: { type: Date }, //set default value to the current timestamp, use a getter emthod to format the timestamp on query
  username: { type: String, required: true}, // the user that created the though, what needs to be referenced?
  reactions: {} //array of nested documents crated with the reactionSchema
  
});


const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = Thought;