import { createElement } from "react";
import { FaHome, FaPhoneAlt, FaUser, FaProjectDiagram } from "react-icons/fa";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { NavigationDataProps } from "../types";

const FaHomeIcon = createElement(FaHome);
const FaPhoneAltIcon = createElement(FaPhoneAlt);
const FaUserIcon = createElement(FaUser);
const FaProjectDiagramIcon = createElement(FaProjectDiagram);
const GitHubMuiIcon = createElement(GitHubIcon);
const LinkedInMuiIcon = createElement(LinkedInIcon);
const FacebookMuiIcon = createElement(FacebookIcon);
const XIconMuiIcon = createElement(XIcon);

export const falseNavigationData: NavigationDataProps[] = [
  {
    goUrl: "https://x.com/TOM3K_R34DY",
    icon: XIconMuiIcon,
    dataCy: "x-link",
    aria: "icon for x social media",
  },
  {
    goUrl: "https://www.facebook.com/tomas.olsiak.37/",
    icon: FacebookMuiIcon,
    dataCy: "facebook-link",
    aria: "icon for facebook social media",
  },
  {
    goUrl: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-ol%C5%A1iak-232196260/",
    icon: LinkedInMuiIcon,
    dataCy: "linkedin-link",
    aria: "icon for linkedin social media",
  },
  {
    goUrl: "https://github.com/katzohub/",
    icon: GitHubMuiIcon,
    text: "GitHub",
    dataCy: "github-link",
    aria: "icon for github social media",
  },
];
export const trueNavigationData: NavigationDataProps[] = [
  {
    goUrl: "/",
    icon: FaHomeIcon,
    text: "nav.home",
    dataCy: "home-link",
  },
  {
    goUrl: "/about-me",
    icon: FaUserIcon,
    text: "nav.about",
    dataCy: "about-link",
  },
  {
    goUrl: "/projects",
    icon: FaProjectDiagramIcon,
    text: "nav.project",
    dataCy: "project-link",
  },
  {
    goUrl: "/contact-me",
    icon: FaPhoneAltIcon,
    text: "nav.contact",
    dataCy: "contact-link",
  },
];
