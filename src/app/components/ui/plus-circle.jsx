import React from "react";

const PlusCircle = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15"
        cy="15"
        r="13"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <line x1="7" y1="15" x2="23" y2="15" stroke="black" stroke-width="2" />
      <line x1="15" y1="7" x2="15" y2="23" stroke="black" stroke-width="2" />
    </svg>
  );
};

export default PlusCircle;