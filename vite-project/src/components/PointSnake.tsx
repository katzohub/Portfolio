import { FC } from "react";
import { PointSnakeProps } from "../types";

const PointSnake: FC<PointSnakeProps> = ({ index, candyCount }) => {
  const opacity = candyCount > index ? 0.2 : 0.5;

  return (
    <svg
      // style={{ flex: "0 0 auto" }}
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 22 21"
      fill="none"
    >
      <circle
        opacity={opacity}
        cx="10.8456"
        cy="10.5377"
        r="10.3456"
        fill="#43D9AD"
      />
      <circle
        opacity={opacity}
        cx="10.8456"
        cy="10.5377"
        r="7.34558"
        fill="#43D9AD"
      />
      <circle
        opacity={opacity}
        cx="10.8457"
        cy="10.5377"
        r="4"
        fill="#43D9AD"
      />
    </svg>
  );
};

export default PointSnake;
