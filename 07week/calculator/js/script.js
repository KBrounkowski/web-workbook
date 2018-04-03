'use strict';

// This code is essentially word for word what's on Codepen, however with my JS properly linked the html
// does not properly recognize any function.


document.addEventListener("DOMContentLoaded", function(event) {
  function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
});
