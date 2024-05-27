
const smartphoneFeatureData = [
    {
        title: "Galaxy AI",
        desc: "Unleash astounding new ways to create and connect.",       
        imgSrc: "../../assets/images/smartphone/feat-1.jpg" 
    },
    {
        title: "Camera",
        desc: "Crystal-clear content. Stunning details. True-to-life color. With Galaxy S24 Series cameras, what you see is what you get.",        
        imgSrc: "../../assets/images/smartphone/feat-2.jpg" 
    },
    {
        title: "Design",
        desc: "The Galaxy S24 Series is an absolute marvel of design with bigger displays, ultra-slim bezels and unique colors inspired by nature.",        
        imgSrc: "../../assets/images/smartphone/feat-3.jpg" 
    },
    {
        title: "Performance",
        desc: "Blazing-fast processors and a new heat dissipation system gives you all the power you need for all the gameplay you want.",        
        imgSrc: "../../assets/images/smartphone/feat-4.jpg" 
    },
    {
        title: "Galaxy SIM flexibility",
        desc: "Switch phone numbers, travel stress-free and more with Galaxy eSIM and Dual SIM capabilities.",        
        imgSrc: "../../assets/images/smartphone/feat-5.jpg" 
    },
]

const sideContainer = document.querySelector(".side-container")

smartphoneFeatureData.forEach((data,i)=>{
    const innerHTML =  `
        <side-article listNumber="0${i+1}" desc="${data.desc}" title="${data.title}"></side-article>
    `
    sideContainer.innerHTML += innerHTML
    // const sideArticle = document.createElement('side-article');
    // sideArticle.setAttribute('listNumber', `0${i + 1}`);
    // sideArticle.setAttribute('desc', data.desc);
    // sideArticle.setAttribute('title', data.title)
    // sideContainer.appendChild(sideArticle);
})
sideContainer.classList += " items hidden sm:flex flex-col gap-4"

const articles = document.querySelectorAll('side-article')
const imgFeature = document.getElementById('img-feature')

function articleHoverHandler(info, i){

    imgFeature.src = smartphoneFeatureData[i].imgSrc
    articles.forEach(article=>{
        const info = article.querySelector(".info")
        info.classList.add('h-0')
        info.classList.add('max-h-0', 'border-b')
        info.classList.remove('max-h-96')        
        article.classList.remove("border-t-2")

    })
    articles[i].classList.add("border-t-2")
    if (i!=0) articles[i - 1].querySelector('.info').classList.remove('border-b')
    info.classList.remove('h-0')
    info.classList.remove('max-h-0')
    info.classList.add('max-h-96')
}


articles.forEach((article,i)=>{
    // info.classList.add("max-h-0")
    const info = article.querySelector(".info")
    console.log(imgFeature);
    article.addEventListener('mouseover', articleHoverHandler.bind(null, info, i))
})
const firstInfo = articles[0].querySelector(".info")
articles[0].classList.add('border-t-2')
console.log(firstInfo);
firstInfo.classList.remove("max-max-h-0")
firstInfo.classList.add("max-h-96")


// Galaxy AI
const galaxyAiHandler = (n) => {
    // const translate = '-translate-x-full' ? n === 0 ? ''
    console.log(n);
    if (n === 0) {
        galaxyAiContainer.classList.remove('-translate-x-full')
        btnSlides[n].classList.add('bg-white')
        btnSlides[1].classList.remove('bg-white')
    }
    else {
        galaxyAiContainer.classList.add('-translate-x-full') 
        btnSlides[n].classList.add('bg-white')
        btnSlides[0].classList.remove('bg-white')
    }
};
const galaxyAiContainer = document.querySelector('.galaxy-ai-container');
const btnSlides = document.querySelectorAll('.btn-slide')
btnSlides[0].addEventListener('click', ()=>{ galaxyAiHandler(0) } )
btnSlides[1].addEventListener('click', ()=>{ galaxyAiHandler(1) })
btnSlides[0].classList.add('bg-white')

// favbutton
const favContainer = document.querySelector('.fav-container-mobile')
const carouselContainer = document.querySelector('.carousel-container')
const indicatorContainer = document.querySelector('.indicator-container')


