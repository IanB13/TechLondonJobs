const jobCheck = require('./Services/jobCheck')
const getJobPostings = require ('./Services/getJobPostings')

const main = async ()=>{
    
  const idArray =  await getJobPostings(); //gets array of job posting IDs

  for(id of idArray){
      await jobCheck(id)
  }


}
main()
