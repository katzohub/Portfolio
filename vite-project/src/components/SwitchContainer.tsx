import { useContext, FC } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { useThemeContext } from "../context/themeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import usePageStyles from "../styles/style";
import SwitchButton from "./SwitchButton";
import AmericaFlag from "../assets/svg/AmericaFlag";
import SlovakiaFlag from "../assets/svg/SlovakiaFlag";

const SwitchContainer: FC = () => {
  const classes = usePageStyles();
  const { language, setLanguage } = useContext(LanguageContext);
  const { themeMode, toggleTheme } = useThemeContext();

  const toggleLanguage = () => {
    setLanguage(language === "en-US" ? "sk-SK" : "en-US");
  };
  return (
    <>
      {/* DARKMODE SWITCH */}
      <SwitchButton
        trueIcon={<LightModeIcon className={classes.switchLightIcon} />}
        falseIcon={<DarkModeIcon className={classes.switchDarkIcon} />}
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
