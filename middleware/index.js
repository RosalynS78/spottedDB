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


const jwksRsa = require('jwks-rsa');
// const jwt = require('express-jwt');
const { expressjwt: jwt } = require("express-jwt");
// fixes the error for jwt not a function

const logger = (req, res, next) => {
  // output route, path and time
  console.log('Logging route:', req.path, new Date().toISOString());
  // continue
  next()
}

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  // Validate the audience and the issuer.
  audience: process.env.AUTH0_IDENTITY,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

module.exports = {
  logger,
  checkJwt
}