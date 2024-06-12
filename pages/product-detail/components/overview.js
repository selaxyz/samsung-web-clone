// Image-side
class OverviewImageSideComponent extends HTMLElement {
  constructor(imgSrc, title, description, moreInfo, index) {
    super();

    this.classList.add(
      "overview-component",
      "flex",
      "flex-col-reverse",
      "flex-nowrap",
      "justify-center",
      "items-center",
      "md:grid",
      "md:grid-cols-2",
      "md:grid-flow-dense",
      "pt-0",
      "md:pt-12",
    );

    // Add HTML content to the component using template literals and data attributes
    this.innerHTML = `
            <img class="overview-image w-full order-2 ${index % 2 === 0 ? "md:order-1" : ""} " src="${imgSrc}">
            <div class="overview-content order-1 flex flex-col justify-center items-center text-center md:text-start md:px-[8.33%] md:pt-0 pt-12 mx-[8%]">
                <h2 class="overview-title text-3xl md:text-5xl md:w-full font-semibold leading-tight md:leading-tight pb-2">${title}</h2>
                <p class="overview-description font-extralight pb-4">${description}</p>
                <p class="overview-additional text-[9px] md:w-full pb-4 font-medium">${moreInfo}</p>
            </div>
        `;
  }
}

customElements.define(
  "overview-imageside-component",
  OverviewImageSideComponent,
);

/**
 * Custom HTML element representing a Image List in OverviewImageBottomComponent Section
 *
 * @class OverviewImageBottomComponent
 * @extends {HTMLElement}
 */
class OverviewImageBottomComponent extends HTMLElement {
  constructor(imgSrc, imgSrcset, title, description, additionalInfo) {
    super();

    this.classList.add("overview-component", "flex", "flex-col", "pt-12");

    // Add HTML content to the component using template literals and data attributes
    this.innerHTML = `
        <div class="flex flex-col justify-center items-center text-center px-0 md:text-start md:px-[8.33%] md:pt-0 mx-4 md:mx-[16.6%]">
            <div class="grid grid-cols-12 text-center md:text-center mx-4 md:mx-0">
                <h2 class="overview-title col-span-12 text-3xl md:text-5xl font-semibold leading-tight md:leading-tight pb-2">${title}</h2>
                <p class="overview-description col-span-12 font-extralight p-[3.2%] md:mx-[15%] lg:pb-7 lg:mx-20 lg:mb-7">${description}</p>
                <p class="overview-additional col-span-12 text-[9px] pb-4 font-medium">${additionalInfo}</p>
            </div>
        </div>
        <picture>
            <img class="overview-image hidden md:grid" src='${imgSrc}'/>
            <img class="overview-image-set grid md:hidden" src='${imgSrcset}' />
        </picture>
        `;
  }
}

customElements.define(
  "overview-bottom-component",
  OverviewImageBottomComponent,
);

function createOverviewImageBottom(item) {
  const { imgSrc, imgSrcset, title, description, additionalInfo } = item;
  return new OverviewImageBottomComponent(
    imgSrc,
    imgSrcset,
    title,
    description,
    additionalInfo,
  );
}

// Data for each overview group
const dataOverview1 = [
  {
    imgSrc: "/assets/images/product-detail/f1-buds2-pro.png",
    title: 'They say "hola," you hear "hello."',
    description:
      "Wish you could speak like a local, no matter where you go? Now it's easy to communicate freely with someone in another language. Simply use the interpreter feature on your Galaxy phone to hear crystal-clear real-time translations through your Galaxy Buds during face-to-face conversations.¹",
    moreInfo:
      "¹Galaxy AI features by Samsung will be provided for free until the end of 2025 on supported Samsung Galaxy devices.'<br>'²Requires compatible Galaxy device. Samsung account log in and language preset (English and Spanish pre-installed; other languages require free download). Results may vary.",
  },
  {
    imgSrc: "/assets/images/product-detail/f2-buds2-pro.png",
    title: "From phone to ear, translations you can hear",
    description:
      "From phoning a relative back home to calling in reservations while traveling aboard, break down language barriers with Galaxy Buds and Live Translate. Using the Samsung Phone app, you can hear real-time translations of your conversation clearly through your Buds.¹'²",
    moreInfo:
      "¹Galaxy AI features by Samsung will be provided for free until the end of 2025 on supported Samsung Galaxy devices.<br> ²Requires compatible Galaxy device. Samsung account log in and language preset (English and Spanish pre-installed; other languages require free download). Results may vary.",
  },
  {
    imgSrc: "/assets/images/product-detail/f3-buds2-pro.png",
    title: "Designed to fit perfectly into your world",
    description:
      "Hearing is believing. Galaxy Buds2 Pro pack a studio-worthy listening experience into our most comfortable design yet — wear them as long as you want.",
    moreInfo: "",
  },
];

