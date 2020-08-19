
const JobPosting = require('../models/JobPosting')

const getJobLinks = async ()=> {
    const jobPostings =  await JobPosting.find({})
    return jobPostings
}

const getJobLink = async (ID) =>{
    const jobPosting =  await JobPosting.find({jobID:ID});
    return jobPosting;

}

const updateJobLinks = async (jobLinks) => {
    console.log("update Job Links")
   // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    await JobPosting.deleteMany()
    await JobPosting.insertMany(jobLinks)
}

module.exports = {
    getJobLink,
    getJobLinks,
    updateJobLinks
  }

