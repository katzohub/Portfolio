import TopNav from "../components/TopNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
