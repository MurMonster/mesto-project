//активация открытия и закрытия модальных окон (пункт №1 и первая часть №3 задания)
const popupEdit = document.querySelector(".popup__edit"); //вывожу edit
const buttonEdit = document.querySelector(".profile__button-edit"); //вывожу открытие edit
const buttonsClose = document.querySelectorAll(".popup__button-close"); //закрываю
const popupAdd = document.querySelector(".popup__add"); //вывожу add
const profile = document.querySelector(".profile__button-add"); //открываю add
const popupPicture = document.querySelector(".popup__picture");
const pictureBig = document.querySelector(".popup__picture-big");
const pictureCaption = document.querySelector(".popup__picture-caption");
const profileTitle = document.querySelector(".profile__info-title");
const profileSubtitle = document.querySelector(".profile__info-subtitle");
const initialCardsList = document.querySelector(".elements");
const nameInput = document.querySelector(
  // Находим поля формы в DOM
  '.popup__form-edit-item[name="input-heading"]'
);
const jobInput = document.querySelector(
  '.popup__form-edit-item[name="input-description"]'
);

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
profile.addEventListener("click", function (evt) {
  openPopup(popupAdd);
});
buttonEdit.addEventListener("click", function (evt) {
  nameInput.value = profileTitle.textContent; //вставка при открытии попапа
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__button-close');

// с окончанием `s` нужно обязательно, так как много кнопок
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

function createCard(element) {
  const initialCardTemplate = document.querySelector("#element-template");
  const initialCardElement = initialCardTemplate.content.cloneNode(true);
  const image = initialCardElement.querySelector(".element__image");
  image.src = element.link;
  image.alt = element.name; // Укажите здесь значение поля name каждого перебираемого элемента;
  initialCardElement.querySelector(".element__title-text").textContent =
    element.name; // Укажите здесь значение поля career каждого перебираемого элемента;

const buttonRemoveList = initialCardElement.querySelector(".element__trash");
buttonRemoveList.addEventListener("click", function (evt) {
  evt.target.closest(".element").remove();
}); //мусорка
const listButtonLike = initialCardElement.querySelector(".element__like");
listButtonLike.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("element__like_active")) {
    evt.target.classList.remove("element__like_active");
  } else {
    evt.target.classList.add("element__like_active");
  }
}); //конец лайков
image.addEventListener("click", function (picture) {
  openPopup(popupPicture); //открываем попап с картинкой
  pictureBig.src = picture.target.src; //подмена src (куда) => откуда
  pictureBig.alt = picture.target.alt;
  const currentElement = picture.target.closest(".element"); //ищем ближайший элемент(картинку), в которой находимся (типо там устрицы)
  const elementText = currentElement.querySelector(
    ".element__title-text"
  ).textContent; //ищем подпись в ближайшем определенном блоке, который раньше выбрали
  pictureCaption.textContent = elementText; // вносим в подпись шаблонного элемента новую надпись
}); //конец картинки большой

  return initialCardElement;
}

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
    const newCard = createCard(element);
    initialCardsList.append(newCard);
  });
};
//задание №4. добавление карточек (создание карточек)
const formAddElement = document.querySelector(".popup__form-add");
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
  const newCard = createCard({ name: CardImageValue, link: CardLinkValue });
  ElementsContainer.prepend(newCard);

  evt.target.reset();
  closePopup(popupAdd);
}
formAddElement.addEventListener("submit", handleFormAdd);
//конец задания № 4
