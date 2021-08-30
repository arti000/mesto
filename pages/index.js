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
  newCardFormElement,
  nameInput,
  jobInput,
  popupNewCardOpenButtonElement,
  popupNewCardCloseButtonElement,
  cardNameInput,
  linkInput,
  cardsList,
  previewPopupElement,
  previewPopupCloseButtonElement,
  config,
  cardListSelector,
  profileInfo,
  nameProfile,
  jobProfile
} from "../utils/constants.js";

//создание попапа увеличенной картинки
const previewPopup = new PopupWithImage(".image-popup");

//Настройка валидации формы редактирования профиля
const profileForm = new FormValidator(config, profileFormElement);
profileForm.enableValidation();

//Настройка валидации формы создания карточки 
const newCardForm = new FormValidator(config, newCardFormElement);
newCardForm.enableValidation();

//Функция открытия увеличенной карточки
const handleCardClick = (name, link) => {
  previewPopup.open(name, link);
}

//Функция создания карточки
const createCard = (name, link) => {
  const card = new Card({data: {name, link}, click: () => {handleCardClick(name, link)}}, ".card-template");
  const cardElement = card.createCard();
  return cardElement
}

//Добавление начальных карточек
  const defaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const  card = createCard(item.name, item.link);
      defaultCardList.addItem(card);
    }
  }, cardListSelector);
  defaultCardList.renderItems();


//Фунция открытия попапа редактирования
const openPopupProfileElement = () => {
  const user = new UserInfo(profileInfo);
  const profilePopupElement = new PopupWithForm(".edit-popup", ".popup__content", 
  {formSubmit: ({name, job}) => {
    user.setUserInfo({name, job});
  }});
  profileFormElement.reset();
  const userData = user.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  profileForm.resetValidation();
  profilePopupElement.open();
  profilePopupElement.setEventListeners();
}

const newCardPopupElement = new PopupWithForm(".add-popup", ".popup__content", 
    {formSubmit: ({cardName, cardLink}) => {
      const newCardElement = new Section(
        {renderer: () => {
        const card = createCard(cardName, cardLink);
        newCardElement.addItem(card);
      }}, cardListSelector);
      newCardElement.renderItem(cardName, cardLink);
    }}
  );

//Обработчики для кнопок открытия попапов
popupProfileOpenButtonElement.addEventListener("click", openPopupProfileElement);

//Навешиваем обработчик на кнопку открытия попапа создания карточки
popupNewCardOpenButtonElement.addEventListener("click", () => {
  newCardFormElement.reset();
  newCardForm.resetValidation();
  newCardPopupElement.open();
});
newCardPopupElement.setEventListeners();