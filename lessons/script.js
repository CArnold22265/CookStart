"use strict";
const lessons = document.querySelectorAll(".lessons__content");

const arrowBtnContainer = document.querySelector(".lessons__button-container");
console.log(arrowBtnContainer);
const arrowBtnLeft = document.querySelector(".lesson-arrow__btn--left");
const arrowBtnRight = document.querySelector(".lesson-arrow__btn--right");
console.log(arrowBtnRight, arrowBtnLeft);
const eventParent = document.querySelector(".les-parent");

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
