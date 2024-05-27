export class HeroComponent extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.classList.add("w-full")
        this.innerHTML = `
        <section class="bg-gray-100 md:hidden">
        <div class="w-full max-w-screen-2xl">
          <img
            class="object-cover w-full"
            src="../../assets/images/galaxy-ai/sm-galaxy-ai-welcome.png"
            alt=""
          />
        </div>
        <div class="relative flex w-full max-w-screen-2xl justify-center">
          <div
            class="absolute top-10 flex w-fit max-w-lg flex-col items-center justify-center gap-8 text-center px-6 md:text-base text-lg"
          >
            <img
              class="w-fit h-12"
              src="../../assets/images/galaxy-ai/sm-what-is-galaxy-ai.png"
              alt="what is galaxy ai?"
            />
            <p class="grow-0">
              Galaxy AI is a suite of built-in and cloud-based AI features that
              unleash creativity, increase productivity and unlock a world of
              possibilities across the Galaxy family. Life opens up with Galaxy AI.
            </p>
          </div>
          <img
            class="w-full h-fit"
            src="../../assets/images/galaxy-ai/sm-hero-bg-image.png"
            alt=""
          />
        </div>
      </section>

      <section class="hidden md:flex flex-col items-center">
            <section class="w-full max-w-screen-2xl">
            <img
                class="w-full"
                src="../../assets/images/galaxy-ai/welcome-to-galaxy-ai.png"
                alt=""
            />
            </section>
            <section class="relative flex w-full max-w-screen-2xl justify-center">
            <div
                class="absolute top-10 flex w-fit max-w-lg flex-col items-center justify-center gap-8 text-center"
            >
                <img
                class="w-full"
                src="../../assets/images/galaxy-ai/what-is-galaxy-ai.png"
                alt="what is galaxy ai?"
                />
                <p class="grow-0">
                Galaxy AI is a suite of built-in and cloud-based AI features that
                unleash creativity, increase productivity and unlock a world of
                possibilities across the Galaxy family. Life opens up with Galaxy AI.
                </p>
            </div>
            <img
                class="w-full"
                src="../../assets/images/galaxy-ai/galaxy-ai-hero-bg.png"
                alt=""
            />
            </section> 
        </section>
        `
    }
}

customElements.define('hero-component', HeroComponent)
