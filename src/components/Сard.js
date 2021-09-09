export default class Card {
  //Конструктор принимает первым параметром объект и функцию, вторым - ссылку
  constructor(
    { data, handleCardClick },
    cardSelector
  ) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._owner = data.owner;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._toggleLikeButton();
    //Теперь вернем карточку
    return this._element;
  }

  //Метод кнопки лайка
  _toggleLikeButton() {
    if(this._likes.includes(this._owner)) {
      this._element.querySelector(".card__like-button").classList.add("card__like-button_active");
    }
  }

  //Метод навешивания обработчиков
  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link)
      );
  }
}
