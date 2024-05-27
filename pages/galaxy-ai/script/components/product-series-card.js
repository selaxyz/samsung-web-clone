export class ProductSeriesCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const image = this.dataset.image
        const name = this.dataset.name

        this.innerHTML =  `
        <div class="flex flex-col p-4 justify-between bg-gray-50 gap-8 rounded-xl items-start h-fit">
            <div class="flex flex-col gap-4">
                <img class="object-cover bg-cover h-full w-fit" src="${image}" alt="galaxy watch6 classic">
                <a class="font-semibold text-2xl href="#">${name}</a>
            </div>
            <div class=" flex p-4 justify-start w-full text-sm items-center gap-2 font-semibold">
             <a href="#">Buy Now </a>
             <img src="../../assets/images/galaxy-ai/icon/chevron-right.svg" alt="icon">
            </div>
        </div>
        `
    }
}

customElements.define('product-series-card', ProductSeriesCard)
