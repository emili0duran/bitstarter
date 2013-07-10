var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buff;

app.get('/', function(request, response) {
  
  fs.readFileSync('index.html', funtion(err, data){
	response.send(data);
  }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
