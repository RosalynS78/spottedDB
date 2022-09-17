-- registers/creates a new user 
"insert into users(username, email, passwordHash) values (?, ?, ?)"

-- logs in a new user
"select id, username, passwordHash from users where email = ?"