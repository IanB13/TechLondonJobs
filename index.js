const puppeteer = require('puppeteer');

const getJobPostingIds = async () => {
    const browser = await puppeteer.launch({
        headless: true , 
        defaultViewport: {width: 1920, height: 1080} //for larger screen shots 
        });
    

    const page = await browser.newPage();
    
    await page.goto('https://tech.london/discovery/jobs');

    await page.waitFor(1000)

    await page.click('body > div.fade.modal-global.modal.show > div > div > div.modal-body > div > button') //gets rid of start pop-up

    await page.click('body > div.fade.modal-global.modal.show > div > div > div.modal-header > button > span:nth-child(1)')//gets rid of start bit


    await page.waitFor(1000)
    
    const elementsList = await page.$$(".list-startups-main") //gets node list of all jobs on page
    
    const idList = elementsList.map( element =>{
        const descriptionString = element._remoteObject.description;
        const id = descriptionString.slice( descriptionString.indexOf('#')+1, descriptionString.indexOf('.'));
        return id
    }) // maps node list to Id Strings
    // IDs can be used to check individual job postings in URL 

    console.log(idList)

    await page.screenshot({path: 'c.png'});
    
    


    await browser.close()
    console.log("Finished!")

}

getJobPostingIds()