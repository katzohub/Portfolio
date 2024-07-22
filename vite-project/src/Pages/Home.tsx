import { FC, useState, useEffect } from "react";
import { LeftSectionHome, GameSnake } from "../components/Home";
import {
  StyledContainerHome,
  StyledWrappHome,
  StyledWrapperLeftHome,
  StyledWrapperRightHome,
} from "./StyledPages";
import { motion, AnimatePresence } from "framer-motion";

const MotionStyledWrapperLeftHome = motion(StyledWrapperLeftHome);
const MotionStyledWrapperRightHome = motion(StyledWrapperRightHome);

const Home: FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <StyledContainerHome>
      <StyledWrappHome>
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
