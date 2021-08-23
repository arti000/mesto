import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open() {
    const previewPopupImageElement = this._popup.querySelector('.popup__image');
    const previewPopupTitle = this._popup.querySelector('.popup__title');
    const imageElement = this._element.querySelector('.card__image');
    previewPopupImageElement.src = imageElement.src;
    previewPopupImageElement.alt = imageElement.alt;
    previewPopupTitle.textContent = imageElement.alt;
    this._popup.classList.add("popup_opened");
  }
}