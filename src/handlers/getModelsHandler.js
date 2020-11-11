const url = require("url");
const data = require("../../data/newData.json");

function getModelsHandler(request, response) {
  if (request.url.startsWith("/getModels?make=")) {
    const query = url.parse(request.url, true).query;
    const resData = data
      .filter((carObj) => carObj.Make === query.make)
      .map((carObj) => carObj.Model);
    response.writeHead(200, "application/json");
    response.end(JSON.stringify(resData));
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>query make parameter missing</h1>");
  }
}

module.exports = getModelsHandler;
