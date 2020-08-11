const puppeteer = require('puppeteer');

const getJobPostingIds = async () => {
    const browser = await puppeteer.launch({
        headless: true , 
        defaultViewport: {width: 1920, height: 2000} //for larger screen shots 
        });

    const page = await browser.newPage();
    
    await page.goto('https://tech.london/discovery/jobs');

    await page.waitFor(1000)

    await page.click('body > div.fade.modal-global.modal.show > div > div > div.modal-body > div > button') //gets rid of start pop-up

    await page.click('body > div.fade.modal-global.modal.show > div > div > div.modal-header > button > span:nth-child(1)')//gets rid of start bit

    await page.waitFor(1000)
    

    const completeIdList = []
    //loop, currently just does 5
    for (let i = 0; i < 5; i++) {
        await page.waitFor(1000) //waits for 
        const elementsList = await page.$$(".list-startups-main") //gets node list of all jobs on page
    
        const idList = elementsList.map( element =>{
            const descriptionString = element._remoteObject.description;
            const id = descriptionString.slice( descriptionString.indexOf('#')+1, descriptionString.indexOf('.'));
            return id
        }) // maps node list to Id Strings
        
        // IDs can be used to check individual job postings in URL 
    
    completeIdList.push(...idList)
       //await page.screenshot({path: `${i}.png`}); //for screenshots of each individual page
       await page.click('#root > div:nth-child(7) > div > div.list-discovery-space.col-lg-7.col-md-12.col-sm-12.col-12 > div.pagination-margin > div > ul > li.rc-pagination-next > button > img')
        
    }

    
    await browser.close()
    console.log(completeIdList)
    return(completeIdList)
}

//getJobPostingIds()

//checks if the ID given has a job listing associated with it
const jobCheck = async (ID) =>{
    const browser = await puppeteer.launch({
        headless: true , 
        defaultViewport: {width: 1920, height: 2000} //for larger screen shots 
        });

    const page = await browser.newPage();
    //goes to techDotX site
    await page.goto(`https://tech.london/discovery/jobs/${ID}`);
    
    await page.waitFor(1000)
    
    //gets element of link 
    const linkElement = await page.$("#root > div.m-40.container > div:nth-child(2) > div.padding-right-details.col-lg-9.col-md-8.col-sm-12.col-12 > div:nth-child(2) > div.map-website.padding-single-page.col-lg-10.col-md-12.col-sm-12.col-12 > div:nth-child(2) > div > a") 
    
    const href = await linkElement.getProperty('href')
  
    const link =  href._remoteObject.value;
    
    await page.goto(link)

    await page.screenshot({path: `SITEid${ID}.png`})

    //Working from here


    await browser.close()
}



jobCheck('5e282efd582e1a0013101ac2')
jobCheck('5f17f7e2facfc3001c07cb49')

const sampleIds = 
[ '5f2293034d4d02001c5ea033',
  '5f1abb9d4d4d02001c5ea01d',
  '5f17f7e2facfc3001c07cb49',
  '5f169c6cfacfc3001c07cb43',
  '5f05cf92facfc3001c07cb17',
  '5efa35e8facfc3001c07cae4'
];