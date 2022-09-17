const express = require("express");
 
require("dotenv").config;
 
const app = express();
 
app.use(express.json());
 
let port = process.env.PORT || 8000;
 
app.get("/", function(req, res) {
     // example for .env
     res.send("Hello! Page by " + process.env.developer);
})
 
app.listen(port, function() {
     console.log ("App is listening on port ", port)
})