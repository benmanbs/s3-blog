/**
 * All endpoints around the datastore and retrieving/changing data.
 *
 * Created by bshai on 5/21/17.
 */
"use strict";

import express from "express";
import posts from "../database/posts";

const router = express.Router();

// Get all posts
router.get("/posts", function (req, res) {
  posts.getAll()
    .then((data) => {
      res.send(data);
    });
});

// Create post
router.put("/posts", function(req, res) {
  posts.create(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

// Get specific post
router.get("/posts/:id", function (req, res) {
  posts.getById(req.params.id)
    .then((data) => {
      res.send(data);
    });
});

export default router
