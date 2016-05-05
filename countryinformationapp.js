var fs = require ('fs')
var countryname = process.argv[2]


function readJason (filename, callback) {
	fs.readFile(filename, 'utf8', function (err, data) {
		if (err) {
			throw err;
		}
		var jsondata = JSON.parse(data)
		jsondata.forEach(function(country) {
			if (country.name == countryname) {
				console.log(country.name + '\n' + country.topLevelDomain)
			}
		})
	})
};


module.exports.readJason = readJason




 











