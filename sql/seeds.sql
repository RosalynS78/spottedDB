INSERT INTO users
	(username, email, password, contact, profilepic)
VALUES 
    ("catlady", "test@gmail.com", "test", "hello", "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d");
 
INSERT INTO found
    (userId, gender, species, photo, date, comments, profilepic)
VALUES
    (1, "Female", "Cat", "/assets/cat.jpg", "06.12.22", "found cat", "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d"),
    (1, "Male", "Dog", "/assets/dog.jpg", "06.12.22", "found dog", "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89"),
	(1, "Female", "Cat", "/assets/cat", "03.16.22", "found cat", "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d"),
    (1, "Male", "Rabbit", "/assets/rabbit.jpg", "08.19.22", "found rabbit", "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89"),
	(1, "Female", "Turtle", "/assets/turtle.jpg", "08.19.22", "found turtle", "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d");

INSERT INTO lost
    (userId, gender, species, photo, date, comments, profilepic)
VALUES
    (1, "Male", "Dog", "/assets/dog.jpg", "06.19.22", "missing dog", "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89"),
    (1, "Male", "Cat", "/assets/cat.jpg", "06.12.22", "missing cat", "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d"),
    (1, "Female", "Iguana", "/assets/iguana.jpg", "01.05.22", "missing iguana", "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89"),
	(1, "Female", "Bird", "/assets/bird.jpg", "03.16.22", "missing bird", "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d"),
    (1, "Male", "Dog", "/assets/dog.jpg", "08.19.22", "missing dog", "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89");
