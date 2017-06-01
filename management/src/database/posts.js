/**
 * This file handles all interaction with posts.
 *
 * @author bshai date 5/31/17.
 */
import dbSetup from "./setup";

const db = dbSetup.getDatabase();

const promisify = (func, args) => {
  return new Promise((resolve, reject) =>{
    args.push((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
    func.apply(db, args);
  });
};

export default {

  create: (post) => promisify(db.create, ["INSERT INTO posts (name, status, content) VALUES ($name, $status, $content)", {
    $name: post.name,
    $status: post.status,
    $content: post.content
  }]),

  /**
   * Get all the posts
   */
  getAll: () => promisify(db.all, ["SELECT * FROM posts"]),

  getById: (id) => promisify(db.get, ["SELECT * FROM posts WHERE id = ?", id]),

  update: () => {

  },

  delete: () => {

  }

}

