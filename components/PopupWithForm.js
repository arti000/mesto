import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    const cardElement = {
      name: cardNameInput.value,
      link: linkInput.value,
      alt: cardNameInput.value
    };
    return cardElement;
  }
  
  setEventListeners() {
    this._popup
    .querySelector(".popup__close")
    addEventListener("click", () => {
      this.close();
    });
    this._popup.querySelector('.popup__content').addEventListener("submit", this._formSubmit());
  }

  close() {
    this._popup.reset();
    this._popup.classList.remove("popup_opened");
  }
}