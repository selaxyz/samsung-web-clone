const stocks = [
    {
        price: "$189.99",
        image: "/assets/images/nearby-store/nearby-store2.png",
    },
    {

        price: "$189.99",
        image: "/assets/images/nearby-store/nearby-store-3-v2.png",
    },
    {
        price: "$229.99",
        image: "/assets/images/nearby-store/nearby-store-Target.png",
    },
    {
        price: "$189.99",
        image: "/assets/images/nearby-store/nearby-store-abt.jpeg",
    },
    {
        price: "$160",
        image: "/assets/images/nearby-store/nearby-store-4.jpeg",
    }
];

const stockList = document.getElementById("stockList");

stocks.forEach((stock) => {
    const stockItem = document.createElement("div");
    stockItem.classList.add("stock-item");
    stockItem.classList.add("text-center","flex","flex-col","items-center", "box-border", "h-44", "shadow-md", "bg-white", "w-44");
    stockItem.innerHTML = `
    <div>
        <img class=" h-20 w-28 object-scale-down object-center"
            src="${stock.image}" alt="amazon store">
        <p class="text-md">${stock.price}</p>
        <p class="text-sm text-green-400">In Stock</p>
        <p class="text-sm text-blue-900">View Website</p>
    </div>
`;

    stockList.appendChild(stockItem);
});
