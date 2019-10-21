'use strict';

var formMobileButton = document.querySelector(".slider__control .btn");
var greeting = document.querySelector(".greeting");
var formLoginPart = document.querySelector(".slider__item--login");
var formLoginSabmitButton = formLoginPart.querySelector("input[type='submit']");
var formSubmitPart = document.querySelector(".slider__item--submit");

console.log(formMobileButton);

formMobileButton.addEventListener("click", function () {
  formLoginPart.classList.add("slider__item--shown");
  greeting.classList.add("greeting--closed");
  formMobileButton.remove();
});

formLoginSabmitButton.addEventListener("click", function () {
  formLoginPart.classList.remove("slider__item--shown");
  formSubmitPart.classList.add("slider__item--shown");
});
