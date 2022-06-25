import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const consoleUsages = [
    {
        title: 'Database Modeling',
        imageUrl: 'https://cdn.apito.io/media/apito_website/3G9JSOXIPG_db_model_elaborated.svg',
        description: (
            <>
                Easily structure your Project's Database and Relations with the versatile model builder like Rich Text
                editor, Geo Location, Modular Fields, etc.
            </>
        ),
        go: 'docs/console/how-to-design-database-for-your-project'
    },
    {
        title: 'Content Management',
        imageUrl: 'https://cdn.apito.io/media/apito_website/5LPOV6O60X_content_management.svg',
        description: (
            <>
                Insert your content easily through apito console's Auto-Generated Dynamic Content Management Forms based
                on your specific model and fields
            </>
        ),
        go: 'docs/console/adding-multilingual-support-to-your-api'
    },
    {
        title: 'Using GraphQL Server & RESTful API',
        imageUrl: 'https://cdn.apito.io/media/apito_website/XSPHRZW8DN_api_elaborated.svg',
        description: (
            <>
                Apito generates Both GraphQL Server & RESTApi endpoints for your application. Now you don't have to
                choose between them. You can use them both or any based on your requirements.
            </>
        ),
        go: 'docs/console/usages-of-swagger-and-graphql-explorer'
    },
    {
        title: 'Manage Roles & Permissions',
        imageUrl: 'https://cdn.apito.io/media/apito_website/homepage/WCHDBP0LE0_roles_permissions_elaborated.svg',
        description: (
            <>
                Control use API access through our robust Roles & Permissions Management system to ensure the user only
                has the permission that he needs.
            </>
        ),
        go: 'docs/console/adding-rbac-role-based-permissions-support-to-your-api'
    },
    {
        title: 'Adding Auth Support To API',
        imageUrl: 'https://cdn.apito.io/media/apito_website/homepage/WK342NDY4U_auth_addon_elaborated.svg',
        description: (
            <>
                Enable one-click JWT Token-based authentication for your project with easily configurable roles and
                permissions.
            </>
        ),
        go: 'docs/extensions/auth/auth-support-in-api'
    },
    {
        title: 'Writing Logic / Extend Your API',
        imageUrl: 'https://cdn.apito.io/media/apito_website/homepage/OPHWL51VXW_logic_elaborated.svg',
        description: (
            <>
                Extend your GraphQL Server or Add Additional REST API to Execute your Custom Business Logic through AWS
                Lambda or Google Cloud Functions.
            </>
        ),
        go: 'docs/extensions/logic/writing-cloud-functions'
    }

];

const sdks = [
    {
        title: 'ReactJS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        go: 'docs/api-integration/graphql/integration-with-react'
    },
    {
        title: 'Flutter',
        imageUrl: 'https://cdn.apito.io/media/apito_documentation/WWTEFOOADR_flutter.svg',
        go: 'docs/api-integration/graphql/integration-with-flutter'
    },
    {
        title: 'Kotlin / Android',
        imageUrl: 'https://cdn.apito.io/media/apito_documentation/KAAMWAD3QY_kotlin.svg',
        go: 'docs/api-integration/graphql/integration-with-android'
    },
    {
        title: 'Swift / iOS',
        imageUrl: 'https://cdn.apito.io/media/apito_documentation/JTRDZQ0WM1_swift.svg',
        go: 'docs/api-integration/graphql/integration-with-ios'
    },
    {
        title: 'C# / Dot Net',
        imageUrl: 'https://cdn.apito.io/media/apito_documentation/3U1XI8OKPT_csharp.svg',
        go: 'docs/api-integration/restapi/integration-with-csharp'
    },
    {
        title: 'Java',
        imageUrl: 'https://cdn.apito.io/media/apito_documentation/HXOCZ5UKJH_java.svg',
        go: 'docs/api-integration/graphql/integration-with-java'
    },
    {
        title: 'PHP',
        imageUrl: 'https://cdn.apito.io/media/apito_documentation/UMZF89GEY6_php.svg',
        go: 'docs/api-integration/graphql/integration-with-php'
    },
    {
        title: 'Golang',
        imageUrl: 'https://cdn.apito.io/media/apito_documentation/P3QBDBFVHC_go.svg',
        go: 'docs/api-integration/graphql/integration-with-golang'
    },
    {
        title: 'Python',
        imageUrl: 'https://cdn.apito.io/media/apito_documentation/FVHA46Z2TG_python.svg',
        go: 'docs/api-integration/graphql/integration-with-python'
    },

];

function Feature({imageUrl, title, description, go}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4 item shadow--lw', styles.feature)}>
            {imgUrl && (
                <Link
                    to={useBaseUrl(go)}>
                    <div className="text--center">
                        <img className={styles.featureImage} src={imgUrl} alt={title}/>
                    </div>
                </Link>

            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function SDKIntegration({imageUrl, title, description, go}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div style={{marginBottom: '25px', textAlign: 'center'}} className={clsx('col col--3 item ')}>
            <h3>{title}</h3>
            {imgUrl && (
                <Link
                    to={useBaseUrl(go)}>
                    <div className="text--center">
                        <img className={styles.SDKImage} src={imgUrl} alt={title}/>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>

            <div className="hero shadow--lw">
                <div className="container">
                    <h1 className="hero__title">{'Build Instant API for your Digital Content'}</h1>
                    <p className="hero__subtitle">{'Deliver Projects in Weeks not Months!'}</p>
                    <div className="hero__button">
                        <a className="button button--primary button--lg"
                           href={useBaseUrl('docs/build-api-quick-start-guide')}>
                            START BUILDING
                        </a>
                    </div>
                    <img src="https://cdn.apito.io/media/apito_website/Y97T0H5XM7_apito_console_full_picture.png" title={"sfd"} alt={"soso"}/>

                </div>
            </div>

            <main>
                {sdks && sdks.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <h2>Framework Integration Guide</h2>
                            <small>
                                Integrate Apito with Variety of Languages & Frameworks
                            </small>
                            <div style={{height: '50px'}}></div>
                            <div className="row">
                                {sdks.map((props, idx) => (
                                    <SDKIntegration key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <main>
                {consoleUsages && consoleUsages.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <h2>Apito Console Usage Guide</h2>
                            <small className="avatar__subtitle">
                                Learn How build a Robust API for your app
                            </small>
                            <div style={{height: '80px'}}></div>
                            <div className="row">
                                {consoleUsages.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}
