const ratingComponent = document.getElementById("rating-component");

const thankYouComponent = document.getElementById("thank-you-component");

const ratingForm = document.getElementById("rating-form");

const ratingValueSpan = document.getElementById("rating-value");

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let element = document.querySelector("input[type=radio][name=rate]:checked");

  if (element == null) {
    alert("Please select a rate!");
    return;
  }

  ratingValueSpan.innerHTML = element.value;

  ratingComponent.classList.add("hidden");
  thankYouComponent.classList.remove("hidden");
});
