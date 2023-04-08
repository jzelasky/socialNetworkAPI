const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
  username: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: /.+\@.+\..+/, //email validation
  },
  //thoughts: {type: ObjectId, ref: 'Thought'}, // not working
  friends: [this],
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

const User = mongoose.model('User', userSchema);

module.exports = User;