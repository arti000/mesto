//Переменные, связанные со всплывающим окном
let formElement = document.querySelector('.popup');
let formOpenButtonElement = document.querySelector('.profile__open-popup');
let formCloseButtonElement = formElement.querySelector('.popup__close');
let formSubmitButtomElement = formElement.querySelector('.popup__submit');
let nameInput = formElement.querySelector('.popup__input_title');
let jobInput = formElement.querySelector('.popup__input_subtitle');

//Переменные, связанные со значениями в секции profile
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

//Функции, делающие видимым и скрывающая всплывающее окно.
const openForm = function () {
  formElement.classList.add('popup_opened');
}

const closeForm = function () {
  formElement.classList.remove('popup_opened');
}

//Функция, делающая сброс полей до первоначальных значений и скрывающая окно.
const resetForm = function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  closeForm();
}

//Функция, скрывающая всплывающее окно при клике на затемненную область.
const closeFormByClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  resetForm();
}

//Функция, сохраняющая новые значения и закрывающая всплывающее окно.
const formSubmitHandler = function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeForm();
}

//Обработчики, открывающие и закрываюие всплывающее окно после нажатия.
formOpenButtonElement.addEventListener('click', openForm);
formCloseButtonElement.addEventListener('click', resetForm);
formSubmitButtomElement.addEventListener('click', formSubmitHandler);
formElement.addEventListener('click', closeFormByClickOverlay);
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    resetForm();
  }
});
