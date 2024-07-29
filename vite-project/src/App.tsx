import { useContext, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./context/themeContext";
import { MenuProvider } from "./context/MenuProvider";
import SharedLayout from "./Pages/SharedLayout";
import { LanguageProvider, LanguageContext } from "./context/LanguageProvider";
import { CssBaseline } from "@mui/material";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import ContactMe from "./Pages/ContactMe";
import ThankYou from "./Pages/ThankYou";
import Error from "./Pages/Error";
import SnakeGame from "./Pages/SnakeGame";
import GlobalStyles from "./theme/GlobalStyles.tsx";
import { IntlProvider } from "react-intl";
import en from "./locales/en_US";
import sk from "./locales/sk_SK";

const App = () => {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <CssBaseline />
        <GlobalStyles />

        <MenuProvider>
          <LanguageProvider>
            <IntlProviderWrapper>
              <Routes>
                <Route path="/" element={<SharedLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/about-me" element={<AboutMe />} />
                  <Route path="/projects" element={<Skills />} />
                  <Route path="/contact-me" element={<ContactMe />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="*" element={<Error />} />
                </Route>
                <Route path="/game_snake" element={<SnakeGame />} />
              </Routes>
            </IntlProviderWrapper>
          </LanguageProvider>
        </MenuProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
};

const IntlProviderWrapper = ({ children }: { children: ReactNode }) => {
  const { language } = useContext(LanguageContext);
  const messages: Record<string, typeof en | typeof sk> = {
    "en-US": en,
    "sk-SK": sk,
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      {children}
    </IntlProvider>
  );
};

export default App;
