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
    const page = +req.query.page || 1;
    const size = +req.query.size || 5;
    const skippage = (page - 1) * size;
    let Create = await Teacher.find().skip(skippage).limit(size);
    return res.status(200).send(Create);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let Create = await Teacher.findById(req.params.id);
    return res.status(200).send(Create);
  } catch (err) {
    return res.status(500).send(err);
  }
});
module.exports = router;
