const express = require("express");
(cors = require("cors")), (secure = require("ssl-express-www"));
const PORT = process.env.PORT || 3050 || 1020 || 4050;

var apirouter = require("./public/swg");

var app = express();
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__path + "/app/page.js");
});
app.get("/image", (req, res) => {
  res.sendFile(__path + "/image.html");
});

app.use("/docs", apirouter);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT,);
});

module.exports = app;
