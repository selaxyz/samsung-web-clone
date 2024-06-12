/**
 * Represents a custom HTML element for payment details.
 * @extends HTMLElement
 */

/**
 * Constructor for the PaymentDetail class.
 * @constructor
 */

/**
 * Called when the element is inserted into a document, including when the element is first created.
 * It is invoked after connectedCallback.
 */

/**
 * The category of the payment detail (e.g., "card", "klarna").
 * @type {string}
 */

/**
 * The URL of the image associated with the payment detail.
 * @type {string}
 */


export class PaymentDetail extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const category = this.dataset.category;
    const image = this.dataset.image;
    if (category === "card") {
      this.innerHTML = `<section class="flex flex-col w-full pt-6 gap-4">
        <div class="hidden md:flex justify-between">
            <h1 class="text-2xl font-bold">Provide Payment Detail</h1>
            <a class="text-sm font-light text-blue-400" href="#">Promo code?</a>
        </div>
        <div>
            <header class="flex py-2 justify-between items-center">
                <h2 class="text-lg font-medium">Payment</h2>
                <a onclick="setDefaultPayment()" class="text-xs text-blue-500" href="#">Change payment</a>
            </header>
            <hr>
            <div class="flex pt-8 items-center gap-4">
                <p class="text-sm font-medium">Credit / debit card</p>
                <img class="h-6 w-fit"
                    src="${image}"
                    alt="Payment Detail Image">
            </div>
        </div>
        <div class="space-y-2">
            <h3 class="text-xs font-medium">Card detail</h3>
            <div class="grid grid-cols-12 gap-4 items-center">
                <input class="col-span-6 border p-3" type="text" placeholder="Card Number">
                <div class="col-span-6 flex items-center gap-4">
                    <input class="w-full border p-3" type="text" placeholder="Exp. date(MM/YY)">
                    <input class="w-full border p-3" type="text" placeholder="Security Code">
                    <a class="border border-gray-500 w-12 h-5 text-center rounded-full text-xs" href="#">i</a>
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <h3 class="text-xs font-medium">Billing adress</h3>
            <div class="grid grid-cols-12 grid-rows-2 gap-4">
                <input class="col-span-6 border p-3" type="text" placeholder="First Name">
                <input class="col-span-6 border p-3" type="text" placeholder="Last Name">
                <input class="col-span-12 border p-3" type="text" placeholder="Address">
            </div>
            <div class="py-8">
                <a class="underline text-sm" href="#">Or enter address manually</a>
            </div>
        </div>
        <div class="hidden md:flex justify-end">
        <button class="bg-blue-300 py-4 px-24 rounded-full text-white text-sm"> Continue </button>
    </div>
    </section>
`;
    } else {
      this.innerHTML = `<section class="flex flex-col w-full py-6 gap-4">
        <div class="hidden md:flex justify-between">
            <h1 class="text-2xl font-bold">Choose your delivery option</h1>
            <a class="text-sm font-light text-blue-400" href="#">Promo code?</a>
        </div>
        <div>
            <header class="flex justify-between items-center py-2">
                <h2 class="text-lg font-medium">Payment</h2>
                <a onclick="setDefaultPayment()" class="text-xs text-blue-400" href="#">Edit</a>
            </header>
            <hr>
            <div class="flex pt-6 gap-4 items-center">
                <img class="h-4 w-fit"
                    src="${image}"
                    alt="Payment Detail Image">
                <p class="text-sm">Pay in 4 with Klarna
                    <br>$51.71 every two weeks <sup>π</sup>
                    <br>$206.85 total
                </p>
            </div>

        </div>
        <div>
            <h2 class="text-lg py-2 font-medium">Delivery</h2>
            <hr>
            <div class="py-8 space-y-4">
                <div class="flex items-start gap-8  text-xs ">
                    <div class="flex items-start gap-4">
                        <input type="radio">
                        <p> <strong>Free Pickup:</strong> <br>Get it today</p>
                    </div>
                    <p class="text-blue-500 font-medium">Best Buy Chelsea (23rd and 6th)</p>
                </div>


                <div class="flex items-start gap-8  text-xs ">
                    <div class="flex items-start gap-4">
                        <input type="radio">
                        <p>Delivery for Zip</p>
                    </div>
                    <p class="text-blue-500 font-medium">1001</p>
                </div>
            </div>
            <div>
                <h3 class="text-xs font-medium">Who will pickup the order?</h3>
                <div class="grid grid-cols-12 grid-rows-2 gap-3 py-2">
                    <input class="border p-3 col-span-6" type="text" placeholder="First Name">
                    <input class="border p-3 col-span-6" type="text" placeholder="Last Name">
                    <input class="border p-3 col-span-6" type="text" placeholder="Email">
                    <input class="border p-3 col-span-6" type="text" placeholder="Phone">
                </div>
                <p class="text-xs pl-4">Receive text updates about your order delivery. To opt out, you may
                    follow the
                    instruction in the text received. Standard data rates may apply.</p>
                <p class="py-4">For pickup, please bring valid government-issued photo ID. We will email you
                    when your items
                    are ready for pick up. If order is not picked up within <strong>5 days</strong>, your order
                    will be canceled.
                </p>
                <div class="flex gap-4 text-sm">
                    <input type="radio">
                    <p>Receive special offers and marketing information from Samsung</p>
                </div>
            </div>
        </div>
        <div class="hidden md:flex justify-end">
        <button class="bg-blue-300 py-4 px-24 rounded-full text-white text-sm"> Continue </button>
    </div>
    </section>`;
    }
  }
}

customElements.define("payment-detail", PaymentDetail);
