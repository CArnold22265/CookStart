"use strict";
///SECTION nav
const hamburgerBtn = document.querySelector(".burger__button");
const nav = document.querySelector(".nav-wrap");

const lessons = document.querySelectorAll(".lessons__content");

const arrowBtnContainer = document.querySelector(".lessons__button-container");
console.log(arrowBtnContainer);
const arrowBtnLeft = document.querySelector(".lesson-arrow__btn--left");
const arrowBtnRight = document.querySelector(".lesson-arrow__btn--right");
console.log(arrowBtnRight, arrowBtnLeft);
const eventParent = document.querySelector(".les-parent");
let total = 0;

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

////lighten other nav items listener
nav.addEventListener("click", function (e) {
  console.log(e.target.closest("a"));
});

arrowBtnRight.addEventListener("click", function (e) {
  if (total === lessons.length - 1) return;

  total++;
  let activeLesson = [...lessons].at(`${total}`);
  activeLesson = [...lessons].at(`${total}`);

  //change total
  lessons.forEach((les) => {
    les.classList.remove("lessons__content--active");
    les.style.opacity = "0";
  });

  //show active
  activeLesson.classList.add("lessons__content--active");
  setTimeout(() => {
    activeLesson.style.opacity = 1;
  }, this.animationDelay + 20);
  console.log(activeLesson, total);
});

arrowBtnLeft.addEventListener("click", function (e) {
  if (total === 0) return;
  //change total

  total == total--;
  let activeLesson = [...lessons].at(`${total}`);

  lessons.forEach((les) => {
    les.classList.remove("lessons__content--active");
    les.style.opacity = "0";
  });
  //show active
  activeLesson.classList.add("lessons__content--active");

  setTimeout(() => {
    activeLesson.style.opacity = 1;
  }, this.animationDelay + 20);

  console.log(activeLesson, total);
  //activeLesson.style(opacity) = '1';
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
//   lessons[index].nextElementSibling.classList.removecxd("hidden");
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
