require('dotenv').config();

const puppeteer = require('puppeteer');

const league = 'England';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.onlinesoccermanager.com');

  await page.waitForSelector('.privacynotice-container', { visible: true });
  await page.click('.btn-new.btn-orange');

  await page.waitForSelector('.register-information-container', {
    visible: true,
  });
  await page.click('.btn-alternative');

  await page.waitForSelector('.tab.front', { visible: true });
  await page.type('#manager-name', process.env.OSM_USERNAME, {
    delay: 100,
  });
  await page.type('#password', process.env.OSM_PASSWORD, { delay: 100 });
  await page.click('#login');

  await page.waitForSelector('div#suggested', { visible: true });
  await page.click('#search-btn');

  await page.type('#chooseLeagueSearchInput', league, { delay: 100 });

  await page.waitForSelector('#leaguetype-results > ul', { visible: true });
  await page.click('#leaguetype-results > ul > li:nth-child(1) > div > span');

  await page.waitForSelector('div#selected-league-header', { visible: true });

  const availableTeams = await page.evaluate(() => {
    const teamNodes = document.querySelectorAll('.choose-team-block');
    let teamsArr = [];
    teamNodes.forEach((team) => {
      let obj = {};
      obj.team = team.querySelector('.choose-team-title').innerText;
      obj.isAvailable = team.querySelector('.choose-team-overlay-content')
        ? false
        : true;
      teamsArr.push(obj);
    });
    return teamsArr;
  });

  console.log(availableTeams);

  await page.click('div#profile');

  const [a] = await page.$x("//a[contains(., 'Log out')]");
  if (a) {
    await a.click();
  }

  await browser.close();
})();
