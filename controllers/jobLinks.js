const jobLinkRouter = require(`express`).Router();
const updateDB = require('../Services/updateDB');
const JobPosting = require('../models/JobPosting')

//gets all jobPostings
jobLinkRouter.get('/', async (_request, response) => {
    const jobPostings =  await JobPosting.find({})
    response.status(200).json(jobPostings)
 })

//gets an individual jobPosting
jobLinkRouter.get('/:jobID', async (request, response) => {
    const jobID = request.params.jobID;
    const jobPosting =  await JobPosting.findOne({jobID});
    if(!jobPosting){
        response.status(404).json({"error":"job not found"})
    }
    else{
        response.status(200).json(jobPosting) 
    }
    
})

//updates DB, resource intensive operation
jobLinkRouter.post('/updateDB', async (_request,response) =>{
    const jobPostings = await updateDB() //takes too long, times out
    await JobPosting.deleteMany()
    await JobPosting.insertMany(jobPostings)
    response.status(201).json({"success":"jobs updated"}) 
})


module.exports = jobLinkRouter
 