import { createElement } from "react";
import { FaHome, FaPhoneAlt, FaUser, FaProjectDiagram } from "react-icons/fa";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const FaHomeIcon = createElement(FaHome);
const FaPhoneAltIcon = createElement(FaPhoneAlt);
const FaUserIcon = createElement(FaUser);
const FaProjectDiagramIcon = createElement(FaProjectDiagram);
const GitHubMuiIcon = createElement(GitHubIcon);
const LinkedInMuiIcon = createElement(LinkedInIcon);
const FacebookMuiIcon = createElement(FacebookIcon);
const TwitterMuiIcon = createElement(TwitterIcon);

type NavigationDataProps = {
  goUrl: string;
  icon: JSX.Element;
  text?: string;
};

export const falseNavigationData: NavigationDataProps[] = [
  {
    goUrl: "https://twitter.com/TomOliak140446",
    icon: TwitterMuiIcon,
  },
  {
    goUrl: "https://www.facebook.com/tomas.olsiak.37/",
    icon: FacebookMuiIcon,
  },
  {
    goUrl: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-ol%C5%A1iak-232196260/",
    icon: LinkedInMuiIcon,
  },
  {
    goUrl: "https://github.com/katzohub/",
    icon: GitHubMuiIcon,
    text: "GitHub",
  },
];
export const trueNavigationData: NavigationDataProps[] = [
  {
    goUrl: "/",
    icon: FaHomeIcon,
    text: "nav.home",
  },
  {
    goUrl: "/about-me",
    icon: FaUserIcon,
    text: "nav.about",
  },
  {
    goUrl: "/projects",
    icon: FaProjectDiagramIcon,
    text: "nav.project",
  },
  {
    goUrl: "/contact-me",
    icon: FaPhoneAltIcon,
    text: "nav.contact",
  },
];
