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
const cardTemplate = document.querySelector('.card-template').content;

//Переменные, связанные с попапом картинкой
const previewPopupElement = document.querySelector('.image-popup');
const previewPopupCloseButtonElement = previewPopupElement.querySelector('.popup__close');
const previewPopupImageElement = previewPopupElement.querySelector('.popup__image');
const previewPopupTitle = previewPopupElement.querySelector('.popup__title');

//Универсальные функции открытия и закрытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keyup", (event) => {
    if (event.code === 'Escape') {
      closePopup(popup);
    }
  });
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keyup", (event) => {
    if (event.code === 'Escape') {
      closePopup(popup);
    }
  });
}

//Удаление карточки
const handleDelete = function (event) {
  const cardElement = event.target.closest('.card');
  cardElement.remove();
};

//Кнопка лайка
const pushLikeButton = function (event) {
  const likeElement = event.target.closest('.card__like-button');
  likeElement.classList.toggle('card__like-button_active');
};

//Открытие previewPopup
const openPreviewPopup = function (event) {
  const imageElement = event.target.closest('.card__image');
  previewPopupImageElement.src = imageElement.src;
  previewPopupImageElement.alt = imageElement.alt;
  previewPopupTitle.textContent = imageElement.alt;
  openPopup(previewPopupElement);
}

//Функция, вставляющая значения со страницы в popupProfile при открытии.
const pasteValuesToPopupInputs = function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  const submitButtonElement = popupProfileElement.querySelector(config.submitButtonSelector);
  submitButtonElement.removeAttribute('disabled', true);
  hideInputError(nameInput, config);
  hideInputError(jobInput, config);
  openPopup(popupProfileElement);
}

//Функция открытия попапа создания карточки
const openNewCardPopup = function () {
  const submitButtonElement = newCardPopupElement.querySelector(config.submitButtonSelector);
  submitButtonElement.setAttribute('disabled', true);
  hideInputError(cardNameInput, config);
  hideInputError(linkInput, config);
  newCardFormElement.reset();
  openPopup(newCardPopupElement);
}

//Функция, сохраняющая новые значения и закрывающая popupProfile.
const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfileElement);
}

//Функция, навешивающая обработчики на карточку
const setCardEventListeners = function (cardElement) {
  cardElement.querySelector('.card__remove-button').addEventListener('click', handleDelete);
  cardElement.querySelector('.card__like-button').addEventListener('click', pushLikeButton);
  cardElement.querySelector('.card__image').addEventListener('click', openPreviewPopup);
}

//Функция, создающая карточку
const createCard = function (name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  setCardEventListeners(cardElement);
  return cardElement;
}

//Функция, добавляющая карточку в DOM
function addCard(item) {
  cardsList.prepend(createCard(item.name, item.link));
}

//Добавление начальных карточек
initialCards.forEach(function (item) {
  addCard(item);
});

//Функция, сохраняющая значения карточки и закрывающая ее.
const handleNewCardPopupSubmit = function (evt) {
  evt.preventDefault();
  addCard({ name: cardNameInput.value, link: linkInput.value });
  newCardFormElement.reset();
  closePopup(newCardPopupElement);
};

//Функция, закрывающая добавляющая новую карточку при нажатии на клавишу Enter
function addNewCardByEnter(evt) {
  if (evt.key === 'Enter') {
    handleNewCardPopupSubmit(evt);
  }
}

//Обработчики, открывающие и закрывающие popupProfile после нажатия.
popupProfileOpenButtonElement.addEventListener('click', pasteValuesToPopupInputs);
popupProfileCloseButtonElement.addEventListener('click', function () {
  closePopup(popupProfileElement);
});
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
popupProfileElement.addEventListener('click', function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(popupProfileElement);
});

//Обработчики, открывающие и закрывающие попап добавления карточки после нажатия
popupNewCardOpenButtonElement.addEventListener('click', openNewCardPopup);
popupNewCardCloseButtonElement.addEventListener('click', function () {
  closePopup(newCardPopupElement);
});
newCardFormElement.addEventListener('submit', handleNewCardPopupSubmit);
newCardPopupElement.addEventListener('click', function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(newCardPopupElement);
});
cardNameInput.addEventListener('keydown', addNewCardByEnter);
linkInput.addEventListener('keydown', addNewCardByEnter);

//Обработчики закрывающие previewPopup
previewPopupCloseButtonElement.addEventListener('click', function () {
  closePopup(previewPopupElement)
});
previewPopupElement.addEventListener('click', function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(previewPopupElement);
});
