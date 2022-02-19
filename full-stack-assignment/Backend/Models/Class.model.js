const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    Grade: { type: String },
    Section: { type: String },
    Subject: [{ type: Number }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("classes", userSchema);
