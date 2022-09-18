const express = require("express");
 require("dotenv").config;
 const app = express();
 app.use(express.json());
 let port = process.env.PORT || 5000;

 const cors = require("cors");

app.use(cors({

    exposedHeaders: 'Authorization',
    origin: ["http://localhost:3000"],

    credentials: true
    
}));

app.use(express.static('public'))

app.get("/", (req, res) => {
     // example for .env
     res.send("Hello! Page by " + process.env.developer);
})

const authRouter = require('../routes/auth');
const usersRouter = require('../routes/users');
const { logger } = require('../middleware/index');

app.use(logger);
app.use('/auth', authRouter);
app.use('/users', usersRouter);





 
app.listen(port, function() {
     console.log ("Web server is listening on port", port)
    });