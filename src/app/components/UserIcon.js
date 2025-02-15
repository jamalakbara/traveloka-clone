import React from "react";

const UserIcon = ({ width = 14, height = 24, fill = "#0194f3" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.44954 20.6443C3.3058 21.3665 3.88623 22 4.62267 22H19.3773C20.1138 22 20.6942 21.3665 20.5505 20.6443C19.9516 17.635 17.9884 13 12 13C6.01165 13 4.04844 17.635 3.44954 20.6443Z"
        fill={fill}
      />
      <path
        d="M7 7.5C7 10.2614 9.23858 12.5 12 12.5C14.7614 12.5 17 10.2614 17 7.5V6.5C17 3.73858 14.7614 1.5 12 1.5C9.23858 1.5 7 3.73858 7 6.5V7.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default UserIcon;
