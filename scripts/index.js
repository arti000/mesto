//Объявляем переменные
let formOpenButtonElement = document.querySelector('.profile__open-popup');
let formElement = document.querySelector('.popup');
let formCloseButtonElement = formElement.querySelector('.popup__close');

//Функции, делающие видимым и скрывающая всплывающее окно
let togglePopupVisibility = function () {
  formElement.classList.toggle('popup_opened');
}

//Функции, открывающая и закрывающая всплывающее окно после нажатия
formOpenButtonElement.addEventListener('click', togglePopupVisibility);
formCloseButtonElement.addEventListener('click', togglePopupVisibility);

// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_title');
let jobInput = formElement.querySelector('.popup__input_subtitle');// Воспользуйтесь инструментом .querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault();

  //     // Получите значение полей jobInput и nameInput из свойства value

  //     // Выберите элементы, куда должны быть вставлены значения полей

  //     // Вставьте новые значения с помощью textContent
}

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);
