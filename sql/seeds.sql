INSERT INTO users
	(users_id, first_name, last_name, phone, email)
VALUES 
  (99, "James","Butt", "626-572-1096","test@example.com");


INSERT INTO usersCredentials
	(username, email, password, users_id)
VALUES
	("test@example.com", "test@example.com", "Password!", 99);

INSERT INTO found
    (pet_id, name, gender, age, species, photo, date, users_id)
VALUES
    (66, "Fluffy", "Female", "6", "Cat", "MEDIUMBLOB", "06.12.22", 99);

INSERT INTO lost
    (pet_id, name, gender, age, species, photo, date, users_id)
VALUES
    (88, "Spot", "Male", "1", "Dog", "MEDIUMBLOB", "06.19.22", 99);

