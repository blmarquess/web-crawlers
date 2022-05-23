const routes = require("express").Router();

const nnfRouter = require("./nnfreelas");
const workanaRouter = require("./workanaRouter");


routes.use("/nnf", nnfRouter);

routes.use("/wrk", workanaRouter);

module.exports = routes;