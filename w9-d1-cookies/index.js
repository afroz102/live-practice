const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const session = require('express-session');
const port = 9090;

app.use(express.json());
app.use('/public',express.static('public'));

app.use(session({
    name: 'eagle-session',
    secret: 'akdhksahdkajs',
    resave: false,
    saveUninitialized: true,
    rolling: false,
    cookie: {
        httpOnly: true,
        maxAge: 120000,
        path: '/',
        sameSite: true,
        secure: false
    }
}));

//configure Handlebars
const hbs = exphbs.create({
	extname: '.hbs'
});
//register handlebars as view engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

//importing profile controller
var authRoute = require('./routes/auth.js');
var bookRoute = require('./routes/book.js');

app.use(authRoute.checkIfLogedIn);

app.post('/book/create', bookRoute.create);
app.post('/user/login', authRoute.login);
app.post('/user/logout', authRoute.logout);
//starting the app on pre defined port
app.listen(port, function () {
	console.log("Application has started on port: ",port);
}).on('error', function (error) {
	console.log("Unable to start app. Error>>",error);
});