import React from 'react';

const Chat = (props) => {
  return (
    <svg
      width={47}
      height={43}
      viewBox="0 0 47 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M35.2 12.74v16.91c0 2.18-1.76 3.94-3.94 3.94l-13.66.07-8 8.8v-8.8H3.94A3.95 3.95 0 010 29.71V12.8a3.95 3.95 0 013.94-3.95l27.32-.05c2.17 0 3.94 1.77 3.94 3.94z"
          fill="#EA3A60"
        />
        <path
          d="M17.6 17.6H7.2c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8h10.4c.44 0 .8.36.8.8 0 .44-.36.8-.8.8zM28 22.4H7.2c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8H28c.44 0 .8.36.8.8 0 .44-.36.8-.8.8zM28 27.2H7.2c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8H28c.44 0 .8.35.8.8 0 .44-.36.8-.8.8z"
          fill="#fff"
        />
        <path
          opacity={0.5}
          d="M42.46.05L15.14 0a3.95 3.95 0 00-3.95 3.94v4.9l20.07-.04c2.18 0 3.94 1.76 3.94 3.94V27.5l5.6 6.16v-8.8h1.66c2.18 0 3.94-1.76 3.94-3.94V4A3.95 3.95 0 0042.46.05z"
          fill="#EA3A60"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h46.4v42.46H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Chat;
