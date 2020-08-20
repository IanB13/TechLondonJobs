const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//TODO: Add Linter
require('express-async-errors') // for removing try catch block
const cors = require('cors');
const jobLinkRouter = require('./controllers/jobLinks')
const middleware = require('./utils/middleware')

//mongoose config
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true  }).then(success =>{
  console.log(`connected at ${uri}`)
}
).catch( error =>{
  console.log(error)
})



app.use(bodyParser.json());
app.use(cors())
app.use('/api/joblinks',jobLinkRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app