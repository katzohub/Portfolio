import { useState } from "react";
import { ContactForm } from "../components/Contact";
import ShareIcon from "@mui/icons-material/Share";

import { ContactLeft } from "../components";
import { GeneralBoard } from "../components";

const ContactMe = () => {
  const [openFindMeContact, setOpenFindMeContact] = useState<boolean>(false);
  console.log(setOpenFindMeContact);

  const handleClickContact = () => {
    setOpenFindMeContact(!openFindMeContact);
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
            handleClickContact={handleClickContact}
            openContact={openFindMeContact}
            nameCollapse="contact.LeftCard"
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
