// Form handler for index for html
const proposalForm = document.getElementById("proposal-form");

if (proposalForm) {
  proposalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // get form values
    const partnerName = document.getElementById("partnerName").value;
    const partnerType = document.querySelector(
      "input[name='partnerType']:checked",
    ).value;

    //validation to check if both fields are filled
    if (partnerName && partnerType) {
      //create url with query parameters
      const proposalUrl = `proposal.html?name=${encodeURIComponent(partnerName)}&type=${encodeURIComponent(partnerType)}`;

      //redirect to proposal.html page
      window.location.href = proposalUrl;
    } else {
      alert("Please fill in all fields before submitting the form.");
    }
  });
}

// Hamburger Menu Functionality
const hamburgerTrigger = document.getElementById("hamburger-trigger");
const navLinksContainer = document.getElementById("nav-links-container");

if (hamburgerTrigger && navLinksContainer) {
  // Toggle menu on hamburger click
  hamburgerTrigger.addEventListener("click", () => {
    const isExpanded = hamburgerTrigger.getAttribute("aria-expanded") === "true";
    hamburgerTrigger.setAttribute("aria-expanded", !isExpanded);
    navLinksContainer.classList.toggle("active");
  });

  // Close menu when a navigation link is clicked
  const navLinks = navLinksContainer.querySelectorAll("a, button");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerTrigger.setAttribute("aria-expanded", "false");
      navLinksContainer.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navLinksContainer.contains(event.target);
    const isClickOnHamburger = hamburgerTrigger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger) {
      hamburgerTrigger.setAttribute("aria-expanded", "false");
      navLinksContainer.classList.remove("active");
    }
  });
}

