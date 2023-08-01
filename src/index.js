import chill from './images/чилл.png';
import coffee from './images/кофе.png';
import cupalnik from './images/купальник.png';
import prichal from './images/причал.png';
import './pages/index.css';

import {createCard} from './components/card.js';
import {closePopup, openPopup, popupEdit, popupAdd, formEdit, formAdd} from './components/modal.js';
import {showInputError, hideInputError, isValid, setEventListener, hasInvalidInput, toggleButtonState} from './components/validate.js';


//активация открытия и закрытия модальных окон (пункт №1 и первая часть №3 задания)
const buttonEdit = document.querySelector(".profile__button-edit"); //вывожу открытие edit
const buttonsClose = document.querySelectorAll(".popup__button-close"); //закрываю
const profile = document.querySelector(".profile__button-add"); //открываю add

const profileTitle = document.querySelector(".profile__info-title");
const profileSubtitle = document.querySelector(".profile__info-subtitle");
const initialCardsList = document.querySelector(".elements");
const cardNameError = document.querySelector(".popup__notification-name");
const cardLinkError = document.querySelector(".popup__notification-link");
const buttonSubmit = document.querySelector(".popup__button-submit");
const buttonCreate = document.querySelector(".popup__button-create");

const nameInput = formEdit.querySelector(
  // Находим поля формы в DOM
  '.popup__form-item[name="input-heading"]'
);
const jobInput = formEdit.querySelector(
  '.popup__form-item[name="input-description"]'
);
const cardName = document.querySelector(
  '.popup__form-item[name="input-heading"]'
);
const cardLink = document.querySelector(
  '.popup__form-item[name="input-description"]'
);
const nameInputError = document.querySelector(".popup__notification-heading");
const jobInputError = document.querySelector(
  ".popup__notification-description"
);



profile.addEventListener("click", function (evt) {
  openPopup(popupAdd);
});

buttonEdit.addEventListener("click", function (evt) {
  nameInput.value = profileTitle.textContent; //вставка при открытии попапа
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll(".popup__button-close");

// с окончанием `s` нужно обязательно, так как много кнопок
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest(".popup");
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener("click", () => closePopup(popup));
});



//№1 из задания (сохранение данных в форме)
const formElement = document.querySelector(".popup__form-edit"); // Находим форму в DOM

function handleFormSubmit(evt) {
  evt.preventDefault(); // не нужны примитивные действия движка
  const nameInputValue = nameInput.value; // Выбираю элементы, куда должны быть вставлены значения полей
  const jobInputValue = jobInput.value; // Выбираю элементы, куда должны быть вставлены значения полей
  profileTitle.textContent = nameInputValue; // Вставляю новые значения с помощью textContent
  profileSubtitle.textContent = jobInputValue; // Вставляю новые значения с помощью textContent
  closePopup(popupEdit);
}
formElement.addEventListener("submit", handleFormSubmit); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
const initialCards = [
  //работа с добавлением карточек задание №2
  {
    name: "Дружба",
    link: "https://i.pinimg.com/564x/65/c9/cf/65c9cfb41dbedcf9a10a0d86d9eb8ffb.jpg",
  },
  {
    name: "Любовь",
    link: "https://i.pinimg.com/564x/3a/4a/fe/3a4afedbf9eff664fd2333610c64f3b9.jpg",
  },
  {
    name: "Наедине с собой",
    link: chill,
  },
  {
    name: "Терпкий",
    link: coffee,
  },
  {
    name: "Тело",
    link: cupalnik,
  },
  {
    name: "Дума",
    link: prichal,
  },
  {
    name: "Спина",
    link: "https://i.pinimg.com/564x/1e/7a/c6/1e7ac6e8c154c5f0d2edc6596d0eaf41.jpg",
  },
  {
    name: "Фрукты",
    link: "https://i.pinimg.com/564x/09/d5/6e/09d56ebea2e92eb3a6e81dd0e35fb4d3.jpg",
  },
  {
    name: "Отдых",
    link: "https://i.pinimg.com/564x/0a/54/ea/0a54ea7c4d4c38782e9122c1bcbc95d4.jpg",
  },
  {
    name: "Сарафан",
    link: "https://i.pinimg.com/564x/75/5f/43/755f43da23c7f7f86cd56e07235ff970.jpg",
  },
  {
    name: "Вид",
    link: "https://i.pinimg.com/564x/49/04/c4/4904c48f41daeccdca5778e072676283.jpg",
  },
  {
    name: "Нямка!",
    link: "https://i.pinimg.com/564x/cc/9b/e6/cc9be6a424dbe5456c09017664724c71.jpg",
  },
];
window.onload = function () {
  //выполнение скрипта после загрузки, помогает избежать ошибку в консоли

  initialCards.forEach(function (element) {
    const newCard = createCard(element);
    initialCardsList.append(newCard);
  });
};
//задание №4. добавление карточек (создание карточек)
const formAddElement = document.querySelector(".popup__form-add");
const CardImage = formAddElement.querySelector(
  //находим поля формы в DOM
  '.popup__form-item[name="input-heading"]'
);
const CardLink = formAddElement.querySelector(
  '.popup__form-item[name="input-description"]'
);

