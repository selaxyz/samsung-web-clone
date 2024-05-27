import { NavBar } from './components/navbar.js';
import { Footer } from './components/footer.js';
import { Feedback } from './components/feedback.js'
import { CarouselMobile } from './components/carousel-mobile.js';

customElements.define("navbar-component", NavBar);
customElements.define("footer-component", Footer);
customElements.define("feedback-component", Feedback);
customElements.define("carousel-mobile", CarouselMobile);
