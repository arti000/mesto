import "../pages/index.css";

//Импортируем классы
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

//Импортируем константы
import {
  popupProfileSelector,
  newCardPopupSelector,
  previewPopupSelector,
  confirmPopupSelector,
  updateAvatarPopupSelector,
  formElementSelector,
  profileFormElement,
  newCardFormElement,
  updateAvatarFormElement,
  popupProfileOpenButtonElement,
  popupNewCardOpenButtonElement,
  updateAvatarOpenButtonElement,
  avatarElement,
  nameInput,
  jobInput,
  config,
  cardListSelector,
  cardSelector,
  profileInfo,
} from "../utils/constants.js";

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-27/',
})

//Создание объекта с информацией профиля
const user = new UserInfo(profileInfo);

api.getUserInfo()
.then(data => {
  user.setUserInfo(data);
  user.setAvatar(data);
})

api
.getInitialCards()
.then(items => {
  const cardsFromServer = new Section(
    {
      items: items,
      renderer: (item) => {
        const card = createCard(item.name, item.link);
        cardsFromServer.addItem(card);
      },
    },
    cardListSelector
  ); 
  cardsFromServer.renderItems();

  const newCardPopupElement = new PopupWithForm(
    newCardPopupSelector,
    formElementSelector,
    {
      formSubmit: ({ cardName, cardLink }) => {
        api.createCard({ cardName, cardLink })
        .then(data => {
          const card = createCard(data.name, data.link);
          cardsFromServer.addItem(card);
        })
      },
    }
  );
  newCardPopupElement.setEventListeners();
  
  //Навешиваем обработчик на кнопку открытия попапа создания карточки
  popupNewCardOpenButtonElement.addEventListener("click", () => {
  newCardForm.resetValidation();
  newCardPopupElement.open();
});

})




//создание попапа увеличенной картинки
const previewPopup = new PopupWithImage(previewPopupSelector);
previewPopup.setEventListeners();

//Настройка валидации формы редактирования профиля
const profileForm = new FormValidator(config, profileFormElement);
profileForm.enableValidation();

//Настройка валидации формы создания карточки
const newCardForm = new FormValidator(config, newCardFormElement);
newCardForm.enableValidation();

//Настройка валидации формы обновления фото профиля
const updateAvatarForm = new FormValidator(config, updateAvatarFormElement);
updateAvatarForm.enableValidation();


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

//Попапы
const profilePopupElement = new PopupWithForm(
  popupProfileSelector,
  formElementSelector,
  {
    formSubmit: ({ name, about }) => {
      api.setUserInfo({ name, about })
      .then(data => {
        user.setUserInfo(data);
      })
    },
  }
);
profilePopupElement.setEventListeners();



const updateAvatarPopupElement = new PopupWithForm(
  updateAvatarPopupSelector,
  formElementSelector,
  {
    formSubmit: ({ avatar }) => {
      api.setAvatar({ avatar })
      .then(data => {
        user.setAvatar(data);
      })
    },
  }
);
updateAvatarPopupElement.setEventListeners();

//Обработчики для кнопок открытия попапов
popupProfileOpenButtonElement.addEventListener("click", () => {
  const userData = user.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  profileForm.resetValidation();
  profilePopupElement.open();
});


//Навешиваем обработчик на кнопу редактирования аватара
updateAvatarOpenButtonElement.addEventListener('click', () => {
  updateAvatarForm.resetValidation();
  updateAvatarPopupElement.open();
})