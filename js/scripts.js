const exchangeRates = {
    "usd": {
      "eur": 0.91,
      "aud": 1.48,
      "krw": 1203.00,
      "vnd": 23200.70,
    },
    "eur": {
      "usd": 1.09,
      "aud": 1.62 ,
      "krw": 1316.21,
      "vnd": 25383.96,
    },
    "aud": {
      "usd": 0.68,
      "eur": 0.62,
      "krw": 813.58,
      "vnd": 15690.63,
    },
    "krw": {
      "usd": 0.00083,
      "aud": 0.0012,
      "eur": 0.00076,
      "vnd": 19.29,
    },
    "vnd": {
      "krw": 0.052,
      "usd": 0.000043,
      "aud": 0.000064,
      "eur": 0.000039,
    },
  }

let amount= document.getElementById("amountTextBox");
let covertButton= document.getElementById("convertButton");
let resultArea= document.getElementById("resultArea");
let fromSelector= document.getElementById("fromCurrency");
let toSelector=document.getElementById("toCurrency");


covertButton.addEventListener("click",convert);

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }

  let fromCurrency;
  let toCurrency;
  let money;


async function convert() {
  money = amount.value;
  fromCurrency= fromSelector[fromSelector.selectedIndex].value;
  toCurrency= toSelector[toSelector.selectedIndex].value;
  let currency= fromCurrency+"_"+toCurrency;
    console.log(currency);
    let url = ('https://free.currencyconverterapi.com/api/v6/convert?q=' + currency + '&compact=ultra&apiKey=02090325190c07d6148f');
    let resultapi = await fetch(url);
    let json = await resultapi.json();
    let rate = json[currency];
    console.log("this is the rate",rate);
    let exchangedAmount = rate*money;
    console.log ("converted amount is ",exchangedAmount);
    updateResults(json);
    resultArea.innerHTML = formatCurrency(toCurrency,exchangedAmount);
}

function updateResults(response) {
  console.log(response);
}

