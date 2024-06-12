/**
 * DrawerItem component.
 * 
 * This script defines a custom HTML element for a drawer item component.
 * The DrawerItem class extends HTMLElement and creates a list of navigation items based on the provided data.
 * 
 * DrawerItem class:
 * - Extends HTMLElement.
 * - Retrieves the category attribute from the dataset and generates navigation items accordingly in the connectedCallback method.
 * 
 * handleNavItem method:
 * - Accepts an array of objects representing navigation items.
 * - Creates a div element for each navigation item.
 * - Sets the href attribute and innerHTML of the div element based on the provided data.
 * - Appends each div element to the DrawerItem component.
 * 
 * Usage:
 * The custom element is defined as "drawer-item" using customElements.define.
 * It can be included in HTML documents to create a drawer menu with navigation items based on the specified category.
 */

const signin = [
  { label: "Sign in Create Account", link: "../../pages/login/index.html" },
];
const shop = [
  { label: "Shop", link: "#" },
  { label: "All Offers", link: "../../pages/continue-shopping/index.html" },
  { label: "Smartphones", link: "../../pages/smartphone/index.html" },
  { label: "Galaxy AI", link: "../../pages/galaxy-ai/index.html" },
  { label: "Computing", link: "#" },
  { label: "Displays", link: "#" },
  { label: "Accesories", link: "#" },
  { label: "Discover Samsung Sale", link: "#" },
];
const support = [
  { label: "Support", link: "../../pages/support/index.html" },
  { label: "Privacy", link: "../../pages/privacy-page/index.html" },
];
const account = [
  {
    label: "Why Create Account?",
    link: "../../pages/account-benefit/index.html",
  },
  { label: "Track your Orders", link: "../../pages/track-order/index.html" },
  { label: "Business Account", link: "#" },
];

export class DrawerItem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const category = this.dataset.category;
    switch (category) {
      case "signin":
        this.handleNavItem(signin);
        break;
      case "shop":
        this.handleNavItem(shop);
        break;
      case "support":
        this.handleNavItem(support);
        break;
      case "account":
        this.handleNavItem(account);
        break;
    }
  }
  handleNavItem(data) {
    data.forEach((item) => {
      const navItem = document.createElement("div");
      navItem.classList.add("py-2");
      navItem.innerHTML = `<a href="${item.link}">${item.label}</a>    `;
      this.appendChild(navItem);
    });
  }
}

customElements.define("drawer-item", DrawerItem);
