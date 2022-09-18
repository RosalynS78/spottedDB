DROP TABLE IF EXISTS users, usersContact, usersAddress, usersCredentials;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE usersContact (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  phone VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE usersAddress (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  address VARCHAR(100),
  city VARCHAR(50),
  county VARCHAR(50),
  state VARCHAR(50),
  zip VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE usersCredentials (
  	id INT NOT NULL AUTO_INCREMENT,
  	username VARCHAR(50),
    email VARCHAR(50),
 	password VARCHAR(50),
  	PRIMARY KEY (id),
  	UNIQUE KEY (username)
);

INSERT INTO users
	(first_name, last_name)
VALUES 
  ("James","Butt");

INSERT INTO usersContact
	(user_id, phone, email)
VALUES 
  (99,"626-572-1096","test@example.com");

  INSERT INTO usersAddress
	(user_id, address, city, county, state, zip)
VALUES 
  (99,"6649 N Blue Gum St","New Orleans","Orleans","LA",70116);


INSERT INTO usersCredentials
	(username, email, password)
VALUES
	("test@example.com", "test@example.com", "Password!");