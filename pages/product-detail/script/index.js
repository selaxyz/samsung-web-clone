
// Product Detail Image Slider
let slideIndex = 1; // current slide index
showSlides(slideIndex); 

function plusSlides(n){
    showSlides(slideIndex += n );
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let imgContainer = document.getElementById("image-container")
    // n parameter slide index get from user + current slide index
    if (n > slides.length) {slideIndex = 1} // parameter n > length slides : slide go to 1st page
    if (n < 1) {slideIndex = slides.length} // parameter n < 1 : slide go to last page
    for (i = 0; i < slides.length; i++){ 
        slides[i].style.opacity = "1"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");                
    }  
    imgContainer.style.transform = 'translateX(-' + (slideIndex-1)*100 +'%' 
    dots[slideIndex-1].className += " active";            
}


// Product Detail
// Trade In
const btnTradeIn = document.getElementById('trade-in')
const btnNoTradeIn = document.getElementById('no-trade-in')
const comboBrand = document.getElementById('combo-brand')

const btnNoTradeInHandler = () =>{
    comboBrand.classList.toggle('hidden')
    btnNoTradeIn.classList.remove('border-slate-300')
    btnNoTradeIn.classList.add('border-blue-500')
    btnTradeIn.classList.add('border-slate-300')
    btnTradeIn.classList.remove('border-blue-500')
}
const btnTradeInHandler = () =>{
    comboBrand.classList.remove('hidden')
    btnNoTradeIn.classList.add('border-slate-300')
    btnNoTradeIn.classList.remove('border-blue-500')
    btnTradeIn.classList.remove('border-slate-300')
    btnTradeIn.classList.add('border-blue-500')
}

btnNoTradeIn.addEventListener('click', btnNoTradeInHandler)
btnTradeIn.addEventListener('click', btnTradeInHandler)



// Reivew Image Slider
const btnPreSlideReview = document.getElementById('pre-slide-review')
const btnNextSlideReview = document.getElementById('next-slide-review')
const reviewImageContainer = document.querySelector('.review-image-container')
let currentX = 0
const nextSlideReviewHandler = () =>{
    
    remainScrollWidth = reviewImageContainer.scrollWidth - reviewImageContainer.clientWidth
    if (currentX< remainScrollWidth){
        currentX += 300
        reviewImageContainer.scrollLeft = currentX        
        btnPreSlideReview.classList.remove('invisible')
        if(currentX>= remainScrollWidth){
            btnNextSlideReview.classList.add('invisible')
        }
    }
    // reviewImageContainer.classList.toggle('translate-x-[-50%]')
    // btnNextSlideReview.classList.toggle('invisible')
}
const preSlideReviewHandler = () =>{
    if (currentX > 0){
        currentX -= 300
        reviewImageContainer.scrollLeft = currentX        
        btnNextSlideReview.classList.remove('invisible')
        if(currentX <= 0){
            btnPreSlideReview.classList.add('invisible')
        }
    }

}

btnNextSlideReview.addEventListener('click', nextSlideReviewHandler)
btnPreSlideReview.addEventListener('click', preSlideReviewHandler)

const seeAllSpec = document.getElementById('show-all-spec')
const hideAllSpec = document.getElementById('hide-all-spec')
const specContainer = document.getElementById('spec-container')
seeAllSpec.addEventListener("click",seeAllSpecHandler)
hideAllSpec.addEventListener("click",hideAllSpecHandler)

function seeAllSpecHandler (){
    // specContainer.style.maxHeight = '2000px'
    specContainer.classList.toggle('max-h-[2000px]')
    
}

function hideAllSpecHandler () {
    specContainer.classList.toggle('max-h-[2000px]')
}
// Purchase option

const btnOneTime = document.getElementById('btn-one-time')
const btnMontly = document.getElementById('btn-monthly')
const btnInstallment = document.getElementById('btn-installment')
const btnKlarna = document.getElementById('btn-klarna')
const btnAffirm = document.getElementById('btn-affirm')
const cardPurchase = document.querySelectorAll('.card-purchase')
const cardDesc = document.querySelectorAll('.card-desc')
const purchasContainer = document.querySelector('.purchase-container')
const installContainer = document.querySelector('.installment-container')
const rateStars = document.querySelectorAll('.rate-star')



const rateStarHoverHandle = (n) =>{ 
    for (let i = 0; i < rateStars.length; i++){
        if (i <= n){
            rateStars[i].classList.add('bg-orange-300')
        }else{
            rateStars[i].classList.remove('bg-orange-300')
        }
    }
}
const rateStartHoverOutHandle = () =>{
    for (let i = 0; i < rateStars.length; i++){
        rateStars[i].classList.remove('bg-orange-300')
    }
}
for (let i = 0; i < rateStars.length; i++){
    rateStars[i].addEventListener('mouseover', rateStarHoverHandle.bind(null, i))
}
for (let i = 0; i < rateStars.length; i++){
    rateStars[i].addEventListener('mouseleave', rateStartHoverOutHandle)
}

