DROP TABLE IF EXISTS users, found, lost;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(50),
  password VARCHAR(500),
  contact VARCHAR(100),
  PRIMARY KEY (id)
  );


CREATE TABLE IF NOT EXISTS found (
  userId INT NULL,
  gender VARCHAR(50),
  species VARCHAR(50),
  photo VARBINARY(20),
  date VARCHAR(50),
  foundId INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (foundId),
  FOREIGN KEY (userId)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS lost (
  userId INT NULL,
  gender VARCHAR(50),
  species VARCHAR(50),
  photo VARBINARY(20),
  date VARCHAR(50),
  lostId INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (lostId),
  FOREIGN KEY (userId)
  REFERENCES users (id)
    ON DELETE CASCADE
 
);




	

