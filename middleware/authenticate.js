const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.w2s;
    if (!token) {
      throw new Error("token not Found");
    }
    const verifyToken = await jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
    });

    if (!rootUser) {
      throw new Error("User not Found");
    }
    req.userId = rootUser._id;
    req.token = token;
    req.rootUser = rootUser;

    next();
  } catch (error) {
    res.status(401).json({ error: "You are not Authorized" });
  }
};
module.exports = Authenticate;