const cardChangeHandler = (n) =>{
    if (n==1 || n == 2){
        purchasContainer.scrollLeft += 100     
    }else{
        purchasContainer.scrollLeft = 0
    }
    for (let i=0; i<3; i++){
        if (i === n){
            cardDesc[n].classList.remove('hidden')
            cardDesc[n].classList.add('flex')
            cardPurchase[n].classList.add('bg-blue-500', 'text-white')
        }else{
            cardPurchase[i].classList.remove('bg-blue-500', 'text-white')
            // cardPurchase[i].classList.add('text-white')
            cardDesc[i].classList.add('hidden')
            cardDesc[i].classList.remove('flex')
        }
    }
}
const cardInstallmentHandler = (n) =>{
    if (n==1) {
        installContainer.scrollLeft += 200
        btnAffirm.classList.remove('border-blue-500')
        btnKlarna.classList.add('border-blue-500')
    }
    else {
        installContainer.scrollLeft = 0
        btnKlarna.classList.remove('border-blue-500')
        btnAffirm.classList.add('border-blue-500')
    }
}

btnOneTime.addEventListener('click', cardChangeHandler.bind(null, 0))
btnMontly.addEventListener('click', cardChangeHandler.bind(null, 1))
btnInstallment.addEventListener('click', cardChangeHandler.bind(null, 2))

btnAffirm.addEventListener('click', cardInstallmentHandler.bind(null, 0))
btnKlarna.addEventListener('click', cardInstallmentHandler.bind(null, 1))

// Modal
const body = document.querySelector('body')
const addModal = document.getElementById('add-modal')
const openModals = document.querySelectorAll('.open-modal')
const backdrop = document.getElementById('backdrop')
const btnCancel = document.getElementById('btn-cancel')
const toggleModal = () =>{
    addModal.classList.toggle('hidden')
    backdrop.classList.toggle('hidden')
    body.classList.toggle('overflow-hidden')
    
}

openModals[0].addEventListener('click', toggleModal)
openModals[1].addEventListener('click', toggleModal)

backdrop.addEventListener('click', toggleModal)
btnCancel.addEventListener('click', toggleModal)

// change image bud color 
const budBlack = document.getElementById('bud-black')
const budWhite = document.getElementById('bud-white')
const budBora = document.getElementById('bud-bora')
const mySlides = document.querySelectorAll('.mySlides')
const demo = document.querySelectorAll('.demo')
const colorContainer = document.querySelectorAll('.color-card')
const imgPaths = {
    black: [
        '/assets/images/product-detail/detail-front-1.jpg',
        '/assets/images/product-detail/detail-01.jpg',       
        '/assets/images/product-detail/detail-02.jpg',       
    ],
    white: [
        '/assets/images/product-detail/bud-white-1.png',
        '/assets/images/product-detail/bud-white-2.png',
        '/assets/images/product-detail/bud-white-3.png',        
    ],
    bora: [
        '/assets/images/product-detail/bud-bora-1.png',
        '/assets/images/product-detail/bud-bora-2.png',
        '/assets/images/product-detail/bud-bora-3.png',        
    ]
}
function changeBudColorsHandler (e){
    colorContainer.forEach(container =>{
        if (container.id === this.id) {
            container.classList.add('border-blue-500')
        }else{
            container.classList.remove('border-blue-500')
        }
})

    if(this.id === 'bud-black'){
        imgPaths.black.forEach((path, i)=>{
            mySlides[i].src = path  
            demo[i].src = path
        })      
    }
    else if(this.id === 'bud-white'){
        imgPaths.white.forEach((path, i)=>{
            mySlides[i].src = path  
            demo[i].src = path
        })
    }
    else{
        imgPaths.bora.forEach((path, i)=>{
            mySlides[i].src = path  
            demo[i].src = path
        })
    }
    
}

budBlack.addEventListener('click', changeBudColorsHandler)
budWhite.addEventListener('click', changeBudColorsHandler)
budBora.addEventListener('click', changeBudColorsHandler)

// See all Spec -> Hide all Spec
// Rotate SVG Script
// function rotateSVG(duration) 

function myFunctionChangeText() {
    var x = document.getElementById("show-all-spec");
    if (x.innerHTML === "SEE ALL SPECS") {
        x.innerHTML = "HIDE ALL SPECS";
    } else {
        x.innerHTML = "SEE ALL SPECS";
    }

    const svgElement = document.querySelectorAll('.rotate-svg');
    svgElement.forEach(svgElement =>{
    svgElement.classList.add('transition-transform', 'duration-[1800ms]', );
    svgElement.classList.toggle('rotate-180');
    });
}

// Prodect-detail
// Related Products carousel

document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('#carouselInner');
    const slides = document.querySelectorAll('.w-full.flex-shrink-0');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateCarousel() {
        const transformValue = -currentSlide * 100;
        carouselInner.style.transform = `translateX(${transformValue}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('bg-gray-400', index === currentSlide);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    updateCarousel();
});

// recently viewed 

document.addEventListener('DOMContentLoaded', function () {
    const carouselInner1 = document.querySelector('#carouselInner1');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator1');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        const transformValue = -currentSlide * slideWidth;
        carouselInner1.style.transform = `translateX(${transformValue}px)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('bg-gray-400', index === currentSlide);
            indicator.classList.toggle('bg-transparent', index !== currentSlide);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    updateCarousel();
});


