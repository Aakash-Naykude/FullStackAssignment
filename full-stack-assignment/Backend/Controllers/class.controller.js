const express = require("express");
const router = express.Router();
const Classes = require("../Models/Class.model");

router.post("/", async (req, res) => {
  try {
    let Create = await Classes.create(req.body);
    return res.status(200).send(Create);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.get("/", async (req, res) => {
  try {
    let Create = await Classes.find().lean().exec();
    return res.status(200).send(Create);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    let Create = await Classes.findById(req.params.id).lean().exec();
    return res.status(200).send(Create);
  } catch (err) {
    return res.status(500).send(err);
  }
});
module.exports = router;
