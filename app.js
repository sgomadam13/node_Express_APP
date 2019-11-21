var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("index.ejs");
});

app.listen(3000, process.env.IP, function(){
    console.log("Server has started");
});
