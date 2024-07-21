import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { GeneralBoard } from "../components";
import {
  TemplateTextBio,
  TemplateTextInterest,
  TemplateTextPrimarySchool,
  TemplateTextHighSchool,
} from "../constants/TemplatesAbout";
import { AboutSideBar, AboutContent } from "../components/About";
import { ButtonCollapse } from "../components/Buttons";
import { GrContactInfo } from "react-icons/gr";

const AboutMe: FC = () => {
  const [activeButton, setActiveButton] = useState<string>("bio");
  const [activeContactButton, setActiveContactButton] = useState<string>("");

  const [templateProps, setTemplateProps] = useState<React.ReactNode>(
    <TemplateTextBio />
  );
  const [openContact, setOpenContact] = useState<boolean>(false);
  const intl = useIntl();

  const handleClickContact = () => {
    setOpenContact(!openContact);
    setActiveContactButton((prevState) =>
      prevState === "contact" ? "" : "contact"
    );
  };

  const toggleText = (active: string): React.ReactNode => {
    if (active === intl.formatMessage({ id: "about.bio" })) {
      return <TemplateTextBio />;
    } else if (active === intl.formatMessage({ id: "about.interests" })) {
      return <TemplateTextInterest />;
    } else if (active === intl.formatMessage({ id: "about.primary-school" })) {
      return <TemplateTextPrimarySchool />;
    } else if (active === intl.formatMessage({ id: "about.high-school" })) {
      return <TemplateTextHighSchool />;
    } else {
      return <TemplateTextBio />;
    }
  };
  const changeText = (translate: string, changeText: string) => {
    setTemplateProps(toggleText(intl.formatMessage({ id: translate })));
    setActiveButton(changeText);
  };

  return (
    <>
      <GeneralBoard
        generalHeading="nav.about"
        generalText={`about.${activeButton}`}
        leftTemplate={
          <AboutSideBar changeText={changeText} activeButton={activeButton} />
        }
        postprimaryTemplate={
          <>
            <ButtonCollapse
              isTrue={true}
              isScreen={true}
              handleClickContact={handleClickContact}
              activeContactButton={activeContactButton}
              openContact={openContact}
              nameCollapse="contact.LeftCard"
              myIcon={<GrContactInfo style={{ fontSize: "24px" }} />}
            />
          </>
        }
        generalTemplate={
          <AboutContent
            templateProps={templateProps}
            activeButton={activeButton}
          />
        }
        smallGeneralHeading="nav.about"
      />
    </>
  );
};

export default AboutMe;
