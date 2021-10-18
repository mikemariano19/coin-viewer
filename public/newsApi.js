var baseUrl =  "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankinge6fe1fcb1ca4d4ea81769e5568d5363b3a680d7d13a94ade";

fetch("https://coingecko.p.rapidapi.com/simple/price?ids=%3CREQUIRED%3E&vs_currencies=%3CREQUIRED%3E", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});