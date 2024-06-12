/**
 * Generates HTML elements based on the data-spec attribute of shortspec elements and inserts them into the DOM.
 */
const shortSpecElements = document.querySelectorAll("shortspec");
shortSpecElements.forEach(function (shortSpecElement) {
  /**
   * Retrieves the data-spec attribute value from the shortspec element.
   * @type {string}
   */
  const specData = shortSpecElement.getAttribute("data-spec");

  /**
   * Splits the specData string into an array of words and trims any leading or trailing whitespace from each word.
   * @type {Array<string>}
   */
  const specWords = specData.split(",").map((word) => word.trim());

  /**
   * HTML string for displaying specWords in a grid layout.
   * @type {string}
   */
  let specHtml =
    '<div class="w-screen-md bg-gray-100 flex items-center justify-center overflow-hidden"><div class="grid grid-cols-2 grid-rows-2 mx-4 md:mr-6 justify-center text-center items-center space-y-5 md:space-y-0"><hr class="right-1/3 md:right-[40%] absolute w-2/5 max-w-72 bg-slate-500 rotate-90">';

  /**
   * Iterates through each word in specWords and generates HTML for displaying the word and its corresponding icon.
   */
  specWords.forEach(function (word) {
    specHtml += `
            <div class="md:flex md:flex-col w-full mx-20 h-44 mt-5 py-10 border-slate-100 ml-auto justify-center grid border-s-0  md:px-0">
              <div class="grid justify-center mb-5">
                <img class="h-12" src="/assets/images/product-detail/icon-${word.toLowerCase().replace(/\s+/g, "-")}.svg" alt="${word}">
              </div>
              <h6 class="flex justify-center font-medium md:text-base text-xs">${word}</h6>
            </div>
          `;
  });

  specHtml += "</div></div>";

  /**
   * Updates the innerHTML of the shortspec element with the generated specHtml.
   */
  shortSpecElement.innerHTML = specHtml;
});
