const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://fullstackassignmnet:fulll@cluster0.vi4bm.mongodb.net/FullStackAssignment?retryWrites=true&w=majority"
  );
};
