let slideIndex = 1;
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
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++){
                // slides[i].style.display = "none";
                slides[i].style.opacity = "1"
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");                
            }
            // slides[slideIndex-1].style.display = "block";
            // slides[slideIndex-1].style.opacity = "1";
            console.log(imgContainer);
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

// instance options object
const instanceOptions = {
    id: 'accordion-example',
    override: true
};

import { Accordion } from 'flowbite';

const accordion = new Accordion(accordionElement, accordionItems, options, instanceOptions);

// open accordion item based on id
accordion.open('accordion-example-heading-2');

// close accordion item based on id
accordion.close('accordion-example-heading-2');

// toggle visibility of item based on id
accordion.toggle('accordion-example-heading-3');