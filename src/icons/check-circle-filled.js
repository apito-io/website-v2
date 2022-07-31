import React from 'react';

const CheckCircleFilled = (props) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10-.001c-5.514 0-10 4.485-10 10 0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.515-4.486-10-10-10zm5.575 6.665l-6.154 6.923a.77.77 0 01-1.056.09L4.52 10.6a.77.77 0 01.961-1.202l3.276 2.62 5.669-6.377a.77.77 0 011.15 1.023z"
        fill="#EA3A60"
      />
    </svg>
  );
};

export default CheckCircleFilled;
