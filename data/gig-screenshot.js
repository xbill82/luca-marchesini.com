/**
 * @type Array
 */
const gigs = require("./gigs.json");
const puppeteer = require("puppeteer");
const b = require("./automation");

const doIt = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 120
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1400, height: 900 });

  await page.goto("https://www.google.com/maps/");

  await b.waitForSelector(page, "#searchboxinput");
  await page.type("#searchboxinput", gigs[0].address);

  await b.click(page, "#searchbox-searchbutton");

  await b.wait(page, 2000);

  await b.click(page, ".widget-pane-toggle-button noprint");

  for (let i = 0; i < 6; i++) {
    await b.click(page, "#widget-zoom-out");
  }

  await b.screenshot(page, "./screenshot.png");

  await browser.close();
};

module.exports = doIt();
