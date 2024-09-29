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
  SiMui,
} from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";
import boxOffice from "../assets/img/box office.webp";
import filmDatabase from "../assets/img/film database.webp";
import logicGame from "../assets/img/logic game.webp";
import marketPlace from "../assets/img/marketplace.webp";
import upgradePorfolio from "../assets/img/upgradePorfolio.webp";
import menu from "../assets/img/menu.webp";
import notes from "../assets/img/notes.webp";
import portfolio from "../assets/img/portfolio.webp";

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
    nameProject: "project.namePortfolio",
    detailProject: "project.namePortfolioText",
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
    nameProject: "project.restaurant",
    detailProject: "project.restaurantText",
    openProject: "https://github.com/katzohub/Info-Food-App",
  },
  {
    id: 3,
    img: logicGame,
    icon: [
      <SiHtml5 style={{ fontSize: "20px", color: "#e44d26" }} />,
      <SiCss3 style={{ fontSize: "20px", color: "#306af1" }} />,
      <SiJavascript style={{ fontSize: "20px", color: "#f7e025" }} />,
    ],
    technologies: ["html", "css", "javascript"],
    nameProject: "project.nameGame",
    detailProject: "project.nameGameText",
    openProject: "https://github.com/katzohub/Game-Seven-App",
  },
  {
    id: 4,
    img: boxOffice,
    icon: [
      <SiPhp style={{ fontSize: "20px", color: "#7b7fb5" }} />,
      <SiCss3 style={{ fontSize: "20px", color: "#306af1" }} />,
    ],
    technologies: ["php", "css"],
    nameProject: "project.nameOffice",
    detailProject: "project.nameOfficeText",
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
    nameProject: "project.nameDatabase",
    detailProject: "project.nameDatabaseText",
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
    nameProject: "project.nameNotes",
    detailProject: "project.nameNotesText",
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
    nameProject: "project.nameMarkPlace",
    detailProject: "project.nameMarkPlaceText",
    openProject: "https://github.com/katzohub/marketplace-Mobile-App",
  },
  {
    id: 8,
    icon: [
      <SiReact style={{ fontSize: "20px", color: "#61dafb" }} />,
      <SiTypescript style={{ fontSize: "20px", color: "#007acc" }} />,
      <SiMui style={{ fontSize: "20px", color: "#007fff" }} />,
      <SiFirebase style={{ fontSize: "20px", color: "#ffcc32" }} />,
      <TbBrandCypress style={{ fontSize: "20px", color: "#1c896a" }} />,
    ],
    technologies: ["react", "typescript", "mui", "cypress", "firebase"],
    img: upgradePorfolio,
    nameProject: "project.portolioUpgrade",
    detailProject: "project.portolioUpgradeText",
    openProject: "https://github.com/katzohub/Portfolio",
  },
];

export default DataSkills;
