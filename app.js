const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const app = express();
const cors = require('cors');
const jobLinkRouter = require('./controllers/jobLinks')

// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors())
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/joblinks',jobLinkRouter)


app.use(express.static('build'))


// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port 4000.");
});
