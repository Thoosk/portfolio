import gitImg from "./images/contactImgs/github.svg";
import instaImg from "./images/contactImgs/instagram-seeklogo.com.svg";
import gmailImg from "./images/contactImgs/gmail.svg";

const gitInfo = {
  url: gitImg,
  imgAlt: "Logo of GIT",
  link: "https://github.com/Thoosk",
};
const instaInfo = {
  url: instaImg,
  imgAlt: "Logo of Instagram",
  link: "https://www.instagram.com/skante/",
};
const mailInfo = {
  url: gmailImg,
  imgAlt: "Logo of GMail",
  link: "mailto: thomas.skant@gmail.com",
};

const contactArray = [gitInfo, instaInfo, mailInfo];

export default contactArray;
