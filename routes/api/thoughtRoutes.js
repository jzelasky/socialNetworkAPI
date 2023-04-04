// /api/thoughts endpoint 

const router = require('express').Router();
const {
    getThoughts, // /
    getSingleThought, // /:thoughtId
    createThought, // /
    deleteThought, // /:thoughtId
} = require('../../controllers/thoughtController');
//add rest of routes from thoughtController


// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:thoughtId/reactions')

module.exports = router;