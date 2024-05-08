
div = document.getElementById('paymentOption')

defaultPayment = ` <section class="flex flex-col w-full py-6 gap-4">
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

        <button onclick="changeContentToSamsung()"
            class="w-full py-4 px-8 h-fit flex justify-center items-center bg-black text-center text-white rounded-md">
            <img class="h-6 object-contain"
                src="https://www.samsung.com/us/web/express-checkout/static/dist/img/btn-samsung-pay.png.548e554.webp"
                alt="">
        </button>

        <p class="text-xs font-light text-gray-500">
            Require Samsung Pay enabled <br class="hidden md:block"> mobile device
        </p>
    </div>
    <div class="w-full h-fit space-y-2 md:w-1/2">
        <div class="flex w-full p-4 h-fit  justify-center items-center bg-yellow-400 hover:bg-yellow-500 rounded-md">
            <img class="h-6"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"
                alt="">
        </div>
        <p class="text-xs font-light text-gray-500">Now accepting crypto and credit <br
                class="hidden md:block">card reward</p>
    </div>
    <div
        class="w-full p-4 h-fit flex justify-center items-center bg-yellow-300 text-center rounded-md md:w-1/5">
        <img class="h-6 object-contain"
            src="https://d2ldlvi1yef00y.cloudfront.net/default/us/live/lwa/lightgray/large/PwA.png"
            alt="">
    </div>
    <div
        class="w-full p-4 h-fit flex justify-center items-center bg-black text-white text-center rounded-md md:w-1/4">
        <img class="h-6 object-contain" src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg"
            alt="">
    </div>
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
            src="https://www.samsung.com/us/web/express-checkout/static/dist/img/payment-type-sprite-hori-v2.png.16d6c4c.webp"
            alt="" class="ml10">
    </button>
</section>
<section class="flex flex-col gap-4 py-6">
    <div>
        <h1 class="text-lg font-medium">Financing</h1>
        <p class="text-xs font-light text-gray-500">12,18 and 24 month plans available</p>
    </div>
    <div class="flex gap-6 items-center p-6 border border-gray-500 rounded-md w-full lg:w-1/2 transition ease-in-out hover:delay-100 hover:border-blue-500 hover:border-2">
        <img class="w-10 h-10"
            src="https://www.samsung.com/us/web/express-checkout/static/dist/img/payment-type-samsung-finance.png.045976e.webp"
            alt="">
        <div>
            <h3 class="font-medium text-sm">Samsung Financing</h3>
            <p class="text-sm font-light">Starting from $8.62/mo <br>for 24 months</p>
        </div>
    </div>
</section>
<section class="flex flex-col py-6 gap-4">
    <div>
        <h1 class="text-lg font-medium">Pay in 4 Installments</h1>
        <p class="text-xs font-light text-gray-500">No fees | No impact to credit score</p>
    </div>
    <div class="flex flex-col lg:flex-row gap-4">
        <button onclick="changeContentToKlarna()"
            class="flex flex-1 border border-gray-400 p-10 gap-6 items-center rounded-md transition ease-in-out hover:delay-100 hover:border-blue-500 hover:border-2">
            <img class="h-4 w-fit object-cover"
                src="https://www.samsung.com/us/web/express-checkout/static/dist/img/logo-klarna-black.7dcdc1e.svg"
                alt="">
            <div class="text-sm text-start font-light">
                <p>$51.71 every two weeks</p>
                <p>$206.85 total</p>
            </div>
        </button>
        <button onclick="changeContentToAffirm()"
            class="flex flex-1 border border-gray-500 p-10 gap-6 rounded-md items-center transition ease-in-out hover:delay-100 hover:border-blue-500 hover:border-2">
            <img class="w-fit h-8 object-cover"
                src="https://www.samsung.com/us/web/express-checkout/static/dist/img/logo-affirm.png.9226201.webp"
                alt="">
            <div class="text-sm text-start font-light">
                <p>$51.71 every two weeks</p>
                <p>$206.85 total</p>
            </div>
        </button>
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
                src="https://www.samsung.com/us/web/express-checkout/static/dist/img/logo-samsung-pay-stacked.e848acd.webp"
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
                <img class="h-8 w-fit"
                    src="https://www.samsung.com/us/web/express-checkout/static/dist/img/payment-type-sprite-hori-v1.png.bdd8fde.webp"
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
                    src="https://www.samsung.com/us/web/express-checkout/static/dist/img/logo-klarna-black.7dcdc1e.svg"
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
  console.log('Hi')
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
                    src="https://www.samsung.com/us/web/express-checkout/static/dist/img/logo-affirm.png.9226201.webp"
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
