"use strict";
//POLL VARIABLES
const pollQ1 = document.querySelector(".poll-q1");
const pollQ2 = document.querySelector(".poll-q2");
const pollQ3 = document.querySelector(".poll-q3");
const pollQ4 = document.querySelector(".poll-q4");
const pollSubmitBtn = document.querySelector(".pollBtn");

//POLL ARRAY
const pollRadioBtns = [pollQ1, pollQ2, pollQ3, pollQ4];

const btnClicked = function (e) {
  e.preventDefault();
  console.log("CLICKED");
};

console.log(pollSubmitBtn.value);
pollSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("CLICKED");
});

const clickedRadio = function (rad) {
  rad.addEventListener("click", function () {
    console.log(`${rad} was clicked`, rad.checked);
  });
};
//clickedRadio(pollQ2);

clickedRadio(pollQ1);
clickedRadio(pollQ2);
clickedRadio(pollQ3);
clickedRadio(pollQ4);

// rad.checked
