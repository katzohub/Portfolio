import { useState, useEffect } from "react";
import { LeftSectionHome, GameSnake } from "../components/Home";
import blue from "../assets/background/blue.webp";
import green from "../assets/background/green.webp";
import yellow from "../assets/background/yellow.png";
import { useThemeContext } from "../context/themeContext";
import {
  StyledContainerHome,
  StyledWrappHome,
  StyledWrapperLeftHome,
  StyledWrapperRightHome,
} from "./StyledPages";

import { motion, AnimatePresence } from "framer-motion";

const MotionStyledWrapperLeftHome = motion(StyledWrapperLeftHome);
const MotionStyledWrapperRightHome = motion(StyledWrapperRightHome);

const Home = () => {
  const [isReady, setIsReady] = useState(false);
  const { themeMode } = useThemeContext();
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <StyledContainerHome component={"main"} sx={{ overflowX: "hidden" }}>
      <StyledWrappHome>
        {themeMode === "dark" ? (
          <>
            <img src={green} alt="background green effect" className="green" />
            <img src={blue} alt="background blue effect" className="blue" />
          </>
        ) : (
          <>
            <img
              src={yellow}
              alt="background yellow effect"
              className="green"
            />
            <img src={blue} alt="background blue effect" className="blue" />
          </>
        )}
        <AnimatePresence>
          {isReady && (
            <>
              <MotionStyledWrapperLeftHome
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <LeftSectionHome />
              </MotionStyledWrapperLeftHome>
              <MotionStyledWrapperRightHome
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <GameSnake isFullWindow={true} />
              </MotionStyledWrapperRightHome>
            </>
          )}
        </AnimatePresence>
      </StyledWrappHome>
    </StyledContainerHome>
  );
};

export default Home;
