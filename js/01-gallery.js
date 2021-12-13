import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallary = document.querySelector(".gallery");

const cardsGallery = imgCards(galleryItems);

function imgCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(" ");
}
gallary.insertAdjacentHTML("beforeend", cardsGallery);

gallary.addEventListener("click", clickBtn);

function clickBtn(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  //console.log(event);
  const modal = basicLightbox.create(
    `<img
        src="${event.target.dataset.source}"
      />`,
    {
      onShow: (modal) => {
        document.addEventListener("keydown", openMod);
      },
      onClose: (modal) => {
        document.removeEventListener("keydown", openMod);
      },
    }
  );
  modal.show();
  function openMod(evt) {
    if (evt.code === "Escape") {
      modal.close();
    }
  }
}
