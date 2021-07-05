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

//Функция, сохраняющая новые значения и закрывающая попап.
const popupSubmitHandler = function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
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
// addFormElement.addEventListener('submit', popupSubmitHandler);
// addPopupElement.addEventListener('click', closePopupByClickOverlay);
// document.addEventListener('keyup', function (event) {
  // if (event.code === 'Escape') {
    // closePopup();
  // }
// });


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function addCard() {}
