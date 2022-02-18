const { Schema, model } = require("mongoose");
const adminSchma = new Schema(
  {
    email: { type: "string", unique: true },
    password: { type: "string" },
  },
  { timestamp: true, versionKey: false }
);
module.exports = new model("admin", adminSchma);
