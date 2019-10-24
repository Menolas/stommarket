'use strict';

var formMobileButton = document.querySelector(".slider-paginator .btn");
var paginatorMarkers = document.querySelectorAll(".slider-paginator__item");
var greeting = document.querySelector(".greeting");
var formLoginPart = document.querySelector(".slider__item--login");
var formLoginSabmitButton = formLoginPart.querySelector("input[type='submit']");
var formSubmitPart = document.querySelector(".slider__item--submit");

formMobileButton.addEventListener("click", function () {
  formLoginPart.classList.add("slider__item--shown");
  greeting.classList.add("greeting--closed");
  formMobileButton.remove();
  paginatorMarkers[1].classList.add("slider-paginator__item--active");
  paginatorMarkers[0].classList.remove("slider-paginator__item--active");
});

formLoginSabmitButton.addEventListener("click", function () {
  formLoginPart.classList.remove("slider__item--shown");
  formSubmitPart.classList.add("slider__item--shown");
  paginatorMarkers[2].classList.add("slider-paginator__item--active");
  paginatorMarkers[1].classList.remove("slider-paginator__item--active");
});
