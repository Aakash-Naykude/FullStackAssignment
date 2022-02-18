const express = require("express");
const router = express.Router();
const Admin = require("../Models/Admin.model");

router.post("/", async (req, res) => {
  try {
    let Create = await Admin.create(req.body);
    return res.status(200).send(Create);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.get("/", async (req, res) => {
  try {
    let Create = await Admin.find().lean().exec();
    return res.status(200).send(Create);
  } catch (err) {
    return res.status(500).send(err);
  }
});
module.exports = router;
