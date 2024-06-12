// Data
const breadCrumbData = [
  {
    link: "#",
    label: "Home",
  },
  {
    link: "#",
    label: "Mobile",
  },
  {
    link: "#",
    label: "Audio",
  },
  {
    link: "#",
    label: "All Audio",
  },
  {
    link: "#",
    label: "Headphones",
  },
  {
    link: "#",
    label: "Galaxy Buds2 Pro, Graphite",
  },
];

// Component BreadCrumb

/**
 * Custom HTML element representing a breadcrumb navigation.
 * @class
 * @extends {HTMLElement}
 */
export class BreadCrumb extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const breadList = breadCrumbData
      .map((data) => {
        return `
                <div><a href="${data.link}">${data.label}</a></div>
            `;
      })
      .join("<span>/</span>");
    this.innerHTML = breadList;
    this.classList.add("block");
    this.classList +=
      " bread-crumb mb-4 hidden gap-3 pl-4 text-slate-400 md:flex";
  }
}
