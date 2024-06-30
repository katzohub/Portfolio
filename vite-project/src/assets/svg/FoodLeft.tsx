import React from "react";

const FoodLeft = () => {
  return (
    <div>
      <div style={{ width: 20.69, height: 20.69, position: "relative" }}>
        <div
          style={{
            width: 20.69,
            height: 20.69,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.1,
            background: "#43D9AD",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            width: 14.69,
            height: 14.69,
            left: 3,
            top: 3,
            position: "absolute",
            opacity: 0.2,
            background: "#43D9AD",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            left: 6.35,
            top: 6.35,
            position: "absolute",
            background: "#43D9AD",
            borderRadius: 9999,
          }}
        />
      </div>
    </div>
  );
};

export default FoodLeft;
