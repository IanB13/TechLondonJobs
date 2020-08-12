const puppeteer = require('puppeteer');

const jobIds = [
    '5f2293034d4d02001c5ea033',
    '5f1abb9d4d4d02001c5ea01d',
    '5f17f7e2facfc3001c07cb49',
    '5f169c6cfacfc3001c07cb43',
    '5f05cf92facfc3001c07cb17',
    '5e282ef1582e1a0013101abe',
    '5e282ef1582e1a0013101abc',
    '5e282ef1582e1a0013101abb',
    '5e282ef1582e1a0013101ab9',
    '5e282ef1582e1a0013101aba',
    '5e282ef1582e1a0013101ab8']

const jobCheck = async (ID) =>{
    const browser = await puppeteer.launch({
        headless: true , 
        defaultViewport: {width: 1920, height: 2000} //for larger screen shots 
        });

    const page = await browser.newPage();
    const errorMessages = []
    page.on('console', msg => {
        if(msg._type === 'error'){
            errorMessages.push(msg._text)
        }
        
      });

    //goes to tech.london site
    await page.goto(`https://tech.london/discovery/jobs/${ID}`);
    
    await page.waitFor(1000)
    
    //gets element of link 
    const linkElement = await page.$("#root > div.m-40.container > div:nth-child(2) > div.padding-right-details.col-lg-9.col-md-8.col-sm-12.col-12 > div:nth-child(2) > div.map-website.padding-single-page.col-lg-10.col-md-12.col-sm-12.col-12 > div:nth-child(2) > div > a") 
    
    const href = await linkElement.getProperty('href')
  
    const link =  href._remoteObject.value;

    await page.goto(link)

    await page.screenshot({path: `SITEid${ID}.png`})
    
    await page.waitFor(1000)
  

    //Checks which site it is!
    //check if job avalible 

        if(/tech.london/.test(link)){
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
        }

    await browser.close()

    //checks for HTTP error 
    let HTTPError = false;
    //check error messages for 400s, 500s
    for(errMsg of errorMessages){
        if(/[45][0-9]{2}/.test(errMsg) ){
            HTTPError = true
        }
    }

    const checkObject = {url: link,
        HTTPError
        }

    console.log(checkObject)
    
    return(checkObject)
}

jobCheck('5e282efd582e1a0013101ac9')

module.exports = jobCheck;
