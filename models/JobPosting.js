const mongoose = require('mongoose')

const jobPostingSchema = new mongoose.Schema({
    url:String,
    jobID: String,
    deadLink: Boolean,
    jobTitle: String
  })

//removes _v and _id from returned documents
jobPostingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const JobPosting = mongoose.model('JobPosting', jobPostingSchema)

module.exports = JobPosting