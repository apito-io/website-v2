import React from 'react';
import {Fragment} from "react";
import StickyHeader from "../components/header/sticky-header";
import {ThemeProvider} from "theme-ui";
import {themeSettings} from "../theme/theme-settings";
import HeroBanner from "../components/hero-banner";
import {HomePageData} from "../data/home";
import Seo from "../components/seo";
import SDKintegration from "../components/sdk-integration";
import Communications from "../components/support";
import Footer from "../components/footer/footer";
import Features from "../components/features";
import Projects from "../components/projects";
import Layout from '@theme/Layout';
import ExampleQueries from "../components/example-queries";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Databases from "../components/databases";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {CommonData} from "../data/common";
import {FooterData} from "../data/footer";
import FeatureBanner from "../components/feature-banner";

function Hello() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <ThemeProvider theme={themeSettings}>
                {/*overwrites title and include SEO*/}
                <Seo data={CommonData.seo}/>

                {/*                <StickyHeader/>*/}
                <FeatureBanner data={HomePageData.header} />
                {/*<HeroBanner data={HomePageData.header}/>*/}
                <Features features={HomePageData.features1} hideSection={true}/>
               {/* <ExampleQueries data={HomePageData.exampleQueries}/>*/}


                {/*<Projects data={HomePageData.projects} />*/}
                <Features features={HomePageData.features2} hideSection={true}/>
                <Features features={HomePageData.features3} hideSection={true}/>

                <Databases data={HomePageData.databases}/>

                <Footer/>
            </ThemeProvider>
        </Layout>
    );
}

export default Hello;