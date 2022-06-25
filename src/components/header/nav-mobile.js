/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { Link } from 'react-scroll';

const NavbarMobile = ({ isOpen, isSticky }) => {
  return (
    <Flex
      as="ul"
      sx={styles.nav}
      className={`dropdown ${isSticky ? 'is-sticky' : ''} ${
        isOpen ? 'is-open' : ''
      }`}
    >
      <li>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-140}
          duration={1000}
        >
          Home
        </Link>
      </li>
      <li>
        <a href="#" className="has-dropdown">
          Product
        </a>
      </li>
      <li>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Developers
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-80}
          duration={1000}
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          FAQ
        </Link>
      </li>
      <li>
        <Link href="https://app.apito.io">
          <a target="_blank"> Login </a>
        </Link>
      </li>
      <li>
        <Link>
          Early Access
        </Link>
      </li>
    </Flex>
  );
};

export default NavbarMobile;

const styles = {
  nav: {
    backgroundColor: '#fff',
    width: '100%',
    top: 72,
    left: 0,
    p: 0,
    listStyle: 'none',
    position: 'absolute',
    flexDirection: 'column',
    transform: 'scaleY(0)',
    transformOrigin: 'top left',
    transition: 'all 0.2s ease-in-out 0s',
    boxShadow: '-4px 4px 8px rgb(0 0 0 / 5%), 3px 3px 9px rgb(0 0 0 / 5%)',
    '&.is-sticky': {
      top: 60,
    },
    '&.is-open': {
      transform: 'scaleY(1)',
    },
    a: {
      color: 'text',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.2s ease-in-out 0s',
      padding: '8px 15px',
      display: 'inline-flex',
      '&:hover': {
        color: 'primary',
      },
    },
  },
  dropdownContainer: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    top: 72,
    boxShadow: '-4px 4px 8px rgb(0 0 0 / 5%), 3px 3px 9px rgb(0 0 0 / 5%)',
    borderRadius: '0 0 5px 5px',
    transition: 'all 0.2s ease-in-out 0s',
    transform: 'scaleY(0)',
    transformOrigin: 'top left',
    '&.is-sticky': {
      top: 60,
    },
  },
  dropdownGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    padding: 45,
  },
};
