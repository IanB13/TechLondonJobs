const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = process.env.MONGODB_URI;


const getJobLinks = async ()=> {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
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
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    await client.connect()
    await client.db("TCVjob").collection("joblinks").deleteMany()
    await client.db("TCVjob").collection("joblinks").insertMany(jobLinks)
    await client.close();
}

module.exports = {
    getJobLink,
    getJobLinks,
    updateJobLinks
  }

