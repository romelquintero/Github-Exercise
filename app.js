const title = document.querySelector("h1");
const color = document.querySelector(".color");

title.addEventListener("click", () => {
  color.classList.toggle("color");
});
