//Переменные, связанные с попапом
let popupElement = document.querySelector('.popup');
let formElement = popupElement.querySelector('.popup__content')
let popupOpenButtonElement = document.querySelector('.profile__open-popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let nameInput = popupElement.querySelector('.popup__input_type_title');
let jobInput = popupElement.querySelector('.popup__input_type_subtitle');

//Переменные, связанные со значениями в секции profile
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

//Функции, делающие видимым и скрывающая попап.
const openPopup = function () {
  popupElement.classList.add('popup_opened');
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
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

//Обработчики, открывающие и закрываюие всплывающее окно после нажатия.
popupOpenButtonElement.addEventListener('click', pasteValuesToPopupInputs);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', popupSubmitHandler);
popupElement.addEventListener('click', closePopupByClickOverlay);
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    closePopup();
  }
});

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
