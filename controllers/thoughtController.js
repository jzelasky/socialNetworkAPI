// /api/thoughts endpoint 

const { User, Thought } = require('../models');

module.exports = {
    // GET to get all thoughts
    getThoughts(req, res) {
        Thought.find()
            //.populate('reaction')
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    // GET to get a single thought by its _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID'})
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // POST to create a new thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            console.log(thought._id)
            return User.findOneAndUpdate(          //lines 31-35 on their own don't work but don't error
                { username: req.body.username }, //adding lines 36-37 makes the server error and crash
                { $push: { thoughts: thought._id } },
                { runValidators: true, new: true }
            )
            .then((user) => res.json(user))
            // .catch((err) => res.status(500).json(err))
            // res.json(thought)
        })
        .catch((err) => res.status(500).json(err));
    },

    // DELETE to remove a thought by its _id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => {
                if(!thought){
                    res.status(404).json({ message: 'No thought with that ID' })
                }
            })
            .then(() => res.json({ message: 'Thought deleted!'}))
            .catch((err) => res.status(500).json(err));
    },

    // PUT to update a thought by its _id
    updateThought(req, res) {
        Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true } 
        )
        .then((thought) =>
        !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // POST to create a reaction stored in a single thought's reactions array field
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true } 
        )
            .then((reaction) => {
                console.log(reaction);
                !reaction
                    ? res.status(404).json({ message: 'No thought with that ID'})
                    : res.json(reaction)
            }
            )
            .catch((err) => res.status(500).json(err));
    },

    // DELETE to pull and remove a reaction by the reaction's reactionId value
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { runValidators: true, new: true }
            )
            .then((thought) => {
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID'})
                    : res.json(thought)}
            )
            .catch((err) => res.status(500).json(err));
    }
}







