import { useState } from "react";
import {
  // ContactSidebar,
  // ContactCollapse,
  ContactForm,
} from "../components/Contact";

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
          />
        }
        postprimaryTemplate={
          <ContactLeft
            isTrue={true}
            isScreen={false}
            handleClickContact={handleClickContact}
            openContact={openFindMeContact}
          />
        }
        generalTemplate={<ContactForm />}
        smallGeneralHeading="nav.contact"
      />
    </>
  );
};

export default ContactMe;
