const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port || 4000;
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (_req, res) => {
  res.html("<h1>quick html or cool react </h1>");
});

// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port 4000.");
});
