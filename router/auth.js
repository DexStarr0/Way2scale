const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const authenticate = require("../middleware/authenticate");

const User = require("../model/userSchema");

require("../db/conn");

router.get("/", (req, res) => {
  res.send("<h1>home route using router </h1>");
});
router.get("/register", (req, res) => {
  res.send("<h1>home register using router </h1>");
});

// post register
router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill the detail properly" });
  } else if (password !== cpassword) {
    res.status(422).json({ error: "password is not matching" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      res.status(422).json({
        error: "Email already exist . plz try with different email.",
      });
    } else {
      const user = new User({ name, email, phone, password, cpassword });

      const userRegister = await user.save();
      // console.log(userRegister);
      res.status(201).json({ message: "user register succefully" });
    }
  } catch (error) {
    console.log(error);
  }
});

//post signin
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "please fill all field properly" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      //what to do if password is matched or mot
      if (isMatch) {
        //creating token using user id
        let token = await jwt.sign(
          { _id: userLogin._id },
          process.env.SECRET_KEY,
          { expiresIn: 60 * 60 * 30 }
        );
        //saving token to cokies
        res.cookie("w2s", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.status(201).json({ message: "login successful" });
      } else {
        res.status(400).json({ error: "Invalid Credential" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credential" });
    }
  } catch (error) {
    console.log(error);
  }
});

//post signout
router.post("/signout", authenticate, (req, res) => {
  res.clearCookie("w2s", { path: "/" });
  const fullName = req.rootUser.name.trim().split(/\s+/);
  const fname = fullName[0];
  res.status(200).json({
    message: `See You Again..Bye ${fname[0].toUpperCase() + fname.slice(1)}`,
  });
});

//post contact
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(422).json({ error: "plz fill the contact form " });
    }

    req.rootUser.addMessage(message);
    res.status(201).json({ message: "feedBack add successfully" });
  } catch (error) {
    console.log(error);
  }
});
//get getdata
router.get("/getdata", authenticate, async (req, res) => {
  res.json(req.rootUser);
});
//post fetdata
router.post("/fetdata", authenticate, async (req, res) => {
  // res.status(200).json(req.rootUser);
  const { name, email, phone, work, active } = req.rootUser;
  res.status(200).json({ name, email, phone, work, acitve });
});
module.exports = router;
