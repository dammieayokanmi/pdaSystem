const express = require('express');
const router = express.Router();


// @route    GET api/patients
// @desc     Get all patients
// @access   Private
router.get('/', (req, res) => {
    res.send('Get all patients')
});


// @route    POST api/patients
// @desc     Add new patient
// @access   Private
router.post('/', (req, res) => {
    res.send('Add patient')
});

// @route    PUT api/patients/:id
// @desc     Update patient
// @access   Private
router.put('/:id', (req, res) => {
    res.send('Update patient')
});

// @route    DELETE api/patients/:id
// @desc     Delete patient
// @access   Private
router.delete('/:id', (req, res) => {
    res.send('Delete patient')
});

module.exports = router;