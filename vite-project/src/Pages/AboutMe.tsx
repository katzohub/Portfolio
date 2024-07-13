import { FC, useState } from "react";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import { useIntl } from "react-intl";
import SchoolIcon from "@mui/icons-material/School";
import FolderIcon from "@mui/icons-material/Folder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LeftContact from "./LeftContact";
import { ChangeButton } from "../components";
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
    } else if (active === intl.formatMessage({ id: "about.primary-school" })) {
      return <TemplateTextPrimarySchool />;
    } else if (active === intl.formatMessage({ id: "about.high-school" })) {
      return <TemplateTextHighSchool />;
    } else {
      return <TemplateTextBio />;
    }
  };
  const changeText = (translate: string, changeText: string) => {
    setTemplateProps(toggleText(intl.formatMessage({ id: translate })));
    setActiveButton(changeText);
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
          <Box
            sx={{ position: "relative" }}
            className={classes.aboutLeftNavContainer}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Box
              sx={(theme) => ({
                position: "absolute",
                right: "0px",
                top: "0px",
                width: "2px",
                border: `1px solid ${theme.myColors.colorLinie} !important`,
                height: "100vh",
                zIndex: 999,
                background: theme.myColors.colorLinie,

                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            ></Box>
            <Box
              sx={(theme) => ({
                width: "100vw",
                height: "56px",
                fontFamily: "Fira Code !important",
                display: "flex",
                justifyContent: "center",
                color: `${theme.myColors.colorFFF} !important`,
                fontSize: "16px !important",
                fontStyle: "normal",
                position: "relative",
                background: theme.myColors.generalBackground,
                zIndex: 500,
                fontWeight: 400,
                [theme.breakpoints.down("md")]: {
                  width: "auto !important",
                  borderBottom: `1px solid transparent`,
                  left: "0px",
                  display: "none",
                },
              })}
            >
              <Box
                sx={(theme) => ({
                  width: "95%",
                  height: "100%",
                  zIndex: 5000,
                  borderBottom: `2px solid ${theme.myColors.colorLinie}`,
                  display: "flex",
                  alignItems: "center",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                  },
                })}
              >
                {intl.formatMessage({ id: "about.personal" })}
                {/* TODO */}
                <Box
                  sx={{
                    position: "relative",
                    left: "120px",
                  }}
                >
                  {intl.formatMessage({ id: `about.${activeButton}` })}
                </Box>
              </Box>
            </Box>

            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.aboutMinWidth}
            >
              {intl.formatMessage({ id: "about.aboutPosttitle" })}
            </ListSubheader>

            <Box
              sx={(theme) => ({
                paddingLeft: "35px",

                [theme.breakpoints.down("md")]: { paddingLeft: "0" },
              })}
            >
              <ChangeButton
                text={"about.bio"}
                myIcon={<FolderIcon className={classes.aboutIconBio} />}
                myCondition={activeButton === "bio"}
                changeText={() => changeText("about.bio", "bio")}
              />
              <ChangeButton
                text={"about.interests"}
                myIcon={<FolderIcon className={classes.aboutIconInterest} />}
                myCondition={activeButton === "interests"}
                changeText={() => changeText("about.interests", "interests")}
              />
              <ListItemButton
                className={classes.aboutHoverBtnEffect}
                sx={(theme) => ({
                  padding: "8px 16px 8px 0px",
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
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      width: "100%",

                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    },
                  })}
                >
                  <ChangeButton
                    text={"about.primary-school"}
                    myIcon={<SchoolIcon />}
                    myCondition={activeButton === "primary-school"}
                    changeText={() =>
                      changeText("about.primary-school", "primary-school")
                    }
                  />
                  <ChangeButton
                    text={"about.high-school"}
                    myIcon={<SchoolIcon />}
                    myCondition={activeButton === "high-school"}
                    changeText={() =>
                      changeText("about.high-school", "high-school")
                    }
                  />
                </List>
              </Collapse>
            </Box>
            {/* TODO */}
            <ListItemButton
              className={classes.aboutContactContainer}
              onClick={() => {
                handleClickContact();
                setActiveContactButton((prevState) =>
                  prevState === "contact" ? "" : "contact"
                );
              }}
              sx={(theme) => ({
                padding: "8px 16px 8px 0px",
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
          </Box>
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
              <Box
                sx={(theme) => ({
                  display: "none",
                  [theme.breakpoints.down("md")]: {
                    display: "block",
                    position: "relative",
                    top: "-50px",
                    color: theme.myColors.textColorNav,
                  },
                  [theme.breakpoints.down(555)]: {
                    left: "0px",
                    paddingLeft: "40px",
                  },
                })}
              >
                // {intl.formatMessage({ id: `about.${activeButton}` })}
              </Box>
              {templateProps}
              <div className={classes.aboutDivider}></div>
            </Box>

            <Box className={classes.aboutNextWrap}>
              <Box className={classes.aboutNextMiniWrap}>
                <Box
                  sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      width: "auto",
                      padding: "2.5px",
                    },
                    "& span": {
                      fontSize: "clamp(13px, 1vw, 16px)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    },
                  })}
                >
                  <Box
                    sx={(theme) => ({
                      width: "100%",
                      display: "flex",

                      [theme.breakpoints.down("sm")]: {
                        flexDirection: "column",
                      },
                    })}
                  >
                    <Box>
                      {" "}
                      <Typography
                        variant="caption"
                        className={classes.formTextGrey}
                        sx={(theme) => ({
                          [theme.breakpoints.down("sm")]: {
                            display: "none",
                          },
                        })}
                      >
                        1&nbsp;
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.formTextPink}
                      >
                        const&nbsp;
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.formTextPurple}
                      >
                        button&nbsp;
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.formTextPink}
                      >
                        =&nbsp;
                      </Typography>{" "}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: { paddingLeft: "45px" },
                      })}
                    >
                      <Typography
                        variant="caption"
                        className={classes.formTextPurple}
                      >
                        document.querySelector
                      </Typography>{" "}
                      <Typography
                        variant="caption"
                        className={classes.formTextGrey}
                      >
                        (
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.formTextOrange}
                      >
                        '#sendBtn'
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.formTextGrey}
                      >
                        );
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="caption"
                    className={classes.formTextGrey}
                    sx={(theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        display: "none",
                      },
                    })}
                  >
                    2&nbsp;
                    <br />
                  </Typography>
                  <Box
                    sx={(theme) => ({
                      width: "100%",
                      display: "flex",

                      [theme.breakpoints.down("sm")]: {
                        flexDirection: "column",
                      },
                    })}
                  >
                    <Box>
                      {" "}
                      <Typography
                        variant="caption"
                        className={classes.formTextGrey}
                        sx={(theme) => ({
                          [theme.breakpoints.down("sm")]: {
                            display: "none",
                          },
                        })}
                      >
                        3&nbsp;
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.formTextPink}
                      >
                        const
                      </Typography>
                      &nbsp;
                      <Typography
                        variant="caption"
                        className={classes.formTextPurple}
                      >
                        image
                      </Typography>
                      &nbsp;
                      <Typography
                        variant="caption"
                        className={classes.formTextPink}
                      >
                        =
                      </Typography>
                      &nbsp;
                    </Box>

                    <Box
                      sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: { paddingLeft: "48px" },
                      })}
                    >
                      <Typography
                        variant="caption"
                        className={classes.formTextPurple}
                      >
                        document.querySelector
                      </Typography>{" "}
                      <Typography
                        variant="caption"
                        className={classes.formTextGrey}
                      >{`(`}</Typography>
                      <Typography
                        variant="caption"
                        className={classes.formTextOrange}
                      >
                        '#myImage'
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.formTextGrey}
                      >{`);`}</Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="caption"
                    className={classes.formTextGrey}
                    sx={(theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        display: "none",
                      },
                    })}
                  >
                    4&nbsp;
                    <br />
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.formTextGrey}
                    sx={(theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        display: "none",
                      },
                    })}
                  >
                    5&nbsp;
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.formTextPurple}
                  >
                    button
                    <Typography
                      variant="caption"
                      className={classes.formTextGrey}
                    >
                      .
                    </Typography>
                    addEventListener
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.formTextGrey}
                  >
                    (
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.formTextOrange}
                  >
                    'click'
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.formTextGrey}
                  >
                    , ()
                  </Typography>
                  &nbsp;
                  <Typography
                    variant="caption"
                    className={classes.formTextPink}
                  >{`=>`}</Typography>
                  &nbsp;
                  <Typography
                    variant="caption"
                    className={classes.formTextGrey}
                  >{`{`}</Typography>
                  <br />
                  <Typography
                    variant="caption"
                    className={classes.formTextGrey}
                    sx={(theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        display: "none",
                      },
                    })}
                  >
                    6&nbsp;
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography
                    variant="caption"
                    className={classes.formTextPurple}
                  >
                    image
                    <Typography
                      variant="caption"
                      className={classes.formTextGrey}
                    >
                      .
                    </Typography>
                    src
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.formTextPink}
                  >
                    &nbsp;=&nbsp;
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.formTextPurple}
                  >
                    "my_img.png"
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.formTextGrey}
                  >
                    ; <br />
                    <Typography
                      variant="caption"
                      className={classes.formTextGrey}
                      sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                          display: "none",
                        },
                      })}
                    >
                      7&nbsp;
                    </Typography>
                    {`}`})
                  </Typography>
                  <br />
                </Box>
              </Box>
              <Box className={classes.aboutNextImgContainer}>
                <Typography variant="caption" className={classes.formTextGrey}>
                  // Result
                </Typography>
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
