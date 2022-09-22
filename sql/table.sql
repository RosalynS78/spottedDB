DROP TABLE IF EXISTS users, usersCredentials, found, lost, comments;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  phone VARCHAR(50),
  email VARCHAR(50),
  username VARCHAR(50) NOT NULL UNIQUE,
  PRIMARY KEY (id)
  );

  CREATE TABLE usersCredentials (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  email VARCHAR(50),
 	password VARCHAR(50),
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);

CREATE TABLE IF NOT EXISTS found (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  name VARCHAR(50),
  gender VARCHAR(50),
  age VARCHAR(50),
  species VARCHAR(50),
  photo VARBINARY(20),
  date VARCHAR(50),
  username VARCHAR(50) NOT NULL UNIQUE,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS lost (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  name VARCHAR(50),
  gender VARCHAR(50),
  age VARCHAR(50),
  species VARCHAR(50),
  photo VARBINARY(20),
  date VARCHAR(50),
  PRIMARY KEY (id),
  username VARCHAR(50) NOT NULL UNIQUE,
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
 
);

CREATE TABLE IF NOT EXISTS comments (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  posts VARCHAR(200),
  PRIMARY KEY (id),
  username VARCHAR(50) NOT NULL UNIQUE,
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);



	

