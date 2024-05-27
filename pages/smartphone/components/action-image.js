
export class ActionImage extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const imgSrc = this.getAttribute('img') 
        this.innerHTML = `
        <div class="relative w-10/12 md:w-full mx-auto md:mx-4 hover:scale-105 transition-all">
            <img class="rounded-3xl " src="${imgSrc}" alt="action">
            <div class="absolute size-6 bg-gray-300 right-6 top-4 rounded-full"><img class="flex w-full items-center justify-center ml-0.5" src="../../assets/images/smartphone/play-icon.svg" alt=""></div>
        </div>
        `
        this.classList.add("block")        
    }
}
customElements.define('action-image', ActionImage)