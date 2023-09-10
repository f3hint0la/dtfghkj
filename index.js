const express = require("express");

const app = express();

app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to HNGi10 BackEnd Stage One Task");
});

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const currentDay = weekDays[date.getDay()];
  const utcTime = date.toISOString().slice(0, -5) + "Z";

  res.status(200).send({
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url:
      "https://github.com/f3hint0la/hng-backend-task1/blob/main/index.js",
    github_repo_url: "https://github.com/f3hint0la/hng-backend-task1",
    status_code: 200,
  });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
