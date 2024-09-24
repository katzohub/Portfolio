import { useState, useEffect } from "react";
import SwitchContainer from "../components/SwitchContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Navigation from "../components/Navigation";
import {
  StyledNavContainer,
  StyledNavLink,
  StyledMenuIcon,
} from "./StyledNavbar";
import MobileDrawer from "../components/MobileDrawer";
import { NavbarProps } from "../types";

const Navbar = ({ isTopnav, text }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleDrawerClose();
  }, [pathname]);

  const onSelectItem = (path: string) => {
    if (path === pathname) {
      handleDrawerClose();
      return;
    }
    navigate(path);
  };
  const navigateFullSCreen = (path: string) => {
    navigate(path);
  };

  return (
    <StyledNavContainer>
      <nav className={isTopnav ? "top-container" : "bottom-container"}>
        <Box>
          <StyledNavLink>{text}</StyledNavLink>
        </Box>
        {isTopnav && <SwitchContainer />}

        <Box
          sx={(theme) => ({
            display: "block",
            [theme.breakpoints.down("md")]: {
              display: isTopnav ? "none" : "block",
            },
          })}
        >
          <Navigation
            isNavigationLink={isTopnav}
            onSelectItem={navigateFullSCreen}
          />
        </Box>
        {isTopnav && (
          <>
            <StyledMenuIcon
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              data-cy="btn-drawer"
            />
            <MobileDrawer
              myOnOpen={open}
              myOnCloseFn={handleDrawerClose}
              onSelectItem={onSelectItem}
            />
          </>
        )}
      </nav>
    </StyledNavContainer>
  );
};

export default Navbar;
