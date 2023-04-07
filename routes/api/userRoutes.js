// /api/users endpoint

const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  getFriends,
  removeFriend, 
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list
router.route('/:userId/friends').get(getFriends).post(addFriend);

router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;

