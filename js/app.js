// Form handler for index for html
const proposalForm = document.getElementById("proposal-form");

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
