const puppeteer = require('puppeteer');

//checks individual jobs
const jobCheck = async (ID) =>{
    const browser = await puppeteer.launch({
        headless: true , 
        defaultViewport: {width: 1920, height: 2000} //for larger screen shots 
        });

    const page = await browser.newPage();
    const errorMessages = []

    //goes to tech.london site
    await page.goto(`https://tech.london/discovery/jobs/${ID}`);
    
    await page.waitFor(1000)

    //get Job title
    const  titleElement = await page.$('.covid-singlepage > h4')

    const jobTitle = await (await titleElement.getProperty('textContent')).jsonValue();


    //gets element of link 
    const linkElement = await page.$("#root > div.m-40.container > div:nth-child(2) > div.padding-right-details.col-lg-9.col-md-8.col-sm-12.col-12 > div:nth-child(2) > div.map-website.padding-single-page.col-lg-10.col-md-12.col-sm-12.col-12 > div:nth-child(2) > div > a") 
    
    const href = await linkElement.getProperty('href')
    //get link for external job website
    const link =  href._remoteObject.value;


    //gets all error messages logged to console
    page.on('console', msg => {
        if (msg._type === 'error') {
            errorMessages.push(msg._text)
        }

    });
    
    // goes to external job website
    await page.goto(link)
    

    //await page.screenshot({path: `SITEid${ID}.png`}) //screen shots for debugging
    
    await page.waitFor(1000)
  

    //Checks which site it is! Could be used for more accurate checking
    //Currently not in use
/*         if(/tech.london/.test(link)){
            console.log("tech.london:")
            console.log(errorMessages)
        }
        else if(/adzuna.co/.test(link)){
            console.log("adzuna.co:")
            console.log(errorMessages)
           // const check = await page.$('div.wrp.page_404')

        }
        else{
            console.log("unhandled URL:", link)
            console.log(errorMessages)
        } */

    await browser.close()

    //checks for HTTP error 
    let HTTPError = false;
    //check error messages for 400s, 500s
    for(errMsg of errorMessages){
        if(/[45][0-9]{2}/.test(errMsg) ){
            HTTPError = true
        }
    }

    const checkObject = {
        url: link,
        
        jobID :ID,
        deadLink:HTTPError,
        jobTitle
        }

    console.log(checkObject)
    
    return(checkObject)
}


module.exports = jobCheck;
