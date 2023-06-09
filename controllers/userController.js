// /api/users end point

const { User, Thought } = require('../models');


module.exports = {

  // Get all users
  getUsers(req, res) {
    User.find()
      //.populate('thoughts') // not working
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single user
  // add populate associated thought and friend data
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user and associated apps
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  //PUT route to update user by id
  updateUser(req, res) {
    User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true } //not sure what this line does
    )
    .then((user) =>
    !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
  },

  getFriends(req,res){
    User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>{
          !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user.friends)
        })
        .catch((err) => res.status(500).json(err));
  },
  

  //POST to a new friend to user's friend list
  addFriend(req, res){
      User.findByIdAndUpdate(
      {_id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true}
    )
    .then((friend) => {
      !friend
        ? res.status(404).json({ message: 'No user with that ID'})
        : res.json(friend)
    })
    .catch((err) => res.status(500).json(err));
  },

  //DELETE to remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { userId: req.params.friendId } } },
      { runValidators: true, new: true }
      )
      .then((friend) => 
          !friend
              ? res.status(404).json({ message: 'No friend with that user ID'})
              : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  }
};


