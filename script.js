///SECTION nav
const hamburgerBtn = document.querySelector(".burger__button");
const nav = document.querySelector(".nav-wrap");

///SECTION poll
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
//DEFAULT EMPTY STRING FOR ARRAY PERCENTAGE ONCLICK
let percArr = "";
//Modal elements
const cardCont = document.querySelector(".cards");

//inital poll answer values
let pollAnswers = [23, 37, 14, 19];
let percentages = [];
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

// span containing poll percentages
const perc1 = document.createElement("span");
perc1.classList.add("pollpercentage");
const perc2 = document.createElement("span");
perc2.classList.add("pollpercentage");
const perc3 = document.createElement("span");
perc3.classList.add("pollpercentage");
const perc4 = document.createElement("span");
perc4.classList.add("pollpercentage");
const percArrValues = [perc1, perc2, perc3, perc4];

/////////////BUG//////////////
const span = document.createElement("span");
span.classList.add("bigfont");
span.innerText = "PLEASE choose an option.";

///////////SECTION///MODAL CARD//////////
// function openModalOnClick(modalId, sectionId) {
//   // Get the modal and the section
//   var modal = document.getElementById(modalId);
//   var section = document.getElementById(sectionId);

//   // Add a click event listener to the section
//   card.addEventListener("click", function (event) {
//     // Get the clicked element
//     var clickedElement = event.target;

//     // Position the modal relative to the clicked element
//     var rect = clickedElement.getBoundingClientRect();
//     var x = rect.left + window.scrollX;
//     var y = rect.top + window.scrollY;
//     modal.style.left = x + "px";
//     modal.style.top = y + "px";

//     // Open the modal
//     modal.style.display = "block";
//   });
// }
// To use this function, you would pass in the ID of the modal element and the ID of the section that contains the elements that should trigger the modal to open when clicked.

// For example:

// Copy code
// openModalOnClick('myModal', 'mySection');
// This would open the modal with the ID 'myModal' when any element within the section with the ID 'mySection' is clicked, and position the modal relative to the clicked element.

// I hope this helps! Let me know if you have any questions or if you'd like to see any further examples.

////SECTION///EXTERNAL FUNCTION VARIABLES///////////////
//percentagevalue
const pollPercentageText = function () {
  percArrValues.forEach((e, i) => {
    e.innerText = `${percArr[i]}%`;
  });
};
//span holding percentage
const pollPercSpan = function () {
  pollLabelsAfter.forEach((e, i) => {
    e.insertAdjacentElement("afterbegin", percArrValues[i]);
  });
};
//bars inserted in poll
const pollValueBars = function () {
  pollQDivs.forEach((e, i) => {
    e.style.width = `${percArr[i] * 1.5}%`;
  });
};

//////////SECTION  Hamburger nav listen  ///////////
hamburgerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (nav.classList.contains("nav-active")) {
    nav.style.transform = "translateY(-100vh)";
    setTimeout(() => {
      nav.classList.remove("nav-active");
    }, 1000);
  } else {
    nav.style.transform = "translateY(-100vh)";
    nav.classList.add("nav-active");
    //nav.classList.remove("hidden");
    setTimeout(() => {
      nav.style.transform = "translateY(0vh)";
    }, this.animationDelay);
  }
});

//BEGIN POLL FUNCTIONS
///////////////////////////SECTION/////////////////////////

const sum = pollAnswers.reduce((acc, cur) => acc + cur, 0);

//////Calculate initial sum of poll answers
const pollAnswersSum = function () {
  return pollAnswers.reduce((acc, cur) => acc + cur, 0);
};
pollAnswersSum();

//CALCULATE PERCENTAGE OF EACH VOTE
const votePercent = function (arr) {
  return arr.map((a) => {
    return Math.round((a / pollAnswersSum()) * 100);
  });
};

