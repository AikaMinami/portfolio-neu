// Oh my! You opened the code! Welcome, welcome.
// The cat has reviewed this script and requests more snacks.

const filters = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".project-card");

filters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    const category = filterButton.dataset.filter;
    filters.forEach((button) => {
      const selected = button === filterButton;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    cards.forEach((card) => {
      const categories = (card.dataset.category || "").split(" ");
      card.hidden = category !== "all" && !categories.includes(category);
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.querySelector("span").textContent = isOpen ? "−" : "+";
  });
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.querySelector("span").textContent = "+";
    });
  });
}

const catButton = document.querySelector("#cat-button");
const catResponse = document.querySelector("#cat-response");
const catMessages = [
  "Mrrp. Your curiosity has been acknowledged.",
  "Meow. The code appears to be behaving.",
  "Purr-fect. Please continue exploring.",
  "The tiny supervisor approves this interaction.",
  "Status: cat is pleased. Human may proceed."
];
if (catButton && catResponse) {
  catButton.addEventListener("click", () => {
    const message = catMessages[Math.floor(Math.random() * catMessages.length)];
    catResponse.textContent = message;
  });
}

const modal = document.querySelector("#case-modal");
const modalContent = document.querySelector("#modal-content");
const closeModal = document.querySelector(".modal-close");
const caseStudies = {
  integration: {
    title: "Connecting identity across web & VR",
    status: "Work-in-progress placeholder",
    intro: "A case study about coordinating authentication across a web portal, an identity provider, backend services, and a Unity application running on Meta Quest.",
    sections: [
      ["The engineering problem", "The login experience crosses multiple components. The implementation needs clear ownership for the authentication callback, token verification, identity mapping, and application session."],
      ["Areas of focus", "Unity/C# client behavior, WebView return flow, backend API responsibilities, and end-to-end validation."],
      ["What to document", "Add the verified architecture, your exact contribution, decisions you made, test cases, and actual outcomes. Distinguish implemented behavior from planned work."]
    ],
    warning: "Before publishing, confirm which details can be shared. Do not include private endpoints, client IDs, tokens, internal screenshots, or proprietary code."
  },
  minimal: {
    title: "Minimalist interface study",
    status: "Design placeholder",
    intro: "A visual design project exploring hierarchy, whitespace, consistency, and reducing unnecessary interface noise.",
    sections: [
      ["The design question", "What does a user need to notice first, and what can be removed without making the interface harder to use?"],
      ["Design decisions", "Document the layout, type scale, spacing, contrast, interaction states, and why each decision supports the intended task."],
      ["Evidence", "Add real screens, prototype links, feedback, or usability observations if available. Avoid claiming improvements without evidence."]
    ]
  },
  unity: {
    title: "Unity gameplay experiments",
    status: "Project placeholder",
    intro: "A home for selected Unity/C# experiments, interaction prototypes, and implementation notes.",
    sections: [
      ["What to show", "Use a short gameplay capture or annotated screenshot, then explain the problem and the system you built."],
      ["Technical breakdown", "Describe the relevant scripts, data flow, state management, performance considerations, and trade-offs."],
      ["Your contribution", "Clearly distinguish your own work from assets, libraries, or work completed collaboratively."]
    ]
  },
  iot: {
    title: "Automatic plant watering system",
    status: "College project",
    intro: "An IoT project combining a soil-moisture sensor, NodeMCU, a water pump, and a web dashboard.",
    sections: [
      ["System overview", "Describe how sensor readings inform the watering behavior and how the dashboard presents the system state."],
      ["Hardware and software", "Add the actual components, communication method, wiring diagram, and software stack that you used."],
      ["What I learned", "Explain the real integration challenges, testing approach, limitations, and what you would change in a second version."]
    ]
  }
};
document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = caseStudies[button.dataset.openModal];
    if (!item || !modal || !modalContent) return;
    modalContent.replaceChildren();
    const title = document.createElement("h2");
    title.id = "modal-title";
    title.textContent = item.title;
    modalContent.append(title);
    const status = document.createElement("p");
    status.className = "eyebrow";
    status.textContent = item.status;
    modalContent.append(status);
    const intro = document.createElement("p");
    intro.textContent = item.intro;
    modalContent.append(intro);
    item.sections.forEach(([heading, body]) => {
      const h3 = document.createElement("h3");
      h3.textContent = heading;
      const p = document.createElement("p");
      p.textContent = body;
      modalContent.append(h3, p);
    });
    if (item.warning) {
      const warning = document.createElement("p");
      warning.className = "modal-warning";
      warning.textContent = item.warning;
      modalContent.append(warning);
    }
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  });
});
if (modal && closeModal) {
  closeModal.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
