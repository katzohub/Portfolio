import { Box } from "@mui/material";
import { LeftContact } from "../../components";
import usePageStyles from "../../styles/stylePages";

const ContactSidebar = () => {
  const classes = usePageStyles();
  return (
    <>
      <Box className={classes.contactBoxMinWidth}>
        <LeftContact />
      </Box>
    </>
  );
};

export default ContactSidebar;
