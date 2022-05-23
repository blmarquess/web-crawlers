const { nnfreelas } = require("../crawlers/nnfreelas");

const nnfRouter = require("express").Router();
nnfRouter.get("/", async (_req, res) => {
  try {
    const result = await nnfreelas();
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = nnfRouter;