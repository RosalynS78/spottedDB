INSERT INTO users
	(username, email, password, profilepic)
VALUES 
    ("catlady", "test@gmail.com", "test", "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d");
 
INSERT INTO found
    (userId, gender, name, species, photo, date, email, phone, comments, latlng, profilepic)
VALUES
    (1, "Female", " ", "Cat", "/assets/cat.jpg", "06.12.22", "email@email.com", "555-555-5555", "found cat", '{"lat":37.767940,"lng":-122.422250}', "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d"),
    (1, "Male", " ", "Dog", "/assets/dog.jpg", "06.12.22", "email@email.com", "555-555-5555", "found dog", '{"lat":37.849970,"lng":-122.260450}', "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89"),
	(1, "Female", " ", "Cat", "/assets/cat", "03.16.22", "email@email.com", "555-555-5555", "found cat", '{"lat":37.872230,"lng":-122.271290}', "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d"),
    (1, "Male", " ", "Rabbit", "/assets/rabbit.jpg", "08.19.22", "email@email.com", "555-555-5555", "found rabbit", '{"lat":37.903049,"lng":-122.059723}', "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89"),
	(1, "Female", " ", "Turtle", "/assets/turtle.jpg", "08.19.22", "email@email.com", "555-555-5555", "found turtle", '{"lat":37.903290,"lng":-122.078440}', "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d");

INSERT INTO lost
    (userId, gender, name, species, photo, date, email, phone, comments, latlng, profilepic)
VALUES
    (1, "Male", "Spot", "Dog", "/assets/dog.jpg", "06.19.22", "email@email.com", "555-555-5555", "missing dog", '{"lat":37.952900,"lng":-122.334229}', "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89"),
    (1, "Male", "Fluffy", "Cat", "/assets/cat.jpg", "06.12.22", "email@email.com", "555-555-5555", "missing cat", '{"lat":37.958530,"lng":-122.340790}', "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d"),
    (1, "Female", "Iggy", "Iguana", "/assets/iguana.jpg", "01.05.22", "email@email.com", "555-555-5555", "missing iguana", '{"lat":37.939790,"lng":-122.326870}', "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89"),
	(1, "Female", "Polly", "Bird", "/assets/bird.jpg", "03.16.22", "email@email.com", "555-555-5555", "missing bird", '{"lat":37.853330,"lng":-122.290130}', "https://doodleipsum.com/300x375/avatar-3?i=91869b1f927dc2e10588745858c05c2d"),
    (1, "Male", "Buster", "Dog", "/assets/dog.jpg", "08.19.22", "email@email.com", "555-555-5555", "missing dog", '{"lat":37.761560,"lng":-122.423900}', "https://doodleipsum.com/300x375/avatar-3?i=147878616133557ff69a33d4d5eadc89");
