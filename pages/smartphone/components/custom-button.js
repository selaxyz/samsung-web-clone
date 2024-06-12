/**
 * Custom HTML element representing Custom Button
 *
 * @export
 * @class CustomButton
 * @extends {HTMLElement}
 */
export class CustomButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const chlidText = this.textContent;

    let bgColor = "bg-black";
    let textColor = "text-white";
    const bgTheme = this.getAttribute("theme");
    if (bgTheme === "bg-white") {
      bgColor = bgTheme;
      textColor = "text-black";
    }

    this.innerHTML = `
            <button class="${bgColor} ${textColor} border border-black text-sm cursor-pointer px-8 py-2 md:py-2.5 font-semibold hover:opacity-80 rounded-full">
                ${chlidText}
            </button>
        `;
    this.classList.add("block");
  }
}
