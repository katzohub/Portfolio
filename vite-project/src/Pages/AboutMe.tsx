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
              //  className={classes.aboutWrappScholls}
            >
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
                    paddingLeft: "40px !important",
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
                    paddingLeft: "40px !important",
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
