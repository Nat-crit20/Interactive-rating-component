const form = document.querySelector("form");
const input = document.querySelector("input");
const formCard = document.querySelector(".form-card");
const thanksCard = document.querySelector(".thanks-card");
const thanksRating = document.querySelector("#thanks-rating");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  let output;
  for (const value of data.values()) {
    output = `<p>You selected ${value} out of 5</p>`;
  }
  thanksRating.innerHTML = output;
  formCard.style.display = "none";
  thanksCard.style.display = "contents";
});
