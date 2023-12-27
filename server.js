const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
// const { engine } = require("express-handlebars");

// 

// app.use(express.static("public"));
// let token = false;
// const Actif = (req, res, next) => {
//   let on = false;
//   if (on) {
//     next();
//   } else {
//     res.redirect("/home");
//   }
// };
// const verifyToken = (req, res, next) => {
//     if (token) {
//       next();
//     } else {
//       res.redirect("/home");
//     }
//   };
// get
// call back function / end point
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "home.html"));
});
app.get("/ourservicers", (req, res) => {
  res.sendFile(path.resolve("public", "services.html"));
});
app.get("/contactus", (req, res) => {
  res.sendFile(path.resolve("public", "contact.html"));
});

// post
// put
// delete
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is runing");
});
