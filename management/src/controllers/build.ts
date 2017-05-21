/**
 * The controllers that kick off the build process.
 *
 * Created by bshai on 5/21/17.
 */
"use strict";

import {Request, Response} from "express";

export let sample = function(req: Request, res: Response) {
    res.send("build route hit");
};
