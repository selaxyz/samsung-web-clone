export class Footer extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <section class="max-w-screen-2xl w-screen">
        <hr>
        <section class="grid grid-cols-4">
            <div class="flex flex-col gap-4 p-6 border-r">
                <h3 class="font-bold text-lg">SHOP</h3>
                <ul class="flex flex-col text-sm gap-2">
                    <li><a href="#">Phones</a></li>
                    <li><a href="#">Tablets</a></li>
                    <li><a href="#">Watches</a></li>
                    <li><a href="#">Mobile Accessories</a></li>
                    <li><a href="#">Mobile Audio</a></li>
                    <li><a href="#">TV & Home Theater</a></li>
                    <li><a href="#">Computing</a></li>
                    <li><a href="#">Monitors</a></li>
                    <li><a href="#">Memory & Storage</a></li>
                    <li><a href="#">Home Appliances</a></li>
                    <li><a href="#">Smart Home</a></li>
                    <li><a href="#">Samsung Experience Stores</a></li>
                    <li><a href="#">Apps & Services</a></li>
                    <li><a href="#">Shop Certified Re-Newed</a></li>
                    <li><a href="#">Samsung Authorized Reseller Program</a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-4 p-6 border-r">
                <h3 class="font-bold text-lg">SUPPORT</h3>
                <ul class="flex flex-col text-sm gap-2">
                    <li><a href="#">Chat with Us</a></li>
                    <li><a href="#">Product Support</a></li>
                    <li><a href="#">Order Support</a></li>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Register Your Product</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Samsung Community</a></li>
                    <li><a href="#">Note7 Recall</a></li>
                    <li><a href="#">Give Feedback</a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-4 p-6 border-r">
                <h3 class="font-bold text-lg">OFFERS</h3>
                <ul class="flex flex-col text-sm gap-2">
                    <li><a href="#">Offers</a></li>
                    <li><a href="#">Samsung Rewards</a></li>
                    <li><a href="#">Referral Program</a></li>
                    <li><a href="#">Education Offers Program</a></li>
                    <li><a href="#">Government Offers Program</a></li>
                    <li><a href="#">Military Offers Program</a></li>
                    <li><a href="#">Employee Offers Program</a></li>
                    <li><a href="#">First Responders Offers Program</a></li>
                    <li><a href="#">Business Offers Program</a></li>
                </ul>
            </div>
            <div class="grid grid-rows-2 gap-6 p-6">
                <div class="flex flex-col gap-4">
                    <h3 class="font-bold text-lg">SUSTAINABILITY</h3>
                    <ul class="flex flex-col text-sm gap-2">
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Digital Responsibility</a></li>
                        <li><a href="#">Security and Privacy</a></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Labor & Human Rights</a></li>
                        <li><a href="#">Diversity ∙ Equity ∙ Inclusion</a></li>
                        <li><a href="#">Sustainable Supply Chain</a></li>
                        <li><a href="#">Corporate Citizenship</a></li>
                        <li><a href="#">Corporate Sustainability</a></li>
                    </ul>
                </div>
                <div class="flex flex-col gap-4">
                    <h3 class="font-bold text-lg">ABOUT US</h3>
                    <ul class="flex flex-col text-sm gap-2">
                        <li><a href="#">Leadership & Mission</a></li>
                        <li><a href="#">Our Business</a></li>
                        <li><a href="#">Brand Identity</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Ethics</a></li>
                        <li><a href="#">Samsung Design</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <hr>
        <section class="flex justify-between p-6 items-center">
            <p class="text-xs">Copyright© 1995-2024 SAMSUNG All Rights Reserved.</p>
            <img class="image__main responsive-img image--loaded"
                data-desktop-src="//images.samsung.com/is/image/samsung/assets/us/homepage/03182024/SMS-font-aliasing-experiment.png?$ORIGIN_PNG$"
                data-mobile-src="//images.samsung.com/is/image/samsung/assets/us/homepage/03182024/SMS-font-aliasing-experiment.png?$ORIGIN_PNG$"
                alt="Never miss a thing. Sign up for texts to be notified about our best offers"
                src="//images.samsung.com/is/image/samsung/assets/us/homepage/03182024/SMS-font-aliasing-experiment.png?$ORIGIN_PNG$"
                style="">
        </section>
        <hr>
        <section class="flex justify-between text-xs p-6">
            <ul class="flex gap-6">
                <li><a href="#" class="font-bold">USA/ENGLISH</a></li>
                <li>|</li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Do Not Sell Or Share My Personal Information</a></li>
                <li><a href="#">Washington Privacy Notice</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Accessibility Help</a></li>
                <li><a href="#">Sitemap</a></li>
            </ul>


            <ul class="flex gap-4">
                <li><a href="#">STAY IN THE LOOP?</a></li>
                <li><a href="#">FB</a></li>
                <li><a href="#">TWITTER</a></li>
                <li><a href="#">IG</a></li>
                <li><a href="#">YT</a></li>
                <li><a href="#">MAIL</a></li>
            </ul>
        </section>
    </section>
        `
    }
}

customElements.define("footer-component", Footer);