//Функции валидации

const config = {
  formSelector: '.popup__content',
  sectionSelector: '.popup__section',
  inputSelector: '.popup__input',
  inputErrorSelector: '.popup__input-error',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
}

const showInputError = (inputElement, errorMessage, config) => {
  const formSectionElement = inputElement.closest(config.sectionSelector);
  const errorElement = formSectionElement.querySelector(config.inputErrorSelector);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}
const hideInputError = (inputElement, config) => {
  const formSectionElement = inputElement.closest(config.sectionSelector);
  const errorElement = formSectionElement.querySelector(config.inputErrorSelector);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);
}
//6. Создаем функцию которая проверяет валиден ли инпут или нет
const checkInputValidity = (inputElement, config) => {
  const isInputNotValid = !inputElement.validity.valid;
  if(isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(inputElement, errorMessage, config);
  } else {
    hideInputError(inputElement, config);
  }
}
//8. Создадим функцию, которая делает кнопку не активной, если данные не валидны
const toggleButtonState = (inputList, buttonElement) => {
  const findNotValidInput = (inputElement) => !inputElement.validity.valid;
  const hasNotValidInput = inputList.some(findNotValidInput);
  if (hasNotValidInput) {
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.removeAttribute('disabled', true);
  }
}

//3.Создаем фунцкию обработчик
const setEventListeners = (formElement, config) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  });
  //4. Получим список инпутов
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  //9. Находим кнопку
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  //5. Пробегаемся по полям, чтобы они нам выдавали текст ошибок
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, config);
      toggleButtonState(inputList, buttonElement);
    });
  });
}
const enableValidation = (config) => {
  //1. Находим все формы
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  //2. проходимся по всем формам и отменяем стандартную отправку форм
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

enableValidation(config);

