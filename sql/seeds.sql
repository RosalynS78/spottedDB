
  INSERT INTO users
	(first_name, last_name, phone, email, username)
VALUES 
    ("James", "Butt"," 626-696-2777", "cory.gibes@gmail.com", "bruce18"),
    ("Josephine", "Darakjy", "607-350-7690", "kirk.herritt@aol.com", "catlady99"),
    ("Art", "Venere", "510-942-5916", "joesph_degonia@degonia.org", "leo81"),
    ("Lenna", "Paprocki", "415-926-6089", "lai@gmail.com", "jill16"),
    ("Donette", "Foller", "415-874-2984", "norah.waymire@gmail", "chibi123"),
    ("Simona", "Morasca", "508-658-7802", "levi.munis@gmail.com", "meows"),
    ("Mitsue", "Tollner", "817-577-6151", "barrett.toyama@toyama.org", "penny1"),
    ("Leota", "Dilliard", "703-938-7939", " taryn.moyd@hotmail.com", "ben54"),
    ("Sage","Wieser", "208-206-9848", "bgillaspie@gillaspie.com", "dannyboy"),
    ("Kris", "Marrier", "812-442-8544", "kristofer.bennick@yahoo.com", "iambatman");
  

INSERT INTO found
    (user_id, name, gender, age, species, photo, date, username)
VALUES
    (1, "Fluffy", "Female", "6", "Cat", "../assets/cat.jpg", "06.12.22","catlady99"),
    (2, "Fido", "Male", "5", "Dog", "../assets/dog.jpg", "01.05.22", "bruce18"),
	(3, "Tiger", "Female", "12", "Cat", "../assets/cat.jpg", "03.16.22", "leo81" ),
    (4, "Jack", "Male", "3", "Rabbit", "../assets/rabbit.jpg", "08.19.22", "jill16"),
	(5, "Hiro", "Female", "4", "Turtle", "../assets/turtle.jpg", "08.19.22", "chibi123");

INSERT INTO lost
    (user_id, name, gender, age, species, photo, date, username)
VALUES
    (6, "Spot", "Male", "1", "Dog", "../assets/dog.jpg", "06.19.22", "dannyboy"),
    (7, "Jinkies", "Male", "6", "Cat", "../assets/cat.jpg", "06.12.22","meows"),
    (8, "Sparkles", "Female", "9", "Iguana", "../assets/iguana.jpg", "01.05.22", "iambatman"),
	(9, "Polly", "Female", "11", "Bird", "../assets/parrot.jpg", "03.16.22", "penny1"),
    (10, "Buddy", "Male", "3", "Dog", "../assets/cat.jpg", "08.19.22", "ben54");

INSERT INTO comments
	(user_id, posts, username)
VALUES 
    (2, "Fluffy cat seen around the neighborhood", "catlady99"),
    (1, "Found Dog named Fido", "bruce18"),
    (3, "Sweet bird  found", "leo81"),
    (4, "Found Rabbit in backyard", "jill16"),
    (5, "Anyone missing a turtle by chance", "chibi123"),
    (9, "Spot is missing", "dannyboy"),
    (6, "Help me find Jinkies", "meows"),
    (10, "Missing Sparkles the Iguana", "iambatman"),
    (7, "Polly flew out", "penny1"),
    (8, "Help me findy Buddy", "ben54");