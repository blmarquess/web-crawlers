const Puppeteer = require("puppeteer");

const url = "https://www.99freelas.com.br/projects?categoria=web-mobile-e-software&page=1";
const font = '99freelas';

const nnfreelas = async () => {
  const browser = await Puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();
  await page.goto(url);
  const resultData = await page.evaluate(() => {
    const result = [];
    const elements = document.querySelectorAll('.result-item');
    elements.forEach((job) => {
      const title = job.querySelector('.title').innerText;
      const link = job.querySelector('.title > a').href;
      const description = job.querySelector('.description').innerText;
      const skills = job.querySelectorAll('.habilidade');
      const skillsText = [];
      skills.forEach(skill => {
        skillsText.push(skill.innerText);
      });
      result.push({
        title,
        link,
        description: description.replace(/\n/g, ' '),
        skills: skillsText.length ? skillsText : ['Não especificado'],
        font,
      });
    });
    return result;
  });

  await browser.close();
  return resultData;
};

module.exports = { nnfreelas };
