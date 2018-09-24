const defaultWaitElTimeout = 3000;

const waitForSelector = async (page, selector, timeout) => {
  if (!page) {
    throw new Error("waitForSelector: Please provide a page instance");
  }
  try {
    await page.waitForSelector(selector, {
      timeout: timeout || defaultWaitElTimeout
    });
  } catch (error) {
    throw new Error(
      `Something went wrong waiting for ${selector} to appear. ${error.message}`
    );
  }
};

const click = async (page, selector) => {
  if (!page) {
    throw new Error("click: Please provide a page instance");
  }
  try {
    await waitForSelector(page, selector);
    await page.click(selector);
  } catch (error) {
    throw new Error(
      `Something went wrong clicking ${selector}. ${error.message}`
    );
  }
};

const wait = async (page, timeout) => {
  try {
    await page.waitForFunction(() => false, { timeout });
  } catch (error) {}
};

const selectorIsNotPresent = async (page, selector) => {
  await page.waitForFunction(
    selector => document.querySelector(selector) === null,
    {},
    selector
  );
};

const screenshot = async (page, path) => {
  await page.screenshot({
    path
  });
  try {
    fs.chmodSync(path, 0o777);
  } catch (error) {}
};

module.exports = {
  wait,
  click,
  waitForSelector,
  selectorIsNotPresent,
  screenshot
};
