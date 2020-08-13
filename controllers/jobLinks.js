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
    const jobLink = await mongodbFunctions.getJobLink(jobID);
    if(!jobLink){
        response.status(404).json({"error":"job not found"})
    }
    response.status(200).json(jobLink[0]) //duplicate job IDs found!
})

//updates DB, resource intensive operation
jobLinkRouter.post('/updateDB', async (_request,response) =>{
    const jobLinks = await updateDB()
    await mongodbFunctions.updateJobLinks(jobLinks)
    response.status(201)
})





//Working on db Functions

module.exports = jobLinkRouter
 