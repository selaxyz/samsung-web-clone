import { mobileData, tvData, homeData, susData } from './carouselTab-data.js';



export class CarouselTab extends HTMLElement {
    connectedCallback() {

        // get attribute from html
        
        const dataType = this.getAttribute('data-type');
        let data;
        
        // Checking Which Data to use
        if (dataType === 'mobile') {
                data = mobileData;
            } else if (dataType === 'tv'){
                data = tvData;
            } else if (dataType === 'home') {
                data = homeData;
            } else if (dataType === 'sus') {
                data = susData;
            }
        
        
        const { items, headerText, buttons } = data; // Unpacking Data
        
        this.innerHTML = `
        <section class="carousel max-w-screen-2xl w-screen">
            <div class="carousel-container relative">
                <div class="flex overflow-hidden gap-4">
                    <div id="carousel-inner-container" class="flex transition-transform duration-500">
                        ${items.map(item => `
                            <div class="item w-full h-full relative flex-none">
                                <img class="hidden sm:block w-full" src="${item.largeImage}" alt="">
                                <img class="sm:hidden w-full" src="${item.smallImage}" alt="">
                                <div class="info flex flex-col sm:gap-2 text-center items-center justify-center pb-6 absolute bottom-8 sm:bottom-0 left-24 right-24">
                                    <h1 class="text-[6vw] sm:text-[3vw] lg:text-3xl pb-2">${item.title}</h1>
                                    <p class="text-[2vw] sm:text-[1vw] lg:text-xl">${item.description}</p>
                                    <button class="btn bg-black p-2 rounded-full text-white font-semibold text-[1.5vw] sm:text-lg">Buy Now</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="header mt-8 absolute top-0 left-1/2 transform -translate-x-1/2 overflow-auto">
                    <h2 class="text-3xl sm:text-[3vw] lg:text-5xl font-semibold text-center">${headerText}</h2>
                    <div class="flex flex-col items-center gap-4 scrollbar-none">
                        <div class="flex text-nowrap justify-center space-x-10 mt-5 font-bold sm:text-[1.5vw] lg:text-xl">
                            <div id="btn-carousel" class="overflow-auto sm:justify-center flex gap-12 px-4 w-screen scrollbar-none">
                                ${buttons.map((button, index) => `
                                    <button data-index="${index}" class="carousel-btn">${button}</button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    const container = this.querySelector('#carousel-inner-container');
    const btns = this.querySelectorAll('.carousel-btn');
    carouselTab(container, btns);
    }
}

customElements.define('carousel-tab', CarouselTab);


// For carousel

function carouselTab(container, btns) {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            console.log(index)
            container.style.transform = `translateX(-${index}00%)`;
        });
    });
}