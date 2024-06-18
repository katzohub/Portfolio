import { FC } from "react";
import { Grid, Box } from "@mui/material";
import usePageStyles from "../styles/style";
import { useIntl } from "react-intl";
import Navigation from "./Navigation";

const Footer: FC = () => {
  const classes = usePageStyles();
  const intl = useIntl();
  return (
    <>
      <Box className={classes.bottomNavFooterContainer}>
        <nav className={classes.bottomNavContainer}>
          <Grid item>
            <Box className={classes.navBoxItem}>
              <div className={classes.navLink}>
                {intl.formatMessage({ id: "footer.findMeIn" })}:
              </div>
            </Box>
          </Grid>
          {/* right */}
          <Navigation isNavigationLink={true} />
          {/* right */}
        </nav>
      </Box>
    </>
  );
};

export default Footer;
