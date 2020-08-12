const jobLinkRouter = require(`express`).Router()
const mongodbFunctions = require('../utils/mongodb')

//gets all jobLinks
jobLinkRouter.get('/', async (_request, response) => {
    const jobLinks = await mongodbFunctions.getJobLinks()
    response.status(200).json(jobLinks)
 })

//gets Individual joblink
jobLinkRouter.get('/:jobID', async (request, response) => {
    const jobID = request.params.jobID;

    response.status(200).json({"job id is":jobID})
})

//updates DB, very reasource intensive operation
jobLinkRouter.post('/updateDB')

//Working on db Functions

module.exports = jobLinkRouter
 