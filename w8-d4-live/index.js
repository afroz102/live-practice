// const chalk = require('chalk');
// const moment = require('moment');
// const fs = require('fs');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const multer  = require('multer')
const port = 9090;

//storing file to disk using disk storage engine
const fileStorage = multer.diskStorage({
	destination: function (req, file, cb){
		return cb(null, 'public/uploads/');
	},
	filename: function (req, file, cb){
		//console.log("from index.js>>",file);
		var filename = (new Date().getTime() ) + file.originalname;
		return cb(null, filename);
	}
});
const upload = multer({
	storage: fileStorage
});
app.use(express.json());
app.use('/public',express.static('public'));

const hbs = exphbs.create({
	extname: '.hbs'
})
//configure Handlebars
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

//importing profile controller
var profileController = require('./routes/profile.js');

app.get('/', function (req, res) {
	res.render('home');
});

app.post('/profile/register', upload.single('avatar'), profileController.register);
app.post('/profile/upload-pictures', upload.array('pictures',5), profileController.uploadPictures);

//starting the app on pre defined port
app.listen(port, function () {
	console.log("Application has started on port: ",port);
}).on('error', function (error) {
	console.log("Unable to start app. Error>>",error);
});