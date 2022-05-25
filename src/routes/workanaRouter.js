const { nnfreelas } = require("../crawlers/nnfreelas");

const nnfRouter = require("express").Router();

let ArrJobs = [];

nnfRouter.get("/", async (_req, res) => {
  try {
    if (ArrJobs.length) {
      res.status(200).json(ArrJobs);
    } else {
      ArrJobs = await nnfreelas();
      res.status(200).json(ArrJobs);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = nnfRouter;