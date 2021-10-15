var baseUrl =  "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankinge6fe1fcb1ca4d4ea81769e5568d5363b3a680d7d13a94ade";

fetch(`${proxyUrl}${baseUrl}`,{
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if(response.ok){
        response.json().then((json) => {
            console.log(json)
            let coinsData = json.data.coins

            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }

            // For Loop Starts
            coinsData.forEach((coin) => {
                cryptoCoins += "<tr class=border-b>"
                cryptoCoins += `<td> ${coin.rank} </td>`;
                cryptoCoins += `<td> ${coin.name} <br> <span class="text-sm font-semibold text-red-500">${coin.symbol}</span></td>`;
                cryptoCoins += `<td> $${Math.round(coin.price).toPrecision(5)} </td>`;
                cryptoCoins += `<td> ${coin.change} </td>`;"</tr>";
            })
            document.getElementById("data").innerHTML = cryptoCoins
        })
    }
}).catch((error) =>{
    console.log(error)
})

console.log(data)