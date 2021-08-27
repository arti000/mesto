//Переменные, связанные с попапом редактирования
export const popupProfileElement = document.querySelector(".edit-popup");
export const profileFormElement = popupProfileElement.querySelector(".popup__content");
export const popupProfileOpenButtonElement = document.querySelector(".profile__open-popup");
export const popupProfileCloseButtonElement = popupProfileElement.querySelector(".popup__close");
export const nameInput = popupProfileElement.querySelector(".popup__input_type_title")
export const jobInput = popupProfileElement.querySelector(".popup__input_type_subtitle");

//Переменные, связанные со значениями в секции profile
export const nameProfile = document.querySelector(".profile__title");
export const jobProfile = document.querySelector(".profile__subtitle");

//Переменные, связанные с newCardPopup
export const newCardPopupElement = document.querySelector(".add-popup");
export const newCardFormElement = newCardPopupElement.querySelector(".popup__content");
export const popupNewCardOpenButtonElement = document.querySelector(".profile__add-button");
export const popupNewCardCloseButtonElement = newCardPopupElement.querySelector(".popup__close");
export const cardNameInput = newCardPopupElement.querySelector(".popup__input_type_title");
export const linkInput = newCardPopupElement.querySelector(".popup__input_type_subtitle");
export const cardsList = document.querySelector(".cards");

//Переменные, связанные с попапом картинкой
export const previewPopupElement = document.querySelector(".image-popup");
export const previewPopupCloseButtonElement = previewPopupElement.querySelector(".popup__close");

//Объект c селекторами
export const config = {
  formSelector: ".popup__content",
  sectionSelector: ".popup__section",
  inputSelector: ".popup__input",
  inputErrorSelector: ".popup__input-error",
  submitButtonSelector: ".popup__submit",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_type_active",
};

export const cardListSelector = ".cards";

export const profileInfo = {
  profileName: ".profile__title",
  profileJob: ".profile__subtitle"
}