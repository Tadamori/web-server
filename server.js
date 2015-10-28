var express = require('express');
var server = express();
var PORT = 3000;

var middleware = require('./middleware.js');

server.use(middleware.logger);

//добавялем вкладку
server.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!<br /><a href="index.html"><p>back</p></a>');
});

//доступ к общей папке, в ней лежит index.html
server.use(express.static(__dirname + '/public'));
//console.log(__dirname);

//подключаем порт
server.listen(PORT, function () {
	console.log('express server started at port: ' + PORT);
});

