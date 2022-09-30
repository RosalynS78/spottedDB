require("dotenv").config;
// let bodyParser = require("body-parser")

const express = require("express");
const app = express();


app.use(express.json());
// app.use(express.static("build"));
app.use(express.static("public"));
// app.use(bodyParser.json());


// const cors = require('cors');
// app.use(cors({
//     origin: ['http://localhost:3000'],
//     exposedHeaders: 'Authorization'
// }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Credentials", true);
     res.header("Content-Type", "application/json");
     res.header(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
     );
     res.header("Access-Control-Allow-Methods", "*");
     next();
   });



// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );


const { logger } = require('../middleware/index.js');
const authRouter = require('../routes/auth');
const usersRouter = require('../routes/users');
const lostRouter = require('../routes/lost');
const foundRouter = require('../routes/found');

app.use(logger);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/lost', lostRouter);
app.use('/found',foundRouter);


app.get("/", (req, res) => {
     // example for .env
     res.send("Hello! Page by " + process.env.developer);
})

let port = process.env.PORT || 4000;
app.listen(port, () => {
     console.log(`Web server is listening on port ${port}!`);
   });