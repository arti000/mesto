import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
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
  }

  submitForm() {
    this._formSubmit();
  }

  close() {
    this._popup.querySelector().reset();
    this._popup.classList.remove("popup_opened");
  }
}