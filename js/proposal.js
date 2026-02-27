//funtion to extract query parameters from URL
const getQueryParam = (params) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(params);
};

// get partner name and partner type from url
const partnerName = getQueryParam("name");
const partnerType = getQueryParam("type");

//set partner name and partner type in proposal page
if (partnerName && partnerType) {
  const h1 = document.querySelector(".proposal-container h1");
  h1.textContent = `Will you be my ${partnerType}, ${partnerName}`;
}

//get state and button
const proposalState = document.getElementById("proposalState");
const successState = document.getElementById("successState");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// function to handle yes button when clicked
const handleYes = () => {
  console.log("Yes button clicked");
  proposalState.style.display = "none";
  successState.classList.add("show");
};

// function to move no button away from cursor when hovered

const moveButton = (event) => {
  const randomX = (Math.random() - 0.5) * 120;
  const randomY = (Math.random() - 0.5) * 120;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
};

// function for go home button
const goHome = () => {
  window.location.href = "index.html";
};

// event listener for buttons
yesBtn.addEventListener("click", handleYes);

// handle no button escape
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    history.back();
  }
});
