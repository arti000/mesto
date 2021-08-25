export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClose = (event) => {
    if (event.code === "Escape") {
      this.close();
    }
  }

  _handleOverlayClose = (event) => {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector(".popup__close").addEventListener("click", () => {
      this.close();
    });
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener("click", this._handleOverlayClose);
  }
}
