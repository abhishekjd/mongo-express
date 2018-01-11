console.log("Hello world");

var express = require("express");

var app = express();

app.get("/data", function (req, res) {
    var data = [];
    //populate data from mongo
    res.send({"key":"Hello world"});
});

app.listen(8000, function () {
    console.log("Server listening at 8000");
});