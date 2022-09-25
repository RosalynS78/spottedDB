INSERT INTO users
	(username, email, password, contact)
VALUES 
    ("catlady", "test@gmail.com", "test", "hello");
 
INSERT INTO found
    (userId, gender, species, photo, date)
VALUES
    (1, "Female", "Cat", "mediumblob", "06.12.22"),
    (1, "Male", "Dog", "mediumblob", "01.05.22"),
	(1, "Female", "Cat", "mediumblob", "03.16.22"),
    (1, "Male", "Rabbit", "mediumblob", "08.19.22"),
	(1, "Female", "Turtle", "mediumblob", "08.19.22");

INSERT INTO lost
    (userId, gender, species, photo, date)
VALUES
    (1, "Male", "Dog", "mediumblob", "06.19.22"),
    (1, "Male", "Cat", "mediumblob", "06.12.22"),
    (1, "Female", "Iguana", "mediumblob", "01.05.22"),
	(1, "Female", "Bird", "mediumblob", "03.16.22"),
    (1, "Male", "Dog", "mediumblob", "08.19.22");
