const homeHandler = require("./handlers/homeHandler");
const resourcesHandler = require("./handlers/resourcesHandler");
const getCarHandler = require("./handlers/getCarHandler").getCarHandler;
const missingHandler = require("./handlers/missingHandler");
const getMakesHandler = require("./handlers/getMakesHandler");
const getModelsHandler = require("./handlers/getModelsHandler");
const getCarByHandler = require("./handlers/getCarByHandler");

function router(request, response) {
  const url = request.url;
  //if its the home page
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.startsWith("/public")) {
    /*this will handle the request of HTML page or CSS Page
   when the home page is loaded(they are in the public
  folder so the url will be /public/.......).
  So this if statement body will run at some level because
  these pages will be requested after the home page is loaded
  as mentioned*/
    resourcesHandler(request, response);
  } else if (url.startsWith("/getcar/")) {
    /*The getcar word is just a word for us to know that
  this url sent with dynamic data*/
    getCarHandler(request, response);
  } else if (url == "/getMakes") {
    getMakesHandler(request, response);
  } else if (url.startsWith("/getModels?")) {
    getModelsHandler(request, response);
  } else if (url.startsWith("/getCarBy?")) {
    getCarByHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
