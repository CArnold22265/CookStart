"use strict";
console.log("script is connected");

const pollSubmitBtn = document.querySelector(".pollBtn");

const btnClicked = function (e) {
  e.preventDefault();
  console.log("CLICKED");
};
console.log(pollSubmitBtn.value);
pollSubmitBtn.addEventListener("click", function (e) {
  //e.preventDefault();
  console.log("CLICKED");
});
