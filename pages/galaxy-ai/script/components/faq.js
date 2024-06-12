/**
 * Array containing frequently asked questions (FAQs) along with their respective answers.
 * Each FAQ object contains a question and its corresponding answer.
 * @type {Array<{
*   question: string, // The question being asked
*   answer: string    // The answer to the question
* }>}
*/ 
const faqs = [
    {
        question: "What is Galaxy AI?",
        answer: "An all encompassing new mobile experience powered by both on-device and cloud-based AI solutions. Galaxy AI empowers the user experience through productivity, creativity, play, and more"
    },
    {
        question: "Is Bixby the new Galaxy AI?",
        answer: "Bixby remains the same as a separate personal AI assistant with helpful on-device functionality but can be considered a feature within Galaxy AI."
    },
    {
        question: "What features are on-device vs cloud-based?",
        answer: "Most on-device direct translating is handled on the device itself. Edit Suggestions within the Gallery are also handled on-device. Most other features requiring a network connection utilize the cloud in some way.        "
    },
    {
        question: "Do I need to have a specific account to use the features?",
        answer: "You may need a Samsung or Google Account to use certain AI-enabled features on your Galaxy S24 Series device. Samsung Account: Samsung Notes, Voice Recorder, Web Assist Summary, Voice & Text Translations, Interpreter, Photo Ambient Wallpaper, Generative Edit. Google Account: Magic Compose Texting, Generative Wallpaper."
    },
    {
        question: "How do I enable the AI features?",
        answer: "Signing in to the device with your Samsung account will automatically activate all the AI features."
    },
    {
        question: "Can I disable the AI features?",
        answer: 'Yes, you are able to disable or only allow on-device processing for the AI features. There is also a "master switch" to disable all cloud-based processing for the Galaxy AI features.Settings->Advanced Features->Galaxy AI'
    },
    {
        question: 'How can customers "discover" the AI capabilities (tutor/guide) and will there be a more detailed "guide" on device for customers to use for Galaxy AI discovery?',
        answer: "After Samsung Account sign-in, user is able to see all the features as part of consolidated introduction page. Afterwards, first-time use of AI in a particular app will trigger a popup that explains the feature again."
    },
]

const faqList = document.getElementById("faqList")

faqs.forEach(faq => {
    const faqItem = document.createElement('div')
    faqItem.classList.add("faq-list")
    faqItem.innerHTML = `
    <details class="bg-gray-50 border-b-2 border-white">
        <summary class="flex p-6 bg-black/5 justify-between text-2xl font-semibold">${faq.question}<img src="../../assets/images/galaxy-ai/icon/add.svg"></summary>
        <div class="p-6"> <p>${faq.answer}</p> </div>
    </details>
    `
    faqList.appendChild(faqItem)

})