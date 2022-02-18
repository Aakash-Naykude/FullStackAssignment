const app = require("./app");
const connect = require("./configs/db");
app.listen(process.env.PORT || 4000, async function () {
  connect();
  console.log("Listening on port 4000");
});
