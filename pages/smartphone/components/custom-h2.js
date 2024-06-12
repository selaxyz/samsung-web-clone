/**
 * Custom HTML element representing Custom H2
 *
 * @export
 * @class CustomH2
 * @extends {HTMLElement}
 */
export class CustomH2 extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const chlidText = this.textContent;
    this.innerHTML = `
            <h2 class="mb-10 mt-8 text-center text-2xl font-bold sm:text-5xl md:mb-5 md:text-3xl lg:text-5xl">
                ${chlidText}
            </h2>
        `;
    this.classList.add("block");
  }
}
