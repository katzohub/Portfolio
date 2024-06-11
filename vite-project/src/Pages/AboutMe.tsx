import { FC, useState, useEffect } from "react";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import { useIntl } from "react-intl";
import SchoolIcon from "@mui/icons-material/School";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LeftContact from "./LeftContact";
import TemplateAbout from "./TemplateAbout";
import usePageStyles from "../styles/stylePages";
import { TextProps } from "../types";
import ja from "../assets/img/ja.png";

const AboutMe: FC = () => {
  const [activeButton, setActiveButton] = useState<string>("bio");
  const [activeContactButton, setActiveContactButton] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openContact, setOpenContact] = useState<boolean>(false);
  const intl = useIntl();

  const [templateProps, setTemplateProps] = useState<TextProps>({
    textOne: `${intl.formatMessage({ id: "about.bioTextOne" })}`,
    textTwo: `${intl.formatMessage({ id: "about.bioTextTwo" })}`,
    textThree: `${intl.formatMessage({ id: "about.bioTextThree" })}`,
    textFour: `${intl.formatMessage({ id: "about.bioTextFour" })}`,
    textFive: `${intl.formatMessage({ id: "about.bioTextFive" })}`,
    textSix: `${intl.formatMessage({ id: "about.bioTextSix" })}`,
    textSeven: `${intl.formatMessage({ id: "about.bioTextSeven" })}`,
    textEight: `${intl.formatMessage({ id: "about.bioTextEight" })}`,
    textHelp: "*",
    textNine: `${intl.formatMessage({ id: "about.bioTextNine" })}`,
    textTen: `${intl.formatMessage({ id: "about.bioTextTen" })}`,
    textEleven: `${intl.formatMessage({ id: "about.bioTextEleven" })}`,
    textTwelve: `${intl.formatMessage({ id: "about.bioTextTwelve" })}`,
  });

  const handleBioClick = () => {
    setTemplateProps({
      textOne: `${intl.formatMessage({ id: "about.bioTextOne" })}`,
      textTwo: `${intl.formatMessage({ id: "about.bioTextTwo" })}`,
      textThree: `${intl.formatMessage({ id: "about.bioTextThree" })}`,
      textFour: `${intl.formatMessage({ id: "about.bioTextFour" })}`,
      textFive: `${intl.formatMessage({ id: "about.bioTextFive" })}`,
      textSix: `${intl.formatMessage({ id: "about.bioTextSix" })}`,
      textSeven: `${intl.formatMessage({ id: "about.bioTextSeven" })}`,
      textEight: `${intl.formatMessage({ id: "about.bioTextEight" })}`,
      textHelp: "*",
      textNine: `${intl.formatMessage({ id: "about.bioTextNine" })}`,
      textTen: `${intl.formatMessage({ id: "about.bioTextTen" })}`,
      textEleven: `${intl.formatMessage({ id: "about.bioTextEleven" })}`,
      textTwelve: `${intl.formatMessage({ id: "about.bioTextTwelve" })}`,
    });
  };

  const handleInterestsClick = () => {
    setTemplateProps({
      textOne: `${intl.formatMessage({ id: "about.interestsTextOne" })}`,
      textTwo: `${intl.formatMessage({ id: "about.interestsTextTwo" })}`,
      textThree: `${intl.formatMessage({ id: "about.interestsTextThree" })}`,
      textFour: `${intl.formatMessage({ id: "about.interestsTextFour" })}`,
      textFive: `${intl.formatMessage({ id: "about.interestsTextFive" })}`,
      textSix: `${intl.formatMessage({ id: "about.interestsTextSix" })}`,
      textSeven: `${intl.formatMessage({ id: "about.interestsTextSeven" })}`,
      textEight: `${intl.formatMessage({ id: "about.interestsTextEight" })}`,
      textHelp: `${intl.formatMessage({ id: "about.interestsTextNine" })}`,
      textNine: "",
      textTen: `${intl.formatMessage({ id: "about.interestsTextTen" })}`,
      textEleven: `${intl.formatMessage({ id: "about.interestsTextEleven" })}`,
      textTwelve: `${intl.formatMessage({ id: "about.interestsTextTwelve" })}`,
    });
  };

  const handlePrimarySchoolClick = () => {
    setTemplateProps({
      textOne: `${intl.formatMessage({ id: "about.educationTextOne" })}`,
      textTwo: `${intl.formatMessage({ id: "about.educationTextTwo" })}`,
      textThree: `${intl.formatMessage({ id: "about.educationTextThree" })}`,
      textFour: `${intl.formatMessage({ id: "about.educationTextFour" })}`,
      textFive: `${intl.formatMessage({ id: "about.educationTextFive" })}`,
      textSix: `${intl.formatMessage({ id: "about.educationTextSix" })}`,
      textSeven: `${intl.formatMessage({ id: "about.educationTextSeven" })}`,
      textEight: `${intl.formatMessage({ id: "about.educationTextEight" })}`,
      textHelp: `${intl.formatMessage({ id: "about.educationTextNine" })}`,
      textNine: `${intl.formatMessage({ id: "about.educationTextTen" })}`,
      textTen: "",
      textEleven: `${intl.formatMessage({ id: "about.educationTextEleven" })}`,
      textTwelve: `${intl.formatMessage({ id: "about.educationTextTwelve" })}`,
    });
  };

  const handleHighSchoolClick = () => {
    setTemplateProps({
      textOne: `${intl.formatMessage({ id: "about.highEducationTextOne" })}`,
      textTwo: `${intl.formatMessage({ id: "about.highEducationTextTwo" })}`,
      textThree: `${intl.formatMessage({
        id: "about.highEducationTextThree",
      })}`,
      textFour: `${intl.formatMessage({ id: "about.highEducationTextFour" })}`,
      textFive: `${intl.formatMessage({ id: "about.highEducationTextFive" })}`,
      textSix: `${intl.formatMessage({ id: "about.highEducationTextSix" })}`,
      textSeven: `${intl.formatMessage({
        id: "about.highEducationTextSeven",
      })}`,
      textEight: `${intl.formatMessage({
        id: "about.highEducationTextEight",
      })}`,
      textHelp: `${intl.formatMessage({
        id: "about.highEducationTextNine",
      })}`,
      textNine: "",
      textTen: `${intl.formatMessage({
        id: "about.highEducationTextTen",
      })}`,
      textEleven: `${intl.formatMessage({
        id: "about.highEducationTextEleven",
      })}`,
      textTwelve: `${intl.formatMessage({
        id: "about.highEducationTextTwelve",
      })}`,
    });
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickContact = () => {
    setOpenContact(!openContact);
  };

  const classes = usePageStyles();
  useEffect(() => {
    switch (activeButton) {
      case "bio":
        handleBioClick();
        break;
      case "interests":
        handleInterestsClick();
        break;
      case "primary-school":
        handlePrimarySchoolClick();
        break;
      case "high-school":
        handleHighSchoolClick();
        break;
      default:
        handleBioClick();
    }
  }, [activeButton, intl.locale]);
  return (
    <>
      <Box className={classes.aboutContainer}>
        <Box
          sx={(theme) => ({
            width: "100%",
            height: "100dvh",
            display: "flex",

            [theme.breakpoints.down("md")]: {
              display: "block",
            },
          })}
        >
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
                {intl.formatMessage({ id: "about.personal" })}
                <div className={classes.aboutTextRight}>
                  {intl.formatMessage({ id: "about.me" })}
                </div>
              </ListSubheader>
            }
          >
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.aboutMinWidth}
            >
              {intl.formatMessage({ id: "about.aboutPosttitle" })}
            </ListSubheader>
            <ListItemButton
              className={classes.aboutHoverBtnEffect}
              sx={(theme) => ({
                color:
                  activeButton === "bio"
                    ? theme.myColors.colorFFF
                    : theme.myColors.colorNonActive,
              })}
              onClick={() => {
                handleBioClick();
                setActiveButton("bio");
              }}
            >
              <ChevronRightIcon />

              <ListItemIcon>
                <FolderIcon className={classes.aboutIconBio} />
              </ListItemIcon>

              <ListItemText
                className={classes.aboutBtnText}
                primary={intl.formatMessage({ id: "about.bio" })}
              />
            </ListItemButton>
            <ListItemButton
              className={classes.aboutHoverBtnEffect}
              onClick={() => {
                handleInterestsClick();
                setActiveButton("interests");
              }}
              sx={(theme) => ({
                color:
                  activeButton === "interests"
                    ? theme.myColors.colorFFF
                    : theme.myColors.colorNonActive,
              })}
            >
              <ChevronRightIcon />
              <ListItemIcon>
                <FolderIcon className={classes.aboutIconInterest} />
              </ListItemIcon>

              <ListItemText
                className={classes.aboutBtnText}
                primary={intl.formatMessage({ id: "about.interests" })}
              />
            </ListItemButton>

            <ListItemButton
              className={classes.aboutHoverBtnEffect}
              sx={(theme) => ({
                color:
                  activeButton === "education"
                    ? theme.myColors.colorFFF
                    : theme.myColors.colorNonActive,
              })}
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
                primary={intl.formatMessage({ id: "about.education" })}
              />
            </ListItemButton>
            <Collapse
              in={open}
              timeout="auto"
              unmountOnExit
              className={classes.aboutWrappScholls}
            >
              <List
                component="div"
                disablePadding
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    position: "relative",
                    left: "-35px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                })}
              >
                <ListItemButton
                  className={classes.aboutBtnEducationStyle}
                  onClick={() => {
                    handlePrimarySchoolClick();
                    setActiveButton("primary-school");
                  }}
                  sx={(theme) => ({
                    color:
                      activeButton === "primary-school"
                        ? theme.myColors.colorFFF
                        : theme.myColors.colorNonActive,
                  })}
                >
                  <SchoolIcon />
                  <ListItemText
                    className={classes.aboutBtnEducationFont}
                    primary={intl.formatMessage({ id: "about.primaryScholl" })}
                  />
                </ListItemButton>
                <ListItemButton
                  className={classes.aboutBtnEducationStyle}
                  onClick={() => {
                    handleHighSchoolClick();
                    setActiveButton("high-school");
                  }}
                  sx={(theme) => ({
                    color:
                      activeButton === "high-school"
                        ? theme.myColors.colorFFF
                        : theme.myColors.colorNonActive,
                  })}
                >
                  <SchoolIcon />
                  <ListItemText
                    className={classes.aboutBtnEducationFont}
                    primary={intl.formatMessage({ id: "about.highSchool" })}
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
              sx={(theme) => ({
                color:
                  activeContactButton === "contact"
                    ? theme.myColors.colorFFF
                    : theme.myColors.colorNonActive,
              })}
            >
              {openContact ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              <ListItemText
                primary={intl.formatMessage({ id: "contact.LeftCard" })}
              />
            </ListItemButton>
            <Collapse
              className={classes.aboutCollapseContact}
              in={openContact}
              timeout="auto"
              unmountOnExit
            >
              <LeftContact />
            </Collapse>
          </List>
          {/* Template */}
          <Box className={classes.aboutNextContainer}>
            <TemplateAbout {...templateProps} />
            <div className={classes.aboutDivider}></div>
            <Box className={classes.aboutNextWrap}>
              <Box className={classes.aboutNextMiniWrap}>
                <Box>
                  <Box
                    sx={{
                      width: "100%",

                      display: "flex",
                    }}
                  >
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
                  </Box>
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
                </Box>
              </Box>
              <Box className={classes.aboutNextImgContainer}>
                <span className={classes.formTextGrey}>// Result</span>
                <img src={ja} alt="Mine photo" className={classes.aboutImg} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
