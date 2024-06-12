// hero buttons
// define labels for hero buttons
const buttonLabels = [
  "Replace TV Remote",
  "Find My Device",
  "Software/Firmware",
  "TV Screen Mirroring",
  "Reset Ice Maker",
  "User Manual",
  "Download Mobile Apps",
  "Samsung Account Help",
];

// Select the container for hero buttons on large screens
const heroButtonLargeScreen = document.querySelector("#hero-button-lg");

// Populate large screen hero buttons with labels
heroButtonLargeScreen.innerHTML = buttonLabels
  .map(
    (label) => `
    <button class="bg-black bg-opacity-30 rounded-full border border-gray-300 text-[10px] px-2 py-1.5">
        ${label}
    </button>
`,
  )
  .join("");

// Select the container for hero buttons on small screens
const heroButtonSmallScreen = document.querySelector("#hero-button-sm");
const fourButtonLabels = buttonLabels.slice(0, 4);

// Populate small screen hero buttons with labels
heroButtonSmallScreen.innerHTML = fourButtonLabels
  .map(
    (label) => `
    <button class="rounded-full bg-white border border-gray-300 px-2 py-1.5 text-sm font-light">
        ${label}
    </button>
`,
  )
  .join("");


// searchbar dropdown
// Initialize search bar dropdown functionality
const searchBarDropDown = document.getElementById("searchbar-dropdown");
const inputBar = document.getElementById("input-bar");

// Define the dropdown content for search bar
const dropdownContent = `
    <div class="search-dropdown absolute z-10 top-44 min-[427px]:top-36 text-black text-start text-sm w-[min(80vw,30rem)] h-fit bg-white p-5 rounded-b-3xl  mt-0 border border-t-0 shadow-sm">
        <hr class="">  
        <ul class="space-y-3 leading-4 pt-3">
            <li><a href="#">Samsung refrigerator ice dispenser issues</a></li>  
            <li><a href="#">Access the user manual for your Samsung phone</a></li>  
            <li><a href="#">Find a replacement remote control for your Samsung TV</a></li>  
            <li><a href="#">Screen Mirroring to your Samsung TV</a></li>  
            <li><a href="#">Power on your phone in Safe mode</a></li>
            <li><a href="#">Help me find a service center location</a></li>
        </ul>
    </div>
`;

let isDropdownVisible = false;

// Handle click event to toggle search bar dropdown
searchBarDropDown.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!isDropdownVisible) {
    searchBarDropDown.insertAdjacentHTML("afterend", dropdownContent);
    isDropdownVisible = true;
    inputBar.classList.remove("rounded-full");
    inputBar.classList.add("rounded-t-2xl");
  } else {
    closeDropdown();
  }
});

// Close dropdown when clicking outside of it
document.addEventListener("click", (event) => {
  if (!searchBarDropDown.contains(event.target)) {
    closeDropdown();
  }
});

// Function to close the dropdown and reset styles
function closeDropdown() {
  const dropdown = document.querySelector(".search-dropdown");
  if (dropdown) {
    dropdown.remove();
    isDropdownVisible = false;
    inputBar.classList.add("rounded-full");
    inputBar.classList.remove("rounded-t-2xl");
  }
}


// search by product category or choose your product
// Define content for product categories
const productContent = [
  {
    image: "../../assets/images/support/mobile-and-audio.svg",
    text: "Mobile",
    alt: "mobile"
  },
  {
    image: "../../assets/images/support/tv-and-home-audio.svg",
    text: "TVs & Home Audio",
    alt: "tv and home"
  },
  {
    image: "../../assets/images/support/home-appliances.svg",
    text: "Home Appliances",
    alt: "appliances"
  },
  {
    image: "../../assets/images/support/computing.svg",
    text: "Computing",
    alt: "computing"
  },
  {
    image: "../../assets/images/support/camera.svg",
    text: "Camera",
    alt: "camera"
  },
  {
    image: "../../assets/images/support/apps-and-services.svg",
    text: "Apps & Services",
    alt: "apps and services"
  },
];

