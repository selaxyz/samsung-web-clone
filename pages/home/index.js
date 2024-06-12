/**
 * Represents the container for 'foryou' cards.
 * @type {HTMLElement}
 */
const foryouContainer = document.getElementById("foryou-card-container");

/**
 * Represents the image element for exploration.
 * @type {HTMLElement}
 */
const imgExplor = document.getElementById("img-explore");

/**
 * Represents the container for 'Explore' buttons.
 * @type {NodeList}
 */
const btnExploreContainer = document.querySelectorAll(
  ".explore-btn-container button",
);

/**
 * Represents the container for exploration.
 * @type {HTMLElement}
 */
const exploreContainer = document.querySelector("#explore-container");

/**
 * Represents the 'For You' buttons.
 * @type {NodeList}
 */
const btnForYou = document.querySelectorAll(".btn-forYou");

/**
 * Represents the position for exploration.
 * @type {number}
 */
let positonExplore = 0;

/**
 * Sets the style of a button.
 * @param {HTMLElement} btn - The button element to set the style.
 * @param {string} color - The background color of the button.
 * @param {string} border - The border of the button.
 */
function btnStyle(btn, color, border) {
  btn.style.backgroundColor = `${color}`;
  btn.style.border = `${border}`;
}

/**
 * Moves the container upon button click.
 * @param {HTMLElement} btn - The button element triggering the movement.
 * @param {number} pos - The position to move to.
 * @param {HTMLElement} container - The container to be moved.
 */
function btnMoving(btn, pos, container) {
  btn.addEventListener("click", () => {
    container.style.transform = `translateX(-${pos}%)`;
  });
}

btnExploreContainer.forEach((e, i) => {
  btnMoving(e, positonExplore, exploreContainer);
  positonExplore += 90;
});

/**
 * Array containing paths to explore images.
 * @type {string[]}
 */
const imgExplorPath = [
  "assets/images/home/explore/explore.png",
  "assets/images/home/explore/img-1.jpg",
  "assets/images/home/explore/img-2.jpg",
  "assets/images/home/explore/img-3.jpg",
  "assets/images/home/explore/img-4.jpg",
];

/**
 * Handles the hover events on explore item links.
 * @param {number} i - The index of the explore item.
 */
function onItemHover(i) {
  imgExplor.src = imgExplorPath[i];
  exploreItemLinks[i].classList.toggle("border-t-4");
  const element = exploreItemLinks[i].lastElementChild.lastElementChild;
  if (element.hasAttribute("hidden")) {
    element.removeAttribute("hidden");
  } else {
    element.setAttribute("hidden", "");
  }
}

const exploreItemLinks = document.querySelectorAll(".explore-item-link");
exploreItemLinks.forEach((link, i) => {
  link.addEventListener("mouseenter", () => onItemHover(i));
  link.addEventListener("mouseleave", () => onItemHover(i));
});

/**
 * Sets up the carousel functionality for the 'For You' section.
 * @param {HTMLElement} container - The container element for the carousel.
 * @param {NodeList} btn - The buttons controlling the carousel.
 */
function caroselTab(container, btn) {
  btn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      container.style.transform = `translateX(-${i}00%)`;
    });
  });
}

/**
 * Sets up the carousel functionality for the small carousel.
 * @param {HTMLElement} container - The container element for the carousel.
 * @param {NodeList} btn - The buttons controlling the carousel.
 */
function caroselSmall(container, btn) {
  btn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      container.style.transform = `translateX(-${i + 8}0%)`;
    });
  });
}

// Initialize carousel for 'For You' section
caroselTab(foryouContainer, btnForYou);
