// Require the readJason function from countryinformationapp
var countries = require ('./readjason.js');
// Store the third input from the terminal in a variable
var countryname = process.argv[2]

// call the readJason function
countries.readJason('./countries.json', function (data) {
	// creating a callback where data is the content of countries.json. Loop through the array of objects with forEach.
	data.forEach(function(country) {
		// for each object (country) check if its equal to the input from the terminal
		if (country.name == countryname) {
			// if so, console.log the following data:
			console.log("Country: " + country.name + '\n' + "Tld: " + country.topLevelDomain)
		}
	})
})