"use strict";
/////SECTION POLL VARIABLES
//Radio buttons

const pollQ1Radio = document.getElementById("lessons");
const pollQ2Radio = document.getElementById("poll-recipes");
const pollQ3Radio = document.getElementById("poll-recipe-book");
const pollQ4Radio = document.getElementById("poll-users-sec");
//poll submit btn
const pollSubmitBtn = document.querySelector(".pollBtn");

// radio button array
const pollRadios = [pollQ1Radio, pollQ2Radio, pollQ3Radio, pollQ4Radio];

//Labels
const pollQ1Label = document.getElementById("poll-q1_label");
const pollQ2Label = document.getElementById("poll-q2_label");
const pollQ3Label = document.getElementById("poll-q3_label");
const pollQ4Label = document.getElementById("poll-q4_label");
// LABEL ARRAY
const pollLabels = [pollQ1Label, pollQ2Label, pollQ3Label, pollQ4Label];

//unhide top of poll
const unhideVal1 = document.getElementById("unhideQ1");
const unhideVal2 = document.getElementById("unhideQ2");
const unhideVal3 = document.getElementById("unhideQ3");
const unhideVal4 = document.getElementById("unhideQ4");

//UNHIDE ARRAY
const unhideVals = [unhideVal1, unhideVal2, unhideVal3, unhideVal4];

const btnClicked = function (e) {
  e.preventDefault();
  console.log("CLICKED");
};

//ADD A CLASS FUNCTION
const addClass = function (arr, addClass) {
  const newV = [];

  arr.map((el) => {
    newV.push((el.className += addClass));
  });
};

/* 1.)create variable pollAnswers which contains values selected in the poll
   2.)create a variable percentageVotes that shallow copies a map of pollAnswers to determine what percentage of the poll each value equates to
   3.) modify poll q bg class as a transition which eases-in, and fills to a width === percentageVotes
   4..) loop answers array, if radio is checked at position splice poll answers at i, or try pollAnswers[i]++ 
  */

//SECTION
const pollAnswers = [22, 25, 21, 27];

const pollAnswersSum = pollAnswers.reduce((acc, cur) => acc + cur, 0);

const percentageVotes = pollAnswers.map((a, i, array) => {
  return Math.trunc((a / pollAnswersSum) * 100);
});
console.log(percentageVotes);
//BUG

//POLL SUBMIT LISTENER
pollSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //Remove display of text
  addClass(pollLabels, " no-display");
  //hide radio btns
  addClass(pollRadios, " no-display");
  //Add text above radios
  addClass(unhideVals, " yes-display");

  //Update answers array..
  const radioButtons = document.querySelectorAll('input[name="radioPoll"]');
  pollRadios.filter;
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
