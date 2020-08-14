const jobCheck = require('./jobCheck')
const getJobPostings = require ('./getJobPostings')

const updateDB = async () => {

    const idArray = await getJobPostings(); //gets array of job posting IDs

    const resultsArray = []

    for (id of idArray) {
        const job = await jobCheck(id) //gets job posting info
        resultsArray.push(job)
    }

    console.log(resultsArray)
    return resultsArray;
}

module.exports = updateDB;