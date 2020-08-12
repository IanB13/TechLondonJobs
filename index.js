const jobCheck = require('./Services/jobCheck')
const getJobPostings = require ('./Services/getJobPostings')

const main = async () => {

    const idArray = await getJobPostings(); //gets array of job posting IDs

    const resultsArray = []

    for (id of idArray) {
        const job = await jobCheck(id)
        resultsArray.push(job)
    }
    console.log('here')
    console.log(resultsArray)
}

main()
