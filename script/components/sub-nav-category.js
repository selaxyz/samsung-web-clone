/**
 * SubNavCategory custom HTML element.
 * 
 * This class defines a custom HTML element for a sub-navigation category in the navigation bar.
 * It uses data attributes for the title and category to dynamically generate the inner HTML content.
 * 
 * @class
 * @extends {HTMLElement}
 */

export class SubNavCategory extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const title = this.dataset.title;
    const category = this.dataset.category;
    this.innerHTML = `
        <div class="space-y-6">
            <h2 class="font-bold">${title}</h2>
            <ul><sub-nav-item data-category="${category}"></sub-nav-item></ul>
        </div>`;
  }
}

customElements.define("sub-nav-category", SubNavCategory);
