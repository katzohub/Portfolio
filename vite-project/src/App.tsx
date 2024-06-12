import { useContext, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./context/themeContext";
import { MenuProvider } from "./context/MenuProvider";

import {
  SharedLayout,
  AboutMe,
  Projects,
  ContactMe,
  ThankYou,
  Error,
  OnePage,
} from "./Pages";

import GlobalStyles from "./theme/GlobalStyles.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { IntlProvider } from "react-intl";
import { LanguageProvider, LanguageContext } from "./context/LanguageProvider";
import en from "./locales/en_US";
import sk from "./locales/sk_SK";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <GlobalStyles />
      <CustomThemeProvider>
        <MenuProvider>
          <LanguageProvider>
            <IntlProviderWrapper>
              <Routes>
                <Route path="/" element={<SharedLayout />}>
                  <Route index element={<OnePage />} />
                  <Route path="/about-me" element={<AboutMe />}></Route>
                  <Route path="/projects" element={<Projects />}></Route>
                  <Route path="/contact-me" element={<ContactMe />}></Route>
                  <Route path="/thank-you" element={<ThankYou />}></Route>
                  <Route path="*" element={<Error />} />
                </Route>
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
