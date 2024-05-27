
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
            alt="" class="ml10">
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
  div.innerHTML = `
    <section class="flex flex-col w-full py-6 gap-4">
    <div class="hidden md:flex justify-between ">
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
            <img class="h-8 w-fit"
                src="../../assets/images/checkout/images/samsung-pay-stack.webp"
                alt="">
            <p class="text-sm">Pay <strong>$206.85</strong> with <br> Samsung Pay</p>
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
            <h3 class="text-xs font-medium" >Who will pickup the order?</h3>
            <div class="grid grid-cols-12 grid-rows-2 gap-3 py-2">
                <input class="border p-3 col-span-6" type="text" placeholder="First Name">
                <input class="border p-3 col-span-6" type="text" placeholder="Last Name">
                <input class="border p-3 col-span-6" type="text" placeholder="Email">
                <input class="border p-3 col-span-6" type="text" placeholder="Phone">
            </div>
            <p class="text-xs pl-4">Receive text updates about your order delivery. To opt out, you may follow the instruction in
                the text received. Standard data rates may apply.</p>
            <p class="py-4">For pickup, please bring valid government-issued photo ID. We will email you when your items
                are ready for pick up. If order is not picked up within <strong>5 days</strong>, your order will be canceled.
            </p>
            <div class="flex gap-2 text-sm">
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

function changeContentToCard() {
  div.innerHTML = `<section class="flex flex-col w-full pt-6 gap-4">
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
                    src="../../assets/images/checkout/images/card-payment-option.webp"
                    alt="">
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
`
}

function changeContentToKlarna() {
  div.innerHTML = `<section class="flex flex-col w-full py-6 gap-4">
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
                    src="../../assets/images/checkout/images/klarna-pay.svg"
                    alt="">
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
    </section>`
}

function changeContentToAffirm() {
  div.innerHTML = `     <section class="flex flex-col w-full py-6 gap-4">
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
                    src="../../assets/images/checkout/images/affirm-pay.webp"
                    alt="">
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
    </section>
`
}

const html = `
<script src="./components/payment-card-component.js" type="module"></script>
<script src="./components/button-checkout.js" type="module"></script>`
const scriptEl = document.createRange().createContextualFragment(html);
div.append(scriptEl)
