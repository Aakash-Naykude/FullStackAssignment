const express = require("express");
const router = express.Router();
const Teacher = require("../Models/teacher.model");

router.post("/", async (req, res) => {
  try {
    let Create = await Teacher.create(req.body);
    return res.status(200).send(Create);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.get("/", async (req, res) => {
  try {
    let Create = await Teacher.find().lean().exec();
    return res.status(200).send(Create);
  } catch (err) {
    return res.status(500).send(err);
  }
});
module.exports = router;
