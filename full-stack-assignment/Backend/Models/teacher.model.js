const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const userSchema = new Schema(
  {
    name: { type: String },
    gender: { type: String },
    age: { type: String },
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("teacher", userSchema);
