import React from 'react';
import {Container, ThemeProvider} from "theme-ui";
import {themeSettings} from "../theme/theme-settings";
import {HomePageData} from "../data/home";
import Seo from "../components/seo";
import Footer from "../components/footer/footer";
import Features from "../components/features";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Databases from "../components/databases";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {CommonData} from "../data/common";
import FeatureBanner from "../components/feature-banner";
import SectionHeading from "../components/section-heading";
import Accordion from "../components/rc-collapse/accordion";
import {FAQData} from "../data/faq";

function Hello() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <ThemeProvider theme={themeSettings}>
                {/*overwrites title and include SEO*/}
                <Seo data={ {...CommonData.seo, subtitle: 'FAQ'} }/>

                <Container sx={styles.container}>
                    <SectionHeading title="Frequently Asked Questions" as={'h1'}/>
                    <Accordion faqs={FAQData}/>
                </Container>

                <Footer/>
            </ThemeProvider>
        </Layout>
    );
}

export default Hello;

const styles = {
    container: {
        my: 100,
    },
};
