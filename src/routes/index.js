const routes = require("express").Router();

const nnfRouter = require("./nnfreelas");
const workanaRouter = require("./workanaRouter");

router.get('/', (_req, res) => res.status(210).send('Hello World!'));

routes.use("/nnf", nnfRouter);

routes.use("/wrk", workanaRouter);

module.exports = routes;