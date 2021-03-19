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

// ROAD SECTION
const createRoadBlock = (basicInfos) => {
  // left side
  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  const currRoad = document.createElement("section");
  currRoad.setAttribute("id", "current-road");
  const currRoadH4 = document.createElement("h4");
  currRoadH4.innerHTML = "Current road";
  const currRoadP = document.createElement("p");
  currRoadP.innerHTML = basicInfos.roadText;

  currRoad.appendChild(currRoadH4);
  currRoad.appendChild(currRoadP);
  leftSide.appendChild(currRoad);

  // right side
  const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  const skills = document.createElement("section");
  skills.setAttribute("id", "skills");
  const skillsH4 = document.createElement("h4");
  skillsH4.innerHTML = "Skills";
  const currSkillsUl = document.createElement("ul");
  basicInfos.skills.forEach((skill) => {
    let skillLi = document.createElement("li");
    skillLi.innerHTML = skill;
    currSkillsUl.appendChild(skillLi);
  });

  const workingH4 = document.createElement("h4");
  workingH4.innerHTML = "Working on..";
  const workingUl = document.createElement("ul");
  basicInfos.futureSkills.forEach((fSkill) => {
    let fSkillLi = document.createElement("li");
    fSkillLi.innerHTML = fSkill;
    workingUl.appendChild(fSkillLi);
  });

  skills.appendChild(skillsH4);
  skills.appendChild(currSkillsUl);

  skills.appendChild(workingH4);
  skills.appendChild(workingUl);

  rightSide.appendChild(skills);

  return { leftSide, rightSide };
};

const roadSec = document.querySelector("#road");
const roadBlock = createRoadBlock(infos);
roadSec.appendChild(roadBlock.leftSide);
roadSec.appendChild(roadBlock.rightSide);

// PROJECTS section
const createProjectBlock = (projects) => {
  const projectBlock = document.createElement("div");
  projectBlock.setAttribute("id", "project_block");

  projects.forEach((project) => {
    const projDiv = document.createElement("div");
    projDiv.classList.add("project-tile");
    const projTag = document.createElement("a");

    projTag.target = project.link == "#road" ? "" : "_blank";
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

// ABOUT section
const createAboutBlock = (basicInfos) => {
  // left side
  const aboutBlockLeft = document.createElement("div");
  aboutBlockLeft.classList.add("left-side");

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

  const petP = document.createElement("p");
  petP.innerHTML = "the sleepy family pets";
  const aliraImg = createImage(basicInfos.alira);
  aliraImg.setAttribute("id", "pets");
  aliraImg.alt = "Picture of cat and dog";
  aboutBlockLeft.appendChild(aliraImg);
  aboutBlockLeft.appendChild(petP);

  // right side
  const aboutBlockRight = document.createElement("div");
  aboutBlockRight.classList.add("right-side");

  const personalSection = document.createElement("section");
  personalSection.setAttribute("id", "personal");

  const likingsH4 = document.createElement("h4");
  likingsH4.innerHTML = "Likings";
  personalSection.appendChild(likingsH4);

  const ulLikings = document.createElement("ul");

  basicInfos.likes.forEach((el) => {
    let liItem = document.createElement("li");
    liItem.innerHTML = el;
    ulLikings.appendChild(liItem);
  });

  personalSection.appendChild(ulLikings);

  const favH4 = document.createElement("h4");
  favH4.innerHTML = "Favourite...";
  personalSection.appendChild(favH4);

  const ulFav = document.createElement("ul");

  const favThings = Object.entries(basicInfos.favouriteThings);
  favThings.forEach((el) => {
    let ulItem = document.createElement("li");
    ulItem.innerHTML = `..${el[0].toLocaleLowerCase()} -> ${el[1]}`;
    ulFav.appendChild(ulItem);
  });

  personalSection.appendChild(ulFav);
  aboutBlockRight.appendChild(personalSection);

  return { aboutBlockLeft, aboutBlockRight };
};

const aboutSection = document.querySelector("#about");
const aboutBlock = createAboutBlock(infos);
aboutSection.appendChild(aboutBlock.aboutBlockLeft);
aboutSection.appendChild(aboutBlock.aboutBlockRight);

// CONTACT section
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
