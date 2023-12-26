const express = require("express");
const app = express();
const path = require("path");
// const { engine } = require("express-handlebars");

// CRUD METHODS:
// get

// call back function / end point
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public" , "home.html"));
});
app.get("/about", (req, res) => {
  res.send("this is about res");
});

// post
// put
// delete
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is runing");
});
