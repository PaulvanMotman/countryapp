// Require file system
var fs = require ('fs')

// Declaring a function with thow parameters, namely the file you want to put in + a callback function
function readJason (filename, callback) {
	// Doing a fs.readfile on whatever file you put in
	fs.readFile(filename, 'utf8', function (err, data) {
		// Check for errors
		if (err) {
			throw err;
		}
		// store the parsed data in a variable
		var jsondata = JSON.parse(data)
		// Call the callback function where you put in as input the parsed data
		callback(jsondata);
	})
};

// Export the readJason function
module.exports.readJason = readJason