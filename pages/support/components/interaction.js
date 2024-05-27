// hero buttons
const buttonLabels = [
    'Replace TV Remote',
    'Find My Device',
    'Software/Firmware',
    'TV Screen Mirroring',
    'Reset Ice Maker',
    'User Manual',
    'Download Mobile Apps',
    'Samsung Account Help'
]

const heroButtonLargeScreen = document.querySelector('#hero-button-lg');

heroButtonLargeScreen.innerHTML = buttonLabels.map(label => `
    <button class="bg-black bg-opacity-30 rounded-full border border-gray-300 text-[10px] px-2 py-1.5">
        ${label}
    </button>
`).join('');

const heroButtonSmallScreen = document.querySelector('#hero-button-sm');
const fourButtonLabels = buttonLabels.slice(0, 4);
heroButtonSmallScreen.innerHTML = fourButtonLabels.map(label => `
    <button class=" rounded-full border border-gray-300 px-2 py-1.5 text-sm font-light">
        ${label}
    </button>
`).join('');



// searchbar dropdown
const searchBarDropDown = document.getElementById('searchbar-dropdown');
const inputBar = document.getElementById('input-bar')
const dropdownContent = `
    <div class="search-dropdown absolute md:top-36 top-44 text-black text-start text-sm w-72 sm:w-[500px] h-fit bg-white p-5 rounded-b-3xl space-y-3 leading-4 mt-0 border border-t-0 shadow-sm">
    <hr class="px-5 mt-0">    
    <p>Samsung refrigerator ice dispenser issues</p>
        <p>Access the user manual for your Samsung phone</p>
        <p>Find a replacement remote control for your Samsung TV</p>
        <p>Screen Mirroring to your Samsung TV</p>
        <p>Power on your phone in Safe mode</p>
        <p>Help me find a service center location</p>
    </div>
`;

let isDropdownVisible = false;

searchBarDropDown.addEventListener('click', (event) => {
    event.stopPropagation(); 
    if (!isDropdownVisible) {
        searchBarDropDown.insertAdjacentHTML('afterend', dropdownContent);
        isDropdownVisible = true;
        inputBar.classList.remove('rounded-full')
        inputBar.classList.add('rounded-t-2xl')
    } else {
        closeDropdown();
    }
});

document.addEventListener('click', (event) => {
    if (!searchBarDropDown.contains(event.target)) {
        closeDropdown();
    }
});

function closeDropdown() {
    const dropdown = document.querySelector('.search-dropdown');
    if (dropdown) {
        dropdown.remove();
        isDropdownVisible = false;
        inputBar.classList.add('rounded-full')
        inputBar.classList.remove('rounded-t-2xl')
    }
};


// search by product category / choose your product
const productContent = [
    {
        image: "../../assets/images/support/mobile-and-audio.svg",
        text: "Mobile"
    },
    {
        image: "../../assets/images/support/tv-and-home-audio.svg",
        text: "TVs & Home Audio"
    },
    {
        image: "../../assets/images/support/home-appliances.svg",
        text: "Home Appliances"
    },
    {
        image: "../../assets/images/support/computing.svg",
        text: "Computing"
    },
    {
        image: "../../assets/images/support/camera.svg",
        text: "Camera"
    },
    {
        image: "../../assets/images/support/apps-and-services.svg",
        text: "Apps & Services"
    },
]

const chooseProduct = document.getElementById('choose-product');
const productCategory = document.getElementById('product-category');
const chooseProductHeading = document.getElementById('choose-product-heading');

chooseProduct.style.display = 'none'; 

document.getElementById('product-category').addEventListener('click', () => {
    productCategory.style.display = 'none'; 
    chooseProduct.style.display = 'grid'; 
    chooseProductHeading.classList.remove('hidden');
});

chooseProduct.innerHTML = productContent.map(item => `
    <div class="col-span-6 md:col-span-2 flex flex-col items-center justify-center size-40 md:size-36 border-2 rounded-xl text-sm gap-2">
        <img class="size-16" src="${item.image}" alt="">
        <span class="font-semibold">${item.text}</span>
    </div>
`).join('');



// find resources
const resourceContent = [
    {
        heading: "Manuals, drivers and software",
        paragraph: "Get the latest drivers, manuals, firmware, and software.",
        link1: "",
        link2: "Learn more"
    },
    {
        heading: "Request repair service",
        paragraph: "Arrange for a service visit at home, schedule a walk-in appointment or mail your device in for a repair.",
        link1: "Start repair service",
        link2: "Track service request"
    },
    {
        heading: "Watch how-to videos",
        paragraph: "Watch our helpful videos to get the most out of your Samsung products.",
        link1: "",
        link2: "Watch now"
    },
    {
        heading: "Register your product",
        paragraph: "Gain access to exclusive offers and perks, apps and services, world-class customer support and more.",
        link1: "",
        link2: "Learn more"
    },
    {
        heading: "Windows update information",
        paragraph: "Get all the information you need to update your Samsung PC to the latest version of Windows.",
        link1: "Windows 11",
        link2: "Windows 10"
    },
    {
        heading: "Warranty",
        paragraph: "Register your product and find out what's covered.",
        link1: "",
        link2: "Learn more"
    },
    {
        heading: "Cracked screen? Skip the repairs.",
        paragraph: "Trade-in & Upgrade to a Certified Re-Newed Galaxy phone for as low as $250**. Additional 5% applied at cart.",
        link1: "",
        link2: "Shop now"
    },
    {
        heading: "Product simulators",
        paragraph: "Use our interactive simulators to walk through select hardware and software features on your device step by step.",
        link1: "",
        link2: "Get Started"
    },
    {
        heading: "Find replacement parts or start a self-repair",
        paragraph: "If you're looking for a replacement part, visit Samsung Parts to find what you need. To self-repair a mobile phone or tablet, visit our partner site, iFixit, for step-by-step guides and Samsung genuine parts.",
        link1: "Find parts",
        link2: "Start a self-repair"
    }
]

