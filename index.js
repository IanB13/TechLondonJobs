const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const app = express();
const cors = require('cors');
const jobLinkRouter = require('./controllers/jobLinks')
//TODO: Add Linter
require('express-async-errors') // for removing try catch block
const middleware = require('./utils/middleware')

require('dotenv').config();
const uri = process.env.MONGODB_URI;
const mongoose = require('mongoose');
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true  }).then(success =>{
  console.log(`connected at ${uri}`)
}
).catch( error =>{
  console.log(error)
})

// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors())
app.use('/api/joblinks',jobLinkRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.use(express.static('build'))
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
