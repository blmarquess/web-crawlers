const Puppeteer = require("puppeteer");

const url = "https://www.workana.com/jobs?category=it-programming&language=pt";

const workana = async () => {
  const DB_FREELAS = [];
  const browser = await Puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();
  await page.goto(url);

  async function getPageDataJobs() {
    const resultData = await page.evaluate(() => {
      const result = [];
      const elements = document.querySelectorAll('.project-item');
      elements.forEach((job) => {
        const title = job.querySelector('.project-title').innerText;
        const link = job.querySelector('.project-title > a').href;
        const description = job.querySelector('.project-details').innerText;

        const skills = Array
          .from(job.querySelectorAll('.skills'))
          .map(skill => skill.innerText);

        result.push({
          title,
          link,
          description: description.replace(/\n/g, ' '),
          skills: skills.length ? skills : ['Não especificado'],
          font: 'workana',
        });

      });
      return result;
    });
    return resultData;
  }

  DB_FREELAS.push(...await getPageDataJobs());

  await page.goto(`${url}&page=2`);
  DB_FREELAS.push(...await getPageDataJobs());

  await page.goto(`${url}&page=3`);
  DB_FREELAS.push(...await getPageDataJobs());

  await page.goto(`${url}&page=4`);
  DB_FREELAS.push(...await getPageDataJobs());

  await page.goto(`${url}&page=5`);
  DB_FREELAS.push(...await getPageDataJobs());

  await browser.close();
  return DB_FREELAS;
};

module.exports = { workana };
