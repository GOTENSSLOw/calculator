const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-amount");

billInput.value = "0.0";
peopleInput.value = "1";
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);