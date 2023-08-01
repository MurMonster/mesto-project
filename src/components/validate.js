export function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__form-item_type_error");
    errorElement.textContent = errorMessage;
}

export function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("popup__form-item_type_error");
    errorElement.textContent = "";
}

export function isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
    hideInputError(formElement, inputElement);
    }
}

export function setEventListener(formElement, buttonElement) {
    const inputList = Array.from(
    formElement.querySelectorAll(".popup__form-item")
    );
    inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
    isValid(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
    });
    });
}

export function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    });
}

export function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add("popup__button-inactive");
    } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("popup__button-inactive");
    }
}
