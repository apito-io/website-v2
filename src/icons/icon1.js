import React from 'react';

const Icon1 = (props) => {
  return (
    <svg width={96} height={104} viewBox="0 0 96 104" fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)" fillRule="evenodd" clipRule="evenodd">
        <path
          d="M48.467 17c14.622 0 26.476 11.864 26.476 26.5 0 14.635-11.854 26.5-26.476 26.5C33.844 70 21.99 58.135 21.99 43.5c0-14.636 11.854-26.5 26.477-26.5z"
          fill="#FF4361"
        />
        <path
          d="M48.467 17c14.622 0 26.476 11.864 26.476 26.5 0 14.635-11.854 26.5-26.476 26.5C33.844 70 21.99 58.135 21.99 43.5c0-14.636 11.854-26.5 26.477-26.5z"
          fill="url(#prefix__paint0_linear)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.972 1h9.991C69.517 1 82.936 14.43 82.936 31v10c0 16.568-13.419 30-29.973 30h-9.99c-16.554 0-29.974-13.432-29.974-30V31C13 14.43 26.42 1 42.972 1z"
        fill="#FF4361"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.972 1h9.991C69.517 1 82.936 14.43 82.936 31v10c0 16.568-13.419 30-29.973 30h-9.99c-16.554 0-29.974-13.432-29.974-30V31C13 14.43 26.42 1 42.972 1z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        d="M60.04 36.27c0 3.013-5.382 5.454-12.02 5.454S36 39.284 36 36.27m0-6.817v13.634c0 3.013 5.382 5.454 12.02 5.454s12.02-2.44 12.02-5.454V29.453H36zm0 0c0 3.014 5.382 5.454 12.02 5.454s12.02-2.44 12.02-5.453H36zm0 0C36 26.44 41.382 24 48.02 24s12.02 2.44 12.02 5.453H36z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={52.598}
          y1={102.635}
          x2={107.605}
          y2={39.414}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F80759" />
          <stop offset={1} stopColor="#BC4E9C" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={53.376}
          y1={113.413}
          x2={125.385}
          y2={30.651}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F80759" />
          <stop offset={1} stopColor="#BC4E9C" />
        </linearGradient>
        <filter
          id="prefix__filter0_d"
          x={0.99}
          y={9}
          width={94.952}
          height={95}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={13} />
          <feGaussianBlur stdDeviation={10.5} />
          <feColorMatrix values="0 0 0 0 0.898039 0 0 0 0 0.117647 0 0 0 0 0.435294 0 0 0 0.3 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
export default Icon1;
