export class SupportButton extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const text = this.dataset.text;
        const color = this.dataset.color;

        this.innerHTML = `
            <button class="bg-${color} py-1.5 px-2 md:px-3 rounded-full text-xs font-medium md:text-sm">
                ${text}
            </button>
        `
    }
}

customElements.define('support-button', SupportButton)