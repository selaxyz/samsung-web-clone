/**
 * Custom HTML element representing a Review Bar Component
 *
 * @export
 * @class ReviewBar
 * @extends {HTMLElement}
 */
export class ReviewBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const title = this.dataset.title;
    const percent = this.dataset.percent;
    const count = this.dataset.count;
    this.innerHTML = `
            <p class="flex-none w-12">${title}</p>
            <div
            class="ml-4 relative h-3 w-[100%] rounded-md bg-gray-400">
                <div
                class="left-0 absolute h-3 w-[${percent}%] rounded-l-md bg-orange-400"
                ></div>
            </div>
            
            <p class="w-12 ml-2">${count}</p>
        `;
    this.classList =
      "flex items-center relative cursor-pointer hover:opacity-80";
  }
}
