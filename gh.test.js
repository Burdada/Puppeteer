let page;
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(() => {
  page.close();
});
describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub",
      { timeout: 60000 }
    );
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content", { timeout: 60000 });
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team", {
      timeout: 60000,
    });
  });
});
describe("Pages has titles", () => {
  test("The page pricing contains title", async () => {
    await page.goto("https://github.com/pricing");
    await page.waitForSelector("h1");
    const title3 = await page.title();
    expect(title3).toEqual("Pricing · Plans for every developer · GitHub");
  });

  test("The page actions contains title", async () => {
    await page.goto("https://github.com/features/actions");
    await page.waitForSelector("h1");
    const title3 = await page.title();
    expect(title3).toEqual("Features • GitHub Actions · GitHub");
  });

  test("The page security contains title", async () => {
    await page.goto("https://github.com/features/security");
    await page.waitForSelector("h1");
    const title3 = await page.title();
    expect(title3).toEqual("Features · Security · GitHub");
  });
});
