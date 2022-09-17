CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(50) NOT NULL UNIQUE,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
);

