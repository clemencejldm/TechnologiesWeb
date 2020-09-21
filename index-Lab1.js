const express = require('express');
const app = express();

app.get('/', function(req, res) {
	let response = {'page' : 'home'};
	res.send(JSON.stringify(response));
});

app.get('/users', function(req, res) {
	let response = { 'page': 'users' };
	res.send(JSON.stringify(response));
});

app.get('/users/messages', function(req, res) {
	let response = { 'page': 'messages' };
	res.send(JSON.stringify(response));
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});