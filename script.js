//активация открытия и закрытия модальных окон (пункт №1 и первая часть №3 задания)
const popup = document.querySelector(".popup"); //вывожу edit
const buttonEdit = document.querySelector(".profile__button-edit"); //вывожу открытие edit
const buttonClose = document.querySelectorAll(".popup__button-close"); //закрываю
const popupAdd = document.querySelector(".popup__add"); //вывожу add
const profile = document.querySelector(".profile__button-add"); //открываю add
const popupPicture = document.querySelector(".popup__picture");
const pictureBig = document.querySelector(".popup__picture-big");
const pictureCaption = document.querySelector(".popup__picture-caption");
function toggleModal(event) {
  //открываю модальное окно
  if (event.target.matches(".profile__button-edit")) {
    popup.classList.add("popup_opened");
  } else if (event.target.matches(".profile__button-add")) {
    popupAdd.classList.add("popup_opened");
  } else if (event.target.matches(".popup .popup__button-close")) {
    popup.classList.remove("popup_opened");
  } else if (event.target.matches(".popup__add .popup__button-close")) {
    popupAdd.classList.remove("popup_opened");
  } else if (event.target.matches(".popup__picture .popup__button-close")) {
    popupPicture.classList.remove("popup_opened");
  }
}
profile.addEventListener("click", toggleModal);
buttonEdit.addEventListener("click", toggleModal);
buttonClose.forEach((btn) => btn.addEventListener("click", toggleModal)); //окончание акцивации открытия и закрытия модального окна
//№1 из задания (сохранение данных в форме)
const formElement = document.querySelector(".popup__form-edit"); // Находим форму в DOM
const nameInput = document.querySelector(
  // Находим поля формы в DOM
  '.popup__form-edit-item[name="input-heading"]'
);
const jobInput = document.querySelector(
  '.popup__form-edit-item[name="input-description"]'
);
function handleFormSubmit(evt) {
  evt.preventDefault(); // не нужны примитивные действия движка
  const nameInputValue = nameInput.value; // Выбираю элементы, куда должны быть вставлены значения полей
  const jobInputValue = jobInput.value; // Выбираю элементы, куда должны быть вставлены значения полей
  const profileTitle = document.querySelector(".profile__info-title");
  const profileSubtitle = document.querySelector(".profile__info-subtitle");
  profileTitle.textContent = nameInputValue; // Вставляю новые значения с помощью textContent
  profileSubtitle.textContent = jobInputValue; // Вставляю новые значения с помощью textContent
  popup.classList.remove("popup_opened"); //закрытие автоматическое модального окна
}
formElement.addEventListener("submit", handleFormSubmit); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
const initialCards = [
  //работа с добавлением карточек задание №2
  {
    name: "Любовь",
    link: "https://i.pinimg.com/564x/3a/4a/fe/3a4afedbf9eff664fd2333610c64f3b9.jpg",
  },
  {
    name: "Наедине с собой",
    link: "./images/чилл.png",
  },
  {
    name: "Терпкий",
    link: "./images/кофе.png",
  },
  {
    name: "Тело",
    link: "./images/купальник.png",
  },
  {
    name: "Дума",
    link: "./images/причал.png",
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
    const initialCardsList = document.querySelector(".elements");
    const initialCardTemplate = document.querySelector("#element-template");
    const initialCardElement = initialCardTemplate.content.cloneNode(true);
    initialCardElement.querySelector(".element__image").src = element.link; // Укажите здесь значение поля name каждого перебираемого элемента;
    initialCardElement.querySelector(".element__title-text").textContent =
      element.name; // Укажите здесь значение поля career каждого перебираемого элемента;
    initialCardsList.append(initialCardElement);
  });
  const ListbuttonLike = document.querySelectorAll(".element__like"); //ставлю лайк № 5
  ListbuttonLike.forEach(function (element) {
    element.addEventListener("click", function (evt) {
      if (evt.target.classList.contains("element__like_active")) {
        evt.target.classList.remove("element__like_active");
      } else {
        evt.target.classList.add("element__like_active");
      }
    });
  });
  const buttonRemoveList = document.querySelectorAll(".element__trash"); // удаляю карточки № 6
  buttonRemoveList.forEach(function (element) {
    element.addEventListener("click", function (evt) {
      evt.target.closest(".element").remove();
    });
  });
  //открытие картинки(просмотр фото)
  const elementImage = document.querySelectorAll(".element__image"); //
  elementImage.forEach(function (photo) {
    photo.addEventListener("click", function (picture) {
      popupPicture.classList.add("popup_opened"); //открываем попап с картинкой
      pictureBig.src = picture.target.src; //подмена src (куда) => откуда
      const currentElement = picture.target.closest(".element"); //ищем ближайший элемент(картинку), в которой находимся (типо там устрицы)
      const elementText = currentElement.querySelector(
        ".element__title-text"
      ).textContent; //ищем подпись в ближайшем определенном блоке, который раньше выбрали
      pictureCaption.textContent = elementText; // вносим в подпись шаблонного элемента новую надпись
    });
  });
};
//задание №4. добавление карточек
const FormAddElement = document.querySelector(".popup__form-add");
const CardImage = document.querySelector(
  //находим поля формы в DOM
  '.popup__form-add-item[name="input-heading"]'
);
const CardLink = document.querySelector(
  '.popup__form-add-item[name="input-description"]'
);
function handleFormAdd(evt) {
  evt.preventDefault();
  const CardImageValue = CardImage.value;
  const CardLinkValue = CardLink.value;
  const ElementsContainer = document.querySelector(".elements");
  const ElementTemplate = document.querySelector("#element-template");
  const CardElement = ElementTemplate.content.cloneNode(true);
  CardElement.querySelector(".element__title-text").textContent =
    CardImageValue;
  CardElement.querySelector(".element__image").src = CardLinkValue;
  ElementsContainer.prepend(CardElement);
  const LastCard = document.querySelector(".element");
  const ListbuttonLike = LastCard.querySelector(".element__like");
  const buttonRemoveList = LastCard.querySelector(".element__trash");
  const elementImage = LastCard.querySelector(".element__image");
  buttonRemoveList.addEventListener("click", function (evt) {
    evt.target.closest(".element").remove();
  });
  ListbuttonLike.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("element__like_active")) {
      evt.target.classList.remove("element__like_active");
    } else {
      evt.target.classList.add("element__like_active");
    }
  });
  elementImage.addEventListener("click", function (picture) {
    popupPicture.classList.add("popup_opened"); //открываем попап с картинкой
    pictureBig.src = picture.target.src; //подмена src (куда) => откуда
    const currentElement = picture.target.closest(".element"); //ищем ближайший элемент(картинку), в которой находимся (типо там устрицы)
    const elementText = currentElement.querySelector(
      ".element__title-text"
    ).textContent; //ищем подпись в ближайшем определенном блоке, который раньше выбрали
    pictureCaption.textContent = elementText; // вносим в подпись шаблонного элемента новую надпись
  });
}
popupAdd.classList.remove("popup_opened"); //автоматическое закрытие модального окна
FormAddElement.addEventListener("submit", handleFormAdd);
//конец задания № 4
