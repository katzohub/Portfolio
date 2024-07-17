import { useState } from "react";
import { Box } from "@mui/system";
import { ContactForm } from "../components/Contact";
import ShareIcon from "@mui/icons-material/Share";
import { GrContactInfo } from "react-icons/gr";
import { ContactLeft } from "../components";
import { GeneralBoard } from "../components";

const ContactMe = () => {
  const [openFindMeContact, setOpenFindMeContact] = useState<boolean>(false);
  const [openSmallScreen, setOpenSmallScreen] = useState<boolean>(true);

  const handleClickContact = () => {
    setOpenFindMeContact(!openFindMeContact);
  };
  const handleClickOpenSmallScreen = () => {
    setOpenSmallScreen(!openSmallScreen);
  };

  return (
    <>
      <GeneralBoard
        generalHeading="nav.contact"
        generalText="nav.contact"
        leftTemplate={
          <ContactLeft
            isTrue={false}
            isScreen={true}
            handleClickContact={handleClickOpenSmallScreen}
            openContact={openSmallScreen}
            nameCollapse="contact.LeftCard"
            myIcon={
              <Box
                sx={(theme) => ({
                  display: "none",
                  [theme.breakpoints.down("md")]: {
                    display: "flex",
                  },
                })}
              >
                <GrContactInfo style={{ fontSize: "24px" }} />
              </Box>
            }
          />
        }
        postprimaryTemplate={
          <ContactLeft
            isTrue={true}
            isScreen={false}
            handleClickContact={handleClickContact}
            openContact={openFindMeContact}
            nameCollapse="contact.findMeIn"
            myIcon={<ShareIcon />}
          />
        }
        generalTemplate={<ContactForm />}
        smallGeneralHeading="nav.contact"
      />
    </>
  );
};

export default ContactMe;
