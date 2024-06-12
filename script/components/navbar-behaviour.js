/**
 * JavaScript code for handling navigation interactions.
 * 
 * This script handles navigation interactions for both regular and small screen views.
 * It toggles visibility and positions for navigation elements on small screens and handles hover effects on larger screens.
 * 
 * @type {Element} navLinks - Selects the main navigation links container.
 * @type {Element} subNavLinks - Selects the sub-navigation links container.
 * @type {Element} smallSubNavLinkLayer - Selects the container for small screen sub-navigation links.
 * @type {Element} smallSubNavLink - Selects the sub-navigation links for small screens.
 * @type {Element} smallNavLink - Selects the main navigation links for small screens.
 * 
 * @function onSmallNavLinkClick - Handles click events on small screen navigation links. Toggles visibility and positioning of the small screen navigation elements.
 * @param {Event} e - The click event.
 * 
 * @function onNavItemOver - Handles mouse over events on navigation items. Expands the navigation links to full viewport height.
 * @param {Event} e - The mouse over event.
 * 
 * @function onNavItemLeave - Handles mouse leave events on navigation items. Collapses the navigation links from full viewport height.
 * @param {Event} e - The mouse leave event.
 * 
 * Adds event listeners for mouse over and mouse leave on sub-navigation links.
 */


const navLinks = document.querySelector(".nav-link");
const subNavLinks = document.querySelector(".sub-nav-link");

const smallSubNavLinkLayer = document.querySelector(".small-nav-link-layer");
const smallSubNavLink = document.querySelector(".small-sub-nav-link");
const smallNavLink = document.querySelector(".small-nav-link");

function onSmallNavLinkClick(e) {
  smallSubNavLinkLayer.classList.toggle("opacity-100");
  smallNavLink.classList.toggle("w-screen");
  smallNavLink.classList.toggle("right-0");
  smallSubNavLink.classList.toggle("right-0");
  smallSubNavLink.classList.toggle("right-[-500px]");
  document.querySelector("body").classList.toggle("fixed");
}

function onNavItemOver(e) {
  navLinks.classList.add("h-dvh");
}
function onNavItemLeave(e) {
  navLinks.classList.remove("h-dvh");
}
subNavLinks.addEventListener("mouseover", onNavItemOver);
subNavLinks.addEventListener("mouseleave", onNavItemLeave);
