//Универсальные фунцкии открытия и закрытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ

//Переменные, связанные с попапом редактирования
const popupEditElement = document.querySelector('.edit');
const formElement = popupEditElement.querySelector('.edit__content')
const popupOpenButtonElement = document.querySelector('.profile__open-popup');
const popupCloseButtonElement = popupEditElement.querySelector('.edit__close');
const nameInput = popupEditElement.querySelector('.edit__input_type_title');
const jobInput = popupEditElement.querySelector('.edit__input_type_subtitle');

//Переменные, связанные со значениями в секции profile
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

//Функция, вставляющая значения со страницы в popup при открытии.
const pasteValuesToPopupInputs = function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditElement);
}

//Функция, сохраняющая новые значения и закрывающая popup.
const popupSubmitHandler = function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditElement);
}

//Обработчики, открывающие и закрывающие popup после нажатия.
popupOpenButtonElement.addEventListener('click', pasteValuesToPopupInputs);
popupCloseButtonElement.addEventListener('click', function () {
  closePopup(popupEditElement)
});
formElement.addEventListener('submit', popupSubmitHandler);
popupEditElement.addEventListener('click', function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(popupEditElement);
});
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    closePopup(popupEditElement);
  }
});

//ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ

//Переменные, связанные с add-popup
const addPopupElement = document.querySelector('.add-popup');
const addFormElement = addPopupElement.querySelector('.add-popup__content')
const addPopupOpenButtonElement = document.querySelector('.profile__add-button');
const addPopupCloseButtonElement = addPopupElement.querySelector('.add-popup__close');
const cardNameInput = addPopupElement.querySelector('.add-popup__input_type_title');
const linkInput = addPopupElement.querySelector('.add-popup__input_type_subtitle');
const cardsList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;

function renderCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    const likeElement = evt.target;
    likeElement.classList.toggle('card__like-button_active')
  });
  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardImage.addEventListener('click', function (evt) {
    imagePopupElement.classList.add('popup_opened');
    imagePopupImageElement.src = evt.target.src;
    imagePopupImageElement.alt = evt.target.alt;
    imagePopupTitle.textContent = evt.target.alt;
  })
  setEventListeners(cardElement);
  cardsList.prepend(cardElement);
}

//Добавление начальных карточек
const initialCards = [
  {
    name: 'Москва',
    link: 'images/msk.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: 'images/piter.jpg'
  },
  {
    name: 'Волгоград',
    link: 'images/vlg.jpg'
  },
  {
    name: 'Петрозаводск',
    link: 'images/ptrzvdsk.jpg'
  },
  {
    name: 'Кандалакша',
    link: 'images/kandalaksha.jpg'
  },
  {
    name: 'Республика Карелия',
    link: 'images/oneghzskaya.jpg'
  }
];

initialCards.forEach(function (item) {
  renderCard(item);
});

//Функция, сохраняющая значения карточки и закрывающая ее.
const addPopupSubmitHandler = function (evt) {
  evt.preventDefault();
  const item = cardTemplate;
  renderCard(item);
  const cardTitle = document.querySelector('.card__title');
  const cardImage = document.querySelector('.card__image');
  cardTitle.textContent = cardNameInput.value;
  cardImage.src = linkInput.value;
  cardImage.alt = cardNameInput.value;
  closePopup(addPopupElement);
}

//Удаление карточки
function handleDelete(event) {
  const cardElement = event.target.closest('.card');
  cardElement.remove();
}

function setEventListeners(cardElement) {
  cardElement.querySelector('.card__remove-button').addEventListener('click', handleDelete);
}

//Обработчики, открывающие и закрывающие попап добавления карточки после нажатия
addPopupOpenButtonElement.addEventListener('click', function () {
  openPopup(addPopupElement)
});
addPopupCloseButtonElement.addEventListener('click', function () {
  closePopup(addPopupElement)
});
addFormElement.addEventListener('submit', addPopupSubmitHandler);
addPopupElement.addEventListener('click', function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(addPopupElement);
});
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    closePopup(addPopupElement);
  }
});

//ПОПАП ОТКРЫТИЯ КАРТИНКИ

//Переменные связанные с попапом картинкой
const imagePopupElement = document.querySelector('.image-popup');
const imagePopupCloseButtonElement = imagePopupElement.querySelector('.image-popup__close');
const imagePopupImageElement = imagePopupElement.querySelector('.image-popup__image');
const imagePopupTitle = imagePopupElement.querySelector('.image-popup__title');

imagePopupCloseButtonElement.addEventListener('click', function () {
  closePopup(imagePopupElement)
});
imagePopupElement.addEventListener('click', function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(imagePopupElement);
});
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    closePopup(imagePopupElement);
  }
});

