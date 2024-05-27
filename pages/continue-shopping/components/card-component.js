const cardData = [
        {
            "title": "Select Galaxy S24 Ultra",
            "image": "../../assets/images/continue-shoping/image/featured/image-1.png",
        },
        {
            "title": "Exclusive Offer",
            "image": "../../assets/images/continue-shoping/image/featured/image-2.png",
            "button": "Pre-order"
        },
        {
            "title": "Exclusive Offer",
            "image": "../../assets/images/continue-shoping/image/featured/image-3.png",
            "button": "Pre-order"
        },
        {
            "title": "Exclusive Offer",
            "image": "../../assets/images/continue-shoping/image/featured/image-4.png",
            "button": "Pre-order"
        },
        {
            "title": "Offer Ends Apr 11",
            "image": "../../assets/images/continue-shoping/image/featured/image-5.png"
        },
        {
            "title": "Offer Ends Apr 11",
            "image": "../../assets/images/continue-shoping/image/featured/image-6.png"
        },
        {
            "title": "Exclusive Offer",
            "image": "../../assets/images/continue-shoping/image/featured/image-7.png",
            "button": "Pre-order"
        },
        {
            "title": "Exclusive Offer",
            "image": "../../assets/images/continue-shoping/image/featured/image-8.png",
            "button": "Pre-order"
        },
        {
            "title": "Offer Ends Apr 11",
            "image": "../../assets/images/continue-shoping/image/featured/image-9.png"
        },
        {
            "title": "Offer Ends Apr 11",
            "image": "../../assets/images/continue-shoping/image/featured/image-10.png"
        },
        {
            "title": "Offer Ends Apr 22",
            "image": "../../assets/images/continue-shoping/image/featured/image-11.png"
        },
        {
            "title": "Offer Ends Apr 11",
            "image": "../../assets/images/continue-shoping/image/featured/image-12.png"
        },
        {
            "title": "Offer Ends Apr 14",
            "image": "../../assets/images/continue-shoping/image/featured/image-13.png"
        },
        {
            "title": "High Resolution Week",
            "image": "../../assets/images/continue-shoping/image/featured/image-14.png"
        },
        {
            "title": "Offer Ends Apr 14",
            "image": "../../assets/images/continue-shoping/image/featured/image-15.png"
        },
        
    ];

// for (i of cardData) {
//     console.log(i);
//     console.log(i.title);
// }

// console.log(cardData[0].title);

class Featured extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="items max-w-screen-2xl ">
        <h2 class="text-center text-5xl font-bold py-24">Featured Deals</h2>
        <div class="card-container w-full flex flex-wrap px-2 gap-2">
            ${cardData.map(items => `
            <div class="card bg-gray-100 w-full sm:w-[350px] rounded-xl border-2  p-4 text-wrap flex flex-col gap-4  shadow-2xl flex-none items-center ">
                <img class=" h-64"  src="${items.image}" alt="">
                <div class="flex flex-col gap-2">
                    <p class="text-white bg-blue-500 w-2/3 text-lg p-2 rounded-xl font-bold text-center">${items.title}</p>
                    <h2 class="font-bold">Save up to $900</h2>
                    <p class="w-2/3">Get up to $750 instant trade-in credit and $150 off. From $1,149.99 $1,299.99 before eligible trade-in.</p>
                    <button class="bg-blue-700  text-white py-4 px-6 rounded-3xl text-xs w-1/3 "><a href="#">${items.button || 'Buy Now'}</a></button>
                </div>
            </div>
            `).join('')}
        </div>
    </section>
    `
    }
}

customElements.define('featured-components', Featured)