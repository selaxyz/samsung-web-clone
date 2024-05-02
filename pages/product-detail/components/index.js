
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
    console.log(slides);
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


// Accordion JS
const accordionElement = document.getElementById('accordion-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems = [
    {
        id: 'accordion-example-heading-1',
        triggerEl: document.querySelector('#accordion-example-heading-1'),
        targetEl: document.querySelector('#accordion-example-body-1'),
        active: true
    },
    {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-example-heading-2'),
        targetEl: document.querySelector('#accordion-example-body-2'),
        active: false
    },
    {
        id: 'accordion-example-heading-3',
        triggerEl: document.querySelector('#accordion-example-heading-3'),
        targetEl: document.querySelector('#accordion-example-body-3'),
        active: false
    }
];

// options with default values
const options = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};

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
const reviewImageContainer = document.getElementById('review-image-container')
const nextSlideReviewHandler = () =>{
    reviewImageContainer.classList.toggle('translate-x-[-50%]')
    btnNextSlideReview.classList.toggle('invisible')
    btnPreSlideReview.classList.toggle('invisible')
}
const preSlideReviewHandler = () =>{
    reviewImageContainer.classList.toggle('translate-x-[-50%]')
    btnNextSlideReview.classList.toggle('invisible')
    btnPreSlideReview.classList.toggle('invisible')
}

btnNextSlideReview.addEventListener('click', nextSlideReviewHandler)
btnPreSlideReview.addEventListener('click', preSlideReviewHandler)

// instance options object
// const instanceOptions = {
//     id: 'accordion-example',
//     override: true
// };

// import { Accordion } from 'flowbite';

// const accordion = new Accordion(accordionElement, accordionItems, options, instanceOptions);

// // open accordion item based on id
// accordion.open('accordion-example-heading-2');

// // close accordion item based on id
// accordion.close('accordion-example-heading-2');

// // toggle visibility of item based on id
// accordion.toggle('accordion-example-heading-3');


const seeAllSpec = document.getElementById('show-all-spec')
const hideAllSpec = document.getElementById('hide-all-spec')
const specContainer = document.getElementById('spec-container')
seeAllSpec.addEventListener("click",seeAllSpecHandler)
hideAllSpec.addEventListener("click",hideAllSpecHandler)
console.log(seeAllSpec);

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
const cardPurchase = document.querySelectorAll('.card-purchase')
const cardDesc = document.querySelectorAll('.card-desc')
// btnOneTime.addEventListener('click', ()=>{
//     for (let i=0; i<3; i++){
//         if (i === 0){
//             cardDesc[0].classList.remove('hidden')
//         }else{
//             cardDesc[i].classList.add('hidden')
//         }

//     }
// })
// btnOneTime.addEventListener('click', ()=>{
//     for (let i=0; i<3; i++){
//         if (i === 0){
//             cardDesc[0].classList.remove('hidden')
//         }else{
//             cardDesc[i].classList.add('hidden')
//         }

//     }
// })