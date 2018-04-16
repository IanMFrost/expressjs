var express = require('express');
var app = express();
app.get('/',function(req, response){
    res.send('<h1> Roux Academy Meetups </h1>');

});

var server = app.listen(3000, function() {
    console.log('listening on port 3000' + app.get());
});






// var http = require('http');

// var myServer = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.write('<h1>Roux Meetups</h1>');
//   response.end();
// });

// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser');
