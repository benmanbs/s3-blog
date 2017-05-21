/**
 * This is the main entry point to the management app.
 *
 * Created by bshai on 5/21/17.
 */

import * as express from "express";
import {Server} from "http";
import {Express} from "express";

import * as apiController from "./controllers/api";
import * as staticController from "./controllers/static";
import * as buildController from "./controllers/build";

const app: Express = express();

// Set up API routes
app.get("/api", apiController.sample);

// Set up static site routes
app.get("/static", staticController.sample);

// Set up build endpoint routes
app.get("/build", buildController.sample);


const server: Server = app.listen(8765, function () {

    const host: string = server.address().address;
    const port: number = server.address().port;

    console.log("S3-blog management app listening at http://%s:%s", host, port);

});

module.exports = app;
