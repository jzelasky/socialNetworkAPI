const mongoose = require('mongoose');

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

const userSchema = new mongoose.Schema({

  username: { type: String, required: true }, //add unique and trimmed
  email: { type: String, required: true }, //add unique and email validation
  thoughts: { type: Array, required: false}, // add referenece to Thought model
  friends: { type: Array, required: false}, // add self reference to User model

});


const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

module.exports = User;