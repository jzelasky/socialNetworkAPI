const mongoose = require('mongoose');
const Thought = require('./Thought');

const userSchema = new mongoose.Schema(
  {
  username: { type: String, required: true }, //add unique and trimmed
  email: { type: String, required: true }, //add unique and email validation
  thoughts: [], // add referenece to Thought model
  friends: { type: Array, required: false}, // add self reference to User model
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false, //not sure what this line means
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})


const User = mongoose.model('User', userSchema);

//const handleError = (err) => console.error(err);

module.exports = User;