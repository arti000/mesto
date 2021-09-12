export default class Card {
  //Конструктор принимает первым параметром объект и функцию, вторым - ссылку
  constructor({ data, handleCardClick, confirmationDelete }, cardSelector, api) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._confirmationDelete = confirmationDelete;
    this._api = api;
    this._id = data._id;
  }

  //Метод, копирующий разметку
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  //Метод, который вставит данные в разметку и подготовит карточку к публикации
  createCard() {
    //Запишем разметку в приватное поле, чтобы другие переменные получили к ней доступ
    this._element = this._getTemplate();
    //Затем найдем картинку и ее заголовок в элементе
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__likes-counter").textContent =
      this._likes.length;
    //Далее необходимо навесить на карточку обработчики
    this._setEventListeners();
    //Теперь вернем карточку
    return this._element;
  }

  checkOwner = (ownerData, cardData) => {
    if (JSON.stringify(cardData.owner._id) === JSON.stringify(ownerData._id)) {
      this._element
      .querySelector(".card__remove-button")
      .classList.add("card__remove-button_visible");
    }
  };

  checkLikes = (ownerData, cardData) => {
    if (JSON.stringify(cardData.likes).includes(JSON.stringify(ownerData))) {
      this._element
        .querySelector(".card__like-button")
        .classList.toggle("card__like-button_active");
    }
  };

  deleteCard() {
    this._element.remove()
  }

  //Метод навешивания обработчиков
  _setEventListeners() {
    this._element
      .querySelector(".card__remove-button")
      .addEventListener("click", () => this._confirmationDelete(this._id));
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link)
      );
  }
}
