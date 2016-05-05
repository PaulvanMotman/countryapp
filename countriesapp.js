var countries = require ('./countryinformationapp');

countries.readJason('./countries.json', function(data) {
	console.log(data)
})

