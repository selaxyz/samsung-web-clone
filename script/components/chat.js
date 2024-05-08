export class Chat extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        ` <section class="fixed left-6 bottom-10 rounded-full shadow-indigo-500/50 shadow-lg">
            <img class="w-16 h-fit rounded-full "
                src="https://static.iadvize.com/uploads/engagement/notification/avatar/75418395-1ca8-4ed4-bf7b-5cbd25a099c1"
                alt="">
            <div class="w-4 h-4 bg-green-500 rounded-full border-white border absolute top-0 right-0"></div>
         </section>
        `

    }

}

customElements.define("chat-component", Chat);