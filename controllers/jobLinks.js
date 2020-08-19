const jobLinkRouter = require(`express`).Router();
const mongodbFunctions = require('../utils/mongodb');
const updateDB = require('../Services/updateDB');

//gets all jobLinks
jobLinkRouter.get('/', async (_request, response) => {
    const jobLinks = await mongodbFunctions.getJobLinks()
    response.status(200).json(jobLinks)
 })

//gets Individual joblink
jobLinkRouter.get('/:jobID', async (request, response) => {
    const jobID = request.params.jobID;
    const jobPosting = await mongodbFunctions.getJobLink(jobID);
    console.log(jobPosting)
    if(jobPosting.length === 0){
        response.status(404).json({"error":"job not found"})
    }
    response.status(200).json(jobPosting[0]) 
})

//updates DB, resource intensive operation
jobLinkRouter.post('/updateDB', async (_request,response) =>{
    const jobLinks = await updateDB()
    await mongodbFunctions.updateJobLinks(jobLinks)
    response.status(201).json({"success":"jobs updated"}) 
})


module.exports = jobLinkRouter
 