`use strict`;

const primarySwatches = document.querySelectorAll(".primary-swatches span");
const secondarySwatches = document.querySelectorAll(".secondary-swatches span");

const root = document.querySelector(":root");

primarySwatches.forEach((swatch) => {
  swatch.addEventListener("click", (e) => {
    root.style.setProperty("--primary-color", e.target.style.background);
  });
});

secondarySwatches.forEach((swatch) => {
  swatch.addEventListener("click", (e) => {
    root.style.setProperty("--secondary-color", e.target.style.background);
  });
});
