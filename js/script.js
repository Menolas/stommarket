'use strict';

var sliderPaginator = document.querySelector(".slider-paginator");
var paginatorMarkers = sliderPaginator.querySelectorAll(".slider-paginator__item");
var formSwitchButton = document.querySelector(".greeting .switch__btn");
var sliderElements = document.querySelectorAll(".slider__item");
var formLoginButton = document.querySelector(".form-login__btn");

formSwitchButton.addEventListener("click", function () {
  sliderElements[0].classList.remove("slider__item--shown");
  sliderElements[0].classList.add(".slider__item--closed");
  sliderElements[1].classList.add("slider__item--shown");
  paginatorMarkers[1].classList.add("slider-paginator__item--active");
  paginatorMarkers[0].classList.remove("slider-paginator__item--active");
  paginatorMarkers[1].classList.remove("slider-paginator__item--strange-unknowing-blue-point");
});

formLoginButton.addEventListener("click", function () {
  sliderElements[1].classList.remove("slider__item--shown");
  sliderElements[1].classList.add("slider__item--closed");
  sliderElements[2].classList.add("slider__item--shown");

  paginatorMarkers[2].classList.add("slider-paginator__item--active");
  paginatorMarkers[1].classList.remove("slider-paginator__item--active");
});