const findResourceBox = document.getElementById('find-resource-box');

findResourceBox.innerHTML = resourceContent.map(item => `
    <div class="flex flex-col justify-between p-4 col-span-12 md:col-span-4 border rounded-xl h-56 w-96 md:w-full">
        <div class="space-y-2">
            <p class="text-xl font-semibold">${item.heading}</p>
            <p class="text-sm leading-4">${item.paragraph}</p>
        </div>
        <div class="flex flex-col pt-2 gap-1">
            <a class="underline font-bold text-xs" href="#">${item.link1}</a>
            <a class="underline font-bold text-xs" href="#">${item.link2}</a>
        </div>
    </div>
`).join('')

// carousel
const carouselContent = [
    {
        paragraph1: "Recognized by Newsweek",
        heading: "Best Customer Service 2023 Award",
        paragraph2: "We are so grateful to our consumers for voting us to be recognized on Newsweek's America's Best Customer Service list 2023.",
        image: "../../assets/images/support/award-newsweek.png"
    },
    {
        paragraph1: "U.S. Customer Experience Awards 2023",
        heading: "Gold Award Winner",
        paragraph2: "Samsung was recognized for Best Digital Customer Experience for providing service via Spanish language SMS support using AI language translation technology and Best Customer Experience Strategy for Samsung Beyond Boundaries, a program that provides customers in rural areas with access to quality repair service.",
        image: "../../assets/images/support/gold-award-winner.png"
    },
    {
        paragraph1: "Innovation in Customer Service & Best Customer Satisfaction Strategy",
        heading: "Gold Award Winner",
        paragraph2: "Samsung Care was recognized with a gold Stevie award for Supporting Consumers via SMS Using AI-Language Translation Technology Award for Innovation in Customer Service and Best Customer Satisfaction Strategy for Samsung Beyond Boundaries, a program that provides customers in rural areas with access to quality repair service.",
        image: "../../assets/images/support/2024-stevie-winner.png"
    },
    {
        paragraph1: "ACSI 2023",
        heading: "Ranked #1",
        paragraph2: "American Customer Satisfaction Index Survey has ranked Samsung #1 for: Home Appliances in Overall Service Experience1 and TV in Overall Quality2.",
        image: "../../assets/images/support/acsi.png"
    },
    {
        paragraph1: "Best Customer Experience Strategy - Over 10,000 Employees",
        heading: "Gold Award Winner",
        paragraph2: "For the second year in a row, Samsung Electronics America has been given a GOLD award in the International Customer Experience Awards. Samsung is recognized for developing and implementing a customer experience strategy intended to provide customers in rural areas with access to quality Samsung care for their TVs and home appliances through its “Samsung Beyond Boundaries” project.",
        image: "../../assets/images/support/icxa2023.png"
    },
]


const carouselContainer = document.getElementById('carousel-container');
const carouselButtonsContainer = document.getElementById('carousel-buttons');

carouselContainer.innerHTML = carouselContent.map((item, index) => `
    <div class="w-96 md:w-full bg-gray-200 h-[580px] md:h-96 rounded-2xl flex flex-col md:flex-row md:justify-between ${index === 0 ? 'block' : 'hidden'}">
        <div class="m-auto px-10">
            <p class="text-sm font-bold">${item.paragraph1}</p>
            <p class="text-4xl font-semibold">${item.heading}</p>
            <p class="text-xs">${item.paragraph2}</p>
        </div>
        <img class="w-fit h-fit md:w-[420px] md:h-96" src="${item.image}" alt="">
    </div>
`).join('');

carouselButtonsContainer.innerHTML = carouselContent.map((_, index) => `
        <button class="w-2 h-2 rounded-full mx-1 ${index === 0 ? 'bg-gray-500' : 'bg-gray-200'} focus:outline-none"></button>
`).join('');

let currentSlide = 0;
const slides = carouselContainer.children;
const totalSlides = slides.length;
const buttons = carouselButtonsContainer.children;

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    slides[index].classList.remove('hidden');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('bg-gray-500');
        buttons[i].classList.add('bg-gray-200');
    }
    buttons[index].classList.add('bg-gray-500');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

let slideInterval = setInterval(nextSlide, 5000); 


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        clearInterval(slideInterval);
        currentSlide = i;
        showSlide(currentSlide);
        slideInterval = setInterval(nextSlide, 5000); 
    });
}