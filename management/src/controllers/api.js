/**
 * All endpoints around the datastore and retrieving/changing data.
 *
 * Created by bshai on 5/21/17.
 */
"use strict";

import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("api route hit");
});

export default router
