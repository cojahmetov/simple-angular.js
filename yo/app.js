var express = require('express');
var app = express();

app.get('/', function(req, res){
      res.send('<script src="http://localhost:35729/livereload.js"></script><H1>Hello World</H1>');
});

var server = app.listen(9000, function() {
        console.log('Listening on port %d', server.address().port);
});

