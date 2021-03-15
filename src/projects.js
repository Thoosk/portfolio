import weatherImg from "./images/projectImgs/weather.png";
import tttImg from "./images/projectImgs/ttt.png";
import toDoImg from "./images/projectImgs/toDo.png";
import rpsImg from "./images/projectImgs/rps.png";
import libraryImg from "./images/projectImgs/library.png";
import gugleImg from "./images/projectImgs/gugle.png";
import etchImg from "./images/projectImgs/etchasketch.png";
import calcImg from "./images/projectImgs/calc.png";
import cafeImg from "./images/projectImgs/cafewolf.png";

// IDEA: putting each project as an object in an array and then loop thorugh it in the createProjectTile() method

const weatherProject = {
  name: "Weather App",
  url: weatherImg,
  imgAlt: "Preview of Weather App",
  link: "https://thoosk.github.io/weatherApp/",
};
const rpsProject = {
  name: "Rock Paper Scissors",
  url: rpsImg,
  imgAlt: "Preview of Rock Paper Scissors",
  link: "https://thoosk.github.io/rock_paper_scissors/",
};
const cafeProject = {
  name: "Mock Homepage",
  url: cafeImg,
  imgAlt: "Preview of Cafe Wolf Homepage",
  link: "https://thoosk.github.io/restaurant_page/",
};
const tttProject = {
  name: "Tic Tac Toe",
  url: tttImg,
  imgAlt: "Preview of Tic Tac Toe",
  link: "https://thoosk.github.io/tic-tac-toe/",
};
const gugleProject = {
  name: "Google Mock Up",
  url: gugleImg,
  imgAlt: "Preview of Google Mock Up Homepage",
  link: "https://thoosk.github.io/google-homepage/",
};

const toDoProject = {
  name: "ToDo List",
  url: toDoImg,
  imgAlt: "Preview of ToDo List",
  link: "https://thoosk.github.io/ToDo-List/",
};

const libraryProject = {
  name: "Personal Library",
  url: libraryImg,
  imgAlt: "Preview of Personal Library",
  link: "https://thoosk.github.io/bookLibrary/",
};

const etchasketchProject = {
  name: "Etch-a-Sketch",
  url: etchImg,
  imgAlt: "Preview of Etch-a-Sketch",
  link: "https://thoosk.github.io/etch-a-sketch/",
};
const calculatorProject = {
  name: "Web Calculator",
  url: calcImg,
  imgAlt: "Preview of Web Calculator",
  link: "https://thoosk.github.io/calculator/",
};

const projectsArray = [
  weatherProject,
  rpsProject,
  cafeProject,
  tttProject,
  gugleProject,
  toDoProject,
  libraryProject,
  etchasketchProject,
  calculatorProject,
];

export default projectsArray;
