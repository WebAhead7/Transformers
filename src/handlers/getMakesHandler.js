const data = require("../../data/newData.json.json");
const missingHandler = require("./missingHandler");

function getMakesHandler(request, response) {
  let resData = data.map((value) => value.Make);
  response.writeHead(200, { "content-type": "appliation/json" });
  response.end(JSON.stringify(resData));
}
module.exports = getMakesHandler;
