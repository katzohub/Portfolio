import { StyledContainerGameSnake } from "./StyledPages";
import { GameSnake } from "../components/Home";

const SnakeGame = () => {
  return (
    <StyledContainerGameSnake>
      <GameSnake isFullWindow={false} />
    </StyledContainerGameSnake>
  );
};

export default SnakeGame;
