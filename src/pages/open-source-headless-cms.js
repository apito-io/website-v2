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
import {OpenSourceData} from "../data/open-source";
import HeroBanner from "../components/hero-banner";

function Hello() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <ThemeProvider theme={themeSettings}>
                {/*overwrites title and include SEO*/}
                <Seo data={ {...CommonData.seo, title: 'Powerful OpenSource Headless CMS For Your Content', subtitle: 'Apito Community Edition' }}/>

                <HeroBanner data={OpenSourceData.header}/>
                <Features features={OpenSourceData.features1} hideSection={true}/>
               {/* <ExampleQueries data={HomePageData.exampleQueries}/>*/}


                {/*<Projects data={HomePageData.projects} />*/}
                <Features features={OpenSourceData.features2} hideSection={true}/>
                <Features features={OpenSourceData.features3} hideSection={true}/>

                <Footer/>
            </ThemeProvider>
        </Layout>
    );
}

export default Hello;
