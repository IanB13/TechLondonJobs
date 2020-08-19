const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true , useUnifiedTopology: true});
const JobPosting = require('../models/JobPosting')

mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true  }).then(success =>{
    console.log(`connected`)
  }
  ).catch( err =>{
    console.log(err)
  })
  

const getJobLinks = async ()=> {
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    await client.connect()
    const cursor = client.db("TCVjob").collection("joblinks").find()
    const jobLinks = await cursor.toArray() 
    await client.close();
    return jobLinks;
}

const getJobLink = async (ID) =>{
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    await client.connect()
    console.log("Id is",ID)
    const cursor = client.db("TCVjob").collection("joblinks").find({jobID:ID})
    const jobLink = await cursor.toArray() 
    console.log(jobLink)
    return jobLink;

}

const updateJobLinks = async (jobLinks) => {
    console.log("update Job Links")
   // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    JobPosting.deleteMany()
    JobPosting.insertMany(jobLinks)
}

module.exports = {
    getJobLink,
    getJobLinks,
    updateJobLinks
  }

