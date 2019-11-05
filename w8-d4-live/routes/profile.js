const ProfileController = {};
const ProfileModel = require('./../models/Profile.js');

ProfileController.register = function (request, response) {
    //console.log("body from profile.js>>",request.body);
    console.log("file from profile.js",request.file); 
    
    return response.render('avatar', {
        success: true,
        message: "Successfully uploaded",
        data: request.file
    });
}
ProfileController.uploadPictures = function (request, response) {
	console.log("uploadPictures", request.file,request.body);
	return response.status(200).json({
		status: true
	});

}
module.exports = ProfileController;