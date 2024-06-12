// Array containing labels for hero buttons
const buttonLabels = [
  "Galaxy S24 Ultra",
  "Galaxy Z Flip5",
  "The Frame",
  "QLED 8K",
  "BESPOKE Jet",
  "BESPOKE Refrigerator",
  "Accessories",
];

// Selecting the element with id 'hero-button-lg' to display hero buttons on large screens
const heroButtonLargeScreen = document.querySelector("#hero-button-lg");

// Setting inner HTML of 'heroButtonLargeScreen' element with buttons generated from 'buttonLabels' array
heroButtonLargeScreen.innerHTML = buttonLabels
  .map(
    (label) => `
    <button class=" rounded-full border border-gray-300  px-6  py-3">
        ${label}
    </button>
    
`,
  )
  .join("");
