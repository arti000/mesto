//Импортируем class Card
import { Card } from './Card.js';
import { getFormReadyForNewLaunch, config } from './validate.js';

//Переменные, связанные с попапом редактирования
const popupProfileElement = document.querySelector('.edit-popup');
const profileFormElement = popupProfileElement.querySelector('.popup__content')
const popupProfileOpenButtonElement = document.querySelector('.profile__open-popup');
const popupProfileCloseButtonElement = popupProfileElement.querySelector('.popup__close');
const nameInput = popupProfileElement.querySelector('.popup__input_type_title');
const jobInput = popupProfileElement.querySelector('.popup__input_type_subtitle');

//Переменные, связанные со значениями в секции profile
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

//Переменные, связанные с newCardPopup
const newCardPopupElement = document.querySelector('.add-popup');
const newCardFormElement = newCardPopupElement.querySelector('.popup__content')
const popupNewCardOpenButtonElement = document.querySelector('.profile__add-button');
const popupNewCardCloseButtonElement = newCardPopupElement.querySelector('.popup__close');
const cardNameInput = newCardPopupElement.querySelector('.popup__input_type_title');
const linkInput = newCardPopupElement.querySelector('.popup__input_type_subtitle');
const cardsList = document.querySelector('.cards');

//Переменные, связанные с попапом картинкой
const previewPopupElement = document.querySelector('.image-popup');
const previewPopupCloseButtonElement = previewPopupElement.querySelector('.popup__close');


//Универсальные функции открытия и закрытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keyup", closePopupByClickEsc);
};

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keyup", closePopupByClickEsc);
};


//Функция открытия и закрытия попапа при нажатии на Esc
const closePopupByClickEsc = (event) => {
  if (event.code === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//Функция закрытия попапа при нажатии на оверлей
const closePopupByClickOverlay = (event) => {
  if (event.target === event.currentTarget) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

//Функция, вставляющая значения со страницы в popupProfile при открытии.
const pasteValuesToPopupProfileInputs = function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  getFormReadyForNewLaunch(popupProfileElement, config);
  openPopup(popupProfileElement);
}

//Функция открытия попапа создания карточки
const openNewCardPopup = function () {
  newCardFormElement.reset();
  getFormReadyForNewLaunch(newCardPopupElement, config);
  openPopup(newCardPopupElement);
}

//Функция, сохраняющая новые значения и закрывающая popupProfile.
const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfileElement);
}

//Функция, добавляющая карточку в DOM
function addCard(item, cardSelector) {
  const card = new Card(item, cardSelector);
  const cardElement = card.createCard();
  cardsList.prepend(cardElement);
}

//Добавление начальных карточек
initialCards.forEach(function (item) {
  addCard(item, '.card-template');
});

//Функция, сохраняющая значения карточки и закрывающая ее.
const handleNewCardPopupSubmit = function (evt) {
  evt.preventDefault();
  addCard({ name: cardNameInput.value, link: linkInput.value }, '.card-template');
  closePopup(newCardPopupElement);
};

//Обработчики, открывающие и закрывающие popupProfile после нажатия.
popupProfileOpenButtonElement.addEventListener('click', pasteValuesToPopupProfileInputs);
popupProfileCloseButtonElement.addEventListener('click', function () {
  closePopup(popupProfileElement);
});
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
popupProfileElement.addEventListener('click', closePopupByClickOverlay);

//Обработчики, открывающие и закрывающие попап добавления карточки после нажатия
popupNewCardOpenButtonElement.addEventListener('click', openNewCardPopup);
popupNewCardCloseButtonElement.addEventListener('click', function () {
  closePopup(newCardPopupElement);
});
newCardFormElement.addEventListener('submit', handleNewCardPopupSubmit);
newCardPopupElement.addEventListener('click', closePopupByClickOverlay);

//Обработчики закрывающие previewPopup
previewPopupCloseButtonElement.addEventListener('click', function () {
  closePopup(previewPopupElement)
});
previewPopupElement.addEventListener('click', closePopupByClickOverlay);

export {openPopup, previewPopupElement};
