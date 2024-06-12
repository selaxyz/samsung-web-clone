/**
 * Navigation data and SubNavItem custom HTML element.
 * 
 * This script defines various data arrays for navigation items and a custom HTML element class for sub-navigation items.
 * The SubNavItem class dynamically generates list items based on the category specified in its data attributes.
 * 
 * Data arrays:
 * - offers: Array of offer items.
 * - offersPrograms: Array of offer programs.
 * - buyingIdeas: Array of buying guide ideas.
 * - giftIdeas: Array of gift ideas.
 * - tradeUpgrade: Array of trade and upgrade options.
 * - gaming: Array containing gaming portal link.
 * - additionalOffers: Array of additional offer items.
 * - samsungOutlet: Array of Samsung outlet items.
 * 
 * SubNavItem class:
 * - Extends HTMLElement.
 * - Dynamically generates and inserts list items based on the specified category.
 * - handleNavItem method creates and appends list items to the element.
 */

const offers = [
  {
    label: "All Offers",
    link: "../../pages/continue-shopping/index.html",
  },
  {
    label: "Smartphones",
    link: "../../pages/smartphone/index.html",
  },
  {
    label: "TV & Home Theater",
    link: "#",
  },
  {
    label: "Appliances",
    link: "#",
  },
  {
    label: "Watches & Audio",
    link: "#",
  },
  {
    label: "Tablets & Computing",
    link: "#",
  },
  {
    label: "Monitor, Memory & Storage",
    link: "#",
  },
  {
    label: "Bundle Deals",
    link: "#",
  },
];

const offersPrograms = [
  { label: "All Offer Programs", link: "#" },
  { label: "Education Offers Program", link: "#" },
  { label: "First Responders Offers Program", link: "#" },
  { label: "Military Offers Program", link: "#" },
  { label: "Government Offers Program", link: "#" },
  { label: "Employee Offers Program", link: "#" },
  { label: "Galaxy Campus Store", link: "#" },
];

const buyingIdeas = [
  { label: "Mobile Buying Guide", link: "#" },
  { label: "TV Buying Guide", link: "#" },
  { label: "Home Appliance Buying Guides", link: "#" },
];

const giftIdeas = [
  { label: "Mother's Day Gifts NEW", link: "#" },
  { label: "Gifts under $1000", link: "#" },
  { label: "Gifts under $500", link: "#" },
  { label: "Gifts under $200", link: "#" },
];

const tradeUpgrade = [
  { label: "Samsung Trade-In", link: "#" },
  { label: "TV Upgrade", link: "#" },
];

const gaming = [{ label: "Gaming Portal", link: "#" }];

const additionalOffers = [
  { label: "Redeem Retail Offers", link: "#" },
  { label: "Home Appliances Rebates", link: "#" },
  { label: "Samsung Carrier Stores", link: "#" },
  { label: "Discover Samsung Event", link: "#" },
  { label: "Why Shop Samsung.com", link: "#" },
];

const samsungOutlet = [
  { label: "Samsung Outlet", link: "#" },
  { label: "Shop Samsung Outlet", link: "#" },
];

export class SubNavItem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const category = this.dataset.category;
    switch (category) {
      case "offers":
        this.handleNavItem(offers);
        break;
      case "offersPrograms":
        this.handleNavItem(offersPrograms);
        break;
      case "buyingIdeas":
        this.handleNavItem(buyingIdeas);
        break;
      case "giftIdeas":
        this.handleNavItem(giftIdeas);
        break;
      case "tradeUpgrade":
        this.handleNavItem(tradeUpgrade);
        break;
      case "gaming":
        this.handleNavItem(gaming);
        break;
      case "additionalOffers":
        this.handleNavItem(additionalOffers);
        break;
      case "samsungOutlet":
        this.handleNavItem(samsungOutlet);
        break;
    }
  }
  handleNavItem(data) {
    data.forEach((item) => {
      const navItem = document.createElement("li");
      navItem.innerHTML = `
            <li class="pb-4 text-xs"><a href="${item.link}" class="hover:font-medium">${item.label}</a></li>
            `;
      this.appendChild(navItem);
    });
  }
}

customElements.define("sub-nav-item", SubNavItem);
