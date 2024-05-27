
export class CardSwitch extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const childText = this.textContent
        const imgSrc = this.getAttribute('img')
        const desc = this.getAttribute('desc')
        let bgColor = "bg-blue-100"

        bgColor = this.getAttribute('bgColor') || bgColor
        this.innerHTML = `
            <div class="${bgColor} flex flex-none items-center flex-col rounded-3xl relative pb-20 px-8 md:px-2 w-full">
                <img class="h-20 my-10" src="${imgSrc}" alt="" />
                <h3 class="font-bold mb-8 text-xl">${childText}</h3>
                <p class="text-center min-h-14">${desc}</p>
                <button class="absolute left-4 bottom-6 font-bold">Learn more ></button>
            </div>
        `
        this.classList.add("block")
        
    }
}