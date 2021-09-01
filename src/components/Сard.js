export default class Card {
  //Конструктор принимает первым параметром объект и функцию, вторым - ссылку
  constructor({ data, handleCardClick }, cardSelector) {
    this._link = data.link;
    this._name = data.name;
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
    //Далее необходимо навесить на карточку обработчики
    this._setEventListeners();
    //Теперь вернем карточку
    return this._element;
  }
  //Метод удаления карточки
  _handleDelete() {
    this._element.closest(".card").remove();
  }
  //Метод кнопки лайка
  _pushLikeButton() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  //Метод навешивания обработчиков
  _setEventListeners() {
    this._element
      .querySelector(".card__remove-button")
      .addEventListener("click", () => this._handleDelete());
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._pushLikeButton());
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link)
      );
  }
}
