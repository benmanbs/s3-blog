CREATE TABLE pages (
  id INTEGER PRIMARY KEY,
  url varchar(100) NOT NULL,
  title varchar(100) NOT NULL,
  date datetime NOT NULL,
  status tinyint(1) NOT NULL,
  content	text NOT NULL
);
