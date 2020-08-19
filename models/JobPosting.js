const mongoose = require('mongoose')

const jobPostingSchema = new mongoose.Schema({
    url:String,
    jobID: String,
    deadLink: Boolean,
    jobTitle: String
  })


const JobPosting = mongoose.model('JobPosting', jobPostingSchema)

module.exports = JobPosting