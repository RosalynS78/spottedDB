require("dotenv").config;

const express = require("express");
const app = express();

// app.use(express.static('public'))
app.use(express.json());
app.use(express.static("public"));

app.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Credentials", true);
     res.header("Content-Type", "application/json");
     res.header(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept, authorization"
     );
     res.header("Access-Control-Allow-Methods", "*");
     next();
   });


const { logger } = require('../middleware/index');
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