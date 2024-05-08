import { NavBar } from './components/navbar.js';
import { Footer } from './components/footer.js';
import { Chat } from './components/chat.js';
import { Feedback } from './components/feedback.js'


customElements.define("navbar-component", NavBar);
customElements.define("footer-component", Footer);

customElements.define("chat-component", Chat);
customElements.define("feedback-component", Feedback);
