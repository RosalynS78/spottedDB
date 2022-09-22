// const jwksRsa = require('jwks-rsa');
// // const jwt = require('express-jwt');
// const { expressjwt: jwt } = require("express-jwt");
// // fixes the error for jwt not a function

// const logger = (req, res, next) => {
//   // output route, path and time
//   console.log('Logging route:', req.path, new Date().toISOString());
//   // continue
//   next()
// }

// const checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
//   }),
//   // Validate the audience and the issuer.
//   audience: process.env.AUTH0_IDENTITY,
//   issuer: `https://${process.env.AUTH0_DOMAIN}/`,
//   algorithms: ['RS256']
// });

// module.exports = {
//   logger,
//   checkJwt
// }

// const jwt = require("jsonwebtoken");

// const logger = (req, res, next) => {
//   console.log("Logging route:", req.path, new Date().toISOString());
//   next();
// };

// const checkJwt = (req, res, next) => {
//   let header = req.headers["authorization"];
//   console.log(header);
//   let token = header.split(" ")[1];
//   console.log(header);

//   jwt.verify(token, "secret", function (err, decoded) {
//     console.log(decoded);
//     if (decoded) {
//       req.user = decoded;
//       next();
//     } else {
//       res.sendStatus(401);
//     }
//   });
// };

// module.exports = {
//   logger,
//   checkJwt,
// };



const jwt = require("jsonwebtoken");

const logger = (req, res, next) => {
  next();
};

const authenticate = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const decoded = jwt.verify(bearerToken, "secret");
    if (!decoded) {
      throw new Error("Invalid token");
    }
    req.user = decoded;
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  logger,
  authenticate,
};