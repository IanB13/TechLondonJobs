const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port || 4000;
const app = express();
const jobLinkRouter = require('./controllers/jobLinks')

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/joblinks',jobLinkRouter)

// simple route
app.get("/", (_request, response) => {
  response.json({"hello":"world"})
});



// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port 4000.");
});
