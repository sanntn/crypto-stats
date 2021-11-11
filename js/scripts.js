
document.getElementById('crypto').addEventListener('change', function () {
    cryptoValue = document.getElementById('crypto').value;
    calcValues()
});

document.getElementById('fiat').addEventListener('change', function () {
    fiatValue = document.getElementById('fiat').value;
    calcValues()
});


function calcValues() {

    let cryptoValue = document.getElementById('crypto').value;
    let fiatValue = document.getElementById('fiat').value;

    if (cryptoValue.length == 3 && fiatValue.length == 3) {
        cryptoPriceSpot('https://api.coinbase.com/v2', cryptoValue, fiatValue);
    }

}


async function cryptoPriceSpot(url, ticker, currency) {

    url = `${url}/prices/${ticker}-${currency}/spot`;

    let response = await fetch(url);
    let res = await response.json();

    res = res.data.amount;
    res = Math.round(parseFloat(res) * 100) / 100;

    writePrice(res);

}


function writePrice(priceValue) {

    let price = document.querySelector('.table-elements .price');

    price.innerText = priceValue;

}