const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//defining schema for document
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    default: "Not Working",
  },
  Date: {
    type: Date,
    default: Date.now,
  },

  password: {
    type: String,
    required: true,
    // select: false,
  },

  active: {
    type: Boolean,
    default: true,
  },
  feedBack: [
    {
      Date: {
        type: Date,
        default: Date.now,
      },
      message: {
        type: String,
      },
    },
  ],
});
// we are hashing the passward
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
//storing the feedback from user
userSchema.methods.addMessage = async function (message) {
  try {
    this.feedBack = this.feedBack.concat({ message });
    await this.save();
  } catch (error) {
    console.log(error);
  }
};

//create class of user collection
const User = mongoose.model("USER", userSchema);
module.exports = User;
