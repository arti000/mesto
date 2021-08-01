export class FormValidator {

  constructor(objectSelector, formElement) {
    this._inputSelector = objectSelector.inputSelector;
    this._sectionSelector = objectSelector.sectionSelector;
    this._inputErrorSelector = objectSelector.inputErrorSelector;
    this._submitButtonSelector = objectSelector.submitButtonSelector;
    this._inputErrorClass = objectSelector.inputErrorClass;
    this._errorClass = objectSelector.errorClass;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const formSectionElement = inputElement.closest(this._sectionSelector);
    const errorElement = formSectionElement.querySelector(this._inputErrorSelector);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const formSectionElement = inputElement.closest(this._sectionSelector);
    const errorElement = formSectionElement.querySelector(this._inputErrorSelector);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _toggleButtonState(inputList, buttonElement) {
    const findNotValidInput = (inputElement) => !inputElement.validity.valid;
    const hasNotValidInput = inputList.some(findNotValidInput);
    if (hasNotValidInput) {
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.removeAttribute('disabled', true);
    }
  }

  _checkInputValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    return this._setEventListeners();
  }
}
