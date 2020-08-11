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

module.exports = getJobPostingIds;