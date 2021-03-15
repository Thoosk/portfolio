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

  sections.forEach((section) => {
    section.addEventListener("mouseenter", function changeOnHover() {
      const id = this.getAttribute("id");

      const navActive = document.querySelector(`a[href="#${id}"]`);

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navActive.classList.add("active");
    });
  });
};

export default navAnimation;
