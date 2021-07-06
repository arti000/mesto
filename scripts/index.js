//Переменные, связанные с попапом
const popupElement = document.querySelector('.popup');
const formElement = popupElement.querySelector('.popup__content')
const popupOpenButtonElement = document.querySelector('.profile__open-popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const nameInput = popupElement.querySelector('.popup__input_type_title');
const jobInput = popupElement.querySelector('.popup__input_type_subtitle');

//Переменные, связанные с попапом добавления карточки
const addPopupElement = document.querySelector('.add-popup');
const addFormElement = addPopupElement.querySelector('.add-popup__content')
const addPopupOpenButtonElement = document.querySelector('.profile__add-button');
const addPopupCloseButtonElement = addPopupElement.querySelector('.add-popup__close');
const cardNameInput = addPopupElement.querySelector('.add-popup__input_type_title');
const linkInput = addPopupElement.querySelector('.add-popup__input_type_subtitle');
const cardsList = document.querySelector('.cards');

//Переменные, связанные со значениями в секции profile
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');



//Функции, делающие видимым и скрывающая попап редактирования профиля.
const openPopup = function () {
  popupElement.classList.add('popup_opened');
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

//Функции, открывающие и закрывающие попап добавления карточки
const openAddPopup = function () {
  addPopupElement.classList.add('add-popup_opened');
}

const closeAddPopup = function () {
  addPopupElement.classList.remove('add-popup_opened');
}

//Функция, вставляющая значения со страницы в попап при открытии.
const pasteValuesToPopupInputs = function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup();
}

//Функция, скрывающая попап при клике на затемненную область.
const closePopupByClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
}

//Функция, скрывающая попап при клике на затемненную область.
const closeAddPopupByClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeAddPopup();
}

//Функция, сохраняющая новые значения и закрывающая попап.
const popupSubmitHandler = function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

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
  closeAddPopup();
}

//Обработчики, открывающие и закрывающие попап после нажатия.
popupOpenButtonElement.addEventListener('click', pasteValuesToPopupInputs);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', popupSubmitHandler);
popupElement.addEventListener('click', closePopupByClickOverlay);
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    closePopup();
  }
});

//Обработчики, открывающие и закрывающие попап добавления карточки после нажатия
addPopupOpenButtonElement.addEventListener('click', openAddPopup);
addPopupCloseButtonElement.addEventListener('click', closeAddPopup);
addFormElement.addEventListener('submit', addPopupSubmitHandler);
addPopupElement.addEventListener('click', closeAddPopupByClickOverlay);
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    closeAddPopup();
  }
});

const initialCards = [
  {
    name: 'Москва',
    link: '../images/msk.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: '../images/piter.jpg'
  },
  {
    name: 'Волгоград',
    link: '../images/vlg.jpg'
  },
  {
    name: 'Петрозаводск',
    link: '../images/ptrzvdsk.jpg'
  },
  {
    name: 'Кандалакша',
    link: '../images/kandalaksha.jpg'
  },
  {
    name: 'Республика Карелия',
    link: '../images/oneghzskaya.jpg'
  }
];

const cardTemplate = document.querySelector('.card-template').content;

function renderCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardsList.prepend(cardElement);
}

initialCards.forEach(function (item) {
  renderCard(item);
})

//Кнопка лайка
const likeButtonElement = document.querySelector('.card__like-button');

//Функция нажатия лайка
const likeButtonClick = function () {
  likeButtonElement.classList.toggle('card__like-button_active')
}

likeButtonElement.addEventListener('click', likeButtonClick);
