const puppeteer = require('puppeteer');

const scrapeImages = async () => {
    const browser = await puppeteer.launch( { headless: true });
    const page = await browser.newPage();
    
    await page.goto('https://tech.london/discovery/jobs');


    // Login form
    await page.screenshot({path: '1.png'});


    console.log(data);

}

scrapeImages()