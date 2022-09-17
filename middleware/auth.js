// let jwt = require("jsonwebtoken");

// let verifyJWT = function(req, res, next){
//     let header = req.get("Authorization");
//     //authorization is located in the header
//     let signedToken;
//     if(header){
//         let parts = header.split(" ");
//         //this is because we dont neeed the whole header value, just the signed token portion
//         signedToken = parts[1];
     
//     }

//     if(signedToken){
//         try{
//             let token = jwt.verify(signedToken, process.env.JWT_SECRET);
//             console.log("we want to find what is ", token);
//             req.userID = token.userID;
            
//             next()
//         } catch(err){
//             res.sendStatus(400);
//         }
//     } else {
//         res.sendStatus(400);
//     }

// };

// module.exports = {
//     verifyJWT
// }