const { Schema, model } = require("mongoose");
const teacherSchma = new Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
  },
  { timestamp: true, versionKey: false }
);
module.exports = new model("teacher", teacherSchma);
