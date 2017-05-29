/**
 * The controllers that kick off the build process.
 *
 * Created by bshai on 5/21/17.
 */
"use strict";

import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("build route hit");
});

export default router
