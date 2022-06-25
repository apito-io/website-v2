export const themeSettings = {
  colors: {
    text: "#111",
    textAlt: "#343D48",
    heading: "#0F2137",
    background: "#fff",
    border: "#DADADA",
    primary: "#263238",
    secondary: "#3f3f3f",
    muted: "#e0e0e0",
    highlight: "#9f9f9f",
    gray: "#6c6c6c",
    accent: "#3f3f3f",
    red: "#EA3A60",
  },
  fonts: {
    body: "DM Sans, sans-serif",
    heading: "DM Sans, sans-serif",
  },
  lineHeight: {
    body: 1.5,
    heading: 1.5,
  },
  fontWeight: {
    body: 400,
    heading: 400,
  },
  breakpoints: [
    // 0
    "576px", // 1
    "768px", // 2
    "1024px", // 3
    "1200px", // 4
    "1400px", // 5
  ],
  layout: {
    container: {
      maxWidth: [
        null, // 0
        null, // 1
        null, // 2
        960, // 3
        1140, // 4
        1320, // 5
      ],
      paddingLeft: [15, null, null, 0],
      paddingRight: [15, null, null, 0],
    },
    main: {},
  },
  buttons: {
    default: {
      backgroundColor: "transparent",
      color: "textAlt",
      fontFamily: "body",
      fontSize: 16,
      fontWeight: 500,
      minHeight: 50,
      px: 25,
      py: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
    },
    primary: {
      variant: "buttons.default",
      backgroundColor: "primary",
      color: "#fff",
    },
    outlinedPrimary: {
      variant: "buttons.default",
      backgroundColor: "transparent",
      color: "primary",
      border: (t) => `1px solid ${t.colors.primary}`,
    },
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
  },
};
