
const iconInfo = [
    { src: '../../assets/images/smartphone/trade-in.svg', title: 'Trade-in', desc: 'Trade in your current phone for an instant discount.' },
    { src: '../../assets/images/smartphone/return-order.svg', title: 'Free Returns', desc: "Don't love it? Return it for free within 28 days." },
    { src: '../../assets/images/smartphone/finance.svg', title: 'Finance Available', desc: "Pay on your terms, from 6 to 48 months.<sup>±<sup>" },
    { src: '../../assets/images/smartphone/shipping.svg', title: 'Finance Available', desc: "Order by 8pm and get it the next day. 24/7 tracking." },

];

class BuyWithConfidence extends HTMLElement {
    constructor() {
        super();
        }

    connectedCallback() {
        
        this.className = 'flex flex-col md:flex-row  space-y-8 md:space-y-0 pb-[8.88vw] md:py-[1.22vw]  justisy-evenly items-start justify-start mb-5';

        this.iconItems = document.createElement('div'); // Assign created element to this.carouselItems
        this.iconItems.className = 'flex ';

        iconInfo.forEach(data => {
            const element = document.createElement('div');
            element.className = 'flex text-start md:w-[25%] px-5 text-xs md:text-sm space-x-4';
            element.innerHTML = `
                
                    <img class="size-11 " src="${data.src}">
                    <div class="flex flex-col justify-start">
                        <h4 class="font-semibold">${data.title}</h4>
                        <p class = 'text-xs'>${data.desc}</p>
                    </div>
                
            `;
            this.append(element)
            // this.iconDesc.appendChild(element);
        });
    };
}
customElements.define('icon-desc' , BuyWithConfidence);

// createAndAppendElement(iconInfo, 'icon-description');

