import { FC, useState } from "react";
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
import usePageStyles from "../styles/stylePages";
import {
  TemplateTextBio,
  TemplateTextInterest,
  TemplateTextPrimarySchool,
  TemplateTextHighSchool,
} from "../constants/TemplatesAbout";
import ja from "../assets/img/ja.png";

const AboutMe: FC = () => {
  const [activeButton, setActiveButton] = useState<string>("bio");
  const [activeContactButton, setActiveContactButton] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [templateProps, setTemplateProps] = useState<React.ReactNode>(
    <TemplateTextBio />
  );
  const [openContact, setOpenContact] = useState<boolean>(false);
  const intl = useIntl();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickContact = () => {
    setOpenContact(!openContact);
  };

  const classes = usePageStyles();

  const toggleText = (active: string): React.ReactNode => {
    if (active === intl.formatMessage({ id: "about.bio" })) {
      return <TemplateTextBio />;
    } else if (active === intl.formatMessage({ id: "about.interests" })) {
      return <TemplateTextInterest />;
    } else if (active === intl.formatMessage({ id: "about.primaryScholl" })) {
      return <TemplateTextPrimarySchool />;
    } else if (active === intl.formatMessage({ id: "about.highSchool" })) {
      return <TemplateTextHighSchool />;
    } else {
      return <TemplateTextBio />;
    }
  };

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
                {intl.formatMessage({ id: "about.personal" })}
                <div className={classes.aboutTextRight}>{activeButton}</div>
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
                setTemplateProps(
                  toggleText(intl.formatMessage({ id: "about.bio" }))
                );
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
                setTemplateProps(
                  toggleText(intl.formatMessage({ id: "about.interests" }))
                );

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
                    setTemplateProps(
                      toggleText(
                        intl.formatMessage({ id: "about.primaryScholl" })
                      )
                    );

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
                    setTemplateProps(
                      toggleText(intl.formatMessage({ id: "about.highSchool" }))
                    );
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
          {/* TODO */}
          <Box className={classes.aboutNextContainer}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                alignContent: "center",
                position: "relative",
                paddingTop: "120px",
              }}
            >
              {templateProps}
              <div className={classes.aboutDivider}></div>
            </Box>

            <Box className={classes.aboutNextWrap}>
              <Box className={classes.aboutNextMiniWrap}>
                <Box
                  sx={{
                    "& span": {
                      fontSize: "clamp(13px, 1vw, 16px)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",

                      display: "flex",
                    }}
                  >
                    <span className={classes.formTextGrey}>1&nbsp;</span>
                    <span className={classes.formTextPink}>const&nbsp;</span>
                    <span className={classes.formTextPurple}>button&nbsp;</span>
                    <span className={classes.formTextPink}>=&nbsp;</span>{" "}
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
