const Puppeteer = require("puppeteer");

const url = "https://www.workana.com/jobs?category=it-programming&language=pt";

const workana = async () => {
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const resultData = await page.evaluate(() => {
    const result = [];
    const elements = document.querySelectorAll('.project-item');
    elements.forEach((job) => {
      const title = job.querySelector('.project-title').innerText;
      const link = job.querySelector('.project-title > a').href;
      const description = job.querySelector('.project-details').innerText;
      const skills = job.querySelectorAll('.skills');
      const skillsText = [];
      skills.forEach(skill => {
        skillsText.push(...skill.innerText.split('\n'));
      });
      result.push({ title, link, description, skills: skillsText });
    });
    return result;
  });

  await browser.close();
  return resultData;
};

module.exports = { workana };
