// Fixed checkout
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 850 ||
    document.documentElement.scrollTop > 850
  ) {
    document.getElementById("navbar").style.top = "0"; // Show navbar
  } else {
    document.getElementById("navbar").style.top = "-80px"; // Hide navbar
  }
}

// Elements for order summary and chevron icons
const orderSummary = document.getElementById("order-summary");
const chevron = document.getElementById("chevron");
const expandButton = document.getElementById("expand-button");
const chevron2 = document.getElementById("chevron-2");

// Toggle order summary visibility and chevron rotation
const toggleSummaryHandle = () => {
  orderSummary.classList.toggle("hidden");
  expandButton.classList.toggle("bg-gray-50");
  chevron.classList.toggle("rotate-180");
};
chevron.addEventListener("click", toggleSummaryHandle);

// Toggle second chevron rotation
const toggleSummaryHandle2 = () => {
  chevron2.classList.toggle("rotate-180");
};

chevron2.addEventListener("click", toggleSummaryHandle2);

// frequently bought together
const products = [
  {
    name: "Galaxy Watch6 Classic, 47mm",
    image: "../../assets/images/cart/watch6.webp",
    discount: "$399.99",
    fullprice: "$479.99",
    alt: "galaxy watch6 classic",
  },
  {
    name: "Galaxy Watch6, 40mm, Gold, BT",
    image: "../../assets/images/cart/watch6-2.webp",
    discount: "$239.99",
    fullprice: "$299.99",
    alt: "watch",
  },
  {
    name: "12W Wireless Charger Duo wit",
    image: "../../assets/images/cart/charger.webp",
    discount: "$89.99",
    fullprice: "",
    alt: "charger",
  },
  {
    name: "Galaxy SmartTag2, White",
    image: "../../assets/images/cart/tag.webp",
    discount: "$29.99",
    fullprice: "",
    alt: "tag",
  },
];

// Populate product list with product items
const productList = document.getElementById("productList");
products.forEach((product) => {
  const productItem = document.createElement("div");
  productItem.classList.add("product-list");
  productItem.classList.add("flex-none", "md:w-1/4", "px-2", "w-1/3");
  productItem.innerHTML = `
    <div>
        <img class="object-cover" src="${product.image}" alt="${product.alt}">
        <a class="font-semibold" href="#">${product.name}</a>
            <div class="flex justify-center gap-1 mb-5 mt-3">
                <p class="font-light">${product.discount}</p>
                <p class="text-gray-500 line-through font-light">${product.fullprice}</p>
            </div>
        <a class="font-bold underline" href="#">Add to cart</a>
    </div>
    `;
  productList.appendChild(productItem);
});

// supported payment methods
const paymentData = [
  {
    image: "../../../assets/images/cart/icon-visa-3x.jpg.dea005e.webp",
    alt: "visa",
  },
  {
    image: "../../../assets/images/cart/icon-amex-3x.jpg.46318bb.webp",
    alt: "american express",
  },
  {
    image: "../../../assets/images/cart/icon-discover-3x.jpg.c121996.webp",
    alt: "discover",
  },
  {
    image: "../../../assets/images/cart/icon-master-3x.jpg.31139e6.webp",
    alt: "master card",
  },
  {
    image: "../../../assets/images/cart/icon-samsung-pay-3x.jpg.5098b20.webp",
    alt: "samsung pay",
  },
  {
    image: "../../../assets/images/cart/icon-amazon-pay-3x.jpg.f0813d6.webp",
    alt: "amazon pay",
  },
  {
    image: "../../../assets/images/cart/icon-paypal-3x.jpg.aa2db00.webp",
    alt: "paypal",
  },
  {
    image:
      "../../../assets/images/cart/icon-samsung-financing-3x.jpg.e589781.webp",
    alt: "samsung finance",
  },
  {
    image: "../../../assets/images/cart/logo-klarna-black.7dcdc1e.svg",
    alt: "klarna payments",
  },
  {
    image:
      "../../../assets/images/cart/supported-payment-google-pay.png.52c00e3.webp",
    alt: "google pay",
  },
  {
    image:
      "../../../assets/images/cart/logo-apple-pay-supported-method.png.ae3faf0.webp",
    alt: "apple pay",
  },
];

// Display supported payment methods
const supportedPayment = document.querySelector("#supported-payment");
supportedPayment.innerHTML = paymentData
  .map(
    (data) => `
    <img class="w-10 h-6" 
        src="${data.image}" 
        alt="${data.alt}">
`,
  )
  .join("");
