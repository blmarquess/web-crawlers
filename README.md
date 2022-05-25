# Web Crawl

Servidor NodeJS rodando crawlers feitos com puppeteer para monitorar site de freelancers e retornar os novos jobs publicados.

exemplo de um dos endpoints : <https://web-crawlers-api.herokuapp.com/nnf>

resposta:

```JavaScript
  [
  {
    "title": "Especialista em Power BI e desenvolvimento de relatórios",
    "link": "https://www.99freelas.com.br/project/especialista-em-power-bi-e-desen....",
    "description": "Temos a necessidade de contratar um profissional especialista em Power BI para.....
    "skills": [
      "Desenvolvimento de Relatórios",
      "Excel",
      "Power BI ",
      "Processamento de Dados"
    ],
    "font": "99freelas"
  },
  {..}, {..},{..},
  ]
```

## Tecnologias utilizadas

Hambiente JavaScript: [Node-JS](https://nodejs.org/en/)
CrawlDevTool: [Puppeteer](https://developers.google.com/web/tools/puppeteer)
Framework:[Express](https://expressjs.com/)
Deploy: [Heroku](https://www.heroku.com)
