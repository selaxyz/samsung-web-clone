/**
 * Custom HTML element representing a Dash Bar.
 *
 * @export
 * @class DashBar
 * @extends {HTMLElement}
 */
export class DashBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const rate = this.dataset.rate;
    // render all 5 gray bar
    for (let i = 0; i <= 4; i++) {
      const contentHtml = `
                <div class="bar-present h-2.5 w-8 bg-gray-400"></div>
            `;
      this.innerHTML += contentHtml;
    }

    // render orange bar check condition to give percent to bar
    const barInner = document.createElement("div");
    barInner.classList = "flex absolute gap-0.5 left-0 top-0";
    let percent = parseFloat(rate) - parseInt(rate);
    let intRate = parseInt(rate);
    percent = parseInt(percent * 100);

    // Render orange bars based on the rate
    for (let i = 1; i <= intRate; i++) {
      let contentHtml = `
                <div class="bar-inner h-2.5 w-8 relative ">
                    <div class="h-2.5 w-full bg-orange-400"></div>
                </div>
            `;
      // If at the last bar and there is a remaining percentage, render the partial bar
      if (i == intRate && percent > 0) {
        contentHtml += `<div class="bar-inner h-2.5 w-8 relative ">
                    <div class="h-2.5 w-[${percent}%] bg-orange-400"></div>
                </div>
                `;
      }
      barInner.innerHTML += contentHtml;
    }
    this.classList += " flex gap-0.5 relative item-center justify-center";

    // Append the orange bars container to the main element
    this.append(barInner);
  }
}
