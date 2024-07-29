import { useContext, FC } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { useThemeContext } from "../context/themeContext";
import { StyledLightModeIcon, StyledDarkModeIcon } from "./StyledComponents";
import SwitchButton from "./SwitchButton";
import { AmericaFlag, SlovakiaFlag } from "../assets/svg";

const SwitchContainer: FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { themeMode, toggleTheme } = useThemeContext();

  const toggleLanguage = () => {
    setLanguage(language === "en-US" ? "sk-SK" : "en-US");
  };
  return (
    <>
      {/* DARKMODE SWITCH */}
      <SwitchButton
        trueIcon={<StyledLightModeIcon />}
        falseIcon={<StyledDarkModeIcon />}
        condition={themeMode === "dark"}
        toggleSwitch={toggleTheme}
      />
      <SwitchButton
        trueIcon={<AmericaFlag />}
        falseIcon={<SlovakiaFlag />}
        condition={language === "sk-SK"}
        toggleSwitch={toggleLanguage}
      />
    </>
  );
};

export default SwitchContainer;
