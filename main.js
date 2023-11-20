const coinnumber = document.querySelector("#howmuchcoins");
const coinkurs = document.querySelector("#bilonkurs");
const moneynumber = document.querySelector("#howmanymoney");
const moneykurs = document.querySelector("#banknotkurs");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();

  const coinvalue = coinnumber.value;
  const kurscoin = coinkurs.value;
  const moneyvalue = moneynumber.value;
  const kursmoney = moneykurs.value;

  parseInt(coinvalue);
  parseInt(kurscoin);
  parseInt(moneyvalue);
  parseInt(kursmoney);

  const coinsliczenie = kurscoin * coinvalue;
  display.innerHTML = `${coinsliczenie.toFixed(2)} PLN`;
  display.style.color = "green";
  display.style.fontSize = "20px";

  const moneyliczenie = kursmoney * moneyvalue;
  display2.innerHTML = `${moneyliczenie.toFixed(2)} PLN`;
  display2.style.color = "green";
  display2.style.fontSize = "20px";

  const allliczenie = coinsliczenie + moneyliczenie;
  display3.innerHTML = `${allliczenie.toFixed(2)} PLN`;
  display3.style.color = "green";
  display3.style.fontSize = "20px";
});
