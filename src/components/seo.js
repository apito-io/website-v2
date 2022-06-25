import Head from '@docusaurus/Head';
import React from "react";

const Seo = ({data}) => {
    return (
        <Head>
            <title>{data.title}</title>
            <meta property="og:title" content={data.title} />
            <meta property="og:description"
                  content={data.description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://cdn.apito.io/media/apito_website/Y97T0H5XM7_apito_console_full_picture.png" />
            <link rel="icon" href="/img/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            />
            <meta charSet="UTF-8"/>
            <meta name="description" content={data.description}/>
            <meta name="keywords" content={data.keywords}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
    );
};

export default Seo;
