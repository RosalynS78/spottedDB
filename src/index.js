require("dotenv").config;

const express = require("express");
const app = express();

app.use(express.static('public'))
app.use(express.json());

const cors = require("cors");
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// app.use(cors({

//     exposedHeaders: 'Authorization',
//     origin: ["http://localhost:3000"],

//     credentials: true
    
// }));


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

app.listen(port, function() {
     console.log ("Web server is listening on port", port)
    });