// function createButtonIndicator(indicatorContainer){
//     const indicatorHandler = (i) => {
//         const btnIndicators = indicatorContainer.querySelectorAll('button')
//         favContainer.style.transform = `translateX(-${i * 100}%)`
//         btnIndicators.forEach(btnIndicator=>{
//             btnIndicator.classList.remove('bg-black')
//             btnIndicator.classList.add('bg-gray-500')            
//         })
//         btnIndicators[i].classList.remove('bg-gray-500')
//         btnIndicators[i].classList.add('bg-black')
//     }
//     const slideLength = favContainer.querySelectorAll('.slide').length
    
//     for (let i = 0; i < slideLength; i++){
//         const btnIndicator = document.createElement('button')
//         btnIndicator.classList += ` btn-slide mx-3 size-3 rounded-full`
//         if (i === 0) btnIndicator.classList.add('bg-black')
//         else btnIndicator.classList.add('bg-gray-500')
//         indicatorContainer.append(btnIndicator)
//         btnIndicator.addEventListener('click', () => indicatorHandler(i) )
//     }
//     indicatorContainer.classList += " w-fit mx-auto flex rounded-full border border-gray-300 bg-white opacity-80 py-2"
    
// }
// createButtonIndicator(indicatorContainer)

// Sub navbar content
const subNavbarData = [
    {
        title: "Galaxy S",
        desc: "Epic, just like that",       
        imgSrc: "../../assets/images/smartphone/sub-nav-6.png" 
    },
    {
        title: "Galaxy Z",
        desc: "Open your world with our foldable phones",       
        imgSrc: "../../assets/images/smartphone/sub-nav-1.png" 
    },
    {
        title: "Galaxy A",
        desc: "Samsung innovation",       
        imgSrc: "../../assets/images/smartphone/sub-nav-2.png" 
    },
    {
        title: "Galaxy XCover6 Pro",
        desc: "Built to handle",       
        imgSrc: "../../assets/images/smartphone/sub-nav-3.png" 
    },
    {
        title: "Compare",
        desc: "See smartphone",       
        imgSrc: "../../assets/images/smartphone/sub-nav-4.png" 
    },
    {
        title: "Accessories",
        desc: "Protect deivce",       
        imgSrc: "../../assets/images/smartphone/sub-nav-5.png" 
    },
]
const discoverData = [
    {
        title: "Galaxy S",
        desc: "",       
        imgSrc: "../../assets/images/smartphone/discover-1.png" 
    },
    {
        title: "Galaxy Z",
        desc: "",       
        imgSrc: "../../assets/images/smartphone/discover-2.png" 
    },
    {
        title: "Galaxy A",
        desc: "",       
        imgSrc: "../../assets/images/smartphone/discover-3.png" 
    },
    {
        title: "Galaxy XCover6 Pro",
        desc: "",       
        imgSrc: "../../assets/images/smartphone/discover-4.png" 
    },
    {
        title: "Compare",
        desc: "",       
        imgSrc: "../../assets/images/smartphone/discover-5.png" 
    },
    {
        title: "Accessories",
        desc: "",       
        imgSrc: "../../assets/images/smartphone/discover-6.png" 
    },
]
const subNavContent = document.getElementById('sub-nav-content');
subNavbarData.forEach(({title, desc, imgSrc}) => {
    subNavContent.innerHTML += `
        <item-content imgSrc="${imgSrc}" desc="${desc}" title="${title}"></item-content>
    `
    subNavContent.classList.add('flex', "gap-6", "flex-none")
})

const discoverContent = document.getElementById('discover-content');
discoverData.forEach(({title, desc, imgSrc}) => {
    discoverContent.innerHTML += `
        <item-content imgSrc="${imgSrc}" desc="${desc}" title="${title}"></item-content>
    `
    discoverContent.classList.add('flex', "gap-6", "flex-none")
})


function windowResizeHandleer() {
    if (window.innerWidth >= 768){
        galaxyAiHandler(0)
    }
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
}

window.onresize = windowResizeHandleer;


// Inspired Section

// TabHandler
const tabHandler = (i) =>{
    const percent = i * 100
    inspiredTabContainer.style.transform = `translateX(-${percent}%)`
    btnInspireds.forEach(btn=> btn.classList.remove('underline'))
    btnInspireds[i].classList.add('underline')
}

// Variable
const btnInspireds = document.querySelectorAll('.btn-inspired');
const inspiredTabContainer = document.getElementById('inspired-tab');
btnInspireds[0].classList.add('underline')

btnInspireds.forEach((btn, i)=>{
    btn.addEventListener('click', ()=> tabHandler(i))
})