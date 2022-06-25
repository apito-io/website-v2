/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Text } from "theme-ui";

const SectionHeading = ({
  slogan,
  title,
  description,
  as,
  redSlogan = false,
  ...props
}) => {
  return (
    <div sx={styles.heading} {...props}>
      <Text className={`${redSlogan ? "red" : ""}`} as="span">
        {slogan}
      </Text>
      <Heading as={as !== undefined ? as : "h2"}>{title}</Heading>
      <Text as="p">{description}</Text>
    </div>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    // mb: [30, null, null, 50, 70],
    maxWidth: 850,
    m: ["0 auto 40px", null, null, "0 auto 70px"],
    textAlign: "center",
    span: {
      color: "primary",
      fontSize: [14, null, null, 18],
      fontWeight: 500,
      mb: ["8px", null, null, 0],
      display: "inline-flex",
      textTransform: "uppercase",
    },
    "span.red": {
      color: "red",
    },
    h2: {
      color: "heading",
      fontWeight: 500,
      fontSize: [24, null, null, 30],
      lineHeight: 1.6,
      letterSpacing: -1,
    },
    p: {
      fontSize: 24,
      lineHeight: 2.11,
    },
  },
};
