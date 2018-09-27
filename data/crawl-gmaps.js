const gigs = require("./gigs.json");
const fs = require("fs");
const puppeteer = require("puppeteer");
const b = require("./automation");
const _ = require("lodash");

const doIt = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 120
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1400, height: 900 });

  const file = fs.createWriteStream("./gigs-url.json");

  file.on("error", function(err) {
    console.error("Something went wrong while writing to file", err);
    process.exit(-1);
  });

  file.write("[\n");

  for (gig of gigs) {
    let mapUrl = null;
    if (!gig.address) {
      console.error(`gig ${gig.id} has no address`);
    } else {
      try {
        await page.goto("https://www.google.com/maps/");

        await b.waitForSelector(page, "#searchboxinput");
        await page.type("#searchboxinput", gig.address);

        await b.click(page, "#searchbox-searchbutton");

        await b.wait(page, 2000);

        mapUrl = page.url();
        if (!fs.existsSync(`../static/maps/${_.kebabCase(gig.address)}.png`)) {
          await b.click(page, ".widget-pane-toggle-button");

          for (let i = 0; i < 4; i++) {
            await b.click(page, "#widget-zoom-out");
          }

          await b.screenshot(
            page,
            `../static/maps/${_.kebabCase(gig.address)}.png`
          );
        } else {
          console.log(`screenshot for gig ${gig.id} already exists`);
        }
      } catch (error) {
        console.error(
          `Something went wrong while crawling gig ${gig.id}`,
          error
        );
      }
    }
    const enrichedGig = Object.assign({ mapUrl }, gig);
    file.write(JSON.stringify(enrichedGig, null, 4) + ",\n");
  }
  file.write("]");
  file.end();
  browser.close();
};

module.exports = doIt();
