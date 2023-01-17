const express = require("express");
const app = express();
const ejs = require("ejs");

require("dotenv").config();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/:city", async (req, res) => {
  let { city } = req.params;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_APIKEY}`;
  let data = await (await fetch(url)).json();
  console.log(data);
  res.render("weather.ejs", {
    data,
    temp: (data.main.temp - 273.15).toFixed(2),
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
