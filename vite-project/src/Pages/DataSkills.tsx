import boxOffice from "../img/box office.webp";
import filmDatabase from "../img/film database.webp";
import logicGame from "../img/logic game.webp";
import marketPlace from "../img/marketplace.webp";
import menu from "../img/menu.png";
import notes from "../img/notes.webp";
import portfolio from "../img/portfolio.webp";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiReact,
  SiFirebase,
} from "react-icons/si";

const DataSkills = [
  {
    id: 1,
    img: portfolio,
    icon: [
      <SiHtml5 style={{ fontSize: "20px", color: "#e44d26" }} />,
      <SiSass style={{ fontSize: "20px", color: "#cd6799" }} />,
      <SiJavascript style={{ fontSize: "20px", color: "#f7e025" }} />,
    ],
    technologies: ["html", "sass", "javascript"],
    nameProject: "Portfolio",
    detailProject: "My first portfolio html,css and javascript",
    openProject: "https://github.com/katzohub/Portfolio-App",
  },
  {
    id: 2,
    img: menu,
    icon: [
      <SiHtml5 style={{ fontSize: "20px", color: "#e44d26" }} />,
      <SiSass style={{ fontSize: "20px", color: "#cd6799" }} />,
      <SiJavascript style={{ fontSize: "20px", color: "#f7e025" }} />,
    ],
    technologies: ["html", "sass", "javascript"],
    nameProject: "Menu-Restaurant",
    detailProject: "My first menu for restaurant html,css and javascript",
    openProject: "https://github.com/katzohub/Info-Food-App",
  },
  {
    id: 3,
    img: logicGame,
    nameProject: "Game seven",
    icon: [
      <SiHtml5 style={{ fontSize: "20px", color: "#e44d26" }} />,
      <SiCss3 style={{ fontSize: "20px", color: "#306af1" }} />,
      <SiJavascript style={{ fontSize: "20px", color: "#f7e025" }} />,
    ],
    technologies: ["html", "css", "javascript"],
    detailProject: "My first game html,css and javascript",
    openProject: "https://github.com/katzohub/Game-Seven-App",
  },
  {
    id: 4,
    img: boxOffice,
    nameProject: "Box Office",
    icon: [
      <SiPhp style={{ fontSize: "20px", color: "#7b7fb5" }} />,
      <SiCss3 style={{ fontSize: "20px", color: "#306af1" }} />,
    ],
    technologies: ["php", "css"],
    detailProject: "My first mini project with php",
    openProject: "https://github.com/katzohub/Box-office-php",
  },
  {
    id: 5,
    img: filmDatabase,
    icon: [
      <SiReact style={{ fontSize: "20px", color: "#61dafb" }} />,
      <SiJavascript style={{ fontSize: "20px", color: "#f7e025" }} />,
      <SiCss3 style={{ fontSize: "20px", color: "#306af1" }} />,
    ],
    technologies: ["react", "css", "javascript"],
    nameProject: "Film-Database",
    detailProject: "My first react project is not very good...",
    openProject: "https://github.com/katzohub/Film-Database-App",
  },
  {
    id: 6,
    img: notes,
    icon: [
      <SiReact style={{ fontSize: "20px", color: "#61dafb" }} />,
      <SiTypescript style={{ fontSize: "20px", color: "#007acc" }} />,
      <SiTailwindcss style={{ fontSize: "20px", color: "#38bdf8" }} />,
    ],
    technologies: ["react", "tailwind", "typescript"],
    nameProject: "Notes",
    detailProject: "My next project with react",
    openProject: "https://github.com/katzohub/REACT-TS",
  },
  {
    id: 7,
    icon: [
      <SiReact style={{ fontSize: "20px", color: "#61dafb" }} />,
      <SiTypescript style={{ fontSize: "20px", color: "#007acc" }} />,
      <SiFirebase style={{ fontSize: "20px", color: "#ffcc32" }} />,
    ],
    technologies: ["react", "firebase", "javascript"],
    img: marketPlace,
    nameProject: "Market-Place",
    detailProject: "My next mini project with react",
    openProject: "https://github.com/katzohub/marketplace-Mobile-App",
  },
];

export default DataSkills;
