const puppeteer = require('puppeteer');

const jobCheck = async (ID) =>{
    const browser = await puppeteer.launch({
        headless: true , 
        defaultViewport: {width: 1920, height: 2000} //for larger screen shots 
        });

    const page = await browser.newPage();
    //goes to tech.london site
    await page.goto(`https://tech.london/discovery/jobs/${ID}`);
    
    await page.waitFor(1000)
    
    //gets element of link 
    const linkElement = await page.$("#root > div.m-40.container > div:nth-child(2) > div.padding-right-details.col-lg-9.col-md-8.col-sm-12.col-12 > div:nth-child(2) > div.map-website.padding-single-page.col-lg-10.col-md-12.col-sm-12.col-12 > div:nth-child(2) > div > a") 
    
    const href = await linkElement.getProperty('href')
  
    const link =  href._remoteObject.value;
    
    await page.goto(link)

    await page.screenshot({path: `SITEid${ID}.png`})

    //Working from here
    //Checks which site it is!
        //check if job avalible 
        if(/tech.london/.test(link)){
            console.log("tech.london:")
            console.log(link)
        }
        else if(/adzuna.co/.test(link)){
            console.log("adzuna.co")
            console.log(link)

        }
        else{
            console.log("unhandled URL", link)
        }

    await browser.close()
}

module.exports = jobCheck;