// Image Review Data
const imgReviews = [
  "/assets/images/product-detail/review-image-1.jpeg",
  "/assets/images/product-detail/review-image-2.jpeg",
  "/assets/images/product-detail/review-image-3.jpeg",
  "/assets/images/product-detail/review-image-4.jpeg",
  "/assets/images/product-detail/review-image-5.jpeg",
  "/assets/images/product-detail/review-image-6.jpeg",
  "/assets/images/product-detail/review-image-7.jpeg",
  "/assets/images/product-detail/review-image-8.jpeg",
];

/**
 * Custom HTML element representing a Image List in Review Section
 *
 * @export
 * @class ImageList
 * @extends {HTMLElement}
 */
export class ImageList extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    for (const imgSrc of imgReviews) {
      const imageHTML = `
                <img
                class="size-44 min-w-40 object-cover transition-all hover:scale-105"
                src="${imgSrc}"
                alt="image-review"
                />
                `;
      this.innerHTML += imageHTML;
    }
    this.classList.add("block");
    this.classList +=
      " flex flex-nowrap gap-3 transition-transform duration-500";
  }
}
