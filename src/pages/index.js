import React from 'react';
import {ThemeProvider} from "theme-ui";
import {themeSettings} from "../theme/theme-settings";
import {HomePageData} from "../data/home";
import DocusaurusHead from "@docusaurus/Head"
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
import TestimonialCard from "../components/testimonial";
import Home from "./docs";
import CustomTerminalComponent from "../components/typed-terminal";

function Hello() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>

            <ThemeProvider theme={themeSettings}>
                {/*overwrites title and include SEO*/}
                <Seo data={ {...CommonData.seo, title: 'Build, Scale & Ship APIs Faster | Save Development Time' }}/>

                {/*                <StickyHeader/>*/}
                <FeatureBanner data={HomePageData.header} />
                {/*<HeroBanner data={HomePageData.header}/>*/}
                <Features features={HomePageData.features1} hideSection={true}/>
               {/* <ExampleQueries data={HomePageData.exampleQueries}/>*/}


                {/*<Projects data={HomePageData.projects} />*/}
                <Features features={HomePageData.features2} hideSection={true}/>
                <Features features={HomePageData.features3} hideSection={true}/>

                <Databases data={CommonData.databases}/>


                <TestimonialCard data={HomePageData.testimonials}/>

                <Footer/>
            </ThemeProvider>
        </Layout>
    );
}

export default Hello;