const chooseProduct = document.getElementById("choose-product");
const productCategory = document.getElementById("product-category");
const chooseProductHeading = document.getElementById("choose-product-heading");

chooseProduct.style.display = "none"; // Hide 'chooseProduct' initially

// Show 'chooseProduct' and hide 'productCategory' on click
document.getElementById("product-category").addEventListener("click", () => {
  productCategory.style.display = "none";
  chooseProduct.style.display = "grid";
  chooseProductHeading.classList.remove("hidden");
});

// Populate 'chooseProduct' with product categories
chooseProduct.innerHTML = productContent
  .map(
    (item) => `
    <div class="col-span-6 md:col-span-2 flex flex-col items-center justify-center size-40 md:size-36 border-2 rounded-xl text-sm gap-2">
        <img class="size-16" src="${item.image}" alt="${item.alt}">
        <span class="font-semibold">${item.text}</span>
    </div>
`,
  )
  .join("");


// find resources
// Define content for resources section
const resourceContent = [
  {
    heading: "Manuals, drivers and software",
    paragraph: "Get the latest drivers, manuals, firmware, and software.",
    link1: "",
    link2: "Learn more",
  },
  {
    heading: "Request repair service",
    paragraph:
      "Arrange for a service visit at home, schedule a walk-in appointment or mail your device in for a repair.",
    link1: "Start repair service",
    link2: "Track service request",
  },
  {
    heading: "Watch how-to videos",
    paragraph:
      "Watch our helpful videos to get the most out of your Samsung products.",
    link1: "",
    link2: "Watch now",
  },
  {
    heading: "Register your product",
    paragraph:
      "Gain access to exclusive offers and perks, apps and services, world-class customer support and more.",
    link1: "",
    link2: "Learn more",
  },
  {
    heading: "Windows update information",
    paragraph:
      "Get all the information you need to update your Samsung PC to the latest version of Windows.",
    link1: "Windows 11",
    link2: "Windows 10",
  },
  {
    heading: "Warranty",
    paragraph: "Register your product and find out what's covered.",
    link1: "",
    link2: "Learn more",
  },
  {
    heading: "Cracked screen? Skip the repairs.",
    paragraph:
      "Trade-in & Upgrade to a Certified Re-Newed Galaxy phone for as low as $250**. Additional 5% applied at cart.",
    link1: "",
    link2: "Shop now",
  },
  {
    heading: "Product simulators",
    paragraph:
      "Use our interactive simulators to walk through select hardware and software features on your device step by step.",
    link1: "",
    link2: "Get Started",
  },
  {
    heading: "Find replacement parts or start a self-repair",
    paragraph:
      "If you're looking for a replacement part, visit Samsung Parts to find what you need. To self-repair a mobile phone or tablet, visit our partner site, iFixit, for step-by-step guides and Samsung genuine parts.",
    link1: "Find parts",
    link2: "Start a self-repair",
  },
];

const findResourceBox = document.getElementById("find-resource-box");

// Populate 'findResourceBox' with resource content
findResourceBox.innerHTML = resourceContent
  .map(
    (item) => `
    <div class="flex flex-col justify-between p-4 col-span-12 md:col-span-4 border rounded-xl gap-10 h-fit md:h-60 md:gap-0 max-w-96 md:max-w-full">
        <div class="space-y-2">
            <p class="text-xl font-semibold">${item.heading}</p>
            <p class="text-sm leading-4">${item.paragraph}</p>
        </div>
        <div class="flex flex-col pt-2 gap-1">
            <a class="underline underline-offset-4 font-bold text-xs" href="#">${item.link1}</a>
            <a class="underline underline-offset-4 font-bold text-xs" href="#">${item.link2}</a>
        </div>
    </div>
`,
  )
  .join("");

  
