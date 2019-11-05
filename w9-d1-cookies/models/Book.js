//name of this file will always be like an object (first letters capital).
const Book = {};

Book.create = function (bookName, authorName, callback ) {
    if(!bookName){
        return callback("Error! Book name can not be empty");
    }
    if (!authorName){
        return callback("Error! author can not be empty");
    }
    console.log("from Book.js: ",bookName,authorName)
    return callback(null, "Success! Book name and author name has been stored to database!");
};

//Exporting module, to use in different file locations.
module.exports = Book;