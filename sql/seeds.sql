INSERT IGNORE INTO users
	(first_name, last_name, phone, email, username)
VALUES 
    ("James", "Butt", "626-696-2777", "cory.gibes@gmail.com", "jamesB"),
    ("Josephine", "Darakjy", "607-350-7690", "kirk.herritt@aol.com", "jd"),
    ("Art", "Venere", "510-942-5916", "joesph_degonia@degonia.org", "arty"),
    ("Lenna", "Paprocki", "415-926-6089", "lai@gmail.com", "pappy"),
    ("Donette", "Foller", "415-874-2984", "norah.waymire@gmail", "foller"),
    ("Simona", "Morasca", "508-658-7802", "levi.munis@gmail.com", "simm"),
    ("Mitsue", "Tollner", "817-577-6151", "barrett.toyama@toyama.org", "mt"),
    ("Leota", "Dilliard", "703-938-7939", " taryn.moyd@hotmail.com", "dill"),
    ("Sage","Wieser", "208-206-9848", "bgillaspie@gillaspie.com", "sage"),
    ("Kris", "Marrier", "812-442-8544", "kristofer.bennick@yahoo.com", "marry");
  

INSERT IGNORE INTO found
    (user_id, name, gender, age, species, photo, date, username)
VALUES
    (1, "Fluffy", "Female", "6", "Cat", "mediumblob", "06.12.22", "jamesB"),
    (2, "Fido", "Male", "5", "Dog", "mediumblob", "01.05.22", "jd"),
	(3, "Tiger", "Female", "12", "Cat", "mediumblob", "03.16.22", "arty"),
    (4, "Jack", "Male", "3", "Rabbit", "mediumblob", "08.19.22", "pappy"),
	(5, "Hiro", "Female", "4", "Turtle", "mediumblob", "08.19.22", "foller");

INSERT IGNORE INTO lost
    (user_id, name, gender, age, species, photo, date, username)
VALUES
    (6, "Spot", "Male", "1", "Dog", "mediumblob", "06.19.22", "simm"),
    (7, "Jinkies", "Male", "6", "Cat", "mediumblob", "06.12.22", "mt"),
    (8, "Sparkles", "Female", "9", "Iguana", "mediumblob", "01.05.22", "dill"),
	(9, "Polly", "Female", "11", "Bird", "mediumblob", "03.16.22", "sage"),
    (10, "Buddy", "Male", "3", "Dog", "mediumblob", "08.19.22", "marry");

INSERT IGNORE INTO comments
	(user_id, posts, username)
VALUES 
    (2, "Fluffy cat seen around the neighborhood", "jd"),
    (1, "Found Dog named Fido", "jamesB"),
    (3, "Sweet bird  found", "arty"),
    (4, "Found Rabbit in backyard", "pappy"),
    (5, "Anyone missing a turtle by chance", "foller"),
    (9, "Spot is missing", "sage"),
    (6, "Help me find Jinkies", "simm"),
    (10, "Missing Sparkles the Iguana", "marry"),
    (7, "Polly flew out", "mt"),
    (8, "Help me findy Buddy", "dill");