class MyElement extends HTMLElement {
    constructor() {
        super();
        this.carouselItems = null; 
        this.button = null; 
    }

    connectedCallback() {
        const dataArray = JSON.parse(this.getAttribute('data-array'));

        this.className = 'carousel relative overflow-hidden  md:left-0 flex w-screen flex-col md:flex-row items-center md:max-w-[1440px] border-transparent';

        this.carouselItems = document.createElement('div'); 
        this.carouselItems.className =
          "carouselItems flex transition-transform translate-x-0 duration-500";

        dataArray.forEach(data => {
            const element = document.createElement('div');
            element.classList.add('carousel__item', 'flex', 'flex-col', 'w-screen', 'md:w-[60%]', 'md:border-l-[24px]', 'border-transparent', 'justify-center', 'items-center', 'p-10', 'space-y-2');
            element.innerHTML = `
                <img class="image w-80 md:w-[250px] my-24" src="${data.src}" alt="Dynamic Image">
                <h3 class="title text-3xl font-medium ">${data.title}</h3>
                <p class="text-[18px] font-light text-center mb-10 pb-11 pt-5">${data.text}</p>
                    
                <p class="flex align-self-end pb-1 border-b-[1.5px] pt-16 border-black font-semibold text-base md:text-[20px]"><a href='#'>LEARN MORE</a></p>
            `;
            this.carouselItems.appendChild(element);
        });

        this.appendChild(this.carouselItems);

        const nav = document.createElement('div');
        nav.className = 'carousel__nav w-full p-5 absolute bottom-[37%] text-center';
        dataArray.forEach((_, index) => {
            const button = document.createElement('span');
            button.classList.add('carousel__button', 'md:hidden', 'w-2.5', 'h-2.5', 'inline-block', 'bg-black', 'bg-opacity-20', 'rounded-full', 'mx-3', 'cursor-pointer');
            button.dataset.slide = index;
            if (index === 0) {
                button.classList.add("bg-opacity-50"); 
            }
            nav.appendChild(button);
        });
        this.appendChild(nav);

        window.addEventListener('resize', () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 768) {
                this.carouselItems.style.transform = 'translateX(0)';
                
                buttons.forEach(btn => btn.classList.remove('bg-opacity-50'));
                const indexZeroButton = document.querySelector('.carousel__button[data-slide="0"]')
                if (indexZeroButton) {
                    indexZeroButton.classList.add('bg-opacity-50');
                }
            }
        });

        const buttons = this.querySelectorAll('.carousel__button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const slideIndex = parseInt(button.dataset.slide);
                const offset = -(slideIndex * 100);
                this.carouselItems.style.transform = `translateX(${offset / 3 + 33.3}%)`;

                buttons.forEach(btn => btn.classList.remove('bg-opacity-50'));
                button.classList.add('bg-opacity-50');
            });
        });

        
        window.addEventListener("resize", () => {
            const screenWidth = window.innerWidth;
            const initialOffset = screenWidth <= 768 ? 33.3 : 0;
            const activeButton = document.querySelector('.carousel__button.bg-opacity-50');
            const slideIndex = activeButton ? parseInt(activeButton.dataset.slide) : 0;
            const offset = -(slideIndex * 100);
            this.carouselItems.style.transform = `translateX(${offset / 3 + initialOffset}%)`;
        });

        // Set initial offset based on screen size
        const screenWidth = window.innerWidth;
        const initialOffset = screenWidth <= 768 ? 33.3 : 0;
        this.carouselItems.style.transform = `translateX(${initialOffset}%)`;
    }
}

customElements.define('benefit-app', MyElement);

    const appInfo1 = [
        { src: '../../assets/images/account-benefit/rewards-icon.png', title: 'Samsung Rewards', text: 'Earn rewards for the things you do every day.' },
        { src: '../../assets/images/account-benefit/galaxy-store-icon.png', title: 'Galaxy Store', text: 'Play the latest games, unlock ultimate exclusives and score the best offers.' },
        { src: '../../assets/images/account-benefit/samsung-pay-icon.png', title: 'Samsung Pay', text: "Use the most rewarding mobile wallet. Just tap and go for easy payment." }
    ];

    const appInfo2 = [
        { src: '../../assets/images/account-benefit/health-app-icon.png', title: 'Samsung Health', text: 'Achieve wellness your way with free and premium content and features.' },
        { src: '../../assets/images/account-benefit/samsung-Members.png', title: 'Samsung Members', text: 'Get more out of your Galaxy' },
        { src: '../../assets/images/account-benefit/samsung-tvplus-icon.png', title: 'Samsung TV Plus', text: "Watch over 135 channels of free LIVE and on-demand TV." }
    ];

    const benefitInfo = [
        { src: '../../assets/images/account-benefit/tv-benefit-1.jpg', title: 'Connect with your mobile.', text: 'Control your TV and enjoy services with the SmartThings app on your mobile.' },
        { src: '../../assets/images/account-benefit/tv-benefit-2.jpg', title: 'Set up Samsung TVs automatically.', text: 'Easily restore your TV data on new or existing Samsung TVs.' },
        { src: '../../assets/images/account-benefit/tv-benefit-3.jpg', title: 'Download TV apps.', text: "Access a wide range of new apps and updates from Smart Hub." }
    ];
    
    const createAndAppendElement = (data, containerId) => {
        const element = document.createElement('benefit-app');
        element.setAttribute('data-array', JSON.stringify(data)); 
        document.getElementById(containerId).appendChild(element);
    };
    
    createAndAppendElement(appInfo1, 'group1-samsung-app');
    createAndAppendElement(appInfo2, 'group2-samsung-app');
    createAndAppendElement(benefitInfo, 'group-benefit-info');
    
    const carouselItemsList = document.querySelectorAll('.carouselItems');


