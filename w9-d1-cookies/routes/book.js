
const BookController = {};

//Importing Book Model from models/Book.js
const BookModel = require('./../models/Book.js');

BookController.create = function (request, response) {
    var name = request.body.name;
    var author = request.body.author;
    //console.log("Book: ",name,  ", Author: ",author);
    BookModel.create(name, author, function (error, data) {
        console.log(error,data); 
        if(error){
            return response.status(500).send(error);
        }
        return response.status(200).json(
            {
                status: true,
                "message": data
            }
        );
    });
};

//exporting module to use in different file location.
module.exports = BookController;