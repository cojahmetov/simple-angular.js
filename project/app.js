var express = require('express');
var app = express();


app.use(express.static(__dirname + '/app/static/views'));
app.use(express.static(__dirname + '/app/static'));
app.use(express.static(__dirname + '/app/images'));
app.use(express.static(__dirname + '/app'));

var server = app.listen(9000, function() {
        console.log('Listening on port %d', server.address().port);
});

