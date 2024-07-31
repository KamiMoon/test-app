CREATE TABLE categories (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE cats (
  id SERIAL NOT NULL PRIMARY KEY,
  cat_name VARCHAR(255),
  cat_age INTEGER,
  cat_breed VARCHAR(255)
);