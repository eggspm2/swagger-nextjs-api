const express = require("express");
(cors = require("cors")), (secure = require("ssl-express-www"));
const PORT = process.env.PORT || 3050 || 1020 || 4050;
var { color } = require("./lib/color.js");

var apirouter = require("./routes/api");

var app = express();
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__path + "/api/home.html");
});
app.get("/docs", (req, res) => {
  res.sendFile(__path + "/views/index.html");
});
app.get("/donasi", (req, res) => {
  res.sendFile(__path + "/views/donasi.html");
});

app.use("/docs", apirouter);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT,);
});

module.exports = app;
