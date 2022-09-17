// let db = require("../sql/db.sql");
// let argon = require("argon2");

// let jwt = require("jsonwebtoken");


// let register = async function(req, res){ 
//     console.log("register");
//     // add a user to the database
//     let username = req.body.username;
//     let email = req.body.email;
//     let password = req.body.password;

//     let pwHash = await argon.hash(password);
//     let params = [username, email, pwHash];

//     let sql = "insert into usersjoedirt99(username, email, pw_hash) values ( ?, ?, ?)" ;


//     db.query(sql, params, function(err, results){
//         if(err){
//             console.log("unable to add user:", err);
//             res.sendStatus(500) 
//         } else {
//             res.sendStatus(204); 
//         }
//     })

// };


// let login = async function(req, res){
//     console.log("LOGIN");
//     let username = req.body.username;
//     // let email = req.body.email;
//     let password = req.body.password;
//     let dbPWHash;
//     // let sql = "select id, pw_hash from usersjoedirt99 where username = ?" ;
//     let params = [username];

//     db.query(sql, params, async function(err, results){
//         if(err){
//             console.log("unable to log in ", err);
//             res.sendStatus(500);
//             return; 
//         };

//         if(results.length > 1){ 
//             console.log("there is more than one long in for ", username);
//             res.sendStatus(500);
//             return;
//         }; 

//         if(results.length == 0){
//             console.log("username/password does not exist")
//             res.sendStatus(400);
//             return;
//         }; 

//         dbPWHash = results[0].pw_hash; 
//         let goodPassword = await argon.verify(dbPWHash, password);
           
//         let token = {
//             "username": username,
//             "message": "hello",
//             "userID" : results[0].id
//         };

//         if(goodPassword){
//             let signedToken = jwt.sign(token, process.env.JWT_SECRET)
//             res.cookie("Bearer", signedToken, {maxAge: 6000000} )

//             res.header("Authorization", `Bearer ${signedToken}`).json({userID: results[0].id})
//         } else {
//             console.log("???????")
//             res.sendStatus(400); 
//         }
//     });

// }


// module.exports = {
//     register,
//     login
// };

