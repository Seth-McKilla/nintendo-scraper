import puppeteer from "puppeteer";

(async function () {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto(
    "https://www.nintendo.com/store/products/nintendo-64-controller/"
  );
  await page.screenshot({ path: "n64.png" });

  await browser.close();
})();
