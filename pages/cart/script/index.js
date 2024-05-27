
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}

const orderSummary = document.getElementById("order-summary");
const chevron = document.getElementById("chevron");
const expandButton = document.getElementById("expand-button");

const chevron2 = document.getElementById("chevron-2");

const toggleSummaryHandle = () => {
    orderSummary.classList.toggle("hidden");
    expandButton.classList.toggle("bg-gray-50");
    chevron.classList.toggle("rotate-180");
}
chevron.addEventListener("click", toggleSummaryHandle)

const toggleSummaryHandle2 = () => {
    chevron2.classList.toggle("rotate-180")
}

chevron2.addEventListener("click", toggleSummaryHandle2)




// frequently bought together
const products = [
    {
        name: "Galaxy Watch6 Classic, 47mm",
        image: "../../assets/images/cart/watch6.webp",
        discount: "$399.99",
        fullprice: "$479.99",
    },
    {
        name: "Galaxy Watch6, 40mm, Gold, BT",
        image: "../../assets/images/cart/watch6-2.webp",
        discount: "$239.99",
        fullprice: "$299.99",
    },
    {
        name: "12W Wireless Charger Duo wit",
        image: "../../assets/images/cart/charger.webp",
        discount: "$89.99",
        fullprice: "",
    },
    {
        name: "Galaxy SmartTag2, White",
        image: "../../assets/images/cart/tag.webp",
        discount: "$29.99",
        fullprice: "",
    }
]
const productList = document.getElementById("productList")

products.forEach(product => {
    const productItem = document.createElement('div')
    productItem.classList.add('product-list')
    productItem.classList.add("flex-none", "md:w-1/4", "px-2", "w-1/3")
    productItem.innerHTML = `
    <div>
    <img class="object-cover" src="${product.image}" alt="galaxy watch6 classic">
            <a class="font-semibold" href="#">${product.name}</a>
            <div class="flex justify-center gap-1 mb-5 mt-3">
                <p class="font-light">${product.discount}</p>
                <p class="text-gray-500 line-through font-light">${product.fullprice}</p>
            </div>
        <a class="font-bold underline" href="#">Add to cart</a>
    </div>
    `
    productList.appendChild(productItem)
})


// buttons
// function createButton(containerID, text, url, bgColor, additionalClass) {
//     const container = document.getElementById(containerID);

//     const button = document.createElement("button");
//     button.className = `w-full ${additionalClass}`;

//     const anchor = document.createElement("a");
//     anchor.className = `flex items-center justify-center h-10 rounded-3xl ${bgColor}`
//     anchor.href = url;

//     text.forEach(part => {
//         const span = document.createElement('span');
//         span.textContent = part.text;
//         span.className = part.className;
//         anchor.appendChild(span);
//     });

//     button.appendChild(anchor);

//     container.appendChild(button);
// }

// createButton(
//     "button1",
//     [{text: 'Checkout', className:'text-white tracking-widest text-xs font-semibold'}],
//     "../checkout/index.html",
//     "bg-blue-500",
//     ""
// )

// createButton(
//     "button2",
//     [
//         {text: 'Pay', className: 'text-blue-900'},
//         {text: 'Pal', className: 'text-blue-400'}
//     ],
//     "#",
//     "bg-yellow-400 hover:bg-yellow-500",
//     "h-10 font-bold text-lg italic"
// )

// createButton(
//     "button3",
//     [{text: 'Checkout', className:'text-white tracking-widest text-xs font-semibold'}],
//     "../checkout/index.html",
//     "bg-blue-500",
//     ""
// )

// createButton(
//     "button4",
//     [
//         {text: 'Pay', className: 'text-blue-900'},
//         {text: 'Pal', className: 'text-blue-400'}
//     ],
//     "#",
//     "bg-yellow-400 hover:bg-yellow-500",
//     "h-10 font-bold text-lg italic"
// )

// createButton(
//     "button5",
//     [{text: 'Checkout', className:'text-white tracking-widest text-xs font-semibold'}],
//     "../checkout/index.html",
//     "bg-blue-500",
//     ""
// )



const html = `
<script src="./components/button.js" type="module"></script>`
const scriptEl = document.createRange().createContextualFragment(html);
div.append(scriptEl)