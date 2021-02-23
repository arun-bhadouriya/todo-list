const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
app.get("/", (req, res) => {
  let date = new Date();
  let currentDay = date.getDay();
  let day = "";
  let mood = "";
  if (currentDay == 6 || currentDay == 0) {
    day = "WeekEnd";
    mood = "Yayy!";
  } else {
    day = "WeekDay";
    mood = "Uff!";
  }
  let today = days[currentDay];
  res.render("homepage", { kindOfDay: day, mood, todoArray, today });
});
const todoArray = [];
app.post("/", (req, res) => {
  const todo = req.body.todo;

  if (todo.trim() != "") {
    todoArray.push(todo);
  }
  let date = new Date();
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Running at http://localhost:3000")
);
