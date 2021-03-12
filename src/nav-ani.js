// since we're using a "Mouseover"-event, this won't work on mobile
// you can mix up the responsive navbar from the other preset with this to have a working mobile hamburger menu too!

const navAnimation = () => {
  const sections = document.querySelectorAll(".mainsection");
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function changeOnClick() {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // we can't use a arrow function for the eventlistener because we need "this" to be the section, not the window
  sections.forEach((section) => {
    section.addEventListener("mouseenter", function changeOnHover() {
      // get the id of the section you hover over
      const id = this.getAttribute("id");
      //   console.log(id);

      // with this you get the anchor tag from the nav associated with the section
      const navActive = document.querySelector(`a[href="#${id}"]`);
      //   console.log(navActive);

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navActive.classList.add("active");
    });
  });
};

// navAnimation();

export default navAnimation;
