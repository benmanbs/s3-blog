/**
 * All endpoints around the datastore and retrieving/changing data.
 *
 * Created by bshai on 5/21/17.
 */
"use strict";

import {Request, Response} from "express";

export let sample = function(req: Request, res: Response) {
    res.send("API route hit");
};
