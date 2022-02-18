const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    gender: { type: String },
    age: { type: String },
    classes: [{ type: Number },]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("teacher", userSchema);
