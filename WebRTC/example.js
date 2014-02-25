var fs = require('fs');
var express = require('express');
var app = express();

app.get('/index.html', function(req, res){
	fs.readFile('./index.html',function(err,data){
        res.end(data);
    });
});

app.get('/getVideo.mp4', function(req, res){
	fs.readFile('./testvideo.mp4',function(err,data){
        res.end(data);
    });
});

app.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
