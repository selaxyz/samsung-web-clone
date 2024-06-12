/**
 * Chat component.
 * 
 * This script defines a custom HTML element for a chat component.
 * The Chat class extends HTMLElement and creates a chat icon with an optional notification indicator.
 * 
 * Chat class:
 * - Extends HTMLElement.
 * - Generates a chat icon with an optional notification indicator in the connectedCallback method.
 * 
 * Usage:
 * The custom element is defined as "chat-component" using customElements.define.
 * It can be included in HTML documents to display a chat icon with an optional notification indicator.
 */

export class Chat extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = ` <section class="fixed left-6 bottom-10 rounded-full shadow-indigo-500/50 shadow-lg">
            <img class="w-16 h-fit rounded-full "
                src="https://static.iadvize.com/uploads/engagement/notification/avatar/75418395-1ca8-4ed4-bf7b-5cbd25a099c1"
                alt="Chat Icon">
            <div class="w-4 h-4 bg-green-500 rounded-full border-white border absolute top-0 right-0"></div>
         </section>
        `;
  }
}

customElements.define("chat-component", Chat);
