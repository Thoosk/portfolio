const introAnimation = async () => {
  // defining a timeline var for the gsap init
  // using a gsap.timeline() enables you to create a timeline for your animations, that means, that the animations are executed one after another
  // if you don't want that, you can just use "gsap.to()"
  const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

  // grabbing the span and adding the animation where the text slides in
  // stagger means that the items should come in one after another
  timeline.to(".text", { y: "0%", duration: 1, stagger: 0.25 });

  // makes the green screen slide from the bottom to the top (since the y position in the css file is 100% -> at the bottom out of sight)
  timeline.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });

  // makes the intro div with the text slide to the top, revealing the main site.
  // the "-=1" after the object means, that the animation should start 1 second before the previous timeline animation finishes
  timeline.to(".intro", { y: "-100%", duration: 1 }, "-=1");

  // the fromTo() method works as expected. you can transform from one style to another
  // this one just lets the text ease in after the slider animation has finished
  timeline.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

  // the same thing for the big text in the middle -> "-=1" because we want the big text appear at the same time as the nav text
  timeline.fromTo(
    ".big-text",
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    "-=1"
  );

  return Promise.resolve;
};

export default introAnimation;
