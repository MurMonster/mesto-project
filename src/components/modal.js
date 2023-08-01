export  const popupEdit = document.querySelector(".popup__edit"); //вывожу edit
export const popupAdd = document.querySelector(".popup__add"); //вывожу add
export const popupPicture = document.querySelector(".popup__picture");
export const formEdit = document.querySelector(".popup__form-edit");
export const formAdd = document.querySelector(".popup__form-add");
const formPicture = document.querySelector(".popup__picture-container");

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });
  popup.removeEventListener("mousedown", function (evt) {
    let formPopup;
    if (popup === popupEdit) {
      formPopup = formEdit;
    } else if (popup === popupAdd) {
      formPopup = formAdd;
    } else if (popup === popupPicture) {
      formPopup = formPicture;
    }

    if (!formPopup.contains(evt.target)) {
      closePopup(popup);
    }
  });
}

export function openPopup(popup) {
  popup.addEventListener("mousedown", function (evt) {
    let formPopup;
    if (popup === popupEdit) {
      formPopup = formEdit;
    } else if (popup === popupAdd) {
      formPopup = formAdd;
    } else if (popup === popupPicture) {
      formPopup = formPicture;
    }

    if (!formPopup.contains(evt.target)) {
      closePopup(popup);
    }
  });
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });
  popup.classList.add("popup_opened");
}