const overviewContainer1 = document.getElementById("first-component-overview");
dataOverview1.forEach((item, index) => {
  const component = new OverviewImageSideComponent(
    item.imgSrc,
    item.title,
    item.description,
    item.moreInfo,
    index,
  );

  overviewContainer1.appendChild(component);
});

const dataOverview2 = [
  {
    imgSrc: "/assets/images/product-detail/f4-buds2-pro.png",
    imgSrcset: "/assets/images/product-detail/f4-buds2-pro-small.png",
    title: "Every moment now sounds epic",
    description:
      "Studio-quality sound isn’t just for the pros. Feel every note like you’re there with Galaxy Buds2 Pro.³ Now everyone can have a next-level listening experience, whether you’re rocking out to your playlist or staying informed with a podcast.",
    additionalInfo:
      "³Requires a Galaxy smartphone with Android 8.0 and One UI 4.0 or later with 1.5GB RAM or above.",
  },
  {
    imgSrc: "/assets/images/product-detail/f5-buds2-pro.png",
    imgSrcset: "/assets/images/product-detail/f5-buds2-pro-small.png",
    title: " Hear only what you want ",
    description:
      " Reduce unwanted noise with Galaxy Buds2 Pro. They use Intelligent Active Noise Cancellation⁴ to quiet even the loudest outside sounds. Tune in to what matters most without being bothered by distracting sounds around you.",
    additionalInfo:
      "⁴Features including Intelligent Active Noise Cancellation and Ambient sound require a Bluetooth connection to a compatible device.",
  },
  {
    imgSrc: "/assets/images/product-detail/f6-buds2-pro.png",
    imgSrcset: "/assets/images/product-detail/f6-buds2-pro-small.png",
    title: "Surround sound that’s all about you",
    description:
      "Go beyond just listening and surround yourself with the sounds you love — and nothing else. Amplify what you like. Minimize what you don’t. Enhanced 360-degree audio⁵ brings out the tones you love from every angle for a surround-sound experience every time you pop them in.",
    additionalInfo:
      "⁵Requires a Galaxy smartphone with Android 8.0 and One UI 4.1 or later with 1.5GB RAM or above.",
  },
  {
    imgSrc: "/assets/images/product-detail/f7-buds2-pro.png",
    imgSrcset: "/assets/images/product-detail/f7-buds2-pro-small.png",
    title: "Don’t miss a word",
    description:
      "Keep the conversation going without taking out your Galaxy Buds2 Pro. When your voice is detected, Intelligent Conversation Mode turns off Active Noise Cancellation, turns down the volume and puts your Buds in Ambient Mode.⁶ This helps you hear the other person’s voice loud and clear. When the conversation is over, your Buds shift back to their previous settings automatically. Now you can catch every word without having to lift a finger.",
    additionalInfo:
      "⁶Requires a Galaxy smartphone with Android 8.0 later and 1.5GB RAM or above. Feature only can be enabled and controlled through the Galaxy Wearable app on Android, available on the Google Play Store.",
  },
  {
    imgSrc: "/assets/images/product-detail/f8-buds2-pro.png",
    imgSrcset: "/assets/images/product-detail/f8-buds2-pro-small.png",
    title: "A Galaxy in perfect sync",
    description:
      "These Buds play well with others. Galaxy Buds2 Pro pair easily with your Galaxy devices.⁷ Simply open the case and tap connect to pair with your Galaxy devices quickly. Whether you’re pairing with your tablet, phone or Watch, Buds2 Pro syncs in a cinch and automatically switches audio sources when an alert or call comes in to keep you in the know.⁸",
    additionalInfo:
      "⁷Easy Pair only supported on mobile devices running One UI 1.0 or later and Galaxy Book series PCs launched 2020 or later.<br> ⁸Auto Switch only supported on mobile devices (smartphones and tablets) running One UI 3.1 or later and watches that are Galaxy Watch4 Series or later. Devices must be logged in to the same Samsung account and have Bluetooth and Wi-Fi turned on. Earbuds must be paired with both your phone and tablet at least once.",
  },
];

