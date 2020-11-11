const url = require("url");
const data = require("../../data/newData.json");

function getCarByHandler(request, response) {
  if (request.url.startsWith("/getCarBy?opt=")) {
    const query = url.parse(request.url, true).query;
    const { opt, key } = query;
    if (opt && key) {
      const resData = data.filter((carObj) => carObj[opt] === query.key);
      response.writeHead(200, "application/json");
      response.end(JSON.stringify(resData));
    } else {
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>query [key] parameter missing</h1>");
    }
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>query [opt] parameter missing</h1>");
  }
}

module.exports = getCarByHandler;
