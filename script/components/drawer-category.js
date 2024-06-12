/**
 * DrawerCategory component.
 * 
 * This script defines a custom HTML element for a drawer category component.
 * The DrawerCategory class extends HTMLElement and creates a list of drawer items based on the specified categories.
 * 
 * DrawerCategory class:
 * - Extends HTMLElement.
 * - Retrieves the category attribute from the dataset and generates drawer items accordingly in the connectedCallback method.
 * 
 * Usage:
 * The custom element is defined as "drawer-category" using customElements.define.
 * It can be included in HTML documents to create a drawer menu with multiple categories of navigation items.
 * Each category is represented by a DrawerItem component.
 */

const category = ["signin", "shop", "support", "account"];

export class DrawerCategory extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    category.forEach((item) => {
      const navItem = document.createElement("div");
      navItem.innerHTML = `<drawer-item data-category="${item}"></drawer-item> <hr>`;
      this.appendChild(navItem);
    });
  }
}

customElements.define("drawer-category", DrawerCategory);
