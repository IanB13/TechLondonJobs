const jobCheck = require('./Services/jobCheck')
const getJobPostings = require ('./Services/getJobPostings')

const main = async ()=>{
    
   await  getJobPostings()
    await jobCheck("5f2293034d4d02001c5ea033")


}
main()
