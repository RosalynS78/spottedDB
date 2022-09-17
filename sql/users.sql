DROP TABLE IF EXISTS users, usersCredentials;

CREATE TABLE usersCredentials (
  	id INT NOT NULL AUTO_INCREMENT,
  	username VARCHAR(50),
    email VARCHAR(50),
 	password VARCHAR(50),
  	PRIMARY KEY (id),
  	UNIQUE KEY (username)
);


INSERT INTO usersCredentials
	(username, email, password)
VALUES
	("test@example.com", "test@example.com", "Password!")