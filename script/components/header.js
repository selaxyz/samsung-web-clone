export class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `        
        <div class="flex bg-pink-100">
            <p>Hi</p>
            <p>Hi</p>
            <slot></slot>
        </div>`
    }
}

customElements.define("header-comp", Header);
