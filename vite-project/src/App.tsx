import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnePage from "./components/OnePage";
import SharedLayout from "./Pages/SharedLayout";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<OnePage />} />
            <Route path="about-me" element={<AboutMe />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="/contact-me" element={<ContactMe />}></Route>
            {/* <Route path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
