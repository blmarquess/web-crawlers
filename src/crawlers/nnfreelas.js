const Puppeteer = require("puppeteer");

const url = "https://www.99freelas.com.br/projects?categoria=web-mobile-e-software&page=";

const nnfreelas = async () => {
  const DB_FREELAS = [];
  const browser = await Puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();
  await page.goto(`${url}1`);

  async function getPageDataJobs() {
    const data = await page.evaluate(() => {
      const results = []
      const elements = document.querySelectorAll('.result-item');
      elements.forEach((job) => {
        const title = job.querySelector('.title').innerText;
        const link = job.querySelector('.title > a').href;
        const description = job.querySelector('.description').innerText;

        const skills = Array
          .from(job.querySelectorAll('.habilidade'))
          .map(skill => skill.innerText);

        results.push({
          title,
          link,
          description: description.replace(/\n/g, ' '),
          skills: skills.length ? skills : ['Não especificado'],
          font: '99freelas',
        });

      });
      return results;
    });
    return data;
  }

  DB_FREELAS.push(...await getPageDataJobs());

  await page.goto(`${url}2`);
  DB_FREELAS.push(...await getPageDataJobs());

  await page.goto(`${url}3`);
  DB_FREELAS.push(...await getPageDataJobs());

  await page.goto(`${url}4`);
  DB_FREELAS.push(...await getPageDataJobs());

  await page.goto(`${url}5`);
  DB_FREELAS.push(...await getPageDataJobs());

  await browser.close();
  return DB_FREELAS;
};

module.exports = { nnfreelas };
