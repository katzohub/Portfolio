import { FC } from "react";
import { StyledContainerGameSnake } from "./StyledPages";
import { GameSnake } from "../components/Home";

const SnakeGame: FC = () => {
  return (
    <StyledContainerGameSnake>
      <GameSnake isFullWindow={false} />
    </StyledContainerGameSnake>
  );
};

export default SnakeGame;
