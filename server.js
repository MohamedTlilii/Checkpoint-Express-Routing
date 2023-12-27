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
app.get("/ourservicers", (req, res) => {
  res.sendFile(path.resolve("public" , "contact.html"));
});
app.get("/contactus", (req, res) => {
  res.sendFile(path.resolve("public" , "services.html"));
});

// post
// put
// delete
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is runing");
});
