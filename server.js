const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const { engine } = require("express-handlebars");

//

app.use(express.static("public"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
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
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/ourservicers", (req, res) => {
  res.render("ourservicers");
});
app.get("/contactus", (req, res) => {
  res.render("contactus");
});

// post
// put
// delete
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is runing");
});
