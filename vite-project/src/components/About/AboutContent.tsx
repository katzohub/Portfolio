import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import ja from "../../assets/img/ja.png";
import { useIntl } from "react-intl";
import usePageStyles from "../../styles/stylePages";

type GeneralBoardProps = {
  templateProps: ReactNode;
  activeButton: string;
};

const AboutContent: FC<GeneralBoardProps> = ({
  templateProps,
  activeButton,
}) => {
  const classes = usePageStyles();
  const intl = useIntl();
  return (
    <>
      <Box className={classes.aboutNextContainer}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            top: "15px",
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
          <Box>{templateProps}</Box>
        </Box>
        <Box className={classes.aboutDivider}></Box>
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
              <Typography variant="caption" className={classes.formTextPurple}>
                button
                <Typography variant="caption" className={classes.formTextGrey}>
                  .
                </Typography>
                addEventListener
              </Typography>
              <Typography variant="caption" className={classes.formTextGrey}>
                (
              </Typography>
              <Typography variant="caption" className={classes.formTextOrange}>
                'click'
              </Typography>
              <Typography variant="caption" className={classes.formTextGrey}>
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
              <Typography variant="caption" className={classes.formTextPurple}>
                image
                <Typography variant="caption" className={classes.formTextGrey}>
                  .
                </Typography>
                src
              </Typography>
              <Typography variant="caption" className={classes.formTextPink}>
                &nbsp;=&nbsp;
              </Typography>
              <Typography variant="caption" className={classes.formTextPurple}>
                "my_img.png"
              </Typography>
              <Typography variant="caption" className={classes.formTextGrey}>
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
    </>
  );
};

export default AboutContent;