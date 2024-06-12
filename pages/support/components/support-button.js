// Define a custom HTML element called SupportButton by extending HTMLElement
export class SupportButton extends HTMLElement {
    constructor() {
        super();  
    }

    connectedCallback() {
        const text = this.dataset.text;
        const color = this.dataset.color;

        // Set the inner HTML of the element, creating a button with dynamic text and color
        this.innerHTML = `
            <button class="bg-${color} py-1.5 px-2 md:px-3 rounded-full text-xs font-medium md:text-sm">
                ${text}
            </button>
        `
    }
}

// Define the custom element so it can be used in HTML as <support-button>
customElements.define('support-button', SupportButton)