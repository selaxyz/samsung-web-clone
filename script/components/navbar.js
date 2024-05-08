export class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="flex justify-center w-screen">
        <section class="flex max-w-screen-2xl w-screen justify-between py-6 px-4 items-center">
            <a href="../../index.html">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32"
                    role="presentation" aria-hidden="true" tabindex="-1">
                    <rect id="Clear_space" width="120" height="32" fill="none"></rect>
                    <path id="Logo_ratio"
                        d="M0,11.651V10.511H3.994v1.45a1.334,1.334,0,0,0,1.494,1.346A1.3,1.3,0,0,0,6.932,12.3a1.833,1.833,0,0,0-.026-1.113C6.133,9.243.851,8.363.18,5.333a5.347,5.347,0,0,1-.025-2.02C.567.88,2.705,0,5.359,0c2.113,0,5.025.492,5.025,3.754V4.816H6.674V3.884A1.275,1.275,0,0,0,5.282,2.537a1.25,1.25,0,0,0-1.365,1.01,2.021,2.021,0,0,0,.026.777c.437,1.734,6.081,2.667,6.7,5.8a6.943,6.943,0,0,1,.025,2.46C10.307,15.068,8.091,16,5.412,16,2.6,16,0,14.99,0,11.651ZM48.392,11.6V10.46h3.943v1.424A1.312,1.312,0,0,0,53.8,13.23a1.286,1.286,0,0,0,1.443-.984,1.759,1.759,0,0,0-.025-1.088c-.748-1.915-5.979-2.8-6.648-5.825a5.215,5.215,0,0,1-.026-1.994C48.959.932,51.1.052,53.7.052c2.088,0,4.973.518,4.973,3.728V4.816H54.989V3.91a1.268,1.268,0,0,0-1.365-1.346,1.2,1.2,0,0,0-1.34.984,2.017,2.017,0,0,0,.025.777c.412,1.734,6,2.641,6.623,5.747a6.806,6.806,0,0,1,.025,2.434c-.361,2.486-2.551,3.392-5.2,3.392C50.97,15.9,48.392,14.887,48.392,11.6Zm14.121.545a5.876,5.876,0,0,1-.025-.985V.44H66.25V11.495a4.111,4.111,0,0,0,.025.57,1.468,1.468,0,0,0,2.835,0,3.97,3.97,0,0,0,.026-.57V.44H72.9V11.158c0,.285-.026.829-.026.985-.257,2.8-2.448,3.7-5.179,3.7S62.771,14.938,62.513,12.143Zm30.974-.156A7.808,7.808,0,0,1,93.435,11V4.712c0-.259.025-.725.051-.985C93.821.932,96.063.052,98.717.052c2.629,0,4.947.88,5.206,3.676a7.185,7.185,0,0,1,.025.985V5.2h-3.762V4.376a3.1,3.1,0,0,0-.051-.57,1.553,1.553,0,0,0-2.964,0,3.088,3.088,0,0,0-.051.7V11.34a4.17,4.17,0,0,0,.026.57A1.472,1.472,0,0,0,98.717,13a1.406,1.406,0,0,0,1.52-1.087,2.09,2.09,0,0,0,.026-.57V9.165h-1.52V6.99H104V11a7.674,7.674,0,0,1-.052.984c-.257,2.718-2.6,3.676-5.231,3.676S93.744,14.705,93.487,11.987ZM41.049,15.378l-.1-13.825L38.369,15.378H34.607L32.055,1.553l-.1,13.825H28.242L28.551.466h6.056l1.881,11.651L38.369.466h6.055l.335,14.912Zm-19.79,0L19.249,1.553,17.187,15.378H13.168L15.9.466h6.623l2.732,14.912Zm62.977-.155L80.5,2.822l.206,12.4H77.046V.466h5.514l3.5,12.013L85.859.466h3.685V15.224Z"
                        transform="translate(8 8)"></path>
                </svg>
            </a>
            <ul  class="hidden shrink-0 xl:flex text-sm font-bold items-center ">
                <li onmouseenter="onNavItemOver(this)" onmouseleave="onNavItemLeave(this)" class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">Shop</a></li>
                <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">AI</a></li>
                <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">Mobile</a></li>
                <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">TV & Audio</a></li>
                <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">Appliances</a></li>
                <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">Computing</a></li>
                <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">Displays</a></li>
                <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">Accessories</a></li>
                <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">SmartThings</a></li>
            </ul>

            <div class="xl:flex gap-12 items-center">
                <ul class="xl:flex hidden shrink-0  justify-center  text-sm font-bold">
                    <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">Explore</a></li>
                    <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">Support</a></li>
                    <li class="hover:bg-black hover:text-white px-2 py-2 rounded-full"><a href="#">For Business</a></li>
                </ul>
                <div class="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path   
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <a href="../../pages/cart/index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                            class="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                    </a>
                    <a href="../../pages/login/index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                    </a>

                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                        class="bi bi-list xl:hidden" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>

                </div>
            </div>
            </div>
        </section>
    </section>

    <section class="nav-link bg-black/50 delay-300 z-50 hidden shrink-0 xl:flex absolute justify-end xl:justify-center transition-trasnform duration-300 text-center  h-0 overflow-hidden w-screen">
        <div
            class="sub-nav-link flex justify-between z-50 bg-white rounded-bl-2xl rounded-br-2xl max-w-screen-2xl w-screen h-fit border-t text-left pt-6 pb-12 px-12" >
            <div class="space-y-6">
                <h2 class="font-bold">Offers</h2>
                <ul class="space-y-4 text-sm">
                    <li><a href="#" class="hover:font-medium">All Offers</a></li>
                    <li><a href="#" class="hover:font-medium">Phones</a></li>
                    <li><a href="#" class="hover:font-medium">TV & Home Theater</a></li>
                    <li><a href="#" class="hover:font-medium">Appliances</a></li>
                    <li><a href="#" class="hover:font-medium">Watches & Audio</a></li>
                    <li><a href="#" class="hover:font-medium">Tablets & Computing</a></li>
                    <li><a href="#" class="hover:font-medium">Monitor, Memory & Storage</a></li>
                    <li><a href="#" class="hover:font-medium">Bundle Deals</a></li>
                </ul>
            </div>

            <div class="space-y-6">
                <h2 class="font-bold">Offer Programs</h2>
                <ul class="space-y-4 text-sm">
                    <li><a href="#" class="hover:font-medium">All Offer Programs</a></li>
                    <li><a href="#" class="hover:font-medium">Education Offers Program</a></li>
                    <li><a href="#" class="hover:font-medium">First Responders Offers Program</a></li>
                    <li><a href="#" class="hover:font-medium">Military Offers Program</a></li>
                    <li><a href="#" class="hover:font-medium">Government Offers Program</a></li>
                    <li><a href="#" class="hover:font-medium">Employee Offers Program</a></li>
                    <li><a href="#" class="hover:font-medium">Galaxy Campus Store</a></li>
                </ul>
            </div>

            <div class="space-y-6">
                <div class="space-y-6">
                    <h2 class="font-bold">Gift Ideas</h2>
                    <ul class="space-y-4 text-sm">
                        <li><a href="#" class="hover:font-medium">Mother's Day Gifts NEW</a></li>
                        <li><a href="#" class="hover:font-medium">Gifts under $1000</a></li>
                        <li><a href="#" class="hover:font-medium">Gifts under $500</a></li>
                        <li><a href="#" class="hover:font-medium">Gifts under $200</a></li>
                    </ul>
                </div>

                <div class="space-y-6">
                    <h2 class="font-bold">Buying Guides</h2>
                    <ul class="space-y-4 text-sm">
                        <li><a href="#" class="hover:font-medium">Mobile Buying Guide</a></li>
                        <li><a href="#" class="hover:font-medium">TV Buying Guide</a></li>
                        <li><a href="#" class="hover:font-medium">Home Appliance Buying Guides</a></li>
                    </ul>
                </div>
            </div>

            <div class="space-y-6">
                <div class="space-y-6">
                    <h2 class="font-bold">Trade-In & Upgrade</h2>
                    <ul class="space-y-4 text-sm">
                        <li><a href="#" class="hover:font-medium">Samsung Trade-In</a></li>
                        <li><a href="#" class="hover:font-medium">TV Upgrade</a></li>
                    </ul>
                </div>

                <div class="space-y-6">
                    <h2 class="font-bold">Gaming</h2>
                    <ul class="space-y-4 text-sm">
                        <li><a href="#" class="hover:font-medium">Gaming Portal</a></li>
                    </ul>
                </div>
            </div>

            <div class="space-y-6">
                <div class="space-y-6">
                    <h2 class="font-bold">Additional Offers</h2>
                    <ul class="space-y-4 text-sm">
                        <li><a href="#" class="hover:font-medium">Redeem Retail Offers</a></li>
                        <li><a href="#" class="hover:font-medium">Home Appliances Rebates</a></li>
                        <li><a href="#" class="hover:font-medium">Samsung Carrier Stores</a></li>
                        <li><a href="#" class="hover:font-medium">Discover Samsung Event</a></li>
                        <li><a href="#" class="hover:font-medium">Why Shop Samsung.com</a></li>
                    </ul>
                </div>

                <div class="space-y-6">
                    <h2 class="font-bold">Samsung Outlet</h2>
                    <ul class="space-y-4 text-sm">
                        <li><a href="#" class="hover:font-medium">Samsung Outlet</a></li>
                        <li><a href="#" class="hover:font-medium">Shop Samsung Outlet</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
        `
        const html = ` 
        <script>
            const navLinks = document.querySelector('.nav-link')
            const subNavLinks = document.querySelector('.sub-nav-link') 

            function onNavItemOver(e) {
                
                navLinks.classList.add('h-dvh')
            }
            function onNavItemLeave(e) {
                navLinks.classList.remove('h-dvh')
            }
            subNavLinks.addEventListener('mouseover', onNavItemOver)
            subNavLinks.addEventListener('mouseleave', onNavItemLeave)
            
        </script>`
        const scriptEl = document.createRange().createContextualFragment(html);
        this.append(scriptEl);
        
    }
}

customElements.define("navbar-component", NavBar);