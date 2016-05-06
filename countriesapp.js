var countries = require ('./countryinformationapp');
var countryname = process.argv[2]

countries.readJason('./countries.json', function (data) {
	data.forEach(function(country) {
		if (country.name == countryname) {
			console.log("Country: " + country.name + '\n' + "Tld: " + country.topLevelDomain)
		}
	})
})

