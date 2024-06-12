/**
 * Footer category section.
 * 
 * This script defines a custom HTML element for footer category sections.
 * It includes a FooterCategory class that extends HTMLElement and dynamically generates footer categories based on provided data attributes.
 * 
 * FooterCategory class:
 * - Extends HTMLElement.
 * - Handles the creation of footer category sections based on provided data attributes such as title, category, and size.
 * - Inserts footer items within each category using the footer-item custom element.
 * 
 * Data attributes:
 * - title: Title of the footer category.
 * - category: Category identifier for footer items.
 * - size: Size identifier for the category section (small or large).
 */

export class FooterCategory extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const title = this.dataset.title;
    const category = this.dataset.category;
    const size = this.dataset.size;

    if (size === "small") {
      this.innerHTML = ` <details class="py-6 px-4 border-b">
                <summary class="flex justify-between items-center">
                    <p>${title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    </svg>
                </summary>
                <footer-item class="flex flex-col gap-2 mt-4 text-lg font-normal" data-category="${category}"></footer-item>
            </details>`;
    } else {
      this.innerHTML = `<div class="flex flex-col gap-4 p-6">
        <h3 class="font-bold text-lg">${title}</h3>
            <footer-item class="flex flex-col text-sm gap-2" data-category="${category}"></footer-item>
        </div>`;
    }
  }
}

customElements.define("footer-category", FooterCategory);
