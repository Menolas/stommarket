'use strict';

var sliderPaginator = document.querySelector('.slider-paginator');
var paginatorMarkers = sliderPaginator.querySelectorAll('.slider-paginator__item');
var formLogin = document.querySelector('.form-login');
var formSubmit = document.querySelector('.form-submit');
var formSwitchButton = document.querySelector('.greeting .greeting__btn');
var sliderElements = document.querySelectorAll('.slider__item');
var formLoginButton = formLogin.querySelector('.form-login__btn');
var phoneInput1 = formLogin.querySelector('input[name="phone-number-1"]');
var phoneInput2 = formLogin.querySelector('input[name="phone-number-2"]');
var nameInput = formSubmit.querySelector('input[name="name"]');
var occupationInput = formSubmit.querySelector('input[name="occupation"]');
var cityInput = formSubmit.querySelector('input[name="city"]');
var addInputButton = formLogin.querySelector('.form-login__add-phone-button');
var formLoginBlock = formLogin.querySelector('.form__login-block');
var goBackButton = formSubmit.querySelector('.form__btn-wrap button');
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

phoneInput1.addEventListener('invalid', function () {
  getBorder(phoneInput1, RED_BORDER);
  if (phoneInput1.validity.patternMismatch) {
    phoneInput1.setCustomValidity('Номер телефона должен состоять из цифр');
  } else if (phoneInput1.validity.tooShort) {
    phoneInput1.setCustomValidity('Номер телефона должен состоять не менее, чем из 11 цифр');
  } else if (phoneInput1.validity.tooLong) {
    phoneInput1.setCustomValidity('Номер телефона должен состоять не более, чем из 11 цифр');
  } else if (phoneInput1.validity.valueMissing) {
    phoneInput1.setCustomValidity('Обязательное поле');
  } else {
    phoneInput1.setCustomValidity('');
  }
});

if (phoneInput2) {
  phoneInput2.addEventListener('invalid', function () {
    getBorder(phoneInput2, RED_BORDER);
    if (phoneInput2.validity.patternMismatch) {
      phoneInput2.setCustomValidity('Номер телефона должен состоять из цифр');
    } else if (phoneInput2.validity.tooShort) {
      phoneInput2.setCustomValidity('Номер телефона должен состоять не менее, чем из 11 цифр');
    } else if (phoneInput2.validity.tooLong) {
      phoneInput2.setCustomValidity('Номер телефона должен состоять не более, чем из 11 цифр');
    } else {
      phoneInput2.setCustomValidity('');
    }
  });
};

nameInput.addEventListener('invalid', function () {
  getBorder(nameInput, RED_BORDER);
  if (nameInput.validity.patternMismatch) {
    nameInput.setCustomValidity('Ваше имя должно состоять из букв');
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
  } else if (cityInput.validity.valueMissing) {
    cityInput.setCustomValidity('Обязательное поле');
  } else {
    cityInput.setCustomValidity('');
  }
});

formLogin.addEventListener('submit', function (evt) {
  if (!formLogin.checkValidity()) {
    return;
  }
  if (formLogin.checkValidity()) {
  sliderElements[1].classList.remove('slider__item--shown');
  sliderElements[1].classList.add('slider__item--closed');
  sliderElements[2].classList.add('slider__item--shown');
  if (sliderElements[2].classList.contains('slider__item--closed')) {
    sliderElements[2].classList.remove('slider__item--closed');
  }

  paginatorMarkers[2].classList.add('slider-paginator__item--active');
  paginatorMarkers[1].classList.remove('slider-paginator__item--active');
  }
  evt.preventDefault();
});

goBackButton.addEventListener('click', function () {
  sliderElements[2].classList.remove('slider__item--shown');
  sliderElements[2].classList.add('slider__item--closed');
  sliderElements[1].classList.remove('slider__item--closed');
  sliderElements[1].classList.add('slider__item--shown');
});

formSubmit.addEventListener('submit', function (evt) {
  if (!formSubmit.checkValidity()) {
    return;
  }
  evt.preventDefault();
});