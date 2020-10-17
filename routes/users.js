const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Username is required").isEmail(),
    check("ID", "ID is required").not().isEmpty(),
    check("field", "Field is required").not().isEmpty(),
    check("phoneNumber", "Phone Number must be 11 characters").isLength({
      min: 11,
      max: 11,
    }),
    check("password", "Password must be 6 characters or more").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, ID, field, phoneNumber, password } = req.body;

    try {
      let user = await User.findOne({ email , ID});
      let userId = await User.findOne({ ID });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      else{
        if (userId) {
          return res.status(400).json({ msg: "ID taken" });
        }
      }

     

      user = new User({
        name,
        email,
        ID,
        field,
        phoneNumber,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
