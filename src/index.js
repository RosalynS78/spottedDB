const express = require("express");
 require("dotenv").config;
 const app = express();
 app.use(express.json());
 let port = process.env.PORT || 4000;

 const cors = require("cors");

app.use(cors({
    // origin: ['http://localhost:3000'],
    // exposedHeaders: 'Authorization'
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
    
}));

app.use(express.static('public'))

app.get("/", (req, res) => {
     // example for .env
     res.send("Hello! Page by " + process.env.developer);
})

const authRouter = require('../routes/auth');
const { logger } = require('../middleware');

app.use(logger);
app.use('/auth', authRouter);





 
app.listen(port, function() {
     console.log ("Web server is listening on port", port)
})