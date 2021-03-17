import "./reset.css";
import "./style.css";
import introAnimation from "./intro";
import navAnimation from "./nav-ani";
import createImage from "./image";

import projectsArray from "./projects";

import contactsArray from "./contact";

import infos from "./about";

navAnimation();
introAnimation();

setTimeout(function () {
  const bodyEl = document.querySelector("body");
  bodyEl.classList.remove("stop-scrolling");
}, 2500);

// projects section
const createProjectBlock = (projects) => {
  const projectBlock = document.createElement("div");
  projectBlock.setAttribute("id", "project_block");

  projects.forEach((project) => {
    const projDiv = document.createElement("div");
    projDiv.classList.add("project-tile");
    const projTag = document.createElement("a");
    projTag.target = "_blank";
    projTag.href = project.link;
    const projH3 = document.createElement("h3");
    projH3.innerHTML = project.name;
    const projImage = createImage(project.url);
    projImage.alt = project.imgAlt;
    projImage.classList.add("project_preview");

    projTag.appendChild(projH3);
    projTag.appendChild(projImage);
    projDiv.appendChild(projTag);

    projectBlock.appendChild(projDiv);
  });

  return projectBlock;
};

const projectsBlock = createProjectBlock(projectsArray);
const projectsElement = document.querySelector("#projects");
projectsElement.appendChild(projectsBlock);

// contact section

const createContactBlock = (contacts) => {
  const contactBlock = document.createElement("div");
  contactBlock.setAttribute("id", "contact-logos");

  contacts.forEach((contact) => {
    const contactImg = createImage(contact.url);
    contactImg.alt = contact.imgAlt;
    contactImg.classList.add("contact-logo");
    const contactTag = document.createElement("a");
    contactTag.target = "_blank";
    contactTag.href = contact.link;

    console.log(contactImg);
    contactTag.appendChild(contactImg);
    contactBlock.appendChild(contactTag);
  });

  return contactBlock;
};

const contactsBlock = createContactBlock(contactsArray);
const contactElements = document.querySelector("#contact");
contactElements.appendChild(contactsBlock);

// ABOUT

const createAboutBlock = (basicInfos) => {
  // left side
  const aboutBlockLeft = document.createElement("div");
  aboutBlockLeft.setAttribute("id", "left-side");

  const aboutImg = createImage(basicInfos.imgUrl);
  aboutImg.alt = basicInfos.imgAlt;
  const nameH2 = document.createElement("h2");
  nameH2.innerHTML = basicInfos.name;
  const cityH3 = document.createElement("h3");
  cityH3.innerHTML = basicInfos.city;
  const ageH4 = document.createElement("h4");
  ageH4.innerHTML = basicInfos.age;

  aboutBlockLeft.appendChild(aboutImg);
  aboutBlockLeft.appendChild(nameH2);
  aboutBlockLeft.appendChild(cityH3);
  aboutBlockLeft.appendChild(ageH4);

  return aboutBlockLeft;
};

const aboutSection = document.querySelector("#about");
const aboutBlock = createAboutBlock(infos);
aboutSection.appendChild(aboutBlock);
