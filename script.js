const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Thank you! This is a demo form. A real website would send this message to the clinic.");

  form.reset();
});