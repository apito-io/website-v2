/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import Link from '@docusaurus/Link';
import Logo from "../header/logo";
import {navbar} from "../../data/navbar";
import SDKintegration from "../sdk-integration";
import {FooterData} from "../../data/footer";
import Communications from "../support";
import React from "react";

const Footer = () => {
    return (
        <>
            <SDKintegration data={FooterData.sdk}/>
            <Communications data={FooterData.communications}/>
            <footer id="footer" sx={styles.section}>
                <div sx={styles.footerContent}>
                    {/*<Log o />*/}
                    {/*        <nav sx={styles.nav}>
          {navbar.map((item, i) => (
            <Link key={i} href={item.url} target={item.outside ? "_blank" : null}>
             {item.label}
            </Link>
          ))}
        </nav>*/}
                    {/*        <div sx={styles.copyright}>
          Copyright {new Date().getFullYear()} By apito.io |{' '}
          <Link href="/privacy-policy">
            <a href="/privacy-policy" sx={{ mx: '5px' }}>Privacy Policy</a>
          </Link>{' '}
          |{' '}
          <Link href="/user-agreement">
            <a href="/user-agreement" sx={{ mx: '5px' }}>User Agreement</a>
          </Link>
        </div>*/}
                </div>
            </footer>
        </>
    );
};

export default Footer;

const styles = {
    footerContent: {
        maxWidth: 600,
        maxHeight: 50,
        margin: 'auto',
        marginBottom: '50px',
        textAlign: 'center',
        color: 'textAlt',
        svg: {
            maxWidth: [130, null, null, 140],
        },
        a: {
            color: 'textAlt',
            cursor: 'pointer',
            textDecoration: 'none',
            ':hover': {
                color: 'primary',
            },
        },
    },
    nav: {
        marginTop: 20,
        'a+a': {
            ml: '20px',
        },
    },
    copyright: {
        marginTop: 20,
        px: [10, null, null, 0],
    },
};
