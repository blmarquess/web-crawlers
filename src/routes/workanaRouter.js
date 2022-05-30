const { nnfreelas } = require("../crawlers/nnfreelas");

const nnfRouter = require("express").Router();

nnfRouter.get("/", async (_req, res) => {
  try {
    const ArrJobs = await nnfreelas();
    res.status(200).json(ArrJobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = nnfRouter;