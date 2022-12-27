"use strict";
const lessons = document.querySelectorAll(".lessons__content");

const arrowBtnContainer = document.querySelector(".lessons__button-container");
console.log(arrowBtnContainer);
const arrowBtnLeft = document.querySelector(".lesson-arrow__btn--left");
const arrowBtnRight = document.querySelector(".lesson-arrow__btn--right");
console.log(arrowBtnRight, arrowBtnLeft);
const eventParent = document.querySelector(".les-parent");
let total = 0;

let activeLesson = 0;
console.log(lessons.length);
const calcNewTotal = function (e) {
  console.log(e.clicked);
};
calcNewTotal();
arrowBtnRight.addEventListener("click", function (e) {
  if (total === lessons.length - 1) return;

  total++;

  activeLesson = [...lessons].at(`${total}`);

  //change total

  console.log(total);
  lessons.forEach((les) => {
    les.classList.remove("lessons__content--active");
    les.classList.add("lessons-op");
  });

  //show active

  activeLesson.classList.add("lessons__content--active");

  console.log(activeLesson.style.opacity);
});
const totalL = arrowBtnLeft.addEventListener("click", function (e) {
  //change total
  console.log(total);
  if (total > 0) {
    total === total - 1;
  }
  activeLesson = [...lessons].at(`${total}`);
  console.log(total);
  console.log(activeLesson);
  if ((total = 0)) return;

  lessons.forEach((les) => {
    les.classList.remove("lessons__content--active");
  });
  //show active
  activeLesson.classList.add("lessons__content--active");
  activeLesson.style.opacity = "1";
  console.log(total);
});

//STUDY GUard clause
/*
const clicked = e.target.closest('.parent-tab');
//guard clause stops the res of the code from being executed if a condition is not met
if (!clicked) return
*/
/////////SECTION Right Arrow event listener
// arrowBtnRight.addEventListener("click", function (e) {
//   e.preventDefault();
//   lessons[index].classList.add("hidden");
//   console.log(lessons[index].nextElementSibling);
//   lessons[index].nextElementSibling.classList.remove("hidden");
//   index++;
//   console.log(lessons.length);
// });

// arrowBtnLeft.addEventListener("click", function (e) {
//   e.preventDefault();
//   arrowBtnRight.removeEventListener;
//   lessons[index].classList.add("hidden");
//   console.log(lessons[index].previousElementSibling);
//   lessons[index].previousElementSibling.classList.remove("hidden");
//   index--;
//   console.log(" clicked");
// });

// function handleClickRight(event) {
//   event.preventDefault();
//   console.log(event);
//   console.log(lessons);
//   // Loop lessons, add/remove class 'hidden'
//   lessons.forEach((node, i, arr) => {
//     // Log more!
//     console.log("forEach - ", node, i, arr);
//     if (i === 0) {
//       node.classList.add("hidden");
//       debugger;
//       lessons[i]; //BUG
//     }
//     if (i == arr.length - 1) {
//       arr[i].classList.remove("hidden");
//       console.log(arr[i]);
//     }
//   });
// }
// arrowBtnRight.addEventListener("click", handleClickRight);

// arrowBtnRight.addEventListener("click", function (e) {
//   lessons.forEach((el, i, arr) => {
//     if (i == 0) {
//       el.classList.add("no-vis");
//     }
//     if (i == arr.length - 1) {
//       arr[i].classList.remove("hidden");
//     }
//   });
// });
