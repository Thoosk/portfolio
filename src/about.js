import profileImg from "./images/aboutImgs/profile_placeholder.jpeg";
import aliraImg from "./images/aboutImgs/alira2.JPG";

const profileInfo = {
  name: "Thomas Skant",
  city: "Graz",
  age: "27",
  imgUrl: profileImg,
  imgAlt: "Picture of Creator",
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "Webpack",
    "Linux (Ubuntu)",
    "MySQL",
    "Java",
  ],
  level: "Junior Dev",
  futureSkills: [
    "Sass",
    "Typescript",
    "React / Angular",
    "Gatsby",
    "GraphQL",
    "Pop_OS!",
  ],
  likes: [
    "Books",
    "Nature",
    "Hiking",
    "Photography",
    "Music",
    "The family dog",
  ],
  favouriteThings: {
    book: "Witcher Series",
    tvShow: "The Office",
    videoGame: "The Legend Of Zelda Series",
    beverage: "Coffee",
  },
  roadText: `Started my road into Development at about three years ago, where I looked into some Python and
  C. However, writing code in these languages never really got a grip of me. After pausing for
  about one and a half
  years I gave Java a try while I was working a fulltime-job.
  Java was interesting and worked out really well for me, but as much as I felt liked
  language, I wanted to try something new.
  That's how I started to get into Web-Development at the end of november 2020, since the
  reoccuring lockdown really wanted to keep me behind my laptop.
  From then on I've been learning to write code in Vanilla JavaScript and getting to know the
  ins-and-outs
  of HTML and CSS and I haven't been able to stop doing it. Building websites and playing around
  with the design and structure has been a somewhat amusing experience (not all the time.. looking
  at
  you CSS).
  My next step is to learn a front-end framework which suits me, but the decision on which is
  harder than I ever thought.`,
  alira: aliraImg,
};

export default profileInfo;
