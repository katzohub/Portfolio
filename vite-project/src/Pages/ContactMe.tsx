import {
  ContactSidebar,
  ContactCollapse,
  ContactForm,
} from "../components/Contact";
import { GeneralBoard } from "../components";

const ContactMe = () => {
  return (
    <>
      <GeneralBoard
        generalHeading="nav.contact"
        generalText="nav.contact"
        leftTemplate={<ContactSidebar />}
        postprimaryTemplate={<ContactCollapse />}
        generalTemplate={<ContactForm />}
        smallGeneralHeading="nav.contact"
      />
    </>
  );
};

export default ContactMe;
