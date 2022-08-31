const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cookieParser());
//dotenv node module
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
require("./db/conn");

//server static assets if in production
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}
//we link the router files to make our route easy
app.use(require("./router/auth"));
app.use(require("./router/findjobs"));

app.get("/contact", (req, res) => {
  res.send("<h1>contact route </h1>");
});
app.get("/signin", (req, res) => {
  res.send("<h1>signin route </h1>");
});
app.get("/signup", (req, res) => {
  res.send("<h1>signup route </h1>");
});
//port listen
app.listen(PORT, () => {
  console.log(`running at port no. ${PORT}`);
});
