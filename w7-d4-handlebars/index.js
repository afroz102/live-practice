const fs = require('fs');
const express = require('express');
const app = express();

//importing handlebars
const exphbs = require('express-handlebars');

const port = 9050;

app.use(express.json());

app.use(express.urlencoded());

//app.use('/public', express.static('public'));

//register Handlebars as view engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/home', function (req, res) {
    res.render('homepage', {
        name: "afroz",
        age: 22,
        city: "Hydrabad",
        hobbies: [
            "coding",
            "singing",
            "playing Chess",
            "gym"
        ]
    });
});
app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(port, function () {
    console.log("Application has started at port", port);
}).on('error', function (error) {
    console.log("Unable to start app. Error>>", error)
})