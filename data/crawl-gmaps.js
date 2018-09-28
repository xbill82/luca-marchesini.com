const gigs = require("./gigs.json");
// const crawledGigs = require("./crawled-gigs.json");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const b = require("./automation");
const _ = require("lodash");

const redoBadScreenshots = async () => {
  const mapsPath = path.join("..", "static", "maps");
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 120
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1400, height: 900 });

  for (gig of gigs) {
    console.log(`## Crawling gig ${gig.id}`);
    const fileName = _.kebabCase(gig.address) + ".png";
    const filePath = path.join(mapsPath, fileName);

    if (!gig.address) {
      console.error(`gig ${gig.id} has no address`);
    } else if (!fs.existsSync(filePath)) {
      console.log(`gig ${gig.id} was good`);
    } else {
      await page.goto("https://www.google.com/maps/");

      await b.waitForSelector(page, "#searchboxinput");
      await page.type("#searchboxinput", gig.address);

      await b.click(page, "#searchbox-searchbutton");

      await b.wait(page, 2000);

      await b.click(page, ".widget-pane-toggle-button");

      for (let i = 0; i < 4; i++) {
        await b.click(page, "#widget-zoom-out");
      }

      await b.wait(page, 3000);

      await b.screenshot(page, filePath);
    }
  }
};

const doIt = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 120
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1400, height: 900 });

  const file = fs.createWriteStream("./crawled-gigs-buffer.json");

  file.on("error", function(err) {
    console.error("Something went wrong while writing to file", err);
    process.exit(-1);
  });

  file.write("[\n");
  let mapUrl = null;

  for (gig of gigs) {
    console.log(`## Crawling gig ${gig.id}`);
    const crawledGig = crawledGigs.find(crawledGig => crawledGig.id === gig.id);
    if (crawledGig && crawledGig.mapUrl !== null) {
      console.log(`Gig ${gig.id} has already been crawled`);
      mapUrl = crawledGig.mapUrl;
    } else {
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
          if (
            !fs.existsSync(`../static/maps/${_.kebabCase(gig.address)}.png`)
          ) {
            await b.click(page, ".widget-pane-toggle-button");

            for (let i = 0; i < 4; i++) {
              await b.click(page, "#widget-zoom-out");
            }

            await b.wait(2000);
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
    }

    const enrichedGig = Object.assign({ mapUrl }, gig);
    file.write(JSON.stringify(enrichedGig, null, 4) + ",\n");
  }
  file.write("]");
  file.end();
  browser.close();
};

module.exports = redoBadScreenshots();
