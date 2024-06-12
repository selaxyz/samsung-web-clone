/**
 * Footer items for different categories.
 * 
 * This script defines a custom HTML element for footer items in various categories.
 * It includes data arrays for each category, such as shop, support, offers, sustainability, and about us.
 * 
 * FooterItem class:
 * - Extends HTMLElement.
 * - Dynamically generates and inserts footer items based on the provided data array for each category.
 * 
 * Data arrays:
 * - shop: Array containing shop-related items with their corresponding labels and links.
 * - support: Array containing support-related items with their corresponding labels and links.
 * - offers: Array containing offers-related items with their corresponding labels and links.
 * - sustainability: Array containing sustainability-related items with their corresponding labels and links.
 * - aboutUs: Array containing about us-related items with their corresponding labels and links.
 */

const shop = [
  { label: "Phones", link: "#" },
  { label: "Tablets", link: "#" },
  { label: "Watches", link: "#" },
  { label: "Mobile Accessories", link: "#" },
  { label: "Mobile Audio", link: "#" },
  { label: "TV & Home Theater", link: "#" },
  { label: "Computing", link: "#" },
  { label: "Monitors", link: "#" },
  { label: "Memory & Storage", link: "#" },
  { label: "Home Appliances", link: "#" },
  { label: "Smart Home", link: "#" },
  { label: "Samsung Experience Stores", link: "#" },
  { label: "Apps & Services", link: "#" },
  { label: "Shop Certified Re-Newed", link: "#" },
  { label: "Samsung Authorized Reseller Program", link: "#" },
];

const support = [
  { label: "Track Order", link: "../../pages/track-order/index.html" },
  {
    label: "Why Create Account?",
    link: "../../pages/account-benefit/index.html",
  },
  { label: "Order Support", link: "#" },
  { label: "Your Account", link: "#" },
  { label: "Register Your Product", link: "#" },
  { label: "Contact Us", link: "#" },
  { label: "Samsung Community", link: "#" },
  { label: "Note7 Recall", link: "#" },
  { label: "Give Feedback", link: "#" },
];

const offers = [
  { label: "Offers", link: "#" },
  { label: "Samsung Rewards", link: "#" },
  { label: "Referral Program", link: "#" },
  { label: "Education Offers Program", link: "#" },
  { label: "Government Offers Program", link: "#" },
  { label: "Military Offers Program", link: "#" },
  { label: "Employee Offers Program", link: "#" },
  { label: "First Responders Offers Program", link: "#" },
  { label: "Business Offers Program", link: "#" },
];

const sustainability = [
  { label: "Overview", link: "#" },
  { label: "Environment", link: "#" },
  { label: "Digital Responsibility", link: "#" },
  { label: "Security and Privacy", link: "#" },
  { label: "Accessibility", link: "#" },
  { label: "Labor & Human Rights", link: "#" },
  { label: "Diversity ∙ Equity ∙ Inclusion", link: "#" },
  { label: "Sustainable Supply Chain", link: "#" },
  { label: "Corporate Citizenship", link: "#" },
  { label: "Corporate Sustainability", link: "#" },
];

const aboutUs = [
  { label: "Leadership & Mission", link: "#" },
  { label: "Our Business", link: "#" },
  { label: "Brand Identity", link: "#" },
  { label: "Careers", link: "#" },
  { label: "Investor Relations", link: "#" },
  { label: "Newsroom", link: "#" },
  { label: "Ethics", link: "#" },
  { label: "Samsung Design", link: "#" },
];

export class FooterItem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const category = this.dataset.category;
    switch (category) {
      case "shop":
        this.handleNavItem(shop);
        break;
      case "support":
        this.handleNavItem(support);
        break;
      case "offers":
        this.handleNavItem(offers);
        break;
      case "sustainability":
        this.handleNavItem(sustainability);
        break;
      case "aboutUs":
        this.handleNavItem(aboutUs);
        break;
    }
  }
  handleNavItem(data) {
    data.forEach((item) => {
      const navItem = document.createElement("a");
      navItem.innerHTML = `<a class="hover:text-blue-500 hover:underline" href="${item.link}">${item.label}</a>`;
      this.appendChild(navItem);
    });
  }
}

customElements.define("footer-item", FooterItem);
