# s3-blog `management`
This is the management site for the blog.

It is powered by an SQLite database.

# Database
There are two tables in the database:

## Pages
This contains the content for all the "pages" in the site. A page is a top level page in the website that does not contain any dynamic info (blog posts, lists of content, etc.).

### Schema
| Column  | Type    |
|---------|---------|
| id      | integer |
| name    | varchar |
| content | varchar |

## Posts
This contains the blog posts.

Status is one of "DRAFT", "PUBLIC", or "DELETED".

TODO add versioning support.

### Schema
| Column  | Type     |
|---------|----------|
| id      | integer  |
| url     | varchar  |
| title   | varchar  |
| date    | datetime |
| status  | bit      |
| content | varchar  |
