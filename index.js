require('dotenv').config();
const express = require("express");

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use(require('./src/routes/index.js'));

server.listen(process.env.PORT || 3003, () => {
  console.log(`Server is running on port ${process.env.PORT || 3003}`);
});
