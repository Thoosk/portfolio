import "./reset.css";
import "./style.css";
import introAnimation from "./intro";
import navAnimation from "./nav-ani";
import createImage from "./image";

navAnimation();
introAnimation();

setTimeout(function () {
  const bodyEl = document.querySelector("body");
  bodyEl.classList.remove("stop-scrolling");
}, 2500);
