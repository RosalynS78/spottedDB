const express = require("express");
 require("dotenv").config;
 const app = express();
 app.use(express.json());
 let port = process.env.PORT || 8000;

 const cors = require("cors");
 
app.use(cors({
    origin: ['http://localhost:3000'],
    exposedHeaders: 'Authorization'
}));

app.use(express.static('public'))

app.get("/", (req, res) => {
     // example for .env
     res.send("Hello! Page by " + process.env.developer);
})

let userRoutes = require("../routes/userRoutes");
app.use(userRoutes);




 
app.listen(port, function() {
     console.log ("App is listening on port ", port)
})