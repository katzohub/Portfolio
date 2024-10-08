import { lazy, useContext, ReactNode, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./context/themeContext";
import { MenuProvider } from "./context/MenuProvider";
import SharedLayout from "./Pages/SharedLayout";
import { LanguageProvider, LanguageContext } from "./context/LanguageProvider";
import { CssBaseline, Skeleton } from "@mui/material";
import GlobalStyles from "./theme/GlobalStyles.tsx";
import { IntlProvider } from "react-intl";
import en from "./locales/en_US";
import sk from "./locales/sk_SK";

const AboutMe = lazy(() => import("./Pages/AboutMe"));
const Skills = lazy(() => import("./Pages/Skills.tsx"));
const ContactMe = lazy(() => import("./Pages/ContactMe"));
const ThankYou = lazy(() => import("./Pages/ThankYou"));
const SnakeGame = lazy(() => import("./Pages/SnakeGame"));
const Error = lazy(() => import("./Pages/Error"));
const Home = lazy(() => import("./Pages/Home.tsx"));

const App = () => {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
      <CustomThemeProvider>
        <CssBaseline />
        <GlobalStyles />
        <MenuProvider>
          <LanguageProvider>
            <IntlProviderWrapper>
              <Suspense
                fallback={
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    sx={(theme) => ({
                      bgcolor: theme.myColors.generalBackground,
                      width: "100vw !important",
                      height: "100vh !important",
                      padding: "0",
                      margin: "0",
                      overflow: "hidden",
                    })}
                  />
                }
              >
                <Routes>
                  <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />}></Route>
                    <Route path="/projects" element={<Skills />}></Route>
                    <Route path="/contact-me" element={<ContactMe />}></Route>
                    <Route path="/thank-you" element={<ThankYou />}></Route>
                    <Route path="*" element={<Error />} />
                  </Route>
                  <Route path="/game_snake" element={<SnakeGame />}></Route>
                </Routes>
              </Suspense>
            </IntlProviderWrapper>
          </LanguageProvider>
        </MenuProvider>
      </CustomThemeProvider>
    </HashRouter>
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
