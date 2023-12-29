import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CustomThemeProvider} from "./themeContext";
import { MenuProvider } from "./MenuProvider";
import OnePage from "./components/OnePage";
import SharedLayout from "./Pages/SharedLayout";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
import Error from "./Pages/Error";



const App = () => {


  return (
  <>
    <BrowserRouter>
      <CustomThemeProvider>
        <MenuProvider>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<OnePage />} />
              <Route path="about-me" element={<AboutMe />}></Route>
              <Route path="projects" element={<Projects />}></Route>
              <Route path="/contact-me" element={<ContactMe />}></Route>
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </MenuProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </>
  );
};

export default App;
