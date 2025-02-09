import React from "react";

const FlagIcon = ({ width = 30, height = 20, fill = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        y="3.75"
        width="22.5"
        height="16.5"
        rx="1.25"
        fill={fill}
        stroke="#C1C4C6"
        strokeWidth="0.5"
      />
      <path
        d="M1 5C1 4.44772 1.44772 4 2 4H22C22.5523 4 23 4.44772 23 5V12H1V5Z"
        fill="#E70011"
      />
    </svg>
  );
};

export default FlagIcon;
