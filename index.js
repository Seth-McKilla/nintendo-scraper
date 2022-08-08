import puppeteer from "puppeteer";

(async function () {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  // Add item to card
  await page.goto("https://www.nintendo.com/store/products/leg-strap-114297/");
  await page.click(
    "#main > section.Herostyles__HeroSection-sc-1gi6jtj-0.kKfMBG > div > div.Herostyles__HeroInfo-sc-1gi6jtj-8.gAHENY > div.Gridstyles-sc-1sq8hhn-0.khqeGV > button"
  );
  await page.screenshot({ path: "checkout.png" });

  await browser.close();
})();
