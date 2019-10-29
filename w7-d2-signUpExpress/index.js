const fs = require('fs');
const chalk = require('chalk');
const express = require('express');
const app = express();
const PORT = 9050;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
	res.status(200).send("Hello world!! This is  home page");
});

app.get('/hello', function (req,res) {
	console.log("Query Parameters >>>", req.query);
	var name = req.query.name;
	res.send(name);
});

app.post('/sign-up', function (req, res) {
	console.log("POST data >>>", req.body);
});

app.get('/sign-up', function (req, res) {
	res.sendFile(_dirname + '/sign-up.html');
res.send(form);
});

app.listen(PORT, function () {
	console.log("application is running on port: ",PORT);
}).on('error', function (error) {
	console.log("Unable to start app. Error>>> ",error);
})
