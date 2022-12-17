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
const pollQ1After = document.getElementById("unhideQ1");
const pollQ2After = document.getElementById("unhideQ2");
const pollQ3After = document.getElementById("unhideQ3");
const pollQ4After = document.getElementById("unhideQ4");
//unhide bg array
const pollLabelsAfter = [pollQ1After, pollQ2After, pollQ3After, pollQ4After];

//// append under these wrappers
const pWrap1 = document.getElementById("poll-q1-wrap");
const pWrap2 = document.getElementById("poll-q2-wrap");
const pWrap3 = document.getElementById("poll-q3-wrap");
const pWrap4 = document.getElementById("poll-q4-wrap");
const divWraps = [pWrap1, pWrap2, pWrap3, pWrap4];
//SECTION;
////////CREATED DOM ELEMENTS//////////

const divPoll1 = document.createElement("div");
const divPoll2 = document.createElement("div");
const divPoll3 = document.createElement("div");
const divPoll4 = document.createElement("div");
const pollQDivs = [divPoll1, divPoll2, divPoll3, divPoll4];
const graphBars = pollQDivs.map((e, i, arr) => {
  e.setAttribute("id", `dp${i + 1}`);
  e.setAttribute("class", "pollColor");
});

// span containing poll percentages //BUG
const perc1 = document.createElement("span");
perc1.classList.add("pollpercentage");
const perc2 = document.createElement("span");
perc2.classList.add("pollpercentage");
const perc3 = document.createElement("span");
perc3.classList.add("pollpercentage");
const perc4 = document.createElement("span");
perc4.classList.add("pollpercentage");
const percArrValues = [perc1, perc2, perc3, perc4];

// const perc2 = document.createElement("span");
// const perc3 = document.createElement("span");
// const perc4 = document.createElement("span");

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
// const graphBars = pollQDivs.map((e, i, arr) => {
//   e.setAttribute("id", `dp${i + 1}`);
//   e.setAttribute("class", "pollColor");
// });

//adding widths equal to poll answers percentage

//POLL SUBMIT LISTENER
pollSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //hide radio btns
  addClass(pollRadios, " no-vis");
  //Add text above radios
  addClass(unhideVals, " yes-display");
  //unhide labels on click
  delClass(pollLabelsAfter, "no-display");
  //HIDES DEFAULT POLL LABELS
  pollLabels.map((el) => {
    el.remove();
  });

  let percArr = "";
  //add background class first, no width
  for (let i = 0; i < pollRadios.length; i++) {
    divWraps[i].append(pollQDivs[i]);
  }
  //BUG
  //change % array
  for (let i = 0; i < pollRadios.length; i++) {
    //change % array
    if (pollRadios[i].checked) {
      console.log(pollRadios[i].checked);
      let currentV = pollAnswers.at(i);
      currentV++ + pollAnswers.splice(i, 1, currentV);
      pollAnswersSum();
      // UPDATE VOTE PERCENTAGE ARRAY
      percArr = votePercent(pollAnswers);
      //REMOVE POLL SUBMIT BTN
      pollSubmitBtn.remove();
      console.log(percArr);
    }
  }
  //insert text into span showing percentage voted for
  percArrValues.map((e, i, arr) => {
    e.innerText = `${percArr[i]}%`;
  });
  //insert span
  pollLabelsAfter.map((e, i) => {
    e.insertAdjacentElement("afterbegin", percArrValues[i]);
  });

  pollQDivs.forEach((e, i) => {
    e.style.width = `${percArr[i] * 1.5}%`;
  });
});

///////////////////TODO/////////////////
/*
1.) Rescale css classes on nav, main h1, and lesson 2
2.) figure out lesson design pattern, sizing, etc
3.) Impliment smooth scroll between lessons, use event delegation...
4.) Finish typing lessons section
5.) enter valid email modal on poll?
6.) add recipes
7.) too many map methods check all variable arrays and individual variables, switch arrays to document.querySelectorAll('.')
8.) maybe instead of maps where you dont need the index, run a for each loop because a map is unneccessary

*/

////practice on the poll

console.log(pollSubmitBtn.parentElement);
