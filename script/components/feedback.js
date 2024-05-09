export class Feedback extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML =
            `<section class="fixed right-0 bottom-80 rounded-full h-fit w-fit">
            <div class="flex items-center justify-center w-6 h-20 bg-black rounded-tl-md rounded-bl-md border-white border">
                <span class="text-xs text-white -rotate-90 text-nowrap">Feedback</span>
            </div>
         </section>
        `

    }
}

customElements.define('feedback-component', Feedback)