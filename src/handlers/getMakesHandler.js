const data = require("../../data/newData.json");
const missingHandler = require("./missingHandler");

function getMakesHandler(request, response) {
  let resData = data.map((value) => {
    return { Make: value.Make, Origin: value.Origin };
  });
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(resData));
}
module.exports = getMakesHandler;
