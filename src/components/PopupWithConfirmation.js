import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, formSelector) {
    super(popupSelector);
    this._formSelector = this._popup.querySelector(formSelector);
  }

  setSubmitAction(formSubmit) {
    this._formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
      this._formSubmit = formSubmit;
      return this._formSubmit();
    }, { once: true });
  }
}
