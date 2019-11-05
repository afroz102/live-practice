var AuthController = {};

//Importing Auth Model from models/Auth.js
const AuthModel = require('./../models/Auth.js');
AuthController.login = function (request, response) {
    var users = [
        {
            "username": "afroz",
            "password": "afz"
        },
        {
            "username": "afroz123",
            "password": "afz123"
        }
    ];
    var username = request.body.username;
    var password = request.body.password;
    console.log(username, password);

    var user = null;
    users.forEach( function (value,index) {
        if(value.username == username) {
            if(value.password == password) {
                user = value;
            }
        }
    });
    console.log("user: ",user);
    console.log(request.session);
    request.session.user = user;
    AuthModel.login(username, password, function (error, data) {
        console.log(error,data); 
        if(error){
            return response.status(500).send({
                status: false,
                "message": error
            });
        }
        return response.status(200).json({
            status: true,
            "message": data
        });
    });
}

AuthController.logout = function (request, response) {
    var session = request.session;
    session.destroy();
    return response.json({
        status: true,
        message: "Logged out!"
    });
}

AuthController.checkIfLogedIn = function (request,response, next) {
    console.log(request.session.user);
    console.log("URL", request.originalUrl);
    if(request.originalUrl === '/user/login') {
        return next();
    }
    if(typeof request.session.user === "undefined") {
        return response.json({
            status:false,
            message: "Unathorized request"
        });
    }
    else {
        return next();
    }
} 
module.exports = AuthController;