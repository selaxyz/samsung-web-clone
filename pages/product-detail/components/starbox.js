/**
 * Custom HTML element representing Component StarBox
 * <star-box></star-box>
 * @export
 * @class StarBox
 * @extends {HTMLElement}
 */
export class StarBox extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `            
            <img class="h-full w-6 m-auto" src="/assets/images/product-detail/star-no-fill.svg" alt="star">
        `;
    this.classList =
      "rate-star size-12 border-2 border-orange-300 rounded-lg cursor-pointer";
  }
}
