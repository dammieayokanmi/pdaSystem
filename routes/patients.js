const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Patient = require("../models/Patient");


// @route    GET api/patients
// @desc     Get all patients based on userId
// @access   Private
router.get("/", auth, async(req, res) => {
    try {
      const patients = await Patient.find({ user: req.user.id }).sort({
    dateAdmitted: -1,
      });
      res.json(patients);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error")
    }
  });
  
  
  

// @route    POST api/patients
// @desc     Add new patient
// @access   Private
router.post(
  "/",
  [
    auth,
    [
      check("name"),
      check("wardNumber"),
      check("dateAdmitted"),
      check("address"),
      check("stateOfOrigin"),
      check("drugAllergies"),
      check("foodAllergies"),
      check("phoneNumber"),
      check("occupation"),
      check("dateTaken"),
      check("dob"),
      check("gender"),
      check("maritalStatus"),
      check("moreInfo"),
      check("doctorIncharge"),
      check("nurseIncharge"),
      check("systoic"),
      check("examination"),
      check("temperature"),
      check("heartRate"),
      check("glucose"),
      check("cholesterol"),
      check("periodOfTheDay"),
           check("moreReadings"),
           check("recommendation"),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
    wardNumber,
    dateAdmitted,
    address,
    stateOfOrigin,
    drugAllergies,
    foodAllergies,
    phoneNumber,
    occupation,
    dateTaken,
    dob,
    gender,
    maritalStatus,
    moreInfo,
    doctorIncharge,
    nurseIncharge,
    systoic,
    examination,
    temperature,
    heartRate,
    glucose,
    cholesterol,
    periodOfTheDay,
    moreReadings,
    recommendation
   
    } = req.body;

    try {
      const newPatient = new Patient({
        name,
        wardNumber,
        dateAdmitted,
        address,
        stateOfOrigin,
        drugAllergies,
        foodAllergies,
        phoneNumber,
        occupation,
        dateTaken,
        dob,
        gender,
        maritalStatus,
        moreInfo,
        doctorIncharge,
        nurseIncharge,
        systoic,
        examination,
        temperature,
        heartRate,
        glucose,
        cholesterol,
        periodOfTheDay,
        moreReadings,
        recommendation,
        user: req.user.id,
      });

      const patient = await newPatient.save();

      res.json(patient);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    PUT api/patients/:id
// @desc     Update patient
// @access   Private
router.put("/:id", (req, res) => {
  res.send("Update patient");
});

// @route    POST api/patients/:id
// @desc     Assign patient
// @access   Private
router.post("/:id", (req, res) => {
  res.send("Assign patient");
});

// @route    DELETE api/patients/:id
// @desc     Delete patient
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const patient = await Patient.findById(req.params.id);

		if (!patient) return res.status(404).json({ msg: 'Patient not found' });

		// Make sure user owns patient
		if (patient.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		await Patient.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Patient removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
