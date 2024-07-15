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
        generalHeading="contact.LeftCard"
        generalText="contact.contact"
        leftTemplate={<ContactSidebar />}
        postprimaryTemplate={<ContactCollapse />}
        generalTemplate={<ContactForm />}
      />
    </>
  );
};

export default ContactMe;
