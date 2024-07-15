import { Box } from "@mui/system";
import { useIntl } from "react-intl";
import usePageStyles from "../../styles/stylePages";

const SkillsAlert = () => {
  const classes = usePageStyles();
  const intl = useIntl();
  return (
    <>
      <Box className={classes.projectAlert}>
        <h1 className={classes.skillTextAlert}>
          {intl.formatMessage({ id: "project.sorry" })}.
          <br />
          {intl.formatMessage({ id: "project.please" })}
        </h1>
      </Box>
    </>
  );
};

export default SkillsAlert;
