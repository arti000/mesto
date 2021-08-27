import { nameInput, jobInput, cardNameInput, linkInput } from "../utils/constants.js";
import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, {formSubmit}) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._formSelector = this._popup.querySelector(formSelector);
  }

  _getInputValues() {
    const formInputsValues = {
      name: nameInput.value,
      job: jobInput.value,
      cardName: cardNameInput.value,
      link: linkInput.value,
      alt: cardNameInput.value
    };
    return formInputsValues;
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add("popup_opened");
  }

  setEventListeners() {
    this._popup.querySelector(".popup__close").addEventListener("click", () => {
      this.close();
    });
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener("click", this._handleOverlayClose);
    this._formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
      this._formSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove("popup_opened");
  }
}