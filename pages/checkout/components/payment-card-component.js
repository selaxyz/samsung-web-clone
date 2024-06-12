/**
 * Represents a custom HTML element for a payment card component.
 * @extends HTMLElement
 */
 
/**
 * Constructor for the PaymentCardComponent class.
 * @constructor
 */
 
/**
 * Called when the element is inserted into a document, including when the element is first created.
 * It is invoked after connectedCallback.
 */
 
/**
 * The title of the payment card.
 * @type {string}
 */
 
/**
 * The description of the payment card.
 * @type {string}
 */
 
/**
 * The URL of the image to be displayed on the payment card.
 * @type {string}
 */
 
/**
 * The callback function to be executed on button click.
 * @type {string}
 */
 
/**
 * Flag indicating whether the card is a single card or not.
 * @type {string}
 */

class PaymentCardComponent extends HTMLElement {
    
    constructor() {
        super()
    }

    connectedCallback() {
        const title = this.dataset.title
        const description = this.dataset.description
        const image = this.dataset.image
        const callback =  this.dataset.callback
        const isSingle = this.dataset.single

        this.innerHTML = isSingle ? `    
        <div onclick="${callback}" class="flex gap-6 items-center p-6 border border-gray-500 rounded-md w-full lg:w-1/2 transition ease-in-out hover:delay-100 hover:border-blue-500 hover:border-2">
        <img class="w-10 h-10"
            src="${image}"
            alt="payment-option-image">
            <div>
                <h3 class="font-medium text-sm">${title}</h3>
                <p class="text-sm font-light">${description}</p>
            </div>
         </div>` :
        `<button onclick="${callback}"
            class="flex flex-1 border border-gray-400 p-10 gap-6 w-full items-center rounded-md transition-all ease-in-out hover:delay-100 hover:border-blue-500 hover:border-2">
            <img class="h-4 w-fit object-cover"
                src="${image}"
                alt="payment-option-image">
            <div class="text-sm text-start font-light">
                <p>${title}</p>
                <p>${description}</p>
            </div>
        </button>
        `
    }
}

customElements.define("payment-card-component", PaymentCardComponent);