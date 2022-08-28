const button = document.querySelectorAll("button");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
});
