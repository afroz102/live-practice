const fs = require('fs');
const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
const port = 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use('/static', express.static('public'));

//register Handlebars as view engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('homepage', {
        name: "<b>afroz</b>",
        age: 22,
        city: "New Delhi",
        hobbies: [
            "coding",
            "singing",
            "playing Chess",
            "gym"
        ]
    });
});


app.listen(port, function () {
    console.log("Application has started at port", port);
}).on('error', function (error) {
    console.log("Unable to start app. Error>>", error)
})