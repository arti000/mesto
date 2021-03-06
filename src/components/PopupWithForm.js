import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, { formSubmit }) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._formSelector = this._popup.querySelector(formSelector);
  }

  _getInputValues() {
    const formInputsValues = {};
    this._inputList = Array.from(
      this._formSelector.querySelectorAll(".popup__input")
    );
    this._inputList.forEach((input) => {
      formInputsValues[input.name] = input.value;
    });
    return formInputsValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
      this._formSubmit(this._getInputValues());
    });
  }

  close() {
    this._formSelector.reset();
    this._popup.classList.remove("popup_opened");
    super.close();
  }
}
