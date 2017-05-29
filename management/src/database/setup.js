/**
 * This file sets up the database. Right now it's pretty simple. If this thing
 * ever becomes more widely used, we might want to build a nice setup where
 * you can select what functionalities you want.
 *
 * @author bshai date 5/29/17.
 */
"use strict";

import sqlite from "sqlite3";
import fs from "fs";

const databasePath = 'database.sqlite';

const createDatabase = () => {
  const db = new sqlite.Database(databasePath);
  fs.readFile(`${__dirname}/scripts/pages.sql`, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    db.run(data);
  });
  fs.readFile(`${__dirname}/scripts/posts.sql`, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    db.run(data);
  });
};

export default {

  exists: () => fs.existsSync('./' + databasePath),

  create: createDatabase

}
