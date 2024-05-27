
const creator = [
    {
        title: "Go viral with Galaxy",
        imgSrcSmall: "../../assets/images/smartphone/creator-1-small.jpg",
        imgSrcBig: "../../assets/images/smartphone/creator-1.jpg",
        desc: "Make crave-worthy content with powerful creative tools",
    },
    {
        title: "Smooth video",
        imgSrcSmall: "../../assets/images/smartphone/creator-2-small.jpg",
        imgSrcBig: "../../assets/images/smartphone/creator-2.jpg",
        desc: "Steady video gives you a clear picture of the action. ",
    },
    {
        title: "Capture it all",
        imgSrcSmall: "../../assets/images/smartphone/creator-3-small.jpg",
        imgSrcBig: "../../assets/images/smartphone/creator-3.jpg",
        desc: "Multi-lens cameras get the shot, near or far.",
    },
]

const creatorStreamer = [
    {
        title: "Go viral with Galaxy",
        imgSrcSmall: "../../assets/images/smartphone/stream-small-1.avif",
        imgSrcBig: "../../assets/images/smartphone/stream-1.avif",
        desc: "Make crave-worthy content with powerful creative tools",
    },
    {
        title: "Go viral with Galaxy",
        imgSrcSmall: "../../assets/images/smartphone/stream-small-2.avif",
        imgSrcBig: "../../assets/images/smartphone/stream-2.avif",
        desc: "Make crave-worthy content with powerful creative tools",
    },
    {
        title: "Go viral with Galaxy",
        imgSrcSmall: "../../assets/images/smartphone/stream-small-3.avif",
        imgSrcBig: "../../assets/images/smartphone/stream-3.avif",
        desc: "Make crave-worthy content with powerful creative tools",
    },
]
const multiTasker = [
    {
        title: "Go viral with Galaxy",
        imgSrcSmall: "../../assets/images/smartphone/multi-small-1.avif",
        imgSrcBig: "../../assets/images/smartphone/multi-1.avif",
        desc: "Make crave-worthy content with powerful creative tools",
    },
    {
        title: "Go viral with Galaxy",
        imgSrcSmall: "../../assets/images/smartphone/multi-small-2.avif",
        imgSrcBig: "../../assets/images/smartphone/multi-2.avif",
        desc: "Make crave-worthy content with powerful creative tools",
    },
    {
        title: "Go viral with Galaxy",
        imgSrcSmall: "../../assets/images/smartphone/multi-small-3.avif",
        imgSrcBig: "../../assets/images/smartphone/multi-3.avif",
        desc: "Make crave-worthy content with powerful creative tools",
    },
]

class CardInspired extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const title = this.getAttribute('title')
        const imgSrcSmall = this.getAttribute('img-small')
        const imgSrcBig = this.getAttribute('img-big')
        const desc = this.getAttribute('desc')

        this.innerHTML = `
            <div
            class="absolute right-0 my-auto w-1/2  h-full md:h-fit flex flex-col justify-center px-3 text-center text-white md:bottom-6 md:left-0 md:right-0 md:w-full md:translate-y-0 md:px-6"
            >
                <h4 class="text-lg md:text-xl font-bold">${title}</h4>
                <p>${desc}</p>
            </div>
            <img
            class="hidden w-full object-cover md:block"
            src="${imgSrcBig}"
            alt=""
            />
            <img
            class="w-full object-cover md:hidden"
            src="${imgSrcSmall}"
            alt=""
            />
        `
        this.classList.add("block")
        this.classList += " relative w-full md:w-1/3"
    }
}

customElements.define('card-inspired', CardInspired)

export class InspiredContainer extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const content = this.getAttribute('content')
        let inspiredData = []
        if (content === 'streamer'){
            inspiredData = creatorStreamer
        } else if(content === 'multi'){
            inspiredData = multiTasker
        }
        else{
            inspiredData = creator
        }
        console.log(content);
        inspiredData.forEach(data=>{
            const innerHTML = `
            <card-inspired 
                title="${data.title}"
                img-small="${data.imgSrcSmall}"
                img-big="${data.imgSrcBig}"
                desc="${data.desc}"
            >
            `
            this.innerHTML +=innerHTML
        })
        this.classList.add("block")
        this.classList += " flex min-w-full w-full flex-col gap-4 px-4 md:flex-row md:flex-none"
        
    }
}

customElements.define('inspired-container', InspiredContainer)