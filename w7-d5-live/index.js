const fs = require('fs');
const express = require('express');
const app = express();
const port = 9090;
const exphbs = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded());
app.use('/static', express.static('public'));

//configure Handlebars
const hbs = exphbs.create({
    extname: '.hbs',
    helpers: {
        incrementByOne: function (value, option) {
            return parseInt(value) + 1;
        },
        bold: function (value, option) {
            return '<b>' + value + '</b>';
        }
    }
});

//register handlebars as view engine
//app.engine('.hbs', exphbs( { extname: '.hbs' } ));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    var players = [
        {
            id: 1,
            playerName: "Virat Kohli",
            runs: 21000,
            availablity: true
        },
        {
            id: 2,
            playerName: "Steve Smith",
            runs: 15000,
            availablity: true
        },
        {
            id: 3,
            playerName: "Sachin Tendulkar",
            runs: 35000,
            availablity: false
        }, 
        {
            id: 4,
            playerName: "Joe Root",
            runs: 12000,
            availablity: true
        },
        {
            id: 5,
            playerName: "Kane Williomson",
            runs: 14000,
            availablity: true
        }
    ]
    res.render('homepage', {
        title: "Player lists",
        players: players
    });
});

app.get('/about-us',function (req, res) {
   res.render('about-us', {
       title: "about Us - Eagle App"
   });
});

app.listen(port, function () {
    console.log("Application has started at port", port);    
}).on('error', function (error) {
    console.log("Unable to start app. Error>>", error);    
});