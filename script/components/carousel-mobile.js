/**
 * Custom HTML element representing a mobile carousel.
 *
 * @export
 * @class CarouselMobile
 * @extends {HTMLElement}
 */
export class CarouselMobile extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const section = this.getAttribute('section')
        let carosuelData = []
        if (section === 'connected') {
            carosuelData = this.connectedData
        } else if (section === 'bud-product') {
            carosuelData = this.budsProduct
        }
        else if (section === 'tablet-product') {
            carosuelData = this.tabletsProduct
        }
        else if (section === 'galaxy-z-product') {
            carosuelData = this.galaxyzProduct
        }
        else if (section === 'galaxy-s-product') {
            carosuelData = this.galaxysProducts
        }
        else {
            carosuelData = this.featureData
        }
        const favMobileContainer = document.createElement('div')
        const carouselContainer = document.createElement('div')
        carouselContainer.classList += ' carousel-container overflow-x-hidden'


        carosuelData.forEach(data => {
            const cardHTML = `
            <div class="slide flex min-w-full flex-col items-center mb-6">
                <img
                class="w-10/12 rounded-xl" 
                src="${data.imgSrc}"
                alt="feature"
                />
                
                <div class="flex flex-col gap-4 items-center mt-8">
                  <h3 class="text-xl font-bold">${data.title}</h3>
                  ${data.desc != undefined ? `<p class="w-10/12 mx-auto text-center">${data.desc}</p>` : ""}
                  <button class="border-b-2 border-black font-bold">Learn more</button>
                </div>
            </div>
            `;

            favMobileContainer.innerHTML += cardHTML;
        })
        carouselContainer.append(favMobileContainer)
        this.append(carouselContainer)
        favMobileContainer.classList.add("fav-container-mobile", "flex", "md:hidden", "flex", "transition-transform", "duration-500")


        // indicator

        const indicatorHandler = (i) => {
            const btnIndicators = indicatorContainer.querySelectorAll('button')
            favMobileContainer.style.transform = `translateX(-${i * 100}%)`
            btnIndicators.forEach(btnIndicator => {
                btnIndicator.classList.remove('bg-black')
                btnIndicator.classList.add('bg-gray-500')
            })
            btnIndicators[i].classList.remove('bg-gray-500')
            btnIndicators[i].classList.add('bg-black')
        }

        const slideLength = carouselContainer.querySelectorAll('.slide').length
        const indicatorContainer = document.createElement('div')
        for (let i = 0; i < slideLength; i++) {
            const btnIndicator = document.createElement('button')
            btnIndicator.classList += ` btn-slide mx-3 size-3 rounded-full`
            if (i === 0) btnIndicator.classList.add('bg-black')
            else btnIndicator.classList.add('bg-gray-500')
            indicatorContainer.append(btnIndicator)
            btnIndicator.addEventListener('click', () => indicatorHandler(i))
        }
        indicatorContainer.classList += "md:hidden w-fit mx-auto flex rounded-full border border-gray-300 bg-white opacity-80 py-2"

        this.append(indicatorContainer)
        this.classList.add("block")

    }
    featureData = [
        {
            title: "Galaxy AI",
            imgSrc: "../../assets/images/smartphone/feat-1.jpg",
            desc: "Unleash astounding new ways to create and connect."
        },
        {
            title: "Galaxy AI",
            imgSrc: "../../assets/images/smartphone/feat-2.jpg",
            desc: "Crystal-clear content. Stunning details. True-to-life color. With Galaxy S24 Series cameras, what you see is what you get.",
        },
        {
            title: "Galaxy AI",
            imgSrc: "../../assets/images/smartphone/feat-3.jpg",
            desc: "The Galaxy S24 Series is an absolute marvel of design with bigger displays, ultra-slim bezels and unique colors inspired by nature."
        },
        {
            title: "Galaxy AI",
            imgSrc: "../../assets/images/smartphone/feat-4.jpg",
            desc: "Blazing-fast processors and a new heat dissipation system gives you all the power you need for all the gameplay you want."
        },
        {
            title: "Galaxy AI",
            imgSrc: "../../assets/images/smartphone/feat-5.jpg",
            desc: "Switch phone numbers, travel stress-free and more with Galaxy eSIM and Dual SIM capabilities."
        },
    ]
    connectedData = [
        {
            title: "Call/Text from any device",
            imgSrc: "../../assets/images/smartphone/connect-1.jpg",
            desc: "Never miss an important message again. Call and text across your phone, tablet, watch and PC."
        },
        {
            title: "Quick Share large files",
            imgSrc: "../../assets/images/smartphone/connect-2.jpg",
            desc: "No more emailing files to yourself. Directly share large files between nearby devices with just a few taps.",
        },
        {
            title: "Upgraded video calls",
            imgSrc: "../../assets/images/smartphone/connect-3.jpg",
            desc: "Want more space to connect face-to-face? Transfer Google duo video calls from phone to laptop or tablet. "
        }
    ]
    budsProduct = [
        {
            title: "Galaxy Buds2 Pro",
            imgSrc: "../../assets/images/galaxy-ai/bud-1.png",

        },
        {
            title: "Galaxy Buds FE",
            imgSrc: "../../assets/images/galaxy-ai/bud-2.png",

        },

    ]
    tabletsProduct = [
        {
            title: "Galaxy Tab S9 Ultra",
            imgSrc: "../../assets/images/galaxy-ai/tablet.png",

        },
        {
            title: "Galaxy Tab S9+",
            imgSrc: "../../assets/images/galaxy-ai/tablet.png",

        },
        {
            title: "Galaxy Tab S9",
            imgSrc: "../../assets/images/galaxy-ai/tablet.png",

        },

    ]
    galaxyzProduct = [
        {
            title: "Galaxy Z Flip5",
            imgSrc: "../../assets/images/galaxy-ai/galaxy-z-series-01.png",

        },
        {
            title: "Galaxy Z Fold5",
            imgSrc: "../../assets/images/galaxy-ai/galaxy-z-series-02.png",

        },
    ]
    galaxysProducts = [
        {
            title: "Galaxy S24 Ultra",
            imgSrc: "../../assets/images/galaxy-ai/galaxy-s-series-01.png",
     
        },
        {
            title: "Galaxy S24 | S24+",
            imgSrc: "../../assets/images/galaxy-ai/galaxy-s-series-02.png",
    
        },
        {
            title: "Galaxy S23 Ultra",
            imgSrc: "../../assets/images/galaxy-ai/galaxy-s-series-03.png",
    
        },
        {
            title: "Galaxy S23 | S23+",
            imgSrc: "../../assets/images/galaxy-ai/galaxy-s-series-04.png",
       
        },
        {
            title: "Galaxy S23 | FE",
            imgSrc: "../../assets/images/galaxy-ai/galaxy-s-series-05.png",
    
        }
    ]

}
/**
 * Create and append button indicators for the carousel.
 * 
 * @param {HTMLElement} indicatorContainer - The container to append the indicators to.
 * @returns {void}
 */
function createButtonIndicator(indicatorContainer) {
  const slideLength = favContainer.querySelectorAll(".slide").length;

  for (let i = 0; i < slideLength; i++) {
    const btnIndicator = document.createElement("button");
    btnIndicator.classList += `btn-slide mx-3 size-3 rounded-full bg-gray-500`;
    indicatorContainer.append(btnIndicator);
  }
  indicatorContainer.classList +=
    " w-fit mx-auto flex rounded-full border border-gray-300 bg-white opacity-80 py-2";
}

customElements.define("carousel-mobile", CarouselMobile);
