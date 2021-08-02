import { FormValidator } from "./FormValidator.js";

//Объект наш горемычный^-^
const config = {
  formSelector: '.popup__content',
  sectionSelector: '.popup__section',
  inputSelector: '.popup__input',
  inputErrorSelector: '.popup__input-error',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
}

//Даешь каждому рабочему по колхознице, а каждой форме по валидации ★★★
const formList = Array.from(document.querySelectorAll(config.formSelector));
formList.forEach(formElement => {
  const form = new FormValidator(config, formElement);
  form.enableValidation();
  });

//Функция подготавливающая форму к запуску
const getFormReadyForNewLaunch = (formElement, objectSelector) => {
  const submitButtonElement = formElement.querySelector(objectSelector.submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(objectSelector.inputSelector));
  const errorList = Array.from(formElement.querySelectorAll(objectSelector.inputErrorSelector));
  inputList.forEach(inputElement => {
    inputElement.classList.remove(objectSelector.inputErrorClass);
  });
  errorList.forEach(errorElement => {
    errorElement.textContent = '';
    errorElement.classList.remove(objectSelector.errorClass);
  });
  submitButtonElement.setAttribute('disabled', true);
}

export {config, getFormReadyForNewLaunch};
