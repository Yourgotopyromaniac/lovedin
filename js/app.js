// Form handler for index for html
const proposalForm = document.getElementById("proposal-form");
const proposalModal = document.getElementById("proposal-modal");
const proposalModalClose = document.getElementById("proposal-modal-close");
const shareLinkButton = document.getElementById("share-link-btn");
const previewLinkButton = document.getElementById("preview-link-btn");
const proposalLink = document.getElementById("proposal-link");

let proposalUrl = "";

const openProposalModal = () => {
  if (!proposalModal) return;
  proposalModal.classList.add("is-visible");
  proposalModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeProposalModal = () => {
  if (!proposalModal) return;
  proposalModal.classList.remove("is-visible");
  proposalModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

if (proposalModal) {
  proposalModal.addEventListener("click", (event) => {
    if (event.target === proposalModal) {
      closeProposalModal();
    }
  });
}

if (proposalModalClose) {
  proposalModalClose.addEventListener("click", closeProposalModal);
}

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    proposalModal?.classList.contains("is-visible")
  ) {
    closeProposalModal();
  }
});

if (proposalForm) {
  proposalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // get form values
    const partnerName = document.getElementById("partnerName").value.trim();
    const partnerTypeInput = document.querySelector(
      "input[name='partnerType']:checked",
    );
    const partnerType = partnerTypeInput ? partnerTypeInput.value : "";

    //validation to check if both fields are filled
    if (partnerName && partnerType) {
      //create url with query parameters
      proposalUrl = new URL(
        `proposal.html?name=${encodeURIComponent(partnerName)}&type=${encodeURIComponent(partnerType)}`,
        window.location.href,
      ).toString();

      if (proposalLink) {
        proposalLink.textContent = proposalUrl;
      }

      openProposalModal();
    } else {
      alert("Please fill in all fields before submitting the form.");
    }
  });
}

if (shareLinkButton) {
  shareLinkButton.addEventListener("click", async () => {
    if (!proposalUrl) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "LovedIn Proposal",
          text: "Here's the proposal I created for you.",
          url: proposalUrl,
        });
        return;
      } catch (error) {
        // User cancelled or share failed; fallback to clipboard
      }
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(proposalUrl);
        const originalLabel = shareLinkButton.textContent;
        shareLinkButton.textContent = "Link Copied";
        setTimeout(() => {
          shareLinkButton.textContent = originalLabel || "Share Link";
        }, 2000);
        return;
      } catch (error) {
        // fall through
      }
    }

    window.prompt("Copy this link:", proposalUrl);
  });
}

if (previewLinkButton) {
  previewLinkButton.addEventListener("click", () => {
    if (proposalUrl) {
      window.location.href = proposalUrl;
    }
  });
}
