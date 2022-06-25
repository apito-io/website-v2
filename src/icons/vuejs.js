import * as React from "react";

const Vuejs = (props) => (
  <svg
    width={90}
    height={78}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M55.39 0 44.996 18.013 34.605 0H-.002l45 78L89.995 0H55.389Z"
        fill="#41B883"
      />
      <path
        d="M55.39 0 44.996 18.013 34.605 0H17.998l27 46.799L71.995 0H55.39Z"
        fill="#34495E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h90v78H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Vuejs;
