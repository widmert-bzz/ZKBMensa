const puppeteer = require("puppeteer");
const express = require('express')

const url = "https://zkb-hard.sv-restaurant.ch/de/menuplan/";

const main = async (urlEnd) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url + urlEnd);
    return await page.evaluate(() => {
        return document.querySelector('#menu-plan-tab1').innerHTML;
    });
};

const app = express()
const port = 3000

app.get('/', async (req, res) => {
    res.send("<h1>Viadukt</h1>" + await main("viadukt") +"<h1>Bistro</h1>" +   await main("bistro"))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



//[...document.querySelectorAll('#menu-plan-tab1')].map(x => x.innerHTML).join();

