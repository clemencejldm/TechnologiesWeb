var express = require('express');
var app = express.Router();

app.get('/', function(req, res) {
	res.send('How does /hello work ? <br> If you type /hello, you need to write a name after it; for example /hello/David.<br> If You type any name exept from Clemence and Vivien, it will write hello + the name you wrote.<br> For /hello/Clemence or /hello/Vivien, it will show a small intro of themselfes.<br>Finally, if you write other things than a name it will show a not found message.<br> ');
});

app.get('/hello/:name', function(req, res) {
	var response = req.params['name'];
	
	if (response == 'Adrien') 
	{
		res.send( "Hello, I'm Clemence in ECE Paris, I'm 21 years old and come from Asnieres ! " );
	}
	else if (response == 'Raphael') 
	{
		res.send( "Hello, I'm Vivien in ECE Paris, I'm 21 years old and come from Paris ! " );
	}
	else
	{
		res.send('Hello ' + response);
	}
});

app.get('/hello', function(req, res) {
	res.send("404 code : Name not found");
});

module.exports = app;