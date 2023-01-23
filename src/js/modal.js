const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const modalText = document.querySelector(".modal-text");
const modalBtn = document.querySelector(".btn2");

function bodyLock() {
  body.classList.add("lock");
}

function popupClose(popupActive) {
  popupActive.classList.remove("open");
  body.classList.remove("lock");
}

function popupOpen(curentPopup) {
  if (curentPopup) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
      switch (e.target.dataset.id) {
        case "1":
          modalText.innerHTML = "и наш менеджер перезвонит вам в рабочее время";
          break;
        case "2":
          modalText.innerHTML =
            "и мы отправим вам результаты уже действующих партнеров";
          break;
        case "3":
          modalText.innerHTML =
            "и мы отправим вам шаблон договора и подробную информацию по проекту";
          break;
        case "4":
          modalBtn.dataset.package = e.target.dataset.package;
          modalText.innerHTML =
            "и мы отправим вам подробную информацию о продукции и условиях сотрудничества";
          break;
      }
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});
