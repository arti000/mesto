//Селекторы попапов
export const popupProfileSelector = ".edit-popup";
export const previewPopupSelector = ".image-popup";
export const newCardPopupSelector = ".add-popup";
export const confirmPopupSelector = ".confirm-popup";
export const updateAvatarPopupSelector = ".update-avatar-popup";

//Селектор формы
export const formElementSelector = ".popup__content";

//Переменные, связанные с конкретными формами попапов
export const profileFormElement = document
  .querySelector(popupProfileSelector)
  .querySelector(formElementSelector);
export const newCardFormElement = document
  .querySelector(newCardPopupSelector)
  .querySelector(formElementSelector);
export const updateAvatarFormElement = document
  .querySelector(updateAvatarPopupSelector)
  .querySelector(formElementSelector);

//Переменные, связанные с кнопками открытия попапов
export const popupProfileOpenButtonElement = document.querySelector(
  ".profile__open-popup"
);
export const popupNewCardOpenButtonElement = document.querySelector(
  ".profile__add-button"
);
export const updateAvatarOpenButtonElement = document.querySelector(
  ".profile__edit-photo-btn"
);

//Селектор кнопки закрытия попапа
export const closeButtonSelector = ".popup__close";

//Селекторы полей
export const inputSelector = ".popup__input";
const inputTitleSelector = ".popup__input_type_title";
const inputSubtitleSelector = ".popup__input_type_subtitle";

//Переменные, связанные с полями попапов
export const nameInput = document
  .querySelector(popupProfileSelector)
  .querySelector(inputTitleSelector);
export const jobInput = document
  .querySelector(popupProfileSelector)
  .querySelector(inputSubtitleSelector);
export const cardNameInput = document
  .querySelector(newCardPopupSelector)
  .querySelector(inputTitleSelector);
export const linkInput = document
  .querySelector(newCardPopupSelector)
  .querySelector(inputSubtitleSelector);

//Переменные, связанные с карточками
export const cardListSelector = ".cards";
export const cardSelector = ".card-template";

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

export const profileInfo = {
  profileName: ".profile__title",
  profileJob: ".profile__subtitle",
  avatar: ".profile__photo",
};
