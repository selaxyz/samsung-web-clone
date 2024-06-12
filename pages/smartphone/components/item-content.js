/**
 * Custom HTML element representing Item Content
 *
 * @export
 * @class ItemContent
 * @extends {HTMLElement}
 */
export class ItemContent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // const chlidText = this.textContent
    const desc = this.getAttribute("desc");
    const imgSrc = this.getAttribute("imgSrc");
    const title = this.getAttribute("title");
    let textHTML = "";
    if (!desc) {
      textHTML = `
            <div>
                <img class="h-28" src="${imgSrc}" alt="Item Image 1" />
                <div class="flex w-[200px] flex-col gap-2">
                    <h3 class="mt-2 font-bold md:mt-4">${title}</h3>
                </div>
            </div>            
            `;
    } else {
      textHTML = `
            <div class="md:flex">
                <img class="h-28" src="${imgSrc}" alt="Item Image 2" />
                <div class="flex w-32 flex-col gap-2">
                    <h3 class="mt-2 font-bold md:mt-4">${title}</h3>
                    <p class="hidden md:block text-sm">
                        ${desc}
                    </p>
                </div>
            </div>
            `;
    }
    this.innerHTML = textHTML;
    this.classList.add("block");
  }
}
customElements.define("item-content", ItemContent);
