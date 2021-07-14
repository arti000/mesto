//Функции валидации
//7. Создаем функцию, которая показывает и скрывает текст ошибки

const showInputError = (inputElement, errorMessage) => {
  const formSectionElement = inputElement.closest('.popup__section');
  const errorElement = formSectionElement.querySelector('.popup__input-error');
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_type_active');
}

const hideInputError = (inputElement) => {
  const formSectionElement = inputElement.closest('.popup__section');
  const errorElement = formSectionElement.querySelector('.popup__input-error');
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_type_active');
}

//6. Создаем функцию которая проверяет валиден ли инпут или нет
const checkInputValidity = (inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;
  if(isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(inputElement, errorMessage);
  } else {
    hideInputError(inputElement);
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
const setEventListeners = (formElement) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  });
  //4. Получим список инпутов
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  //9. Находим кнопку
  const buttonElement = formElement.querySelector('.popup__submit');
  toggleButtonState(inputList, buttonElement);
  //5. Пробегаемся по полям, чтобы они нам выдавали текст ошибок
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', (event) => {
      checkInputValidity(inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}


const enableValidation = () => {
  //1. Находим все формы
  const formList = Array.from(document.querySelectorAll('.popup__content'));
  //2. проходимся по всем формам и отменяем стандартную отправку форм
  formList.forEach(setEventListeners);
};

enableValidation();

/*


*/
