/**
 * Represents a reference to the HTML element with the id 'paymentOption'.
 * @type {HTMLElement}
 */
 
/**
 * The default payment section HTML content.
 * @type {string}
 */
 
/**
 * Sets the default payment section content.
 */
 
/**
 * Changes the content to Samsung payment detail.
 */
 
/**
 * Changes the content to card payment detail.
 */
 
/**
 * Changes the content to Klarna payment detail.
 */
 
/**
 * Changes the content to Affirm payment detail.
 */
 
/**
 * The HTML content to be appended to the 'paymentOption' div.
 * @type {string}
 */

const div = document.getElementById('paymentOption')

const defaultPayment = ` 
<section class="flex flex-col w-full py-6 gap-4">
<div class="hidden md:flex justify-between">
    <h1 class="text-2xl font-bold">Choose your payment method</h1>
    <a class="text-sm font-light text-blue-400" href="#">Promo code?</a>
</div>
<div class="flex justify-end text-xs font-medium text-blue-500 md:hidden">
    <p>Chat with expert</p>
</div>
<h3 class="text-md font-medium">Express checkout</h3>
<div class="flex gap-2 flex-wrap">
    
<div class="w-full h-fit space-y-2  md:w-1/4">
            <button-checkout 
                data-callback="changeContentToSamsung()" 
                data-color="bg-black"
                data-image="../../assets/images/checkout/images/samsung-pay.webp">
            </button-checkout>
            <p class="text-xs font-light text-gray-500"> Require Samsung Pay enabled <br class="hidden md:block"> mobile device </p>
    </div>
    <div class="w-full h-fit space-y-2 md:w-1/2">
            <button-checkout 
                data-color="bg-yellow-400"
                data-image="../../assets/images/checkout/images/paypal.png">
            </button-checkout>
            <p class="text-xs font-light text-gray-500">Now accepting crypto and credit <br class="hidden md:block">card reward</p>
    </div>
            <button-checkout 
                data-breakpoint="md:w-1/5"
                data-color="bg-yellow-300"
                data-image="../../assets/images/checkout/images/amazon-pay.png">
            </button-checkout>
            <button-checkout 
                data-breakpoint='md:w-1/4'
                data-color="bg-black"
                data-image="../../assets/images/checkout/images/google-pay.svg">
            </button-checkout>
</div>

<section class="flex flex-col gap-4 w-full py-6">
    <div>
        <h1 class="text-lg font-medium">Play with card</h1>
        <div>
            <p class="text-xs font-light text-gray-500">Split payment available</p>
            <i data-v-630a2c95="" class="icon-info"></i>
        </div>
    </div>
    <button onclick="changeContentToCard()"
        class="flex w-full md:w-fit justify-between gap-6 border border-gray-400 transition ease-in-out hover:delay-100 hover:border-blue-500 hover:border-2 items-center rounded-md p-6">
        <div class="flex gap-2 items-center">
            <p>+</p>
            <p class="text-sm font-light">Credit/debit card</p>
        </div>
        <img data-v-daed2594=""
            src="../../assets/images/checkout/images/card-payment-option.webp"
            alt="Checkout Image" class="ml10">
    </button>
</section>
<section class="flex flex-col gap-4 py-6">
    <div>
        <h1 class="text-lg font-medium">Financing</h1>
        <p class="text-xs font-light text-gray-500">12,18 and 24 month plans available</p>
    </div>
    <payment-card-component data-single="true" data-callback="changeContentToSamsung()" data-title="Samsung Financing" data-description="Starting from $8.62/mo <br>for 24 months" data-image="../../assets/images/checkout/images/samsung-finance.webp"></payment-card-component>
</section>
<section class="flex flex-col py-6 gap-4">
    <div>
        <h1 class="text-lg font-medium">Pay in 4 Installments</h1>
        <p class="text-xs font-light text-gray-500">No fees | No impact to credit score</p>
    </div>
    <div class="flex flex-col lg:flex-row gap-4">
        <payment-card-component data-callback="changeContentToKlarna()" data-title="$51.71 every two weeks" data-description="$206.85 total" data-image="../../assets/images/checkout/images/klarna-pay.svg"></payment-card-component>
        <payment-card-component data-callback="changeContentToAffirm()" data-title="$51.71 every two weeks" data-description="$206.85 total" data-image="../../assets/images/checkout/images/affirm-pay.webp"></payment-card-component>
    </div>
</section>
</section>`


function setDefaultPayment(){
    div.innerHTML = defaultPayment
}

function changeContentToSamsung() {
  div.innerHTML = `<payment-detail data-image="../../assets/images/checkout/images/samsung-pay-stack.webp"></payment-detail>`;
}


function changeContentToCard() {
  div.innerHTML = `<payment-detail data-image="../../assets/images/checkout/images/card-payment-option.webp" category="card"></payment-detail>`
}

function changeContentToKlarna() {
  div.innerHTML = `<payment-detail data-image="../../assets/images/checkout/images/klarna-pay.svg"></payment-detail>`
}


function changeContentToAffirm() {
  div.innerHTML = `<payment-detail data-image="../../assets/images/checkout/images/affirm-pay.webp"></payment-detail>`
}

const html = `
<script src="./components/payment-card-component.js" type="module"></script>
<script src="./components/button-checkout.js" type="module"></script>
<script src="./components/payment-detail.js" type="module"></script>
`
const scriptEl = document.createRange().createContextualFragment(html);
div.append(scriptEl)
