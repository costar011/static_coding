const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");

app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get("/main1", (req, res) => {
  res.render("main1");
});

app.get("/main2", (req, res) => {
  res.render("main2");
});

app.get("/main3", (req, res) => {
  res.render("main3");
});

app.listen(3000, () => {
  console.log("3000 SERVER START!");
});
