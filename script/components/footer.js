/**
 * Footer custom HTML element.
 * 
 * This class defines a custom HTML element for the footer section of a web page,
 * including sections for shop, support, offers, sustainability, and about us,
 * as well as a copyright notice, an image, and social media links.
 */

export class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.classList.add("w-full");
    this.innerHTML = `
        <section class="flex flex-col items-center bg-white">
        <div class="hidden md:block max-w-screen-2xl w-full">
            <hr>
            <section class="grid grid-cols-4">
                <footer-category class="border-r" data-title="SHOP" data-category="shop"></footer-category>
                <footer-category class="border-r" data-title="SUPPORT" data-category="support"></footer-category>
                <footer-category class="border-r" data-title="OFFERS" data-category="offers"></footer-category>
                <div class="grid grid-rows-2">
                <footer-category data-title="SUSTAINABILITY" data-category="sustainability"></footer-category>
                <footer-category data-title="ABOUT US" data-category="aboutUs"></footer-category>
                </div>
                </section>
                <hr>
                </div>
          <div class=" w-full p-6 text-xl font-semibold md:hidden">                
                <footer-category data-title="SHOP" data-category="shop" data-size="small"></footer-category>
                <footer-category data-title="SUPPORT" data-category="support" data-size="small"></footer-category>
                <footer-category data-title="OFFERS" data-category="offers" data-size="small"></footer-category>
                <footer-category data-title="SUSTAINABILITY" data-category="sustainability" data-size="small"></footer-category>
                <footer-category data-title="ABOUT US" data-category="aboutUs" data-size="small"></footer-category>
        </div>
        <section
            class="md:flex md:flex-row items-center justify-between max-w-screen-2xl w-full py-2 px-6 space-y-4">
            <p class="text-xs">Copyright© 1995-2024 SAMSUNG All Rights Reserved.</p>
            <img alt="Never miss a thing. Sign up for texts to be notified about our best offers"
                src="//images.samsung.com/is/image/samsung/assets/us/homepage/03182024/SMS-font-aliasing-experiment.png?$ORIGIN_PNG$">
        </section>
        <hr>
        <footer-social></footer-social>
    </section>
        `;
  }
}

customElements.define("footer-component", Footer);
