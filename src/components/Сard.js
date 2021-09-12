export default class Card {
  //Конструктор принимает первым параметром объект и функцию, вторым - ссылку
  constructor(
    { data, handleCardClick, confirmationDelete, userData },
    cardSelector,
    api
  ) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner;
    this._userId = userData._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._confirmationDelete = confirmationDelete;
    this._api = api;
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
    //Проверяем, являемся ли автором карточки
    this._checkOwner();
    //Проверяем, стоит ли наш лайк на карточке
    this._checkAvailabilityUserLike();
    //Далее необходимо навесить на карточку обработчики
    this._setEventListeners();
    //Теперь вернем карточку
    return this._element;
  }

  _checkOwner() {
    if (JSON.stringify(this._owner._id) === JSON.stringify(this._userId)) {
      this._showRemoveButton()
    }
  };

  _showRemoveButton() {
    this._element
        .querySelector(".card__remove-button")
        .classList.add("card__remove-button_visible");
  }

  _checkAvailabilityUserLike() {
    if (JSON.stringify(this._likes).includes(JSON.stringify(this._userId))) {
      this._toggleLikeButton();
    }
  }

  deleteCard() {
    this._element.remove();
  }

  _toggleLikeButton() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _pushLike() {
    if (JSON.stringify(this._likes).includes(JSON.stringify(this._userId))) {
      this._api.deleteLike(this._id).then((data) => {
        this._likes = data.likes;
        this._element.querySelector(".card__likes-counter").textContent =
          data.likes.length;
        return this._likes;
      });
    } else {
      this._api.putLike(this._id).then((data) => {
        this._likes = data.likes;
        this._element.querySelector(".card__likes-counter").textContent =
          data.likes.length;
        return this._likes;
      });
    }
  }

  //Метод навешивания обработчиков
  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._pushLike();
        this._toggleLikeButton();
      });
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
