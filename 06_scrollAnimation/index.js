const container = document.getElementsByClassName("container")[0];

let lastKnownScrollPosition = 0;
let ticking = false;

const height = window.innerHeight;
const cardHeight = 200; // px
const cardPadding = 0; // px

const nCards = Math.floor(height / (cardHeight + cardPadding)) - 1; // add a teaser card

function addCard(container) {
  let content = document.createElement("div");
  content.classList.add("content");
  content.appendChild(document.createTextNode(`Card`));
  container.appendChild(content);
}

function removeCard(container) {
  container.removeChild(container.lastChild);
}

for (let i = 0; i < nCards; i++) {
  addCard(container);
}

document.addEventListener("scroll", (e) => {
  lastKnownScrollPosition = window.scrollY;

  console.log("cards", container.childNodes.length);

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const nCardsToRender = Math.ceil(
        (height + lastKnownScrollPosition) / cardHeight
      );

      const diff = nCardsToRender - container.childNodes.length;

      if (diff > 0) {
        for (let j = 0; j < diff; j++) {
          addCard(container);
        }
      } else {
        removeCard(container);
      }

      ticking = false;
    });

    ticking = true;
  }
});
