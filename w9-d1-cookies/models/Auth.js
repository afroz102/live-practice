//name of this file will always be like an object (first letters capital).
const Auth = {};

Auth.login = function (userName, password, callback ) {
    if((!userName) || (!password) ){
        return callback("Invalid username or password");
    }
    return callback(null, "user loggedIn successfully");
};
// Auth.logout = function () {
//     return callback(null, "user loggedIn successfully");
// };

//Exporting module, to use in different file locations.
module.exports = Auth;