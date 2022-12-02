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
const radioButtons = document.querySelectorAll('input[name="radioPoll"]');
//Labels
const pollQ1Label = document.getElementById("poll-q1_label");
const pollQ2Label = document.getElementById("poll-q2_label");
const pollQ3Label = document.getElementById("poll-q3_label");
const pollQ4Label = document.getElementById("poll-q4_label");
// LABEL ARRAY
const pollLabels = [pollQ1Label, pollQ2Label, pollQ3Label, pollQ4Label];
/////SECTION UNHIDE AFTER EVENT LISTENER VARIABLES
//unhide top of poll
const unhideVal1 = document.getElementById("unhideQ1");
const unhideVal2 = document.getElementById("unhideQ2");
const unhideVal3 = document.getElementById("unhideQ3");
const unhideVal4 = document.getElementById("unhideQ4");

//UNHIDE ARRAY
const unhideVals = [unhideVal1, unhideVal2, unhideVal3, unhideVal4];

////UNHIDE BACKGROUNDS
const pollQ1Bg = document.getElementById("unhideQ1");
const pollQ2Bg = document.getElementById("unhideQ2");
const pollQ3Bg = document.getElementById("unhideQ3");
const pollQ4Bg = document.getElementById("unhideQ4");
//unhide bg array
const pollBgs = [pollQ1Bg, pollQ2Bg, pollQ3Bg, pollQ4Bg];

//// append under these wrappers
const pWrap1 = document.getElementById("poll-q1-wrap");
const pWrap2 = document.getElementById("poll-q2-wrap");
const pWrap3 = document.getElementById("poll-q3-wrap");
const pWrap4 = document.getElementById("poll-q4-wrap");

//SECTION;
////////CREATED DOM ELEMENTS//////////
const divPoll1 = document.createElement("div");
const divPoll2 = document.createElement("div");
const divPoll3 = document.createElement("div");
const divPoll4 = document.createElement("div");
const pollQDivs = [divPoll1, divPoll2, divPoll3, divPoll4];

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

//REMOVE A CLASS FUNCTION
//BUG
const delClass = function (arr, delClass) {
  arr.map((el) => el.classList.remove(delClass));
};
/*
1.) loop over array of pollQApps add: 
divPoll[i].setAttribute("id", "dp1");
divPoll[i].setAttribute("class", "pollColor");
pWrap[i].append(e)
console.log
3.)loop over array of new div elements and set them to have a style of width = percentageArr[i]

 
*/
//SECTION
let pollAnswers = [23, 37, 14, 19];
let percentages = [];
const sum = pollAnswers.reduce((acc, cur) => acc + cur, 0);

//////Calculate initial sum of poll answers
const pollAnswersSum = function () {
  return pollAnswers.reduce((acc, cur) => acc + cur, 0);
};
pollAnswersSum();

//CALCULATE PERCENTAGE OF EACH VOTE
const votePercent = function (arr) {
  return arr.map((a, i, array) => {
    return Math.round((a / pollAnswersSum()) * 100);
  });
};

////SECTION
//ADDING CLASSES AND APPENDING poll graph bars
const graphBars = function (arr1, arr2) {
  arr1.map((e, i, arr) => {
    e.setAttribute("id", `dp${i + 1}`);
    e.setAttribute("class", "pollColor");
  });
};
//adding widths equal to poll answers percentage

//POLL SUBMIT LISTENER
pollSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //hide radio btns
  addClass(pollRadios, " no-display");
  //Add text above radios
  addClass(unhideVals, " yes-display");
  //unhide backgrounds from poll
  delClass(pollBgs, "no-display");

  let percArr = "";
  //Update answers array, and percentages array
  for (let i = 0; i < pollRadios.length; i++) {
    if (pollRadios[i].checked) {
      //UPDATE POLL ANSWERS ARRAY
      let currentV = pollAnswers.at(i);
      currentV++ + pollAnswers.splice(i, 1, currentV);
      pollAnswersSum();
      //Call func updating percentage of votes array
      votePercent(pollAnswers);
      console.log(votePercent(pollAnswers), pollAnswers);

      pollLabels.map((el) => {
        el.remove();
      });
      graphBars(pollQDivs);
      //four divs keep the size the same during click
      pWrap1.append(divPoll1);
      pWrap2.append(divPoll2);
      pWrap3.append(divPoll3);
      pWrap4.append(divPoll4);
    }
    // UPDATE VORE PERCENTAGE ARRAY
    percArr = votePercent(pollAnswers);

    // SET WIDTHS OF BARS
  }
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
