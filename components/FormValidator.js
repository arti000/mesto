export default class FormValidator {

  constructor(objectSelector, formElement) {
    this._inputSelector = objectSelector.inputSelector;
    this._sectionSelector = objectSelector.sectionSelector;
    this._inputErrorSelector = objectSelector.inputErrorSelector;
    this._submitButtonSelector = objectSelector.submitButtonSelector;
    this._inputErrorClass = objectSelector.inputErrorClass;
    this._errorClass = objectSelector.errorClass;
    this._formElement = formElement;
  }

  //Метод показа текста ошибок
  _showInputError(inputElement, errorMessage) {
    const formSectionElement = inputElement.closest(this._sectionSelector);
    const errorElement = formSectionElement.querySelector(this._inputErrorSelector);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  //Метод сокрытия текста ошибок
  _hideInputError(inputElement) {
    const formSectionElement = inputElement.closest(this._sectionSelector);
    const errorElement = formSectionElement.querySelector(this._inputErrorSelector);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  //Метод переключения состояния кнопки
  _toggleButtonState(inputList, buttonElement) {
    const findNotValidInput = (inputElement) => !inputElement.validity.valid;
    const hasNotValidInput = inputList.some(findNotValidInput);
    if (hasNotValidInput) {
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.removeAttribute('disabled', true);
    }
  }

  //Метод проверки валидности полей
  _checkInputValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //Метод устанавливающий обработчики
  _setEventListeners() {

    //Отменяем стандартную отправку формы
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    //Находим все инпуты формы
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

    //Находим кнопку
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    //На каждый инпут формы вешаем проверку валидности полей и переключатель кнопки
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  //Публичный метод валидации
  enableValidation() {
    return this._setEventListeners();
  }
}
