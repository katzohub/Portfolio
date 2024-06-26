import { FC } from "react";
import { Grid, Box, Switch } from "@mui/material";
import usePageStyles from "../styles/style";

type MySwitchProps = {
  trueIcon: JSX.Element;
  falseIcon: JSX.Element;
  condition: boolean;
  toggleSwitch: () => void;
};

const MySwitch: FC<MySwitchProps> = ({
  trueIcon,
  falseIcon,
  condition,
  toggleSwitch,
}) => {
  const classes = usePageStyles();
  return (
    <>
      <Grid item className={classes.switchBox}>
        <Box className={classes.navBoxItem}>
          <Switch
            className={classes.switchLanguage}
            icon={trueIcon}
            checkedIcon={falseIcon}
            checked={condition}
            onChange={toggleSwitch}
          />
        </Box>
      </Grid>
    </>
  );
};

export default MySwitch;
