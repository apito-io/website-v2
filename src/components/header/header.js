/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, MenuButton } from "theme-ui";
import { useState, Fragment } from "react";
import useMedia from "use-media";
import Logo from "./logo";
import Nav from "./nav";
import NavbarMobile from "./nav-mobile";
import RightNav from "./right-nav";
import Link from "@docusaurus/Link";

const Header = ({ isSticky }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMedia({ maxWidth: "768px" });

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header sx={styles.header} className={isSticky ? "is-sticky" : ""}>
      <Container sx={styles.container}>
        <span sx={styles.siteLogo}>
          <Logo className={isSticky > 0 ? "is-sticky" : ""} />
        </span>
        {isMobile ? (
          <Fragment>
            <NavbarMobile isOpen={open} isSticky={isSticky} />
            <MenuButton onClick={handleOpen} />
          </Fragment>
        ) : (
          <Fragment>
            <Nav isSticky={isSticky} />
            <RightNav />
          </Fragment>
        )}
      </Container>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    py: [15],
    backgroundColor: "#fff",
    zIndex: 10,
    transition: "all 0.3s ease-in-out 0s",
    "&.is-sticky": {
      boxShadow: "rgb(0 0 0 / 13%) 0px 0px 8px",
      py: [10],
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  siteLogo: {
    display: "inline-flex",
    cursor: "pointer",
    mr: [100],
    svg: {
      width: 130,
      transition: "all 0.3s ease-in-out 0s",
      "&.is-sticky": {
        width: 120,
      },
    },
  },
};
