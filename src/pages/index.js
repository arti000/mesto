import "../pages/index.css";

//Импортируем классы
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
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

//Настройка валидации формы обновления фото профиля
const updateAvatarForm = new FormValidator(config, updateAvatarFormElement);
updateAvatarForm.enableValidation();

//Создание объекта с информацией профиля
const user = new UserInfo(profileInfo);

//Создание класса Api
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-27/",
});

//Создание попапа подтверждения
const confirmPopup = new PopupWithConfirmation(
  confirmPopupSelector,
  formElementSelector
);
confirmPopup.setEventListeners();

function renderLoading(isLoading, originalText, popupSelector) {
  const popupElement = document.querySelector(popupSelector);
  if (isLoading) {
    popupElement.querySelector(".popup__submit").textContent = "Cохранение...";
  } else {
    popupElement.querySelector(".popup__submit").textContent = originalText;
  }
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then((data) => {
  user.setUserInfo(data[0]);
  user.setAvatar(data[0]);
  const cardsFromServer = new Section(
    {
      items: data[1],
      renderer: (item) => {
        const card = createCard(item);
        const checkOwner = (ownerData, cardData) => {
          if (
            JSON.stringify(cardData.owner._id) === JSON.stringify(ownerData._id)
          ) {
            card
              .querySelector(".card__remove-button")
              .classList.add("card__remove-button_visible");
            return;
          }
        };
        const checkLikes = (ownerData, cardData) => {
          if (
            JSON.stringify(cardData.likes).includes(JSON.stringify(ownerData))
          ) {
            card
              .querySelector(".card__like-button")
              .classList.toggle("card__like-button_active");
          }
        };
        checkOwner(data[0], item);
        checkLikes(data[0], item);
        cardsFromServer.addItem(card);
      },
    },
    cardListSelector
  );
  cardsFromServer.renderItems();
  //Создаем попап создания карточки
  const newCardPopupElement = new PopupWithForm(
    newCardPopupSelector,
    formElementSelector,
    {
      formSubmit: ({ cardName, cardLink }) => {
        const originalSubmitButtonText = document
          .querySelector(newCardPopupSelector)
          .querySelector(".popup__submit").textContent;
        renderLoading(true, originalSubmitButtonText, newCardPopupSelector);
        api
          .createCard({ cardName, cardLink })
          .then((data) => {
            const card = createCard(data);
            card
              .querySelector(".card__remove-button")
              .classList.add("card__remove-button_visible");
            cardsFromServer.addItem(card);
          })
          .finally(() => {
            renderLoading(
              false,
              originalSubmitButtonText,
              newCardPopupSelector
            );
            newCardPopupElement.close();
          });
      },
    }
  );
  newCardPopupElement.setEventListeners();

  //Навешиваем обработчик на кнопку открытия попапа создания карточки
  popupNewCardOpenButtonElement.addEventListener("click", () => {
    newCardForm.resetValidation();
    newCardPopupElement.open();
  });
});

//Функция открытия увеличенной карточки
const handleCardClick = (name, link) => {
  previewPopup.open(name, link);
};

//Функция создания карточки
const createCard = ({ name, link, likes, _id }) => {
  const card = new Card(
    {
      data: { name, link, likes, _id },
      handleCardClick: () => {
        handleCardClick(name, link);
      },
      confirmationDelete: (_id) => {
        confirmPopup.open();
        confirmPopup.setSubmitAction(() => {
          api.deleteCard(_id)
            .then(() => {
              card.deleteCard();
              confirmPopup.close();
            })
        })
      }
    },
    cardSelector, api
  );
  const cardElement = card.createCard();
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", () => {
      api.getUserInfo()
      .then((user) => {
        if (JSON.stringify(likes).includes(JSON.stringify(user._id))) {
          api.deleteLike(_id).then((data) => {
            likes = data.likes;
            cardElement.querySelector(".card__likes-counter").textContent =
              data.likes.length;
            return likes;
          });
        } else {
          api.putLike(_id).then((data) => {
            likes = data.likes;
            cardElement.querySelector(".card__likes-counter").textContent =
              data.likes.length;
            return likes;
          });
        }
      });
      cardElement
        .querySelector(".card__like-button")
        .classList.toggle("card__like-button_active");
    });
  return cardElement;
};

//Попапы
const profilePopupElement = new PopupWithForm(
  popupProfileSelector,
  formElementSelector,
  {
    formSubmit: ({ name, about }) => {
      const originalSubmitButtonText = document
        .querySelector(popupProfileSelector)
        .querySelector(".popup__submit").textContent;
      renderLoading(true, originalSubmitButtonText, popupProfileSelector);
      api
        .setUserInfo({ name, about })
        .then((data) => {
          user.setUserInfo(data);
        })
        .finally(() => {
          renderLoading(false, originalSubmitButtonText, popupProfileSelector);
          profilePopupElement.close();
        });
    },
  }
);
profilePopupElement.setEventListeners();

const updateAvatarPopupElement = new PopupWithForm(
  updateAvatarPopupSelector,
  formElementSelector,
  {
    formSubmit: ({ avatar }) => {
      const originalSubmitButtonText = document
        .querySelector(updateAvatarPopupSelector)
        .querySelector(".popup__submit").textContent;
      renderLoading(true, originalSubmitButtonText, updateAvatarPopupSelector);
      api
        .setAvatar({ avatar })
        .then((data) => {
          user.setAvatar(data);
        })
        .finally(() => {
          renderLoading(
            false,
            originalSubmitButtonText,
            updateAvatarPopupSelector
          );
          updateAvatarPopupElement.close();
        });
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
updateAvatarOpenButtonElement.addEventListener("click", () => {
  updateAvatarForm.resetValidation();
  updateAvatarPopupElement.open();
});
