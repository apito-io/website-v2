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
import {CommonData} from "../data/common";
import {FooterData} from "../data/footer";
import {BackendPageData} from "../data/backend-as-service";

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
                <HeroBanner data={BackendPageData.header}/>
                <ExampleQueries data={BackendPageData.exampleQueries}/>
                <Features features={BackendPageData.features1} hideSection={true}/>



                {/*<Projects data={HomePageData.projects} />*/}
                <Features features={BackendPageData.features2} hideSection={true}/>
                <Features features={BackendPageData.features3} hideSection={true}/>

                <Databases data={BackendPageData.databases}/>

                <Footer/>
            </ThemeProvider>
        </Layout>
    );
}

export default Hello;