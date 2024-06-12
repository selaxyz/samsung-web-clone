/**
 * Navigation data and TopNavItem custom HTML element.
 * 
 * This script defines various data arrays for top navigation items and a custom HTML element class for top navigation items.
 * The TopNavItem class dynamically generates navigation items based on the specified category in its data attributes.
 * 
 * Data arrays:
 * - mainItems: Array of main navigation items.
 * - secondaryItems: Array of secondary navigation items.
 * 
 * TopNavItem class:
 * - Extends HTMLElement.
 * - Dynamically generates and inserts navigation items based on the specified category.
 * - handleNavItem method creates and appends navigation items to the element.
 */

const mainItems = [
  { label: "Shop", link: "#" },
  { label: "AI", link: "../../pages/galaxy-ai/index.html" },
  { label: "Mobile", link: "#" },
  { label: "TV & Audio", link: "#" },
  { label: "Appliances", link: "#" },
  { label: "Computing", link: "#" },
  { label: "Displays", link: "#" },
  { label: "Accessories", link: "#" },
  { label: "SmartThings", link: "#" },
];

const secondaryItems = [
  { label: "Explore", link: "#" },
  { label: "Support", link: "../../pages/support/index.html" },
  { label: "For Business", link: "#" },
];

export class TopNavItem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const category = this.dataset.category;
    switch (category) {
      case "mainItems":
        this.handleNavItem(mainItems);
        break;
      case "secondaryItems":
        this.handleNavItem(secondaryItems);
        break;
      case "shortcut":
        this.innerHTML = `
                <div class="flex gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-search" viewBox="0 0 16 16">
                    <path   
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <a href="../../pages/cart/index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                        class="bi bi-cart" viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                </a>
                <a href="../../pages/login/index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                </a>
                <a onclick="onSmallNavLinkClick(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                    class="bi bi-list xl:hidden" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
                </a>
        
            </div>`;
        break;
    }
  }
  handleNavItem(data) {
    data.forEach((item) => {
      const navItem = document.createElement("div");
      navItem.innerHTML = `<div onmouseenter="onNavItemOver(this)" onmouseleave="onNavItemLeave(this)" class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="${item.link}">${item.label}</a></div>`;
      this.appendChild(navItem);
    });
  }
}

customElements.define("top-nav-item", TopNavItem);
