import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, formSelector, { formSubmit }) {
    super(popupSelector);
    this._formSelector = this._popup.querySelector(formSelector);
    this._formSubmit = formSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
      this._formSubmit();
    });
  }
}
