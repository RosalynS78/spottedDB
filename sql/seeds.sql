INSERT INTO users
	(username, email, password)
VALUES 
    ("catlady", "test@gmail.com", "test");
 
INSERT INTO found
    (userId, gender, name, species, date, email, phone, comments)
VALUES
    (1, "Female", " ", "Cat", "06.12.22", "email@email.com", "555-555-5555", "found cat"),
    (1, "Male", " ", "Dog", "06.12.22", "email@email.com", "555-555-5555", "found dog"),
	(1, "Female", " ", "Cat", "03.16.22", "email@email.com", "555-555-5555", "found cat"),
    (1, "Male", " ", "Rabbit", "08.19.22", "email@email.com", "555-555-5555", "found rabbit"),
	(1, "Female", " ", "Turtle", "08.19.22", "email@email.com", "555-555-5555", "found turtle");

INSERT INTO lost
    (userId, gender, name, species, date, email, phone, comments)
VALUES
    (1, "Male", "Spot", "Dog", "06.19.22", "email@email.com", "555-555-5555", "missing dog"),
    (1, "Male", "Fluffy", "Cat", "06.12.22", "email@email.com", "555-555-5555", "missing cat"),
    (1, "Female", "Iggy", "Iguana", "01.05.22", "email@email.com", "555-555-5555", "missing iguana"),
	(1, "Female", "Polly", "Bird", "03.16.22", "email@email.com", "555-555-5555", "missing bird"),
    (1, "Male", "Buster", "Dog", "08.19.22", "email@email.com", "555-555-5555", "missing dog");
