const express = require("express");
const app = express();
const path = require("path");
const { engine } = require("express-handlebars");

//
const workingHoursMiddleware = (req, res, next) => {
  const now = new Date();
  const dayofWeek = now.getDay();
  const hourodFay = now.getHours();
  if (dayofWeek >= 1 && dayofWeek <= 5 && hourodFay >= 9 && hourodFay < 17) {
    next();
  } else {
    res.send("Sorry, the web APP is only available Monday to Friday  to 17  ");
  }
};
app.use(express.static("public"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(workingHoursMiddleware);

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
