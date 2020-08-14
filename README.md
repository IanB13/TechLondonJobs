# TechLondonJobs
An automated workflow to find dead jobs links on the Tech.London website,
The joblinks are checked by going to the external job website, then checking if the console has any
error is the 400-599 range
Deployed on heroku here: http://techlondonjobs.herokuapp.com/

## frontend
front end code can be viewed here: https://github.com/IanB13/TechLondonJobs-frontend

## routes
### /api/jobs
Gets all jobs, formated in\
{\
    url: external job website URL\
    jobID: Tech.london job ID, can find job on tech london website with `https://tech.london/discovery/jobs/${ID}`\
    deadLink:  True if HTTP error(400-5999) on external job website console\
    jobTitle: Title of Job from Tech.london\
}

### /api/jobs/:jobID
Gets individual job by jobID

### /api/jobs/updateDB
Refreshes database, is a very reasource intensive operation so it is not linked to the fronted 


## Tech
This web App was built using puppeteer, express and mongoDB
