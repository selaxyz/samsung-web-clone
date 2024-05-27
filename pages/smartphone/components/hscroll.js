const categoryInfo = [
    { src: '/assets/images/smartphone/hscroll-1.jpg', title: 'Tablets' },
    { src: '/assets/images/smartphone/hscroll-2.jpg', title: 'Galaxy Books' },
    { src: '/assets/images/smartphone/hscroll-3.jpg', title: 'Watches' },
    { src: '/assets/images/smartphone/hscroll-4.jpg', title: 'Galaxy Buds' },
    { src: '/assets/images/smartphone/hscroll-5.jpg', title: 'Accessories' },
    
];

class GalaxyBeyond extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.className = 'flex items-center hscroll-item';
        categoryInfo.forEach(data => {
            const element = document.createElement('div');
            element.className = ' flex flex-shrink-0 text-center text-3xl font-semibold mx-5 w-[25%]';
            element.innerHTML = `
                <a href="#">
                    <img class="pb-5 " src="${data.src}" >
                    <span>${data.title}</span>
                </a>
            `;
            this.append(element);
        });
    }
}
customElements.define('catergory-hscroll' , GalaxyBeyond);


// script.js
let hscrollContainer = document.getElementById('hscroll-container');
console.log(hscrollContainer)

// script.js

// Function to add custom scrollbar styles to a specific element by ID
function customizeScrollbar(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return; // Check if the element exists

    const style = document.createElement('style');
    style.textContent = `
        /* Customize scrollbar for the specified element */
        #${elementId}::-webkit-scrollbar {
            height: 7px; /* Set scrollbar width */
        }
        #${elementId}::-webkit-scrollbar-track {
            background-color: #9F9F9F; /* Track color */
            border-radius: 1px; /* Track border radius */
        }
        #${elementId}::-webkit-scrollbar-thumb {
            background-color: #575757 ; /* Thumb color */
            border-radius: 1px; /* Thumb border radius */
        }
    `;
    document.head.appendChild(style);

    // Apply touch-action directly to the element for touch scrolling
    element.style.touchAction = 'pan-x';
}

// Call the function to apply custom scrollbar styles and enable touch scrolling
customizeScrollbar('hscroll-container');

