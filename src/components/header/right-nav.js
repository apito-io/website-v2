/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button } from "theme-ui";

const RightNav = () => {
  return (
    <Flex sx={styles.nav}>
      <a href="https://app.apito.io" rel="noreferrer" target="_blank">
        <Button variant="outlinedPrimary"> Login </Button>
      </a>
      <a href="https://app.apito.io" rel="noreferrer" target="_blank">
        <Button variant="primary" sx={{ ml: [23] }}>
          Sign Up
        </Button>
      </a>
    </Flex>
  );
};

export default RightNav;

const styles = {
  nav: {
    alignItems: "center",
    button: {
      fontSize: 15,
      fontWeight: 500,
      minHeight: 40,
    },
  },
};
