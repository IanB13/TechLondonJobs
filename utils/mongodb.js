const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = process.env.MONGODB_URI;


const getJobLinks = async ()=> {
    console.log(uri)
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    await client.connect()
    const cursor = client.db("TCVjob").collection("joblinks").find()
    const jobLinks = await cursor.toArray() 
    await client.close();
    return jobLinks;
}

const updateJobLinks = async (jobLinks) => {
    console.log(uri)
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    await client.connect()
    await client.db("TCVjob").collection("joblinks").deleteMany()
    await client.db("TCVjob").collection("joblinks").insertMany(jobLinks)
    await client.close();
}

module.exports = {
    getJobLinks,
    updateJobLinks
  }

