// /api/thoughts endpoint 

const { User, Thought } = require('../models');

// add PUT to update a thought by its _id


// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = {
    // GET to get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    // GET to get a single thought by its _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v') //not sure what this does
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID'})
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // POST to create a new thought 
    //add: (don't forget to push the created thought's _id to the associated user's thought array field)
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // DELETE to remove a thought by its _id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => {
                if(!thought){
                    res.status(404).json({ message: 'No thought with that ID' })
                }
            }
            )
            .then(() => res.json({ message: 'Thought deleted!'}))
            .catch((err) => res.status(500).json(err));
    }
}







