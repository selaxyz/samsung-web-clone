const galaxysProducts = [
    {
        name: "Galaxy S24 Ultra",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-01.png",
 
    },
    {
        name: "Galaxy S24 | S24+",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-02.png",

    },
    {
        name: "Galaxy S23 Ultra",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-03.png",

    },
    {
        name: "Galaxy S23 | S23+",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-04.png",
   
    },
    {
        name: "Galaxy S23 | FE",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-05.png",

    }
]
const galaxyzProduct = [
    {
        name: "Galaxy Z Flip5",
        image: "../../assets/images/galaxy-ai/galaxy-z-series-01.png",
 
    },
    {
        name: "Galaxy Z Fold5",
        image: "../../assets/images/galaxy-ai/galaxy-z-series-02.png",

    },
]
const tabletsProduct = [
    {
        name: "Galaxy Tab S9 Ultra",
        image: "../../assets/images/galaxy-ai/tablet.png",
 
    },
    {
        name: "Galaxy Tab S9+",
        image: "../../assets/images/galaxy-ai/tablet.png",
 
    },
    {
        name: "Galaxy Tab S9",
        image: "../../assets/images/galaxy-ai/tablet.png",
 
    },

]
const budsProduct = [
    {
        name: "Galaxy Buds2 Pro",
        image: "../../assets/images/galaxy-ai/bud-1.png",
 
    },
    {
        name: "Galaxy Buds FE",
        image: "../../assets/images/galaxy-ai/bud-2.png",
 
    },

]



const galaxySList = document.getElementById("galaxySList")

galaxysProducts.forEach(product => {
    const productItem = document.createElement('div')
    productItem.classList.add("galaxy-s-list")
    productItem.classList.add("w-full")
    productItem.innerHTML = `
        <product-series-card data-name="${product.name}" data-image="${product.image}"></product-series-card>
    `
    galaxySList.appendChild(productItem)
})



const galaxyZList = document.getElementById("galaxyZList")

galaxyzProduct.forEach(product => {
    const productItem = document.createElement('div')
    productItem.classList.add("galaxy-z-list")
    productItem.classList.add("w-full")
    productItem.innerHTML = `
        <product-series-card data-name="${product.name}" data-image="${product.image}"></product-series-card>
    `
    galaxyZList.appendChild(productItem)
})


const tabletList = document.getElementById("tabletList")

tabletsProduct.forEach(product => {
    const productItem = document.createElement('div')
    productItem.classList.add("tablet-list")
    productItem.classList.add("w-full")
    productItem.innerHTML = `
        <product-series-card data-name="${product.name}" data-image="${product.image}"></product-series-card>
    `
    tabletList.appendChild(productItem)
})

const budList = document.getElementById("budList")

budsProduct.forEach(product => {
    const productItem = document.createElement('div')
    productItem.classList.add("bud-list")
    productItem.classList.add("w-full")
    productItem.innerHTML = `
        <product-series-card data-name="${product.name}" data-image="${product.image}"></product-series-card>
    `
    budList.appendChild(productItem)
})