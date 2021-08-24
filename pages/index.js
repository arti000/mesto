//Импортируем class Card
import Card from "../components/Сard.js";
import { initialCards } from "../utils/initial-сards.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  popupProfileElement,
  profileFormElement,
  popupProfileOpenButtonElement,
  popupProfileCloseButtonElement,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  newCardPopupElement,
  newCardFormElement,
  popupNewCardOpenButtonElement,
  popupNewCardCloseButtonElement,
  cardNameInput,
  linkInput,
  cardsList,
  previewPopupElement,
  previewPopupCloseButtonElement,
  config,
  cardListSelector
} from "../utils/constants.js";


const defaultCardList = new Section({ items: initialCards, renderer: (item) => {
  const card = new Card(item, ".card-template");
  const cardElement = card.createCard();
  
  defaultCardList.addItem(cardElement);
} }, cardListSelector);

defaultCardList.renderItems();


// //Универсальные функции открытия и закрытия попапа
// const openPopup = function (popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keyup", closePopupByClickEsc);
// };

// const closePopup = function (popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keyup", closePopupByClickEsc);
// };

// //Функция открытия и закрытия попапа при нажатии на Esc
// const closePopupByClickEsc = (event) => {
//   if (event.code === "Escape") {
//     const popupOpened = document.querySelector(".popup_opened");
//     closePopup(popupOpened);
//   }
// };

// //Функция закрытия попапа при нажатии на оверлей
// const closePopupByClickOverlay = (event) => {
//   if (event.target === event.currentTarget) {
//     const popupOpened = document.querySelector(".popup_opened");
//     closePopup(popupOpened);
//   }
// };

// //Функция, вставляющая значения со страницы в popupProfile при открытии.
// const pasteValuesToPopupProfileInputs = function () {
//   nameInput.value = nameProfile.textContent;
//   jobInput.value = jobProfile.textContent;
//   getFormReadyForNewLaunch(popupProfileElement, config);
//   openPopup(popupProfileElement);
// };

// //Функция открытия попапа создания карточки
// const openNewCardPopup = function () {
//   newCardFormElement.reset();
//   getFormReadyForNewLaunch(newCardPopupElement, config);
//   openPopup(newCardPopupElement);
// };

// //Функция, сохраняющая новые значения и закрывающая popupProfile.
// const handleProfileFormSubmit = function (evt) {
//   evt.preventDefault();
//   nameProfile.textContent = nameInput.value;
//   jobProfile.textContent = jobInput.value;
//   closePopup(popupProfileElement);
// };

// //Функция, добавляющая карточку в DOM
// function addCard(item, cardSelector) {
//   const card = new Card(item, cardSelector);
//   const cardElement = card.createCard();
//   cardsList.prepend(cardElement);
// }

// //Добавление начальных карточек
// initialCards.forEach(function (item) {
//   addCard(item, ".card-template");
// });

// //Функция, сохраняющая значения карточки и закрывающая ее.
// const handleNewCardPopupSubmit = function (evt) {
//   evt.preventDefault();
//   addCard(
//     { name: cardNameInput.value, link: linkInput.value },
//     ".card-template"
//   );
//   closePopup(newCardPopupElement);
// };

// //Даешь каждому рабочему по колхознице, а каждой форме по валидации ★★★
// const formList = Array.from(document.querySelectorAll(config.formSelector));
// formList.forEach((formElement) => {
//   const form = new FormValidator(config, formElement);
//   form.enableValidation();
// });

// //Функция подготавливающая форму к запуску
// const getFormReadyForNewLaunch = (formElement, objectSelector) => {
//   const submitButtonElement = formElement.querySelector(
//     objectSelector.submitButtonSelector
//   );
//   const inputList = Array.from(
//     formElement.querySelectorAll(objectSelector.inputSelector)
//   );
//   const errorList = Array.from(
//     formElement.querySelectorAll(objectSelector.inputErrorSelector)
//   );
//   inputList.forEach((inputElement) => {
//     inputElement.classList.remove(objectSelector.inputErrorClass);
//   });
//   errorList.forEach((errorElement) => {
//     errorElement.textContent = "";
//     errorElement.classList.remove(objectSelector.errorClass);
//   });
//   submitButtonElement.setAttribute("disabled", true);
// };

// //Обработчики, открывающие и закрывающие popupProfile после нажатия.
// popupProfileOpenButtonElement.addEventListener(
//   "click",
//   pasteValuesToPopupProfileInputs
// );
// popupProfileCloseButtonElement.addEventListener("click", function () {
//   closePopup(popupProfileElement);
// });
// profileFormElement.addEventListener("submit", handleProfileFormSubmit);
// popupProfileElement.addEventListener("click", closePopupByClickOverlay);

// //Обработчики, открывающие и закрывающие попап добавления карточки после нажатия
// popupNewCardOpenButtonElement.addEventListener("click", openNewCardPopup);
// popupNewCardCloseButtonElement.addEventListener("click", function () {
//   closePopup(newCardPopupElement);
// });
// newCardFormElement.addEventListener("submit", handleNewCardPopupSubmit);
// newCardPopupElement.addEventListener("click", closePopupByClickOverlay);

// //Обработчики закрывающие previewPopup
// previewPopupCloseButtonElement.addEventListener("click", function () {
//   closePopup(previewPopupElement);
// });
// previewPopupElement.addEventListener("click", closePopupByClickOverlay);

// export { openPopup, previewPopupElement };