const overviewContainer2 = document.getElementById("second-component-overview");
dataOverview2.forEach((item) =>
  overviewContainer2.appendChild(createOverviewImageBottom(item)),
);

const dataOverview3 = [
  {
    imgSrc: "/assets/images/product-detail/f9-buds2-pro.png",
    title: "Look out for your Buds ",
    description:
      "Keeping up with your Buds is easy with Smart Things Find.⁹ When a Bud becomes disconnected, you’ll get an alert. If you miss that notification, simply turn on Smart Things Find on your phone. You’ll see a map that points to the last location the Bud was connected. Simply retrieve your Bud, and you’re good to go!",
    moreInfo:
      "⁹Requires a smartphone with the SmartThings app and a Wi-Fi or Bluetooth connection. Compatible smart devices must be initially set up in the SmartThings app.",
  },
  {
    imgSrc: "/assets/images/product-detail/f10-buds2-pro.png",
    title: "Pairs almost like magic",
    description:
      "You won’t believe how easy it is to pair Galaxy Buds2 Pro to your other Galaxy devices through your Samsung account — just tap to connect as soon as you open the case.¹⁰ Once paired, Buds2 Pro show up in your list of paired devices. Then with Bluetooth Info Sync, you can effortlessly shift your Buds2 Pro between your Galaxy phone, tablet, or watch.",
    moreInfo:
      "¹⁰Feature only supported on devices running Samsung One UI 3.1 or later.",
  },
  {
    imgSrc: "/assets/images/product-detail/f11-buds2-pro.png",
    title: "Best Buds with your TV and PC",
    description:
      "Next-level sound doesn’t stop at calls and music. Sync Galaxy Buds2 Pro with your Samsung TV for a theatrical experience, or pair them with your PC and lock in to your workflow.¹¹",
    moreInfo:
      "¹¹Feature supported on Galaxy Book series PCs launched 2020 or later and TV models launched 2022 or later.",
  },
  {
    imgSrc: "/assets/images/product-detail/f12-buds2-pro.png",
    title: "Sound never felt so right",
    description:
      "You won’t believe how easy it is to pair Galaxy Buds2 Pro to your other Galaxy devices through your Samsung account — just tap to connect as soon as you open the case.¹⁰ Once paired, Buds2 Pro show up in your list of paired devices. Then with Bluetooth Info Sync, you can effortlessly shift your Buds2 Pro between your Galaxy phone, tablet, or watch.",
    moreInfo:
      "¹⁰Feature only supported on devices running Samsung One UI 3.1 or later.",
  },
  {
    imgSrc: "/assets/images/product-detail/f13-buds2-pro.png",
    title: "Not today, water",
    description:
      "Pop ‘em in and forget they’re there. Galaxy Buds2 Pro are designed to be even more comfortable than before and fit securely no matter what you’re doing. Whether you’re working or working out, make all your moves comfortably.",
    moreInfo: "",
  },
];

const overviewContainer3 = document.getElementById("third-component-overview");
dataOverview3.forEach((item, index) => {
  const component = new OverviewImageSideComponent(
    item.imgSrc,
    item.title,
    item.description,
    item.moreInfo,
    index,
  );

  overviewContainer3.appendChild(component);
});
