const slide = document.querySelector(".slide");
const images = document.querySelector(".slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("nextBtn");

//Counter
let counter = 1;
const size = Images[0].clientWidth;

slide.getElementsByClassName.transform = translateX(+(-size * counter) + px);

nextBtn.addEventListener("click", () => {
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + -size * counter + " px)";
});

prevBtn.addEventListener("click", () => {
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slide.style.transform = "translateX(" + -size * counter + " px)";
});
