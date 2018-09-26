const gigs = require("./gigs.json");
const gigScreenshot = require("./gig-screenshot");
const fs = require("fs");
const _ = require("lodash");

const doIt = async () => {
  const gigsWithUrl = [];
  for (gig of gigs) {
    if (!gig.address) {
      console.error(`gig ${gig.id} has no address`);
      continue;
    }
    if (fs.existsSync(`../static/maps/${_.kebabCase(gig.address)}.png`)) {
      console.log(`screenshot for gig ${gig.id} already exists`);
      continue;
    }
    let url;
    try {
      url = await gigScreenshot(gig.address);
    } catch (error) {
      continue;
    }
    gigsWithUrl.push(Object.assign({ url }, gig));
  }
  fs.writeSync("./gigs-url.json", Buffer.from(JSON.stringify(gigsWithUrl)));
};

module.exports = doIt();
