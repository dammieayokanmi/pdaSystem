const express = require('express');
const router = express.Router();


// @route    GET api/comments
// @desc     Get all comments
// @access   Private
router.get('/', (req, res) => {
    res.send('Get all comments')
});


// @route    POST api/comments
// @desc     Add new comment
// @access   Private
router.post('/', (req, res) => {
    res.send('Add comment')
});

// @route    PUT api/comments/:id
// @desc     Update comment
// @access   Private
router.put('/:id', (req, res) => {
    res.send('Update comment')
});

// @route    DELETE api/comments/:id
// @desc     Delete comment
// @access   Private
router.delete('/:id', (req, res) => {
    res.send('Delete comment')
});

module.exports = router;