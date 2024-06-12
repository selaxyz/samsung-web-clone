/**
 * Feedback component.
 * 
 * This script defines a custom HTML element for a feedback component.
 * The Feedback class extends HTMLElement and displays a feedback button positioned at the bottom-right corner of the screen.
 * 
 * Feedback class:
 * - Extends HTMLElement.
 * - Inserts HTML content for the feedback button in the connectedCallback method.
 * 
 * HTML content:
 * - The feedback button is enclosed in a <section> element with fixed positioning at the bottom-right corner of the screen.
 * - The button itself consists of a black background with rounded corners and a white border.
 * - Inside the button, a rotated text "Feedback" is displayed in white color.
 * 
 * Usage:
 * The custom element is defined as "feedback-component" using customElements.define.
 * It can be included in HTML documents to add a feedback button to the user interface.
 */

export class Feedback extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<section class="fixed right-0 bottom-80 rounded-full h-fit w-fit">
            <div class="flex items-center justify-center w-6 h-20 bg-black rounded-tl-md rounded-bl-md border-white border">
                <span class="text-xs text-white -rotate-90 text-nowrap">Feedback</span>
            </div>
         </section>
        `;
  }
}

customElements.define("feedback-component", Feedback);
