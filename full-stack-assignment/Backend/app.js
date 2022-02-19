const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const AdminController = require("./Controllers/Admin.controller");
app.use("/admin", AdminController);
const TeacherController = require("./Controllers/teache.controller");
app.use("/teacher", TeacherController);
const ClassesController = require("./Controllers/class.controller");
app.use("/classes", ClassesController);

module.exports = app;
