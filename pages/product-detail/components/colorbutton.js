/**
 * Custom HTML element representing a color button
 *
 * @export
 * @class ColorButton
 * @extends {HTMLElement}
 */
export class ColorButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const title = this.dataset.title;
    const textColor = this.dataset.color;

    this.innerHTML = `
            <span
                class="w-8 h-8 rounded-full border block border-black ${textColor}"
                ></span>
                <p>${title}</p>
                <p>$189.99</p> 
        `;
    this.classList +=
      " color-card flex flex-col justify-center items-center border-2 w-[49%]  rounded-md mt-2 p-3 cursor-pointer";
  }
}
