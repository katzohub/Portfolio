import { FC } from "react";
import { LeftSectionHome, GameSnake } from "../components/Home";
import {
  StyledContainerHome,
  StyledWrappHome,
  StyledWrapperLeftHome,
  StyledWrapperRightHome,
} from "./StyledPages";

const Home: FC = () => {
  return (
    <StyledContainerHome>
      <StyledWrappHome>
        <StyledWrapperLeftHome>
          <LeftSectionHome />
        </StyledWrapperLeftHome>
        <StyledWrapperRightHome>
          <GameSnake isFullWindow={true} />
        </StyledWrapperRightHome>
      </StyledWrappHome>
    </StyledContainerHome>
  );
};

export default Home;
