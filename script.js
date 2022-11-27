"use strict";
/////SECTION POLL VARIABLES
//Radio buttons
const pollQ1Radio = document.querySelector(".poll-q1");
const pollQ2Radio = document.querySelector(".poll-q2");
const pollQ3Radio = document.querySelector(".poll-q3");
const pollQ4Radio = document.querySelector(".poll-q4");
const pollSubmitBtn = document.querySelector(".pollBtn");

//Labels
const pollQ1Label = document.getElementById("poll-q1_label");
const pollQ2Label = document.getElementById("poll-q2_label");
const pollQ3Label = document.getElementById("poll-q3_label");
const pollQ4Label = document.getElementById("poll-q4_label");
console.log(pollQ1Label);
//POLL ARRAY
const pollRadioBtns = [pollQ1Radio, pollQ2Radio, pollQ3Radio, pollQ4Radio];

const btnClicked = function (e) {
  e.preventDefault();
  console.log("CLICKED");
};

/*
BUG
1.) ADD CLASS OF HIDDEN TO DIVS ABOVE LABELS
2.) REMOVE HIDDEN CLASS IN EVENT LISTENER BELOW
3.) CREATE ARRAY LOOPS EXTERNALLY FROM FUNCTION BELOW TO KEEP CODE DRY
4.)CALL LOOPS IN FUNCTION BELOW
5.) Add class of  no display to radio buttons after click.
6.)hide yellow backgrounds...
7.) function which reads poll scores as array values and fills the backgrounds accordingly 
8.) create functions with paramaters of class to be removed and variable storing the element to remove the class from.

*/
console.log(pollSubmitBtn.value);
pollSubmitBtn.addEventListener("click", function (e) {
  //Remove display of text
  pollQ1Label.classList.add("no-display");
  pollQ2Label.classList.add("no-display");
  pollQ3Label.classList.add("no-display");
  pollQ4Label.classList.add("no-display");
  e.preventDefault();
  console.log("CLICKED");
  console.log(pollQ1Label.classList);
});

const clickedRadio = function (rad) {
  rad.addEventListener("click", function () {
    console.log(`${rad} was clicked`, rad.checked);
  });
};
//clickedRadio(pollQ2);

clickedRadio(pollQ1Radio);
clickedRadio(pollQ2Radio);
clickedRadio(pollQ3Radio);
clickedRadio(pollQ4Radio);

// rad.checked
