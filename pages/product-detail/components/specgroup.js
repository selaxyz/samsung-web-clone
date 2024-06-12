const specsData = {
  connectiveData: [
    { title: "Bluetooth<sup>®</sup> Version", value: "5.3" },
    {
      title: "Bluetooth Profiles",
      value: "A2DP,AVRCP,HFP",
      span: false,
    },
  ],
  batteryData: [
    { title: "Battery Capacity (Earbud)", value: "61" },
    { title: "Battery Capacity (Case)", value: "515" },
    { title: "Playtime", value: "5/20Hr (ANC On), 8/30Hr (ANC Off)" },
    {
      title: "Talk time",
      value: "3.5/14Hr (ANC ON), 4/15Hr (ANC OFF)",
      span: true,
    },
  ],
  physicalSpecData: [{ title: "Weight", value: "1.92 oz" }],
  audioAndVideoData: [
    {
      title: "Ambient Sound",
      value: "Yes",
      span: true,
    },
  ],
  serviceAndAppData: [
    {
      title: "ANC/Bixby Voice Wake-up",
      value: "(– 35dB, Latency 10us, up to  1kHz)",
      span: true,
    },
  ],
  keyCategoryData: [
    {
      title: "Water Resistant",
      value: "IPX7",
      span: true,
    },
  ],
  generalFeatData: [
    {
      title: "Microphone",
      value: "3 High-SNR Mics + VPU + Personalized DNN**",
    },
    {
      title: "Speaker",
      value: "2 Way (10mm  woofer + 5.3mm  tweeter)",
      span: false,
    },
  ],
};

/**
 * Creates a section of HTML with the given title and data.
 *
 * @param {string} title - The title of the section.
 * @param {Array<Object>} data - The data to be displayed in the section.
 * @param {string} data[].title - The title of an individual item.
 * @param {string} data[].value - The value of an individual item.
 * @param {boolean} [data[].span] - Whether the item should span multiple columns.
 * @returns {string} The generated HTML string for the section.
 */
function createSection(title, data) {
  return `
        <div class="ml-5 md:ml-28">
            <span class="border-x-[24px] border-zinc-200 font-extralight">${title}</span>
            <div class="grid grid-cols-2 md:columns-319px md:grid-cols-4 justify-start">
                ${data
                  .map(
                    (item) => `
                <div class="border-x-[24px] border-zinc-200 border-transparent space-y-2 w-52  ${
                  item.span ? "md:col-span-4 " : ""
                } pb-4">
                    <div class="text-xs font-semibold">${item.title}</div>
                    <div class="text-xs font-extralight">${item.value}</div>
                </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;
}

/**
 * Creates sections for the specification group component using the provided data and inserts them into the DOM.
 *
 * @param {Object} data - The data for the specification group component sections.
 * @param {Array<Object>} [data.connectiveData] - The data for the Connective Data section.
 * @param {Array<Object>} [data.batteryData] - The data for the Battery Data section.
 * @param {Array<Object>} [data.physicalSpecData] - The data for the Physical Specification section.
 * @param {Array<Object>} [data.audioAndVideoData] - The data for the Audio and Video section.
 * @param {Array<Object>} [data.serviceAndAppData] - The data for the Services and Applications section.
 * @param {Array<Object>} [data.keyCategoryData] - The data for the Key Category Features section.
 * @param {Array<Object>} [data.generalFeatData] - The data for the General Feature section.
 */

function createSpecGroupComponent(data) {
  const sectionTitles = {
    connectiveData: "Connective Data",
    batteryData: "Battery Data",
    physicalSpecData: "Physical Specification",
    audioAndVideoData: "Audio and Video",
    serviceAndAppData: "Services and Applications",
    keyCategoryData: "Key Category Features",
    generalFeatData: "General Feature",
  };

  Object.keys(data).forEach((key) => {
    const containerId = key
      .replace(/([A-Z])/g, "-$1") // Convert camelCase to kebab-case
      .toLowerCase() // Ensure all letters are lowercase
      .replace("-data", "-container"); // Replace '-data' with '-container'
    const sectionHTML = createSection(sectionTitles[key], data[key]);
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = sectionHTML;
    }
  });
}

createSpecGroupComponent(specsData);
