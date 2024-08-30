import React from 'react';
import {ThemeProvider} from "theme-ui";
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
import PricingPage from "../components/pricing";
import {PricingData1} from "../data/pricing1";
import {PricingData2} from "../data/pricing2";
import PricingComponent from "../components/pricing-component";
import PricingDetails from "../components/pricing-details";

function Hello() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <ThemeProvider theme={themeSettings}>
                {/*overwrites title and include SEO*/}
                <Seo data={ {...CommonData.seo, subtitle: 'Pricing' }}/>

                {/* <PricingPage data={PricingData1}/>
                <PricingPage data={PricingData2}/> */}

                <PricingComponent />
                <PricingDetails />

                <Footer/>
            </ThemeProvider>
        </Layout>
    );
}

export default Hello;
