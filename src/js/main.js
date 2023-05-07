import "../scss/main.scss";

/* Selectors */
import selectors from "./selectors";

// Functionality to handle navigation
window.onload = () => {
  if (window.matchMedia("(min-width: 768.001px)").matches) {
    selectors.navigationContainer.classList.add("navigation-visible");
  }
};
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768.001px)").matches) {
    selectors.navigationContainer.classList.add("navigation-visible");
    selectors.hamburgerBtn.classList.remove("animated-hamburger-btn");
  } else if (
    !selectors.hamburgerBtn.classList.contains("animated-hamburger-btn")
  ) {
    selectors.navigationContainer.classList.remove("navigation-visible");
  }
});
selectors.hamburgerBtn.addEventListener("click", function () {
  this.classList.toggle("animated-hamburger-btn");
  selectors.navigationContainer.classList.toggle("navigation-visible");
});
