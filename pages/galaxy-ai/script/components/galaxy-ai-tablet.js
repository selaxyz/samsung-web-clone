export class GalaxyAiTablet extends HTMLElement {
    connectedCallback() {
        const { items, headerText, tabs } = {
            headerText: "Galaxy AI for Tablets",
            items: [
                {
                    title: "Note Assist makes a long story short",
                    description:
                        "Start writing and let Note Assist do the work of summarizing, formatting, translating and organizing your notes.From information overload to searchable summary, just like that",
                    largeImage: "../../assets/images/galaxy-ai/note-assist-1.png",
                    smallImage: "../../assets/images/home/tv/frame-small.png",
                },
                {
                    title: "TV made for mobile",
                    description:
                        "Faviorite TV content in both landscape or portrait mode. Save up to $200 on a 43 Class The Sero QLED 4K (2022).",
                    largeImage: "../../assets/images/home/tv/phone-big.jpeg",
                    smallImage: "../../assets/images/home/tv/phone-small.jpeg",
                },
                {
                    title: "Compact design, captivating sound",
                    description:
                        "Powerful Dolby Atmos sound in an impressively slender package. Shop our Ultra Slim Soundbar.",
                    largeImage: "../../assets/images/home/tv/sound-big.jpeg",
                    smallImage: "../../assets/images/home/tv/sound-small.avif",
                },
            ],
            tabs: ["Note Assist", "Photo Assist", "Transcript Assist"],
        }; // Unpacking Data

        this.innerHTML = `
    <section class="carousel max-w-screen-2xl">
        <div class="carousel-container relative">
            <div class="flex overflow-hidden gap-4">
                <div id="carousel-inner-container" class="flex transition-transform duration-500">
                    ${items
                .map(
                    (item) => `
                        <div class="item w-full h-full relative flex-none text-white">
                            <img class="hidden sm:block flex-none w-full" src="${item.largeImage}" alt="">
                            <img class="sm:hidden w-full object-contain" src="${item.smallImage}" alt="">
                            <div class="flex flex-col sm:gap-2 text-center items-center w-full justify-start h-1/4 px-12 absolute bottom-0 sm:bottom-0 ">
                                <div class="max-w-2xl">
                                  <h1 class="text-3xl md:text-4xl font-bold pb-2">${item.title}</h1>
                                  <p class="md:text-xs">${item.description}</p>
                                  </div>
                            </div>
                        </div>
                    `,
                )
                .join("")}
                </div>
            </div>
            <div class="header text-white mt-8 absolute top-3 left-1/2 transform -translate-x-1/2 overflow-auto">
                <h2 class="text-3xl lg:text-4xl font-semibold text-center">${headerText}</h2>
                <div class="text-nowrap pt-5 font-bold">
                    <div id="btn-carousel" class="overflow-auto flex gap-12 scrollbar-none justify-center">
                        ${tabs
                .map(
                    (tab, index) => `
                            <button data-index="${index}" class="carousel-btn">${tab}</button>
                        `,
                )
                .join("")}
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

        const container = this.querySelector("#carousel-inner-container");
        const btns = this.querySelectorAll(".carousel-btn");
        carouselTab(container, btns);
    }
}


// For carousel

function carouselTab(container, btns) {
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const index = btn.getAttribute("data-index");
            console.log(index);
            container.style.transform = `translateX(-${index}00%)`;
        });
    });
}

customElements.define("galaxy-ai-tablet", GalaxyAiTablet);