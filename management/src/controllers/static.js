/**
 * The controllers that power the site itself
 * 
 * Created by bshai on 5/21/17.
 */
"use strict";

import express from "express";
const router = express.Router();

let dir = __dirname.replace("/controllers", "");
router.use(express.static(`${dir}/public`));

export default router
