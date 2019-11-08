'use strict';

var sliderPaginator = document.querySelector('.slider-paginator');
var paginatorMarkers = sliderPaginator.querySelectorAll('.slider-paginator__item');
var formLogin = document.querySelector('.form-login');
var formSubmit = document.querySelector('.form-submit');
var formSwitchButton = document.querySelector('.greeting .greeting__btn');
var sliderElements = document.querySelectorAll('.slider__item');
var formLoginButton = formLogin.querySelector('.form-login__btn');
var phoneInput = formLogin.querySelector('input[name="phone-number"]');
var nameInput = formSubmit.querySelector('input[name="name"]');
var occupationInput = formSubmit.querySelector('input[name="occupation"]');
var cityInput = formSubmit.querySelector('input[name="city"]');
var addInputButton = formLogin.querySelector('.form-login__add-phone-button');
var formLoginBlock = formLogin.querySelector('.form__login-block');
var RED_BORDER = '1px solid red';

var getBorder = function (input, borderStyle) {
  input.style.border = borderStyle;
};

var inputTemplate = document.querySelector('template').content;

var renderInput = function () {
  var inputElement = inputTemplate.cloneNode(true);
  return inputElement;
};

// слайдер

formSwitchButton.addEventListener('click', function () {
  sliderElements[0].classList.remove('slider__item--shown');
  sliderElements[0].classList.add('slider__item--closed');
  sliderElements[1].classList.add('slider__item--shown');
  paginatorMarkers[1].classList.add('slider-paginator__item--active');
  paginatorMarkers[0].classList.remove('slider-paginator__item--active');
  paginatorMarkers[1].classList.remove('slider-paginator__item--strange-unknowing-blue-point');
});

addInputButton.addEventListener('click', function () {
  var inputElement = renderInput();
  formLogin.insertBefore(inputElement, formLoginBlock);
  formLogin.removeChild(addInputButton);
});

// валидация

phoneInput.addEventListener('invalid', function () {
  getBorder(phoneInput, RED_BORDER);
  if (phoneInput.validity.patternMismatch) {
    phoneInput.setCustomValidity('Номер телефона должен состоять из цифр');
  } else if (phoneInput.validity.tooShort) {
    phoneInput.setCustomValidity('Номер телефона должен состоять не менее, чем из 11 цифр');
  } else if (phoneInput.validity.tooLong) {
    phoneInput.setCustomValidity('Номер телефона должен состоять не более, чем из 11 цифр');
  } else if (phoneInput.validity.valueMissing) {
    phoneInput.setCustomValidity('Обязательное поле');
  } else {
    phoneInput.setCustomValidity('');
  }
});

nameInput.addEventListener('invalid', function () {
  getBorder(nameInput, RED_BORDER);
  if (nameInput.validity.patternMismatch) {
    nameInput.setCustomValidity('Ваше имя должно состоять из букв');
  } else if (nameInput.validity.tooShort) {
    nameInput.setCustomValidity('Ваше имя должно быть не короче, чем из двух букв');
  } else if (nameInput.validity.valueMissing) {
    nameInput.setCustomValidity('Обязательное поле');
  } else {
    nameInput.setCustomValidity('');
  }
});

occupationInput.addEventListener('invalid', function () {
  getBorder(occupationInput, RED_BORDER);
  if (occupationInput.validity.patternMismatch) {
    occupationInput.setCustomValidity('Название вашей должности должно состоять из букв');
  } else if (occupationInput.validity.tooShort) {
    occupationInput.setCustomValidity('Название вашей должности должно быть не короче, чем из двух букв');
  } else if (occupationInput.validity.valueMissing) {
    occupationInput.setCustomValidity('Обязательное поле');
  } else {
    occupationInput.setCustomValidity('');
  }
});

cityInput.addEventListener('invalid', function () {
  getBorder(cityInput, RED_BORDER);
  if (cityInput.validity.patternMismatch) {
    cityInput.setCustomValidity('Название вашего города должно состоять из букв');
  } else if (cityInput.validity.tooShort) {
    cityInput.setCustomValidity('Название вашего города должно состоять не менее, чем из двух букв');
  } else if (cityInput.validity.valueMissing) {
    cityInput.setCustomValidity('Обязательное поле');
  } else {
    cityInput.setCustomValidity('');
  }
});

/*

formLogin.addEventListener('submit', function (evt) {
  if (!formLogin.checkValidity()) {
    return;
  }

  sliderElements[1].classList.remove('slider__item--shown');
  sliderElements[1].classList.add('slider__item--closed');
  sliderElements[2].classList.add('slider__item--shown');

  paginatorMarkers[2].classList.add('slider-paginator__item--active');
  paginatorMarkers[1].classList.remove('slider-paginator__item--active');
});

formSubmit.addEventListener('submit', function (evt) {
  if (!formSubmit.checkValidity()) {
    return;
  }
});*/