import { useState } from "react";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LeftContact from "./LeftContact";
import TemplateAbout from "./TemplateAbout";
import usePageStyles from "../stylePages";
import ja from "../img/ja.png";

const AboutMe = () => {
  const [activeButton, setActiveButton] = useState<string>("bio");
  const [activeContactButton, setActiveContactButton] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openContact, setOpenContact] = useState<boolean>(false);
  const [templateProps, setTemplateProps] = useState({
    textOne: "Hi There",
    textTwo: "I am Tomas and 25 year old",
    textThree: "Since 1.5.2022 I am learning programing.",
    textFour: "My fovorite programing language",
    textFive: "is React,Typescript/JavaScript.",
    textSix: "I would like to have programing career.",
    textSeven: "I like learning programing.",
    textEight: "Please rate my projects.",
    textHelp: "*",
    textNine: "Thank you check my portfolio.",
    textTen: "Thank you rate my projects.",
    textEleven: "Thank you your feed back :)",
    textTwelve: "Goodbye, have a nice day",
  });

  const handleBioClick = () => {
    setTemplateProps({
      textOne: "Hi There",
      textTwo: "I am Tomas and 25 year old",
      textThree: "Since 1.5.2022 I am learning programing.",
      textFour: "My fovorite programing language",
      textFive: "is React,Typescript/JavaScript.",
      textSix: "I would like to have programing career.",
      textSeven: "I like learning programing.",
      textEight: "Please rate my projects.",
      textHelp: "*",
      textNine: "Thank you check my portfolio.",
      textTen: "Thank you rate my projects.",
      textEleven: "Thank you your feed back :)",
      textTwelve: "Goodbye, have a nice day",
    });
  };

  const handleInterestsClick = () => {
    setTemplateProps({
      textOne: "My Hobbies",
      textTwo: "I like football, badminton and ski-touring",
      textThree: "Me and my friends like to play badminton together",
      textFour: "and we also like to go on ski tours together",
      textFive: "I like football and hockey as passive sports",
      textSix: "I like playstation",
      textSeven: "My favorite games are The last of us Part I and part II",
      textEight: "Next games: God of war and God of war Ragnarok,",
      textHelp: "* My current game is Fortnite",
      textNine: "",
      textTen: "I like to talk about other things as well.",
      textEleven: "This is my all hobby",
      textTwelve: "Thank you and have a nice day",
    });
  };

  const handlePrimarySchoolClick = () => {
    setTemplateProps({
      textOne: "My primary school",
      textTwo: "My primary school is located at",
      textThree: "Detvianska Huta 369, 962 05",
      textFour: "This is good school",
      textFive: "She taught me a lot",
      textSix: "I studied at this school ",
      textSeven: "from 2005 to 2014",
      textEight: "",
      textNine: "",
      textHelp: "*",
      textTen: "",
      textEleven: "Thank you",
      textTwelve: "Goodbye, have a nice day",
    });
  };

  const handleHighSchoolClick = () => {
    setTemplateProps({
      textOne: "My high school",
      textTwo: "My high school is located at",
      textThree: "Sturova 848, 962 12 Detva",
      textFour: "I studied the field CNC machinist",
      textFive: "I learned cnc technologie",
      textSix: "and programing cnc machines",
      textSeven: "I didn't stay very much with this",
      textEight: "I only enjoyed programming",
      textHelp: "* In the end, I decided on web programming anyway",
      textNine: "",
      textTen: "It is quite difficult to find a job",
      textEleven: "in Slovakia as a Junior programmer",
      textTwelve: "Goodbye, thank and have a nice day",
    });
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickContact = () => {
    setOpenContact(!openContact);
  };
  const classes = usePageStyles();
  return (
    <>
      <Box className={classes.aboutContainer}>
        <List
          className={classes.aboutLeftNavContainer}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ position: "relative" }}
              className={classes.aboutLeftWrap}
            >
              {" "}
              personal-info
              <div className={classes.aboutTextRight}>_about_me</div>
            </ListSubheader>
          }
        >
          <ListItemButton
            className={classes.aboutHoverBtnEffect}
            style={{
              color: activeButton === "bio" ? "#fff " : "#607B96",
            }}
            onClick={() => {
              handleBioClick();
              setActiveButton("bio");
            }}
          >
            <ChevronRightIcon />
            <ListItemIcon>
              <FolderIcon className={classes.aboutIconBio} />
            </ListItemIcon>

            <ListItemText className={classes.aboutBtnText} primary="bio" />
          </ListItemButton>
          <ListItemButton
            className={classes.aboutHoverBtnEffect}
            onClick={() => {
              handleInterestsClick();
              setActiveButton("interests");
            }}
            style={{
              color: activeButton === "interests" ? "#fff" : "#607B96",
            }}
          >
            <ChevronRightIcon />
            <ListItemIcon>
              <FolderIcon className={classes.aboutIconInterest} />
            </ListItemIcon>

            <ListItemText
              className={classes.aboutBtnText}
              primary="interests"
            />
          </ListItemButton>

          <ListItemButton
            className={classes.aboutHoverBtnEffect}
            style={{
              color: activeButton === "education" ? "#fff " : "#607B96",
            }}
            onClick={() => {
              handleClick();
              setActiveButton("education");
            }}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
            <ListItemIcon>
              <FolderIcon className={classes.aboutIconEducation} />
            </ListItemIcon>
            <ListItemText
              className={classes.aboutBtnText}
              primary="education"
            />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                className={classes.aboutBtnEducationStyle}
                onClick={() => {
                  handlePrimarySchoolClick();
                  setActiveButton("primary-school");
                }}
                style={{
                  color: activeButton === "primary-school" ? "#fff" : "#607B96",
                }}
              >
                <SchoolIcon />
                <ListItemText
                  className={classes.aboutBtnEducationFont}
                  primary="primary-school"
                />
              </ListItemButton>
              <ListItemButton
                className={classes.aboutBtnEducationStyle}
                onClick={() => {
                  handleHighSchoolClick();
                  setActiveButton("high-school");
                }}
                style={{
                  color: activeButton === "high-school" ? "#fff" : "#607B96",
                }}
              >
                <SchoolIcon />
                <ListItemText
                  className={classes.aboutBtnEducationFont}
                  primary="high-school"
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            className={classes.aboutContactContainer}
            onClick={() => {
              handleClickContact();
              setActiveContactButton((prevState) =>
                prevState === "contact" ? "" : "contact"
              );
            }}
            style={{
              color: activeContactButton === "contact" ? "#fff" : "#607B96",
            }}
          >
            {openContact ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            <ListItemText primary="contact" />
          </ListItemButton>
          <Collapse in={openContact} timeout="auto" unmountOnExit>
            {/* leftContact */}
            <LeftContact />
          </Collapse>
        </List>
        {/* Template */}
        <Box className={classes.aboutNextContainer}>
          <TemplateAbout {...templateProps} />
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              position: "relative",
              top: "105px",
              width: "1px !important",
              height: "90vh",
              background: "#1E2D3D",
            }}
          />
          <Box className={classes.aboutNextWrap}>
            <Box className={classes.aboutNextMiniWrap}>
              <Typography variant="body1">
                <span className={classes.formTextGrey}>1&nbsp;</span>
                <span className={classes.formTextPink}>const</span>{" "}
                <span className={classes.formTextPurple}>button</span>{" "}
                <span className={classes.formTextPink}>=</span>{" "}
                <span className={classes.formTextPurple}>
                  document.querySelector
                </span>{" "}
                <span className={classes.formTextGrey}>(</span>
                <span className={classes.formTextOrange}>'#sendBtn'</span>
                <span className={classes.formTextGrey}>);</span>
                <br />
                <span className={classes.formTextGrey}>2&nbsp;</span>
                <br />
                <span className={classes.formTextGrey}>3&nbsp;</span>
                <span className={classes.formTextPink}>const</span>&nbsp;
                <span className={classes.formTextPurple}>image</span>&nbsp;
                <span className={classes.formTextPink}>=</span>&nbsp;
                <span className={classes.formTextPurple}>
                  document.querySelector
                </span>
                <span className={classes.formTextGrey}>{`(`}</span>
                <span className={classes.formTextOrange}>'#myImage'</span>
                <span className={classes.formTextGrey}>{`);`}</span>
                <br />
                <span className={classes.formTextGrey}>4&nbsp;</span>
                <br />
                <span className={classes.formTextGrey}>5&nbsp;</span>
                <span className={classes.formTextPurple}>
                  button
                  <span className={classes.formTextGrey}>.</span>
                  addEventListener
                </span>
                <span className={classes.formTextGrey}>(</span>
                <span className={classes.formTextOrange}>'click'</span>
                <span className={classes.formTextGrey}>, ()</span>&nbsp;
                <span className={classes.formTextPink}>{`=>`}</span>&nbsp;
                <span className={classes.formTextGrey}>{`{`}</span>
                <br />
                <span className={classes.formTextGrey}>6&nbsp;</span>
                &nbsp;&nbsp;
                <span className={classes.formTextPurple}>
                  image<span className={classes.formTextGrey}>.</span>src
                </span>
                <span className={classes.formTextGrey}>(</span>
                <span className={classes.formTextPurple}>"my_img.png"</span>
                <span className={classes.formTextGrey}>
                  ); <br />
                  <span className={classes.formTextGrey}>7&nbsp;</span>
                  {`}`})
                </span>
                <br />
              </Typography>
            </Box>
            <Box className={classes.aboutNextImgContainer}>
              <span className={classes.formTextGrey}>// Result</span>
              <img src={ja} alt="Mine photo" width={225} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
