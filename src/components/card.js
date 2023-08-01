import { openPopup, popupPicture } from "./modal.js";


export function createCard(element) {
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

    const pictureBig = document.querySelector(".popup__picture-big");
    const pictureCaption = document.querySelector(".popup__picture-caption");
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
