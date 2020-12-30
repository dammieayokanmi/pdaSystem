const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Patient = require("../models/Patient");


// @route    GET api/patients
// @desc     Get all entire patients
// @access   Private
router.get("/", auth, async(req, res) => {
    try {
      const patients = await Patient.find({ }).sort({
        date: -1,
      });
      res.json(patients);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error")
    }
  });
  
  
  
  // @route    GET api/patients/userId
  // @desc     Get all patients based on userId
  // @access   Private
  // router.get("/userId", auth, async (req, res) => {
  //   try {
  //     const patients = await Patient.find({ user: req.user.id }).sort({
  //       date: -1,
  //     });
  //     res.json(patients);
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send("Server Error");
  //   }
  // });
  



// @route    POST api/patients
// @desc     Add new patient
// @access   Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("wardNumber", "Ward Number is required").not().isEmpty(),
      check("dateAdmitted", "Date Admitted is required").not().isEmpty(),
      check("address", "Address is required").not().isEmpty(),
      check("stateOfOrigin", "state Of Origin is required").not().isEmpty(),
      check("drugAllergies", "Drug Allergies is required").not().isEmpty(),
      check("foodAllergies", "Food Allergies is required").not().isEmpty(),
      check("phoneNumber", "Phone Number must be 11 characters").isLength({
        min: 11,
        max: 11,
      }),
      check("occupation", "Occupation is required").not().isEmpty(),
      check("dateTaken", "Date Taken is required").not().isEmpty(),
      check("dob", "Date of Birth is required").not().isEmpty(),
      check("gender", "Gender is required").not().isEmpty(),
      check("maritalStatus", "Marital Status is required").not().isEmpty(),
      check("doctorIncharge", "Doctor Incharge is required").not().isEmpty(),
      check("nurseIncharge", "Nurse Incharge is required").not().isEmpty(),
     
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
    doctorIncharge,
    nurseIncharge
   
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
        doctorIncharge,
        nurseIncharge,
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
router.delete("/:id", (req, res) => {
  res.send("Delete patient");
});

module.exports = router;
