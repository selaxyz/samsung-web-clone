class ButtonCheckout extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const callback = this.dataset.callback
        const color = this.dataset.color
        const image = this.dataset.image
        const breakpoint = this.dataset.breakpoint
        
        this.classList.add(breakpoint,'w-full')

        this.innerHTML = `
        <div class="h-fit flex justify-center items-center text-white text-center rounded-md">
        <button onclick="${callback}"
        class="w-full py-4 px-8 h-fit flex justify-center items-center ${color} text-center text-white rounded-md">
        <img class="h-6 object-contain"
            src="${image}"
            alt="">
        </button>
        </div>
        `
    }
}

customElements.define("button-checkout", ButtonCheckout);