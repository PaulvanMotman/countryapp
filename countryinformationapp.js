var fs = require ('fs')


function readJason (filename, callback) {
	fs.readFile(filename, 'utf8', function (err, data) {
		if (err) {
			throw err;
		}
		var jsondata = JSON.parse(data)
		callback(jsondata);
	})
};


module.exports.readJason = readJason




 











