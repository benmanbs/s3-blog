/**
 * This is the main entry point to the management app.
 *
 * Created by bshai on 5/21/17.
 */

import express from "express";
import PropertiesReader from "properties-reader";

import apiController from "./controllers/api";
import staticController from "./controllers/static";
import buildController from "./controllers/build";

const app = express();

// parse in properties
let propertiesDir = __dirname.replace("/src", "");
const properties = PropertiesReader(`${propertiesDir}/config.properties`);
console.log(properties.get("some.path"));

// Set up API routes
app.use("/api", apiController);

// Set up static site routes
app.use("/static", staticController);

// Set up build endpoint routes
app.use("/build", buildController);


const server = app.listen(8765, function () {

  const host = server.address().address;
  const port = server.address().port;

  console.log("S3-blog management app listening at http://%s:%s", host, port);

});

module.exports = app;
