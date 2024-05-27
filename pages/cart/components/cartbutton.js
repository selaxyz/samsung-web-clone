class CartButton extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const color = this.dataset.color
        const image = this.dataset.image || '';
        const text = this.dataset.text || '';

        this.innerHTML = `
        <div class="h-fit flex justify-center items-center text-white text-center rounded-md">
        <button class="w-full py-3 px-28 h-9 flex justify-center items-center ${color} text-center text-white rounded-full">
        ${image ? `<img class="h-6 object-contain mr-2" src="${image}" alt="icon">` : ''}
        ${text ? `<span class="text-xs text-white tracking-widest">${text}</span>` : ''}
        </button>
        `
    }
}

customElements.define("cart-button", CartButton);