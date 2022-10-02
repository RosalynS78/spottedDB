DROP TABLE IF EXISTS users, found, lost;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(50),
  password VARCHAR(500),
  PRIMARY KEY (id)
  );


CREATE TABLE IF NOT EXISTS found (
  userId INT,
  gender VARCHAR(50),
  name VARCHAR(50),
  species VARCHAR(50),
  date VARCHAR(50),
  email VARCHAR(50),
  phone VARCHAR(50),
  comments VARCHAR(100),
  foundId INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (foundId),
  FOREIGN KEY (userId)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS lost (
  userId INT,
  gender VARCHAR(50),
  name VARCHAR(50),
  species VARCHAR(50),
  date VARCHAR(50),
  email VARCHAR(50),
  phone VARCHAR(50),
  comments VARCHAR(100),
  lostId INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (lostId),
  FOREIGN KEY (userId)
  REFERENCES users (id)
    ON DELETE CASCADE
);




	