//change % array
const updatePercArr = function () {
  for (let i = 0; i < pollRadios.length; i++) {
    if (pollRadios[i].checked) {
      let currentV = pollAnswers.at(i);
      currentV++ + pollAnswers.splice(i, 1, currentV);
      pollAnswersSum();
      // UPDATE VOTE PERCENTAGE ARRAY
      percArr = votePercent(pollAnswers);
    }
  }
};
////SECTION

//POLL SUBMIT LISTENER
console.log(pollSubmitBtn);
pollSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const flexWarning = document.getElementById("poll-parent");
  //Radio button not clicked...

  const radioCheckedArr = pollRadios
    .map((e) => {
      return e.checked;
    })
    .includes(true);

  if (radioCheckedArr == false) {
    //flexWarning = Poll flexbox, see html
    flexWarning.append(span);
    return;
  } else {
    span.classList.add("no-vis");

    //hide radio btns
    pollRadios.forEach((e) => {
      e.classList.add("no-vis");
    });
    //Add text above radios
    unhideVals.forEach((e) => e.classList.remove("no-display"));
    //unhide labels on click
    pollLabelsAfter.forEach((e) => e.classList.remove("no-display"));
    //HIDES DEFAULT POLL LABELS
    pollLabels.map((el) => {
      el.remove();
    });

    //add background class first, no width
    for (let i = 0; i < pollRadios.length; i++) {
      divWraps[i].append(pollQDivs[i]);
    }

    //change % array
    updatePercArr();
    //REMOVE POLL SUBMIT BTN
    pollSubmitBtn.remove();
    // inserts text containing poll results
    pollPercentageText();
    //insert span around text so inline
    pollPercSpan();
    //set width of poll bars
    pollValueBars();
  }
});
const cardContainer = document.querySelector(".cards");
console.log(cardContainer);
const cards = document.querySelectorAll(".card");
console.log(cards);

//////SECTION exporting active lesson value
let clickedCard = 0;
export const cardEventListener = cardContainer.addEventListener("click", function (e) {
  return (clickedCard = e.target.closest("li").getAttribute("data-CardContent"));
});
export const cardActiveNum = clickedCard ?? 0;

console.log(clickedCard);
//////////////////PRACTICE BUG////////////////

///////////////////TODO/////////////////
/*

2.) if possible, setup the lesons.js and c=script.js as lessons. create a seperate module which determines which of the lessons cards was clicked, the clicked card value should be set to the active lesson on the lessons page when the link is activated. probably create a seperate module for that, and import it to the lessons page and the script.js page...
3.) setup place holder lorem lessons and test arrows to make sure it works with multiple lessons...
4.) Finish typing lessons section
5.) 
6.)
7.) on lesson card mousein Use event delegation to add a blur to the cards that are not hovered, and grow the card that is hovered. remove class on mouseout.
8.) store poll results in a database
9.) set media query for card class making the cards larger on xl screen size similar to firefox cards...
10.) learn debugger tooltip
11.) set a rate this lesson on the bottom of the lesons the rating should be displayed dynamically at the bottom of the lesson card. 
*/

//SECTION//practice on the poll

//selects the flexbox containing the poll..
//console.log(pollSubmitBtn.parentElement);

//selects last radio btn
//console.log(pollSubmitBtn.closest("input"));

//seleced wrapper sibling on radio number 4
//console.log(pollSubmitBtn.previousElementSibling);

//selects all siblings, including the button as HTML COLLECTION...
//console.log(pollSubmitBtn.parentElement.children);

//selects all siblings, including the button as an array
//console.log([...pollSubmitBtn.parentElement.children]);

//STUDY Immediately invoked function expressions...
const Cart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} of ${product} was added to the cart. Shipping cost is ${shippingCost}`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} of ${product} to order to supplier. `);
  };
  //STUDY All of the data encapsulated into the function is private data. in order to make any of it public, simply return an pbject containing the values you wish to use..
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
  //The returned object is not really stored anywhere until you store it in a variable
})();
