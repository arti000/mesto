import "../pages/index.css";

//Импортируем классы
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

//Импортируем объект с начальными карточками
import { initialCards } from "../utils/initial-сards.js";

//Импортируем константы
import {
  popupProfileSelector,
  newCardPopupSelector,
  previewPopupSelector,
  formElementSelector,
  profileFormElement,
  newCardFormElement,
  popupProfileOpenButtonElement,
  popupNewCardOpenButtonElement,
  nameInput,
  jobInput,
  config,
  cardListSelector,
  cardSelector,
  profileInfo,
} from "../utils/constants.js";

//создание попапа увеличенной картинки
const previewPopup = new PopupWithImage(previewPopupSelector);
previewPopup.setEventListeners();

//Настройка валидации формы редактирования профиля
const profileForm = new FormValidator(config, profileFormElement);
profileForm.enableValidation();

//Настройка валидации формы создания карточки
const newCardForm = new FormValidator(config, newCardFormElement);
newCardForm.enableValidation();

//Создание объекта с информацией профиля
const user = new UserInfo(profileInfo);

//Функция открытия увеличенной карточки
const handleCardClick = (name, link) => {
  previewPopup.open(name, link);
};

//Функция создания карточки
const createCard = (name, link) => {
  const card = new Card(
    {
      data: { name, link },
      handleCardClick: () => {
        handleCardClick(name, link);
      },
    },
    cardSelector
  );
  const cardElement = card.createCard();
  return cardElement;
};

//Добавление начальных карточек
const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item.name, item.link);
      defaultCardList.addItem(card);
    },
  },
  cardListSelector
);
defaultCardList.renderItems();

const profilePopupElement = new PopupWithForm(
  popupProfileSelector,
  formElementSelector,
  {
    formSubmit: ({ name, job }) => {
      user.setUserInfo({ name, job });
    },
  }
);
profilePopupElement.setEventListeners();

const newCardPopupElement = new PopupWithForm(
  newCardPopupSelector,
  formElementSelector,
  {
    formSubmit: ({ cardName, cardLink }) => {
      const card = createCard(cardName, cardLink);
      defaultCardList.addItem(card);
    },
  }
);
newCardPopupElement.setEventListeners();

//Обработчики для кнопок открытия попапов
popupProfileOpenButtonElement.addEventListener("click", () => {
  const userData = user.getUserInfo();
  profileFormElement.reset();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  profileForm.resetValidation();
  profilePopupElement.open();
});

//Навешиваем обработчик на кнопку открытия попапа создания карточки
popupNewCardOpenButtonElement.addEventListener("click", () => {
  newCardFormElement.reset();
  newCardForm.resetValidation();
  newCardPopupElement.open();
});
