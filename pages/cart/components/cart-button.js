// Define a custom HTML element called CartButton by extending HTMLElement
class CartButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Retrieve data attributes 'color', 'image', and 'text' from the element
    const color = this.dataset.color;
    const image = this.dataset.image || ""; // Default to empty string if 'image' attribute is not provided
    const text = this.dataset.text || ""; // Default to empty string if 'image' attribute is not provided

    // Set the inner HTML of the element, creating a button with dynamic content
    this.innerHTML = `
        <button class=" py-3 px-[min(20vw,6rem)] h-9 flex justify-center items-center ${color} text-center text-white rounded-full">
        ${image ? `<img class="h-6 object-contain mt-1" src="${image}" alt="icon">` : ""}
        ${text ? `<span class="text-xs text-white tracking-widest">${text}</span>` : ""}
        </button>
        `;
  }
}

customElements.define("cart-button", CartButton);
