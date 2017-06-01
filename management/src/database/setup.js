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
let db;

const createDatabase = () => {
  db = new sqlite.Database(databasePath);
  let data = fs.readFileSync(`${__dirname}/scripts/pages.sql`, 'utf8');
  db.run(data);
  data = fs.readFileSync(`${__dirname}/scripts/posts.sql`, 'utf8');
  db.run(data);
  return db;
};

export default {

  getDatabase: () => {
    if (!fs.existsSync('./' + databasePath)) {
      return createDatabase();
    }
    return new sqlite.Database(databasePath);
  }

}
