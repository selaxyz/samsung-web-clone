/**
 * Creates a product component as an HTML section element.
 *
 * @param {Object} product - The product details.
 * @param {string} product.productId - The product ID.
 * @param {string} product.productName - The name of the product.
 * @param {string} product.productImage - The URL of the product image.
 * @param {number} product.rating - The rating of the product out of 5.
 * @param {number} product.reviewCount - The number of reviews for the product.
 * @param {number} product.price - The price of the product.
 * @param {string} product.link - The URL link to the product page.
 *
 * @returns {HTMLElement} The HTML section element representing the product.
 */
function createProductComponent({
  productId,
  productName,
  productImage,
  rating,
  reviewCount,
  price,
  link,
}) {
  const section = document.createElement("section");
  section.classList.add("max-w-screen-xl", "w-screen", "mx-auto", "p-10");

  section.innerHTML = `
        <p class="text-center text-xl md:text-2xl font-semibold mt-3">
            Buy Direct From Samsung
        </p>
        <div class="flex flex-col md:flex-row items-center justify-center mt-4">
            <div class="w-full h-full mx-16">
                <img class="object-contain w-full h-full" src="${productImage}" alt="${productName}" />
            </div>
            <div class="flex flex-col justify-evenly w-full">
                <div class="flex flex-col items-center md:items-start p-5 pb-10">
                    <p class="text-gray-400 text-xs">
                        ${productId}
                    </p>
                    <h2 class="text-xl font-semibold text-gray-800 mt-4">
                        ${productName}
                    </h2>
                    <div class="flex items-center text-xs mt-2">
                        <div class="flex">
                            ${[...Array(5)]
                              .map(
                                (_, i) => `
                                <img class="w-4 h-4 mx-px" src="${i < Math.floor(rating) ? "../../assets/images/nearby-store/star-solid.svg" : "../../assets/images/nearby-store/star-half-stroke-solid.svg"}" alt="Star">
                            `,
                              )
                              .join("")}
                        </div>
                        <div class="text-gray-500 ml-2 text-md mt-1">
                            ${rating}/ 5.0 (${reviewCount} Reviews)
                        </div>
                    </div>
                    <div class="text-black text-xl mt-8 font-semibold">
                        $${price}
                    </div>
                    <div class="text-gray-400 text-xs mt-1">
                        FREE SHIPPING ON ALL ORDERS
                    </div>
                    <a href="${link}" class="flex items-center justify-center rounded-full bg-blue-800 w-full md:w-48 text-white font-medium py-2 mt-5">
                        BUY NOW
                    </a>
                </div>
            </div>
        </div>
    `;
  return section;
}

/**
 * Example product object.
 * @type {Object}
 */
const product = {
  productId: "SM-R510NZAAXAR",
  productName: "Samsung Galaxy Buds2 Pro Graphite",
  productImage: "../../assets/images/nearby-store/nearby-store-1.png",
  rating: 4.6,
  reviewCount: 4927,
  price: 169.99,
  link: "../cart/index.html",
};

// Append the product component to the element with ID 'product-detail'
document
  .getElementById("product-detail")
  .appendChild(createProductComponent(product));