function handleFormAdd(evt) {
  evt.preventDefault();
  const CardImageValue = CardImage.value;
  const CardLinkValue = CardLink.value;
  const ElementsContainer = document.querySelector(".elements");
  const newCard = createCard({ name: CardImageValue, link: CardLinkValue });
  ElementsContainer.prepend(newCard);

  evt.target.reset();
  closePopup(popupAdd);
}
formAddElement.addEventListener("submit", handleFormAdd);
//конец задания № 4

/*nameInput.addEventListener("input", function (evt) {
  if (evt.target.validity.valueMissing) {
    nameInputError.textContent = "Это обязательное поле!";
  } else if (evt.target.validity.tooShort || evt.target.validity.tooLong) {
    nameInputError.textContent = "Поле должно содержать от 2 до 40 символов";
  } else if (evt.target.validity.patternMismatch) {
    nameInputError.textContent = "Поле должно содержать только латинские буквы, кириллические буквы, знаки дефиса и пробелы";
  } else {
    nameInputError.textContent = "";
  };
  if (!evt.target.validity.valid){
  buttonSubmit.disabled = true;
  buttonSubmit.classList.add('popup__button-submit-inactive');
  } else {
    buttonSubmit.disabled = false;
  buttonSubmit.classList.remove('popup__button-submit-inactive');
  }
});
jobInput.addEventListener("input", function (evt) {
  if (evt.target.validity.valueMissing) {
    jobInputError.textContent = "Это обязательное поле!";
  } else if (evt.target.validity.tooShort || evt.target.validity.tooLong) {
    jobInputError.textContent = "Поле должно содержать от 2 до 200 символов";
  } else if (evt.target.validity.patternMismatch) {
    jobInputError.textContent = "Поле должно содержать только латинские буквы, кириллические буквы, знаки дефиса и пробелы";
  } else {
    jobInputError.textContent = "";
  }
  if (!evt.target.validity.valid){
    buttonSubmit.disabled = true;
    buttonSubmit.classList.add('popup__button-submit-inactive');
    } else {
      buttonSubmit.disabled = false;
    buttonSubmit.classList.remove('popup__button-submit-inactive');
    }
});
cardName.addEventListener("input", function (evt) {
  if (evt.target.validity.valueMissing) {
    cardNameError.textContent = "Это обязательное поле!";
  } else if (evt.target.validity.tooShort || evt.target.validity.tooLong) {
    cardNameError.textContent = "Поле должно содержать от 2 до 30 символов";
  } else if (evt.target.validity.patternMismatch) {
    cardNameError.textContent = "Поле должно содержать только латинские буквы, кириллические буквы, знаки дефиса и пробелы";
  } else {
    cardNameError.textContent = "";
  }
  if (!evt.target.validity.valid){
    buttonCreate.disabled = true;
    buttonCreate.classList.add('popup__button-create-inactive');
    } else {
      buttonCreate.disabled = false;
    buttonCreate.classList.remove('popup__button-create-inactive');
    }
});
cardLink.addEventListener("input", function (evt) {
  if (evt.target.validity.valueMissing) {
    cardLinkError.textContent = "Это обязательное поле!";
  } else if (evt.target.validity.typeMismatch) {
    cardLinkError.textContent = "В поле должен быть URL!";
  } else {
    cardLinkError.textContent = "";
  };
  if (!evt.target.validity.valid){
    buttonCreate.disabled = true;
    buttonCreate.classList.add('popup__button-create-inactive');
    } else {
      buttonCreate.disabled = false;
    buttonCreate.classList.remove('popup__button-create-inactive');
    }
});*/


function enableValidation (){
  setEventListener(formEdit, buttonSubmit);
  setEventListener(formAdd, buttonCreate);
};
enableValidation();

