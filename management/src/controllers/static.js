/**
 * The controllers that power the site itself
 * Created by bshai on 5/21/17.
 */
"use strict";

import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("static route hit");
});

export default router