// carousel
// Define content for carousel
const carouselContent = [
  {
    paragraph1: "Recognized by Newsweek",
    heading: "Best Customer Service 2023 Award",
    paragraph2:
      "We are so grateful to our consumers for voting us to be recognized on Newsweek's America's Best Customer Service list 2023.",
    image: "../../assets/images/support/award-newsweek.png",
    alt: "best service"
  },
  {
    paragraph1: "U.S. Customer Experience Awards 2023",
    heading: "Gold Award Winner",
    paragraph2:
      "Samsung was recognized for Best Digital Customer Experience for providing service via Spanish language SMS support using AI language translation technology and Best Customer Experience Strategy for Samsung Beyond Boundaries, a program that provides customers in rural areas with access to quality repair service.",
    image: "../../assets/images/support/gold-award-winner.png",
    alt: "digital experience"
  },
  {
    paragraph1:
      "Innovation in Customer Service & Best Customer Satisfaction Strategy",
    heading: "Gold Award Winner",
    paragraph2:
      "Samsung Care was recognized with a gold Stevie award for Supporting Consumers via SMS Using AI-Language Translation Technology Award for Innovation in Customer Service and Best Customer Satisfaction Strategy for Samsung Beyond Boundaries, a program that provides customers in rural areas with access to quality repair service.",
    image: "../../assets/images/support/2024-stevie-winner.png",
    alt: "samsung care"
  },
  {
    paragraph1: "ACSI 2023",
    heading: "Ranked #1",
    paragraph2:
      "American Customer Satisfaction Index Survey has ranked Samsung #1 for: Home Appliances in Overall Service Experience1 and TV in Overall Quality2.",
    image: "../../assets/images/support/acsi.png",
    alt: "customer satisfaction"
  },
  {
    paragraph1: "Best Customer Experience Strategy - Over 10,000 Employees",
    heading: "Gold Award Winner",
    paragraph2:
      "For the second year in a row, Samsung Electronics America has been given a GOLD award in the International Customer Experience Awards. Samsung is recognized for developing and implementing a customer experience strategy intended to provide customers in rural areas with access to quality Samsung care for their TVs and home appliances through its “Samsung Beyond Boundaries” project.",
    image: "../../assets/images/support/icxa2023.png",
    alt: "samsung electronics"
  },
];

const carouselContainer = document.getElementById("carousel-container");
const carouselButtonsContainer = document.getElementById("carousel-buttons");

// Populate carousel container with slides
carouselContainer.innerHTML = carouselContent
  .map(
    (item, index) => `
    <div class="w-96 md:w-full bg-gray-200 h-[580px] md:h-96 rounded-2xl flex flex-col md:flex-row md:justify-between ${index === 0 ? "block" : "hidden"}">
        <div class="m-auto px-10">
            <p class="text-sm font-bold">${item.paragraph1}</p>
            <p class="text-4xl font-semibold">${item.heading}</p>
            <p class="text-xs">${item.paragraph2}</p>
        </div>
        <img class="w-fit h-fit md:w-[420px] md:h-96" src="${item.image}" alt="${item.alt}">
    </div>
`,
  )
  .join("");

// Populate carousel buttons container
carouselButtonsContainer.innerHTML = carouselContent
  .map(
    (_, index) => `
        <button class="w-2 h-2 rounded-full mx-1 ${index === 0 ? "bg-gray-500" : "bg-gray-200"} focus:outline-none"></button>
`,
  )
  .join("");

let currentSlide = 0;
const slides = carouselContainer.children;
const totalSlides = slides.length;
const buttons = carouselButtonsContainer.children;

// Function to show the specified slide
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  slides[index].classList.remove("hidden");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("bg-gray-500");
    buttons[i].classList.add("bg-gray-200");
  }
  buttons[index].classList.add("bg-gray-500");
}

// Function to show the next slide in the carousel
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Automatically cycle through slides every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Add event listeners to carousel buttons for manual navigation
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    clearInterval(slideInterval);
    currentSlide = i;
    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 5000);
  });
}
