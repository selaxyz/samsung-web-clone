/**
 * The callback function to be executed on button click.
 * @type {string}
 */
 
/**
 * The color of the button.
 * @type {string}
 */
 
/**
 * The URL of the image to be displayed on the button.
 * @type {string}
 */
 
/**
 * The breakpoint class for responsive design.
 * @type {string}
 */
 
/**
 * Represents a custom HTML element for a checkout button.
 * @extends HTMLElement
 */
 
/**
 * Constructor for the ButtonCheckout class.
 * @constructor
 */
 
/**
 * Called when the element is inserted into a document, including when the element is first created.
 * It is invoked after connectedCallback.
 */

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
            alt="Button Checkout Image">
        </button>
        </div>
        `
    }
}

customElements.define("button-checkout", ButtonCheckout);